function defineStructure() {
	log.info("scopi_consulta_projetos - defineStructure não implementado");
}
function onSync(lastSyncDate) {
	log.info("scopi_consulta_projetos - onSync não implementado");
}
function createDataset(fields, constraints, sortFields) {
	log.info("scopi_consulta_projetos - createDataset");
	var dataset = DatasetBuilder.newDataset();

	var idProjeto = null;
	if(constraints != null){
		for (var i = 0; i < constraints.length; i++){               
			if(constraints[i].fieldName == 'idProjeto'){
				idProjeto = constraints[i].initialValue;
			}
		}
	}
	
	dataset.addColumn("posicao");
	dataset.addColumn("id");
	dataset.addColumn("name");
	dataset.addColumn("description");
	dataset.addColumn("nivel");
	dataset.addColumn("prevision_start");
	dataset.addColumn("prevision_end");
	dataset.addColumn("date_start");
	dataset.addColumn("date_end");
	dataset.addColumn("status");
	dataset.addColumn("active");
	dataset.addColumn("division_id");
	dataset.addColumn("division_name");
	dataset.addColumn("objective_id");
	dataset.addColumn("objective_name");
	dataset.addColumn("coordinator_id");
	dataset.addColumn("coordinator_name");
	dataset.addColumn("sponsor_id");
	dataset.addColumn("sponsor_name");
	dataset.addColumn("phases");
	dataset.addColumn("expenses");

	try{
		var projetos = getProjetos(idProjeto);
		log.info("DS_Consulta_projeto");
		log.dir(projetos);
		if(projetos != null && Array.isArray(projetos)){
			for(var i=0; i < projetos.length; i++){
				var projeto = projetos[i];
				var vetorPhases=projeto.phases
			    var phases = null
    			var expenses = null
    			
				var division = (projeto.division == null) 
				? {id: null, name: null} : projeto.division;
				var objective = (projeto.objective == null) 
				? {id: null, name: null} : projeto.objective;
				var coordinator = (projeto.coordinator == null) 
				? {id: null, name: null} : projeto.coordinator;
				var sponsor = (projeto.sponsor == null) 
					? {id: null, name: null} : projeto.sponsor;
				dataset.addRow([i,
					projeto.id, projeto.name
					, projeto.description, projeto.nivel
					, projeto.prevision_start, projeto.prevision_end
					, projeto.date_start, projeto.date_end
					, projeto.status, projeto.active
					, division.id, division.name
					, objective.id, objective.name
					, coordinator.id, coordinator.name
					, sponsor.id, sponsor.name,phases,expenses
				]);
			}
		} else {
		    var projeto = projetos;
	
		    var vetorPhases=projeto.phases
			var phases = ''
    		for (v=0;v<vetorPhases.length;v++){
    		    acoes = vetorPhases[v].actions
    		    for (x=0;x<acoes.length;x++){
    		        phases=phases+acoes[x].name+';'
    		    }
			}
			
			var vetorExpenses=projeto.expenses
			var expenses=0
			for (v=0;v<vetorExpenses.length;v++){
			    expense = vetorExpenses[v]
			    expenses=expenses+parseInt(expense.expected_value)
			}
				
		    var division = (projeto.division == null) 
				? {id: null, name: null} : projeto.division;
				var objective = (projeto.objective == null) 
				? {id: null, name: null} : projeto.objective;
				var coordinator = (projeto.coordinator == null) 
				? {id: null, name: null} : projeto.coordinator;
				var sponsor = (projeto.sponsor == null) 
					? {id: null, name: null} : projeto.sponsor;
					
		    dataset.addRow([0, 
					projeto.id, projeto.name
					, projeto.description, projeto.nivel
					, projeto.prevision_start, projeto.prevision_end
					, projeto.date_start, projeto.date_end
					, projeto.status, projeto.active
					, division.id, division.name
					, objective.id, objective.name
					, coordinator.id, coordinator.name
					, sponsor.id, sponsor.name,phases,expenses
				]);
		}
	} catch(e) {
	    return error( e.message );
	}
	return dataset;
}
function onMobileSync(user) {
	log.info("scopi_consulta_projetos - onMobileSync não implementado");
}

function getProjetos(idProjeto){
	var clientService = fluigAPI.getAuthorizeClientService();
	
	var path = (idProjeto != null) ? '/'+idProjeto: '';
	resultado = []
	
	var token = getToken();
    var data = {
	      companyId: '' + getValue("WKCompany"), 
	      serviceCode: 'Scopi',
	      endpoint: '/api/v3/projects'+path+'?access_token='+token+'&active=true&status=1,2,3,4',
	      method: 'get',
	      timeoutService: '100',
	};
    
    var envelope = JSONUtil.toJSON(data);
	var vo = clientService.invoke(envelope);
	if(vo.getResult()== null || vo.getResult().isEmpty()){
		throw "Retorno está vazio";
	}
	else if(vo.getResult().indexOf("Exception") > -1){
		throw vo.getResult();
	}
	log.dir(vo.getResult());
	return JSON.parse(vo.getResult());
}

function getToken(){
	var dataset = DatasetFactory.getDataset("scopi_token", null, null, null);
	if(dataset != null && dataset.rowsCount > 0){
		return dataset.getValue(0, "access_token");
	}
	else throw "Não foi possível obter o token para consumo do Scopi";
}

function error(msg ){
	var dtsError = DatasetBuilder.newDataset();
	dtsError.addColumn('ERROR');
	dtsError.addRow([ msg ]);
	log.error('##### scopi_consulta_projetos - ERROR: ' + msg);
	return dtsError;
}