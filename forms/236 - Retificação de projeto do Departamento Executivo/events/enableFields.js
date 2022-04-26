function enableFields(form) {
    var activity = getValue('WKNumState');
    if (activity!=10){
        form.setEnabled('Ajustes_conside', false);
    }
    if (activity == 19) {
        form.setEnabled('ajustes_R_P', false);
        form.setEnabled('aprov_R_P', false);
        form.setEnabled('ajustes_P_E', false);
        form.setEnabled('valid_P_E', false);
        form.setEnabled('Ajustes_D_Execu', false);
        form.setEnabled('Aprov_D_Executi', false);
        form.setEnabled('Ajustes_conside', false);
        form.setEnabled('ajustes_R_O_E', false);
        form.setEnabled('Aprov_Resp_O_E', false);
        form.setEnabled('Nome_do_projeto', false);
    }
    if (activity == 6) {
        form.setEnabled('ajustes_P_E', false);
        form.setEnabled('valid_P_E', false);
        form.setEnabled('Ajustes_D_Adjun', false);
        form.setEnabled('Aprov_D_adjunto', false);
        form.setEnabled('Ajustes_conside', false);
        form.setEnabled('Ajustes_D_Execu', false);
        form.setEnabled('Aprov_D_Executi', false);
        form.setEnabled('ajustes_R_O_E', false);
        form.setEnabled('Aprov_Resp_O_E', false);
        form.setEnabled('Nome_do_projeto', false);
    }
    if (activity == 41) {
        form.setEnabled('aprov_R_P', false);
        form.setEnabled('ajustes_R_P', false);
        form.setEnabled('ajustes_P_E', false);
        form.setEnabled('valid_P_E', false);
        form.setEnabled('Ajustes_D_Adjun', false);
        form.setEnabled('Aprov_D_adjunto', false);
        form.setEnabled('Ajustes_D_Execu', false);
        form.setEnabled('Aprov_D_Executi', false);
        form.setEnabled('Ajustes_conside', false);
        form.setEnabled('Nome_do_projeto', false);
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
        form.setEnabled('ajustes_R_O_E', false);
        form.setEnabled('Aprov_Resp_O_E', false);
        form.setEnabled('Nome_do_projeto', false);
    }
    if (activity == 15) {
        form.setEnabled('ajustes_R_O_E', false);
        form.setEnabled('Ajustes_D_Adjun', false);
        form.setEnabled('Aprov_D_adjunto', false);
        form.setEnabled('ajustes_R_P', false);
        form.setEnabled('aprov_R_P', false);
        form.setEnabled('Ajustes_conside', false);
        form.setEnabled('Ajustes_D_Execu', false);
        form.setEnabled('Aprov_D_Executi', false);
        form.setEnabled('Aprov_Resp_O_E', false);
        form.setEnabled('Nome_do_projeto', false);
    }
}