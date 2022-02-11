function beforeSendData(customField, customFact) {

    customField[0] = hAPI.getCardValue("Nome_do_projeto");

    customField[1] = hAPI.getCardValue("area_responsave");

    customField[2] = hAPI.getCardValue("resp_pelo_proj");

    customField[3] = hAPI.getCardValue("data_inicio");

    customField[4] = hAPI.getCardValue("data_fim");

    customField[5] = hAPI.getCardValue("valid_P_E");

    customField[6] = hAPI.getCardValue("aprov_R_P");

    customField[7] = hAPI.getCardValue("Aprov_D_adjunto");

    customField[8] = hAPI.getCardValue("ajustes_R_P");

    customField[9] = hAPI.getCardValue("Descricao_proj");

    customField[10] = hAPI.getCardValue("link_scopi");

    customField[11] = hAPI.getCardValue("Aprov_Resp_O_E");

    customField[12] = hAPI.getCardValue("Aprov_D_Executi");

    customField[13] = hAPI.getCardValue("ajustes_R_O_E");

    customField[14] = hAPI.getCardValue("ajustes_P_E");

    customField[15] = hAPI.getCardValue("Ajustes_D_Adjun");

    customField[16] = hAPI.getCardValue("Ajustes_D_Execu");

    customField[17] = hAPI.getCardValue("Ajustes_conside");
}
