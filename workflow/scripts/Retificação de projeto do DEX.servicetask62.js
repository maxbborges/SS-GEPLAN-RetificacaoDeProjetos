function servicetask62(attempt, message) {
    log.info("#### >> RETIFICAÇÃO DE PROCESSOS TASK62 - INICIO")
    var nr_pasta = hAPI.getCardValue("nr_pasta");
    var idDocumento = hAPI.getCardValue("doc_id")
    var solicitacao = getValue("WKNumProces")
    anexaDocumentoAssinado(idDocumento,nr_pasta,solicitacao)
    log.info("#### >> RETIFICAÇÃO DE PROCESSOS TASK62 - FIM")
}

function anexaDocumentoAssinado(idDocumento, nr_pasta,nr_solicitacao) {
    var constraints = [DatasetFactory.createConstraint('codArquivo', idDocumento, idDocumento, ConstraintType.MUST)];
    chaveArquivoAssinado = DatasetFactory.getDataset('ds_form_aux_vertsign', ["chaveArquivo"], constraints, null);
    constraints = [DatasetFactory.createConstraint('chaveArquivo', chaveArquivoAssinado.getValue(0, 'chaveArquivo'), chaveArquivoAssinado.getValue(0, 'chaveArquivo'), ConstraintType.MUST)];
    arquivoassinado = DatasetFactory.getDataset('recuperaDocumentoAssinado_vertsign', null, constraints, null);
    

    var nm_arquivo = "solic_" + nr_solicitacao + "_assinado.pdf";
    var constraintsDocument = new Array();
	constraintsDocument.push(DatasetFactory.createConstraint("nm_arquivo", nm_arquivo, nm_arquivo, ConstraintType.MUST));
	constraintsDocument.push(DatasetFactory.createConstraint("nr_pasta", nr_pasta, nr_pasta, ConstraintType.MUST));
	constraintsDocument.push(DatasetFactory.createConstraint("base64", arquivoassinado.getValue(0, 'arquivo_base64'), arquivoassinado.getValue(0, 'arquivo_base64'), ConstraintType.MUST));
	var dsDocument = DatasetFactory.getDataset('ds_grava_documento', null, constraintsDocument, null)
	dsDocument == ''
	if (dsDocument != null && dsDocument != undefined) {
	      if (dsDocument.values.length > 0) {
	          documentId = dsDocument.getValue(0, 'documentId');
	          documentId = replaceString(documentId)
	          hAPI.setCardValue("doc_id_assinado",documentId)
	          hAPI.attachDocument(documentId);
	      }
	 }
}