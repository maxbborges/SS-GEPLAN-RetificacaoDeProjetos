function validateForm(form) {
    var activity = getValue('WKNumState');
    if ((form.getValue("Nome_do_projeto") == null || form.getValue("Nome_do_projeto") == "") && (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
        throw "Nome do projeto n\u00E3o pode ser vazio.";
    }
    if ((form.getValue("Descricao_proj") == null || form.getValue("Descricao_proj") == "") && (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
        throw "Descri\u00E7\u00E3o do projeto n\u00E3o pode ser vazio.";
    }
    if ((form.getValue("area_responsave") == null || form.getValue("area_responsave") == "") && (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
        throw "\u00C1rea Respons\u00E1vel n\u00E3o pode ser vazio.";
    }
    if ((form.getValue("resp_pelo_proj") == null || form.getValue("resp_pelo_proj") == "") && (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
        throw "Respons\u00E1vel pelo projeto n\u00E3o pode ser vazio.";
    }
    if ((form.getValue("link_scopi") == null || form.getValue("link_scopi") == "") && (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
        throw "Endere\u00E7o do projeto no SCOPI n\u00E3o pode ser vazio.";
    }
    if ((form.getValue("data_inicio") == null || form.getValue("data_inicio") == "") && (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
        throw "Data de in\u00EDcio do projeto aprovado n\u00E3o pode ser vazio.";
    }
    if ((form.getValue("data_fim") == null || form.getValue("data_fim") == "") && (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
        throw "Data de fim do projeto aprovado n\u00E3o pode ser vazio.";
    }
    if ((form.getValue("column1_3___1") == null || form.getValue("column1_3___1") == "") && (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
        throw "Retifica????o n\u00E3o pode ser vazio.";
    }
    if ((form.getValue("column6_3___1") == null || form.getValue("column6_3___1") == "") && (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
        throw "Para em retifica????o n\u00E3o pode ser vazio.";
    }
    if ((form.getValue("column7_3___1") == null || form.getValue("column7_3___1") == "") && (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
        throw "Justificativa em retifica????o n\u00E3o pode ser vazio.";
    }
    if ((form.getValue("doc_id") == null || 
    		form.getValue("doc_id") == "" || 
    		form.getValue("nr_pasta") == "" || 
    		form.getValue("nr_pasta") == null) && 
    		(getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true')) &&
    		activity == 27 && form.getValue("Aprov_D_Executi")=="Sim"
    ) {
        throw "Necess??rio Gerar o Formul??rio atrav??s do bot??o 'Gerar PDF' em Aprova????o Diretoria Executiva!";
    }
}