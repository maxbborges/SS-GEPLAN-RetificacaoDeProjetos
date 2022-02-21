function beforeTaskSave(colleagueId,nextSequenceId,userList){
    log.info("#### >> RETIFICAÇÃO DE PROCESSOS BEFORESAVE - INICIO")
    // var docs = hAPI.listAttachments();
    // var solicitacao = getValue("WKNumProces");
    var atividade = getValue("WKNumState")

    if (atividade==27){
    	if (hAPI.getCardValue("Aprov_D_Executi")=="Sim"){
    		hAPI.attachDocument(hAPI.getCardValue("doc_id"));
    	}
    }
    log.info("#### >> RETIFICAÇÃO DE PROCESSOS BEFORESAVE - FIM")
}