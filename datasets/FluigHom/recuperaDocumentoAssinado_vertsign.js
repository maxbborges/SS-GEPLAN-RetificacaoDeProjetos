function defineStructure() {

}
function onSync(lastSyncDate) {

}
function createDataset(fields, constraints, sortFields) {
	log.info("recuperaDocumentoAssinado_vertsign - createDataset");
	var constraintsValue = constraints[0].initialValue; 
	var dataset = DatasetBuilder.newDataset();
	if (constraintsValue != 30){
		var chaveArquivo = constraintsValue
	} else {
		var chaveArquivo = '446E0103E242239D'
	}
	log.info(chaveArquivo)
	
		
	dataset.addColumn("arquivo_base64");
	
	try{
		log.info("recuperaDocumentoAssinado_vertsign - entrou no try");
		var documento = getDocumento(chaveArquivo);
		log.info("recuperaDocumentoAssinado_vertsign - entrou no try2");
		log.dir(documento[0].bytes);
		dataset.addRow([documento[0].bytes])
		
	} catch(e){
		log.info("recuperaDocumentoAssinado_vertsign - catch");
		return e.message 
	}
	return dataset
}function onMobileSync(user) {

}

function getDocumento(chaveArquivo){
	log.info("recuperaDocumentoAssinado_vertsign - entrouNoGET1");
	var clientService = fluigAPI.getAuthorizeClientService();
	log.info("recuperaDocumentoAssinado_vertsign - entrouNoGET2");	
	var data = {
		     companyId: '' + getValue("WKCompany"), 
		     serviceCode: 'recuperaDocumentoAssinado_vertsign',
		     endpoint: "?key=" + chaveArquivo + "&includeOriginal=True&includeManifest=True&zipped=False",
		     method: 'get',
		     timeoutService: '100',
	};
	log.info("recuperaDocumentoAssinado_vertsign - entrouNoGET3");
	var envelope = JSONUtil.toJSON(data);
	
	var vo = clientService.invoke(envelope);
	if(vo.getResult()== null || vo.getResult().isEmpty()){
		throw "Retorno está vazio";
	}
	else if(vo.getResult().indexOf("Exception") > -1){
		throw vo.getResult();
	}
	log.dir(vo.getResult());
	log.info("recuperaDocumentoAssinado_vertsign - entrouNoGET4");
	return JSON.parse(vo.getResult());
}