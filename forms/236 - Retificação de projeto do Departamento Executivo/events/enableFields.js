function enableFields(form) {
    var activity = getValue('WKNumState');
    if (activity!=10){
        form.setEnabled('Ajustes_conside', false);
    }
    if (activity == 19) {
        form.setEnabled('Nome_do_projeto', false);
        form.setEnabled('area_responsave', false);
        form.setEnabled('resp_pelo_proj', false);
        form.setEnabled('data_inicio', false);
        form.setEnabled('data_fim', false);
        form.setEnabled('link_scopi', false);
        form.setEnabled('ajustes_R_P', false);
        form.setEnabled('aprov_R_P', false);
        form.setEnabled('ajustes_P_E', false);
        form.setEnabled('valid_P_E', false);
        form.setEnabled('Ajustes_D_Execu', false);
        form.setEnabled('Aprov_D_Executi', false);
        form.setEnabled('Ajustes_conside', false);
        form.setEnabled('ajustes_R_O_E', false);
        form.setEnabled('Aprov_Resp_O_E', false);
        form.setEnabled('Descricao_proj', false);
    }
    if (activity == 6) {
        form.setEnabled('Nome_do_projeto', false);
        form.setEnabled('area_responsave', false);
        form.setEnabled('resp_pelo_proj', false);
        form.setEnabled('data_inicio', false);
        form.setEnabled('data_fim', false);
        form.setEnabled('link_scopi', false);
        form.setEnabled('ajustes_P_E', false);
        form.setEnabled('valid_P_E', false);
        form.setEnabled('Ajustes_D_Adjun', false);
        form.setEnabled('Aprov_D_adjunto', false);
        form.setEnabled('Ajustes_conside', false);
        form.setEnabled('Ajustes_D_Execu', false);
        form.setEnabled('Aprov_D_Executi', false);
        form.setEnabled('ajustes_R_O_E', false);
        form.setEnabled('Aprov_Resp_O_E', false);
        form.setEnabled('Descricao_proj', false);
    }
    if (activity == 41) {
        form.setEnabled('Nome_do_projeto', false);
        form.setEnabled('area_responsave', false);
        form.setEnabled('resp_pelo_proj', false);
        form.setEnabled('data_inicio', false);
        form.setEnabled('data_fim', false);
        form.setEnabled('link_scopi', false);
        form.setEnabled('aprov_R_P', false);
        form.setEnabled('ajustes_R_P', false);
        form.setEnabled('ajustes_P_E', false);
        form.setEnabled('valid_P_E', false);
        form.setEnabled('Ajustes_D_Adjun', false);
        form.setEnabled('Aprov_D_adjunto', false);
        form.setEnabled('Ajustes_D_Execu', false);
        form.setEnabled('Aprov_D_Executi', false);
        form.setEnabled('Ajustes_conside', false);
        form.setEnabled('Descricao_proj', false);
    }
    if (activity == 10) {
        form.setEnabled('ajustes_R_P', false);
        form.setEnabled('aprov_R_P', false);
        form.setEnabled('ajustes_P_E', false);
        form.setEnabled('valid_P_E', false);
        form.setEnabled('Ajustes_D_Adjun', false);
        form.setEnabled('Aprov_D_adjunto', false);
        form.setEnabled('Ajustes_D_Execu', false);
        form.setEnabled('Aprov_D_Executi', false);
        form.setEnabled('ajustes_R_O_E', false);
        form.setEnabled('Aprov_Resp_O_E', false);
    }
    if (activity == 27) {
        form.setEnabled('Ajustes_conside', false);
        form.setEnabled('Ajustes_D_Adjun', false);
        form.setEnabled('Aprov_D_adjunto', false);
        form.setEnabled('ajustes_P_E', false);
        form.setEnabled('valid_P_E', false);
        form.setEnabled('ajustes_R_P', false);
        form.setEnabled('aprov_R_P', false);
        form.setEnabled('link_scopi', false);
        form.setEnabled('data_fim', false);
        form.setEnabled('data_inicio', false);
        form.setEnabled('resp_pelo_proj', false);
        form.setEnabled('area_responsave', false);
        form.setEnabled('Nome_do_projeto', false);
        form.setEnabled('ajustes_R_O_E', false);
        form.setEnabled('Aprov_Resp_O_E', false);
        form.setEnabled('Descricao_proj', false);
    }
    if (activity == 15) {
        form.setEnabled('ajustes_R_O_E', false);
        form.setEnabled('Ajustes_D_Adjun', false);
        form.setEnabled('Aprov_D_adjunto', false);
        form.setEnabled('ajustes_R_P', false);
        form.setEnabled('aprov_R_P', false);
        form.setEnabled('Ajustes_conside', false);
        form.setEnabled('area_responsave', false);
        form.setEnabled('resp_pelo_proj', false);
        form.setEnabled('data_inicio', false);
        form.setEnabled('data_fim', false);
        form.setEnabled('link_scopi', false);
        form.setEnabled('Nome_do_projeto', false);
        form.setEnabled('Ajustes_D_Execu', false);
        form.setEnabled('Aprov_D_Executi', false);
        form.setEnabled('Aprov_Resp_O_E', false);
        form.setEnabled('Descricao_proj', false);
    }
}