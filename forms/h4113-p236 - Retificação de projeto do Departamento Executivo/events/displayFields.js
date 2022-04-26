function displayFields(form, customHTML) {
    var activity = getValue('WKNumState');
    customHTML.append("<script type='text/javascript'>");
    customHTML.append("let MODE = '" + form.getFormMode() + "';");
    customHTML.append("let ATIVIDADE = " + getValue("WKNumState") + ";");
	customHTML.append("let NUM_PROCESS = '" + form.getFormMode() + "';");
    customHTML.append("</script>");

    
    if  (activity != 5 && activity != 10 && activity != 0 && activity != 52 && activity != 54 && activity != 50) {
        customHTML.append('<script>');
        customHTML.append('$(\'*[name="btnRetificacao"]\').css(\'display\', \'none\');var closers = $(\'*[name="btnRetificacao"]\').closest(\'.form-field\').find(\'input, textarea, select\');var hideDiv = true;$.each(closers, function(i, close) {if (close.style.display != \'none\' && close.type != \'hidden\') {hideDiv = false;}});if (hideDiv == true) {$(\'*[name="btnRetificacao"]\').closest(\'.form-field\').css(\'display\', \'none\');}');
        customHTML.append('</script>');
    }
    
    if (activity == 19) {
        customHTML.append('<script>');
        customHTML.append('$(\'*[name="Aprov_D_Executi"]\').css(\'display\', \'none\');var closers = $(\'*[name="Aprov_D_Executi"]\').closest(\'.form-field\').find(\'input, textarea, select\');var hideDiv = true;$.each(closers, function(i, close) {if (close.style.display != \'none\' && close.type != \'hidden\') {hideDiv = false;}});if (hideDiv == true) {$(\'*[name="Aprov_D_Executi"]\').closest(\'.form-field\').css(\'display\', \'none\');}');
        customHTML.append('</script>');
        customHTML.append('<script>');
        customHTML.append('$(\'*[name="Aprov_D_Executi"]\').closest("li").hide()');
        customHTML.append('</script>');
        customHTML.append('<script>');
    }
    if (activity == 5 || activity == 0) {
        customHTML.append('<script>');
        customHTML.append('$(\'*[name="Ajustes_D_Adjun"]\').css(\'display\', \'none\');var closers = $(\'*[name="Ajustes_D_Adjun"]\').closest(\'.form-field\').find(\'input, textarea, select\');var hideDiv = true;$.each(closers, function(i, close) {if (close.style.display != \'none\' && close.type != \'hidden\') {hideDiv = false;}});if (hideDiv == true) {$(\'*[name="Ajustes_D_Adjun"]\').closest(\'.form-field\').css(\'display\', \'none\');}');
        customHTML.append('</script>');
        customHTML.append('<script>');
        customHTML.append('$(\'*[name="Ajustes_D_Adjun"]\').closest("li").hide()');
        customHTML.append('</script>');
        customHTML.append('<script>');
        customHTML.append('$(\'*[name="ajustes_P_E"]\').css(\'display\', \'none\');var closers = $(\'*[name="ajustes_P_E"]\').closest(\'.form-field\').find(\'input, textarea, select\');var hideDiv = true;$.each(closers, function(i, close) {if (close.style.display != \'none\' && close.type != \'hidden\') {hideDiv = false;}});if (hideDiv == true) {$(\'*[name="ajustes_P_E"]\').closest(\'.form-field\').css(\'display\', \'none\');}');
        customHTML.append('</script>');
        customHTML.append('<script>');
        customHTML.append('$(\'*[name="ajustes_P_E"]\').closest("li").hide()');
        customHTML.append('</script>');
        customHTML.append('<script>');
        customHTML.append('$(\'*[name="ajustes_R_P"]\').css(\'display\', \'none\');var closers = $(\'*[name="ajustes_R_P"]\').closest(\'.form-field\').find(\'input, textarea, select\');var hideDiv = true;$.each(closers, function(i, close) {if (close.style.display != \'none\' && close.type != \'hidden\') {hideDiv = false;}});if (hideDiv == true) {$(\'*[name="ajustes_R_P"]\').closest(\'.form-field\').css(\'display\', \'none\');}');
        customHTML.append('</script>');
        customHTML.append('<script>');
        customHTML.append('$(\'*[name="ajustes_R_P"]\').closest("li").hide()');
        customHTML.append('</script>');
        customHTML.append('<script>');
        customHTML.append('$(\'*[name="Aprov_D_adjunto"]\').css(\'display\', \'none\');var closers = $(\'*[name="Aprov_D_adjunto"]\').closest(\'.form-field\').find(\'input, textarea, select\');var hideDiv = true;$.each(closers, function(i, close) {if (close.style.display != \'none\' && close.type != \'hidden\') {hideDiv = false;}});if (hideDiv == true) {$(\'*[name="Aprov_D_adjunto"]\').closest(\'.form-field\').css(\'display\', \'none\');}');
        customHTML.append('</script>');
        customHTML.append('<script>');
        customHTML.append('$(\'*[name="Aprov_D_adjunto"]\').closest("li").hide()');
        customHTML.append('</script>');
        customHTML.append('<script>');
        customHTML.append('$(\'*[name="valid_P_E"]\').css(\'display\', \'none\');var closers = $(\'*[name="valid_P_E"]\').closest(\'.form-field\').find(\'input, textarea, select\');var hideDiv = true;$.each(closers, function(i, close) {if (close.style.display != \'none\' && close.type != \'hidden\') {hideDiv = false;}});if (hideDiv == true) {$(\'*[name="valid_P_E"]\').closest(\'.form-field\').css(\'display\', \'none\');}');
        customHTML.append('</script>');
        customHTML.append('<script>');
        customHTML.append('$(\'*[name="valid_P_E"]\').closest("li").hide()');
        customHTML.append('</script>');
        customHTML.append('<script>');
        customHTML.append('$(\'*[name="aprov_R_P"]\').css(\'display\', \'none\');var closers = $(\'*[name="aprov_R_P"]\').closest(\'.form-field\').find(\'input, textarea, select\');var hideDiv = true;$.each(closers, function(i, close) {if (close.style.display != \'none\' && close.type != \'hidden\') {hideDiv = false;}});if (hideDiv == true) {$(\'*[name="aprov_R_P"]\').closest(\'.form-field\').css(\'display\', \'none\');}');
        customHTML.append('</script>');
        customHTML.append('<script>');
        customHTML.append('$(\'*[name="aprov_R_P"]\').closest("li").hide()');
        customHTML.append('</script>');
        customHTML.append('<script>');
        customHTML.append('$(\'*[name="Ajustes_D_Execu"]\').css(\'display\', \'none\');var closers = $(\'*[name="Ajustes_D_Execu"]\').closest(\'.form-field\').find(\'input, textarea, select\');var hideDiv = true;$.each(closers, function(i, close) {if (close.style.display != \'none\' && close.type != \'hidden\') {hideDiv = false;}});if (hideDiv == true) {$(\'*[name="Ajustes_D_Execu"]\').closest(\'.form-field\').css(\'display\', \'none\');}');
        customHTML.append('</script>');
        customHTML.append('<script>');
        customHTML.append('$(\'*[name="Ajustes_D_Execu"]\').closest("li").hide()');
        customHTML.append('</script>');
        customHTML.append('<script>');
        customHTML.append('$(\'*[name="Aprov_D_Executi"]\').css(\'display\', \'none\');var closers = $(\'*[name="Aprov_D_Executi"]\').closest(\'.form-field\').find(\'input, textarea, select\');var hideDiv = true;$.each(closers, function(i, close) {if (close.style.display != \'none\' && close.type != \'hidden\') {hideDiv = false;}});if (hideDiv == true) {$(\'*[name="Aprov_D_Executi"]\').closest(\'.form-field\').css(\'display\', \'none\');}');
        customHTML.append('</script>');
        customHTML.append('<script>');
        customHTML.append('$(\'*[name="Aprov_D_Executi"]\').closest("li").hide()');
        customHTML.append('</script>');
        customHTML.append('<script>');
        customHTML.append('$(\'*[name="ajustes_R_O_E"]\').css(\'display\', \'none\');var closers = $(\'*[name="ajustes_R_O_E"]\').closest(\'.form-field\').find(\'input, textarea, select\');var hideDiv = true;$.each(closers, function(i, close) {if (close.style.display != \'none\' && close.type != \'hidden\') {hideDiv = false;}});if (hideDiv == true) {$(\'*[name="ajustes_R_O_E"]\').closest(\'.form-field\').css(\'display\', \'none\');}');
        customHTML.append('</script>');
        customHTML.append('<script>');
        customHTML.append('$(\'*[name="ajustes_R_O_E"]\').closest("li").hide()');
        customHTML.append('</script>');
        customHTML.append('<script>');
        customHTML.append('$(\'*[name="Aprov_Resp_O_E"]\').css(\'display\', \'none\');var closers = $(\'*[name="Aprov_Resp_O_E"]\').closest(\'.form-field\').find(\'input, textarea, select\');var hideDiv = true;$.each(closers, function(i, close) {if (close.style.display != \'none\' && close.type != \'hidden\') {hideDiv = false;}});if (hideDiv == true) {$(\'*[name="Aprov_Resp_O_E"]\').closest(\'.form-field\').css(\'display\', \'none\');}');
        customHTML.append('</script>');
        customHTML.append('<script>');
        customHTML.append('$(\'*[name="Aprov_Resp_O_E"]\').closest("li").hide()');
        customHTML.append('</script>');
    }
    if (activity == 6) {
        customHTML.append('<script>');
        customHTML.append('$(\'*[name="valid_P_E"]\').css(\'display\', \'none\');var closers = $(\'*[name="valid_P_E"]\').closest(\'.form-field\').find(\'input, textarea, select\');var hideDiv = true;$.each(closers, function(i, close) {if (close.style.display != \'none\' && close.type != \'hidden\') {hideDiv = false;}});if (hideDiv == true) {$(\'*[name="valid_P_E"]\').closest(\'.form-field\').css(\'display\', \'none\');}');
        customHTML.append('</script>');
        customHTML.append('<script>');
        customHTML.append('$(\'*[name="valid_P_E"]\').closest("li").hide()');
        customHTML.append('</script>');
        customHTML.append('<script>');
        customHTML.append('$(\'*[name="Aprov_D_adjunto"]\').css(\'display\', \'none\');var closers = $(\'*[name="Aprov_D_adjunto"]\').closest(\'.form-field\').find(\'input, textarea, select\');var hideDiv = true;$.each(closers, function(i, close) {if (close.style.display != \'none\' && close.type != \'hidden\') {hideDiv = false;}});if (hideDiv == true) {$(\'*[name="Aprov_D_adjunto"]\').closest(\'.form-field\').css(\'display\', \'none\');}');
        customHTML.append('</script>');
        customHTML.append('<script>');
        customHTML.append('$(\'*[name="Aprov_D_adjunto"]\').closest("li").hide()');
        customHTML.append('</script>');
        customHTML.append('<script>');
        customHTML.append('$(\'*[name="Aprov_D_Executi"]\').css(\'display\', \'none\');var closers = $(\'*[name="Aprov_D_Executi"]\').closest(\'.form-field\').find(\'input, textarea, select\');var hideDiv = true;$.each(closers, function(i, close) {if (close.style.display != \'none\' && close.type != \'hidden\') {hideDiv = false;}});if (hideDiv == true) {$(\'*[name="Aprov_D_Executi"]\').closest(\'.form-field\').css(\'display\', \'none\');}');
        customHTML.append('</script>');
        customHTML.append('<script>');
        customHTML.append('$(\'*[name="Aprov_D_Executi"]\').closest("li").hide()');
        customHTML.append('</script>');
        customHTML.append('<script>');
        customHTML.append('$(\'*[name="Aprov_Resp_O_E"]\').css(\'display\', \'none\');var closers = $(\'*[name="Aprov_Resp_O_E"]\').closest(\'.form-field\').find(\'input, textarea, select\');var hideDiv = true;$.each(closers, function(i, close) {if (close.style.display != \'none\' && close.type != \'hidden\') {hideDiv = false;}});if (hideDiv == true) {$(\'*[name="Aprov_Resp_O_E"]\').closest(\'.form-field\').css(\'display\', \'none\');}');
        customHTML.append('</script>');
        customHTML.append('<script>');
        customHTML.append('$(\'*[name="Aprov_Resp_O_E"]\').closest("li").hide()');
        customHTML.append('</script>');
    }
    if (activity == 41) {
        customHTML.append('<script>');
        customHTML.append('$(\'*[name="valid_P_E"]\').css(\'display\', \'none\');var closers = $(\'*[name="valid_P_E"]\').closest(\'.form-field\').find(\'input, textarea, select\');var hideDiv = true;$.each(closers, function(i, close) {if (close.style.display != \'none\' && close.type != \'hidden\') {hideDiv = false;}});if (hideDiv == true) {$(\'*[name="valid_P_E"]\').closest(\'.form-field\').css(\'display\', \'none\');}');
        customHTML.append('</script>');
        customHTML.append('<script>');
        customHTML.append('$(\'*[name="valid_P_E"]\').closest("li").hide()');
        customHTML.append('</script>');
        customHTML.append('<script>');
        customHTML.append('$(\'*[name="Aprov_D_adjunto"]\').css(\'display\', \'none\');var closers = $(\'*[name="Aprov_D_adjunto"]\').closest(\'.form-field\').find(\'input, textarea, select\');var hideDiv = true;$.each(closers, function(i, close) {if (close.style.display != \'none\' && close.type != \'hidden\') {hideDiv = false;}});if (hideDiv == true) {$(\'*[name="Aprov_D_adjunto"]\').closest(\'.form-field\').css(\'display\', \'none\');}');
        customHTML.append('</script>');
        customHTML.append('<script>');
        customHTML.append('$(\'*[name="Aprov_D_adjunto"]\').closest("li").hide()');
        customHTML.append('</script>');
        customHTML.append('<script>');
        customHTML.append('$(\'*[name="Aprov_D_Executi"]\').css(\'display\', \'none\');var closers = $(\'*[name="Aprov_D_Executi"]\').closest(\'.form-field\').find(\'input, textarea, select\');var hideDiv = true;$.each(closers, function(i, close) {if (close.style.display != \'none\' && close.type != \'hidden\') {hideDiv = false;}});if (hideDiv == true) {$(\'*[name="Aprov_D_Executi"]\').closest(\'.form-field\').css(\'display\', \'none\');}');
        customHTML.append('</script>');
        customHTML.append('<script>');
        customHTML.append('$(\'*[name="Aprov_D_Executi"]\').closest("li").hide()');
        customHTML.append('</script>');
    }
    if (activity == 15) {
        customHTML.append('<script>');
        customHTML.append('$(\'*[name="Aprov_D_adjunto"]\').css(\'display\', \'none\');var closers = $(\'*[name="Aprov_D_adjunto"]\').closest(\'.form-field\').find(\'input, textarea, select\');var hideDiv = true;$.each(closers, function(i, close) {if (close.style.display != \'none\' && close.type != \'hidden\') {hideDiv = false;}});if (hideDiv == true) {$(\'*[name="Aprov_D_adjunto"]\').closest(\'.form-field\').css(\'display\', \'none\');}');
        customHTML.append('</script>');
        customHTML.append('<script>');
        customHTML.append('$(\'*[name="Aprov_D_adjunto"]\').closest("li").hide()');
        customHTML.append('</script>');
        customHTML.append('<script>');
        customHTML.append('$(\'*[name="Aprov_D_Executi"]\').css(\'display\', \'none\');var closers = $(\'*[name="Aprov_D_Executi"]\').closest(\'.form-field\').find(\'input, textarea, select\');var hideDiv = true;$.each(closers, function(i, close) {if (close.style.display != \'none\' && close.type != \'hidden\') {hideDiv = false;}});if (hideDiv == true) {$(\'*[name="Aprov_D_Executi"]\').closest(\'.form-field\').css(\'display\', \'none\');}');
        customHTML.append('</script>');
        customHTML.append('<script>');
        customHTML.append('$(\'*[name="Aprov_D_Executi"]\').closest("li").hide()');
        customHTML.append('</script>');
        customHTML.append('<script>');
    }
}