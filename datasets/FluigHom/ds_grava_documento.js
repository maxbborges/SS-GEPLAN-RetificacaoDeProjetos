function createDataset(fields, constraints, sortFields) {

	log.info("#### [Dataset: createDocument] - Iniciando");
	
	var dtResult = DatasetBuilder.newDataset();
	dtResult.addColumn("documentId");
	dtResult.addColumn("erro");
	
	/*
	 * ============================================== 
	 * == PARÂMETROS QUE PRECISAM SER MODIFICADOS: ==
	 * ==============================================
	 */
	var codEmpresa = fluigCredentials().empresa;
	var userId = "3683d91e09c64d27bb09fcb0df4b1959";
	var base64 = "";
	var nm_arquivo = "";
	var nr_pasta = "";
	for(var c in constraints){
		if(constraints[c].getFieldName() == "base64"){
			base64 = String(constraints[c].getInitialValue());
		}
		if(constraints[c].getFieldName() == "nm_arquivo"){
			nm_arquivo = String(constraints[c].getInitialValue());
		}
		if(constraints[c].getFieldName() == "nr_pasta"){
			nr_pasta = constraints[c].getInitialValue();
		}
	}
	/*
	for (var c in constraints){
		if (constraints[c].getFieldName() == "base64"){
			var base64 = String(constraints[c].getInitialValue());
		}else if (constraints[c].getFieldName() == "userId"){
			var userId = String(constraints[c].getInitialValue());
		}else if (constraints[c].getFieldName() == "companyId"){
			var codEmpresa = Number(constraints[c].getInitialValue());
		}
		
	}
	
	log.info("Parâmetros: -----");
	log.info("ID do envelope: " + base64);
	log.info("ID usuário: " + userId);
	log.info("Empresa: " + codEmpresa);
	*/
	var ServiceDocumentName = "ECMDocumentService"; // O ServiceDocumentName corresponde ao código do serviço criado no studio. Para este exemplo, crie o serviço como CXF
	/*
	var loginAdm = fluigCredentials().username; // Usuario integrador - login do usuário administrador 
	var senhaAdm = fluigCredentials().password; // Usuario integrador - Senha do usuário administrador
	*/
	var DocumentDescription = "teste.pdf"; // Descricao do documento
	var PublisherId = "3683d91e09c64d27bb09fcb0df4b1959"; // Matricula do usuario publicador
	var ColleagueId = "3683d91e09c64d27bb09fcb0df4b1959"; // Matricula do usuario criador
	
	

	
	/* 
	 * No fileName eh necessario informar o nome do arquivo fisico disponivel que sera publicado. 
	 * Este precisa estar na pasta de upload do usuário integrador (loginAdm)
	 * Para enviar o documento para a pasta de upload do usuario, veja: http://tdn.totvs.com/x/zABlDw
	 */
	
	try {
		// neste momento, sera instanciado o servidor ECMDocumentService
		var webServiceProvider = ServiceManager.getServiceInstance(ServiceDocumentName);
		var webServiceLocator  = webServiceProvider.instantiate("com.totvs.technology.ecm.dm.ws.ECMDocumentServiceService");
		var webService = webServiceLocator.getDocumentServicePort();
		var documentoArray =  webServiceProvider.instantiate("com.totvs.technology.ecm.dm.ws.DocumentDtoArray"); 
		var documento =  webServiceProvider.instantiate("com.totvs.technology.ecm.dm.ws.DocumentDto");
		
		// agora sera definida as propriedades do documento, a lista completa de propriedade pode ser vista aqui: http://tdn.totvs.com/x/l4eADQ
		documento.setApprovalAndOr(false);
		documento.setAtualizationId(1);
		documento.setColleagueId(fluigCredentials().matricula);
		documento.setCompanyId(codEmpresa);
		documento.setDeleted(false);
		documento.setDocumentDescription(nm_arquivo);
		documento.setDocumentType("2"); // 1 - Pasta; 2 - Documento; 3 - Documento Externo; 4 - Fichario; 5 - Fichas; 9 - Aplicativo; 10 - Relatorio.
		documento.setDownloadEnabled(true);
		documento.setExpires(false);
		documento.setInheritSecurity(true);
		documento.setParentDocumentId(parseInt(nr_pasta));
		documento.setPrivateDocument(false);
		documento.setPublisherId(fluigCredentials().matricula);
		documento.setUpdateIsoProperties(true);
		documento.setUserNotify(false);
		documento.setVersionOption("0"); 
		documento.setDocumentPropertyNumber(0);
		documento.setDocumentPropertyVersion(0);
		documento.setVolumeId("Default");  
		documento.setLanguageId("pt");
		documento.setIndexed(true);//o default era false
		documento.setActiveVersion(true);
		documento.setTranslated(false);
		documento.setTopicId(1);
		documento.setDocumentTypeId("");
		documento.setExternalDocumentId("");
		documento.setDatasetName("");
		documento.setVersionDescription(""); 
		documento.setKeyWord("");
		documento.setImutable(false);
		documento.setProtectedCopy(false);
		documento.setAccessCount(0);
		documento.setVersion(1000);

	    documentoArray.getItem().add(documento);
		
	   
		// agora sera definida as propriedades do anexo, a lista completa de propriedade pode ser vista aqui: http://tdn.totvs.com/x/l4eADQ
		var attachmentArray = webServiceProvider.instantiate("com.totvs.technology.ecm.dm.ws.AttachmentArray"); 
		var attachment = webServiceProvider.instantiate("com.totvs.technology.ecm.dm.ws.Attachment"); 

		
		var conteudo = "";
		attachment.setFileName(nm_arquivo);
		attachment.setPrincipal(true);
		log.info("base 64 @@@@ " + base64);
		attachment.setFilecontent(java.util.Base64.getDecoder().decode(base64));
			
		
		attachmentArray.getItem().add(attachment);

		
		
		var documentSecurityConfigDtoArray = webServiceProvider.instantiate("com.totvs.technology.ecm.dm.ws.DocumentSecurityConfigDtoArray");
		var approverDtoArray = webServiceProvider.instantiate("com.totvs.technology.ecm.dm.ws.ApproverDtoArray"); 
		var relatedDocumentDtoArray = webServiceProvider.instantiate("com.totvs.technology.ecm.dm.ws.RelatedDocumentDtoArray"); 
		
		log.info("## [Dataset: createDocument] - chamando createDocument");
		// agora sera feita a publicacao do documento
		var loginAdm = fluigCredentials().username;
		var senhaAdm = fluigCredentials().password;
		var retornoDocumento = webService.createDocument(loginAdm, senhaAdm, codEmpresa, documentoArray, attachmentArray, documentSecurityConfigDtoArray, approverDtoArray, relatedDocumentDtoArray);
		
		// codigo do documento publicado
		var idDocumento = retornoDocumento.getItem().get(0).getDocumentId();
		
		log.info("## [Dataset: createDocument] - Documento criado com SUCESSO! Código: " + idDocumento);
		dtResult.addRow([idDocumento, null]);
		
		
		log.info("#### [Dataset: createDocument] - Finalizado");
		return dtResult;
		
	} catch (e) {
		dtResult.addRow(["Erro: ",e.message]);
		log.info("## [Dataset: createDocument] - Erro ao tentar criar documento: " + e.message);
		return dtResult;
	} 
};

function fluigCredentials(){
	var dataset = DatasetFactory.getDataset("ds_parametrizacoes_vertsign",null,null,null);
	var usuario = dataset.getValue(0,"usuario_fluig");
	var senha = dataset.getValue(0,"senha_fluig");
	var matricula = dataset.getValue(0,"matricula_fluig");
	var empresa = dataset.getValue(0,"empresa_fluig");
	return{
		"username": usuario,
		"password": senha,
		"userId": usuario,
		"matricula": matricula,
		"empresa": empresa
	}
}

function docusignCredentials(){
	var dataset = DatasetFactory.getDataset("ds_parametrizacoes_onboarding_canais",null,null,null);
	var usuario = dataset.getValue(0,"usuario_docusign");
	var senha = dataset.getValue(0,"senha_docusign");
	var integrator_key = dataset.getValue(0,"integrator_key_docusign");
	return{
		"username": usuario,
		"password": senha,
		"integratorKey": integrator_key
	}
}