function replaceString(documentId){
	log.info("#### >> RETIFICAÇÃO DE PROCESSOS REPLACE - INICIO")
	var novoDocumentId = new java.lang.String(documentId)
	novoDocumentId = novoDocumentId.replace('.0','')
    log.info("#### >> RETIFICAÇÃO DE PROCESSOS REPLACE - FIM")
	return novoDocumentId
}