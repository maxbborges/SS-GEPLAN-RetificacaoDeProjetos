function servicetask60(attempt, message) {
    log.info("#### >> RETIFICAÇÃO DE PROCESSOS TASK60 - INICIO")
	var nr_pasta = hAPI.getCardValue("nr_pasta");
	var idDocumento = hAPI.getCardValue("doc_id")
	var solicitacao = getValue("WKNumProces")
	var nm_Arquivo = "solic_" + solicitacao + "_assinado.pdf";
	
	var data = new Date().toLocaleDateString('pt-BR');
	var horario = new Date().toLocaleTimeString('pt-BR');
	
//	jsonStringify()
	dadosAssinantes=obterAssinantes()
	parametrosAssinatura=enviaParaAssinatura(nr_pasta,dadosAssinantes,idDocumento,nm_Arquivo,solicitacao,data,horario)
	rodarDataset(parametrosAssinatura)
	log.info("#### >> RETIFICAÇÃO DE PROCESSOS TASK60 - FIM")
}

function obterAssinantes(){
    var solicitacao = getValue("WKNumProces")
    var arraySigners = [];
    var emails=[]
    var atividades = [19,27];
    var responsavelEnvio = ''
    var nomeResponsavelEnvio = ''
    var processInstanceId = DatasetFactory.createConstraint('processInstanceId', solicitacao, solicitacao, ConstraintType.MUST);
    
    for (var i = 0; i < atividades.length; i++) {
    	var constraints = new Array();
        var userMail = ''

        // Busca a atividade inserida
    	var choosedSequence = DatasetFactory.createConstraint('choosedSequence', atividades[i], atividades[i], ConstraintType.MUST);
        
        // Busca o id do usuário responsavel por uma tarefa
        constraints.push(processInstanceId)
        constraints.push(choosedSequence)
        var retornoProcessTask = DatasetFactory.getDataset('processTask', ["choosedColleagueId"], constraints, null);

        if (retornoProcessTask && retornoProcessTask.rowsCount > 0) {	
			userId = retornoProcessTask.getValue(retornoProcessTask.rowsCount-1, "choosedColleagueId");
		}
        if(userId == null || userId == ""){
    		log.info("#### >> RETIFICAÇÃO DE PROCESSOS TASK84 - USERID")
            throw "RETIFICAÇÃO DE PROCESSOS TASK60"
    	}

        // Busca o email do usuário através do ID dele
        constraints = [DatasetFactory.createConstraint("colleagueId", userId, userId, ConstraintType.MUST)];
        var retornoColleague = DatasetFactory.getDataset('colleague', ["mail"], constraints, null);

        if (retornoColleague && retornoColleague.rowsCount > 0) {
			userMail = retornoColleague.getValue(0, "mail");
		}
        if(userMail == null || userMail == ""){
    		log.info("#### >> ENCERRAMENTO DE PROCESSOS TASK60 - USERMAIL")
            throw "ENCERRAMENTO DE PROCESSOS TASK60"
    	}
        
        if(emails.indexOf(String(userMail))==-1){
        	emails.push(String(userMail))
        	constraints = []
	        constraints = [DatasetFactory.createConstraint('email', userMail, userMail, ConstraintType.MUST)];
	        assinante = DatasetFactory.getDataset('ds_busca_assinante', null, constraints, null);
	        
	        arraySigners.push({
	            nome: new String(assinante.getValue(0, 'nome')),
	            email: new String(userMail),
	            cpf: new String(assinante.getValue(0, 'cpf')),
	            tipo: new String(assinante.getValue(0, 'tipoAssinatura')),
	            status: "Pendente"
	        });
	        responsavelEnvio = userId
	        nomeResponsavelEnvio = assinante.getValue(0, 'nome')
        }
    }
    if (arraySigners.length == 0) {
        log.info("#### >> RETIFICAÇÃO DE PROCESSOS TASK60 - ARRAYSIGNERS")
        throw "erro"
    }

    var retorno = {
    	"assinantes":arraySigners,
    	"idReponsavelEnvio":responsavelEnvio,
    	"nomeResponsavelEnvio":nomeResponsavelEnvio
    }
    return retorno
}

function enviaParaAssinatura(nr_pasta, dadosResponsavel, idDocumento, nm_Arquivo, numeroProcesso,data,horario) {
    // Cria registro de formulario
    var nmArquivo = {
        name: "nmArquivo",
        value: nm_Arquivo
    };
    var codArquivo = {
        name: "codArquivo",
        value: idDocumento
    };
    var vrArquivo = {
        name: "vrArquivo",
        value: '1000'
    };
    var codPasta = {
        name: "codPasta",
        value: nr_pasta
    };
    var codRemetente = {
        name: "codRemetente",
        value: dadosResponsavel.idReponsavelEnvio
    };
    var nmRemetente = {
        name: "nmRemetente",
        value: dadosResponsavel.nomeResponsavelEnvio

    };
    var formDescription = {
        name: "formDescription",
        value: nm_Arquivo
    };
    var status = {
        name: "status",
        value: "Enviando para assinatura"
    };
    var metodo = {
        name: "metodo",
        value: "create"
    };

    var dataEnvio = {
        name: "dataEnvio",
        value: data
    };
    var jsonSigners = {
        name: "jsonSigners",
        value: jsonStringify(dadosResponsavel.assinantes)
    };

    var horaEnvio = {
        name: "horaEnvio",
        value: horario
    };

    var numSolic = {
        name: "numSolic",
        value: numeroProcesso
    };

    var choosedState = {
        name: "choosedState",
        value: "45"
    };

    var constraints = [jsonSigners, nmArquivo, codArquivo, vrArquivo, codPasta, codRemetente, nmRemetente, formDescription, status, metodo, dataEnvio, horaEnvio, numSolic, choosedState];
    return constraints;
}

function rodarDataset(params) {
    constraints = []
    params.forEach(function (param) {
        constraints.push(DatasetFactory.createConstraint(param.name, param.value, param.value, ConstraintType.MUST));
    });
    if (constraints.length > 0) {
        var dsAux = DatasetFactory.getDataset("ds_auxiliar_vertsign", null, constraints, null);
        if(dsAux == null || dsAux.rowsCount == null){
    		throw "Falha de comunicação com a VertSign. "
    		+ "O TOTVS Fluig não conseguir realizar a comunicação, tente novamente mais tarde";
    	}
        if (dsAux.rowsCount > 0) {
            if (dsAux.getValue(0, "Result") === "OK") {
            	log.info("Enviando documento para assinatura");
            }
        }
    }
}

function jsonStringify(obj) {
	if(obj == null) {
	    return "null";
	} else if(Object.prototype.toString.call(obj) === '[object Array]') {
	    var str = "[";
	    if(obj.length > 0) {
	      str += jsonStringify(obj[0]);
	      for(var i = 1; i < obj.length; i++) {
	        str += "," + jsonStringify(obj[i]);
	      }
	    }
	    str += "]";
	    return str;
	} else if(Object.prototype.toString.call(obj) === '[object Object]') {
	    var str = "{";
	    var first = true;
	    for(attr in obj) {
	      str += (!first ? "," : "") + "\"" + attr + "\":" + jsonStringify(obj[attr]);
	      first = false;
	    }
	    str += "}";
	    return str;
	} else {
	    return "\"" + obj + "\"";
	}
};