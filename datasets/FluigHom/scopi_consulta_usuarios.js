function defineStructure() {
	log.info("scopi_consulta_usuarios - defineStructure não implementado");
}
function onSync(lastSyncDate) {
	log.info("scopi_consulta_usuarios - onSync não implementado");
}
function createDataset(fields, constraints, sortFields) {
	log.info("scopi_consulta_usuarios - createDataset");
	var dataset = DatasetBuilder.newDataset();

	var idUsuario = null;
//  XXX:API Scopi não filtra usuário por ID
//	if(constraints != null){
//		for (var i = 0; i < constraints.length; i++){               
//			if(constraints[i].fieldName == 'idUsuario'){
//				idUsuario = constraints[i].initialValue;
//			}
//		}
//	}
	
	dataset.addColumn("id");
	dataset.addColumn("name");
	dataset.addColumn("email");
	dataset.addColumn("active");

	try{
		var usuarios = getUsuarios(idUsuario);
		log.dir(usuarios);
		if(usuarios != null){
			for(var i=0; i < usuarios.length; i++){
				var usuario = usuarios[i];
				
				dataset.addRow([ 
					usuario.id, usuario.name
					, usuario.email, usuario.active
				]);
			}
		}
	} catch(e) {
	    return error( e.message );
	}
	return dataset;
}
function onMobileSync(user) {
	log.info("scopi_consulta_usuarios - onMobileSync não implementado");
}

function getUsuarios(idUsuario){
	var clientService = fluigAPI.getAuthorizeClientService();
	
	var path = (idUsuario != null) ? '/'+idUsuario: '';
	
	var token = getToken();
    var data = {
	      companyId: '' + getValue("WKCompany"), 
	      serviceCode: 'Scopi',
	      endpoint: '/api/v3/users'+path+'?access_token='+token+'&active=true',
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
	log.error('##### scopi_consulta_usuarios - ERROR: ' + msg);
	return dtsError;
}