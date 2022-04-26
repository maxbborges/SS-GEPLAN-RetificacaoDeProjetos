function defineStructure() {
    log.info("scopi_consulta_indicadores - defineStructure não implementado");
}
function onSync(lastSyncDate) {
    log.info("scopi_consulta_indicadores - onSync não implementado");
}
function createDataset(fields, constraints, sortFields) {
    log.info("scopi_consulta_indicadores - createDataset");
    var dataset = DatasetBuilder.newDataset();
    
    dataset.addColumn("posicao");
    dataset.addColumn("id");
    dataset.addColumn("name");
    
    try{
        var indicadores = getIndicadores();
        log.info("scopi_indicadores1")
        if(indicadores != null && Array.isArray(indicadores)){
            // log.dir(indicadores)
            for(var i=0; i < indicadores.length; i++){
                var indicador = indicadores[i];
                dataset.addRow([i,indicador.id,indicador.name]);
            }
        }
        
    } catch(e) {
	    return error( e.message );
	}
	return dataset;
}

function getIndicadores(){
	var clientService = fluigAPI.getAuthorizeClientService();
	
	var token = getToken();
    var data = {
	      companyId: '' + getValue("WKCompany"), 
	      serviceCode: 'Scopi',
	      endpoint: '/api/v3/indicators?access_token='+token+'&active=true',
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

function onMobileSync(user) {
    log.info("scopi_consulta_indicadores - onMobileSync não implementado");
}