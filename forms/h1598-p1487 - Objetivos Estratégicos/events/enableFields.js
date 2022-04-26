function enableFields(form) {
	if (form.getFormMode() != 'ADD') {
		form.setEnabled("codigoObjetivo", false);
	}
}