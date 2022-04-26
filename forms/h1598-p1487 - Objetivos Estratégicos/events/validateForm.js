function validateForm(form){    
    var errorMsg = "";
    var lineBreaker = "<br/>";
    
    if(campoVazio(form, "codigoObjetivo")){
    	errorMsg +=" O campo 'Código do objetivo' não foi preenchido." + lineBreaker;
    }
    if(campoVazio(form, "objetivoEstrategico")){
    	errorMsg +=" O campo 'Objetivo estratégico' não foi preenchido." + lineBreaker;
    }
    if(campoVazio(form, "matriculaResponsavel")){
    	errorMsg +=" O campo 'Responsável' não foi preenchido." + lineBreaker;
    }
    
    if (form.getFormMode() == "ADD") {
		if (verificarExistencia("codigoObjetivo", form.getValue("codigoObjetivo").trim())) {
			errorMsg += "Objetivo já cadastrado!" + lineBreaker;
		}
	}
    
    if(errorMsg != ""){
        throw errorMsg;
    }
}

/**
 * Função campoVazio é um facilitador que evita você precisar repetir a condição completa
 * verificando se o campo está undefined, null ou se está vazio
 * @param objeto form
 * @param nomeCampo
 * @returns verdadeiro ou falso
 */
function campoVazio(form, nomeCampo) {
	return ((form.getValue(nomeCampo) == null) 
			|| (form.getValue(nomeCampo) == undefined) 
			|| (form.getValue(nomeCampo).trim() == ""));
}

/**
 * Verifica se identificador do registro já foi cadastrado
 * @param nome do campo
 * @param valor
 * @returns verdadeiro ou falso
 */
function verificarExistencia(campo, valor) {
	var cf1 = DatasetFactory.createConstraint(campo, valor, valor, ConstraintType.MUST);
	var cf2 = DatasetFactory.createConstraint("metadata#active", "true", "true", ConstraintType.MUST);
	var constraintsCod = new Array(cf1, cf2);
	var dataset = DatasetFactory.getDataset('sest_objetivos_estrategicos', null, constraintsCod, null);

	return (dataset != null && dataset.rowsCount > 0);
}