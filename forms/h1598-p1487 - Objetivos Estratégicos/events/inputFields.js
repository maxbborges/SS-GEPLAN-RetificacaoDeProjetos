function inputFields(form){
	var cd = form.getValue("codigoObjetivo").trim();
	var nm = form.getValue("objetivoEstrategico").trim();
	
	form.setValue("descricaoFicha", cd + " - " + nm);
}