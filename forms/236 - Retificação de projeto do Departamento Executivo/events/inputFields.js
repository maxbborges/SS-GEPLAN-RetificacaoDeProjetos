function inputFields(form) {
    if (form && form.getValue("data_inicio") && form.getValue("data_inicio").match("^[0-3]?[0-9]/[0-3]?[0-9]/(?:[0-9]{2})?[0-9]{2}$")) {
        var split = form.getValue("data_inicio").split('/');
        form.setValue("data_inicio", split[2] + '-' + split[1] + '-' + split[0]);
    }
    if (form && form.getValue("data_fim") && form.getValue("data_fim").match("^[0-3]?[0-9]/[0-3]?[0-9]/(?:[0-9]{2})?[0-9]{2}$")) {
        var split = form.getValue("data_fim").split('/');
        form.setValue("data_fim", split[2] + '-' + split[1] + '-' + split[0]);
    }
}