var keyDown = false, ctrl = 17, vKey = 86, Vkey = 118;

$(document).keydown(function(e) {
	if (e.keyCode == ctrl)
		keyDown = true;
}).keyup(function(e) {
	if (e.keyCode == ctrl)
		keyDown = false;
});

$('[data-only-numbers]').on('keypress', function(e) {
	if (!e) {
		var e = window.event;
	}

	if (e.keyCode > 0 && e.which == 0) {
		return true;
	}

	if (e.keyCode) {
		code = e.keyCode;
	} else if (e.which) {
		code = e.which;
	}

	if (code == 46) {
		return true;
	}

	var character = String.fromCharCode(code);
	if (character == '\b' || character == ' ' || character == '\t') {
		return true;
	}
	if (keyDown && (code == vKey || code == Vkey)) {
		return (character);
	} else {
		return (/[0-9]$/.test(character));
	}
}).on('focusout', function(e) {
	var $this = $(this);
	if ($this.val() == "") {
		return true;
	}
	$this.val($this.val().replace(/[^0-9\.]/g, ''));
}).on('paste', function(e) {
	var $this = $(this);
	setTimeout(function() {
		$this.val($this.val().replace(/[^0-9\.]/g, ''));
	}, 5);
});

var $zoomPreview = $(".zoom-preview");
if ($zoomPreview.length) {
	$zoomPreview.parent().removeClass("input-group");
	$zoomPreview.remove();
}

$.each($(".calendar"), function(i, o) {
	var id = $(o).attr("id");
	FLUIGC.calendar("#" + id);
});

$(document).ready(function() {
	$.each($(".calendar"), function(i, o) {
		var id = $(o).attr("id");
		if ($("#" + id).attr("readonly")) {
			$("#" + id).data('DateTimePicker').disable();
		}
	});
});
		
function setSelectedZoomItem(selectedItem){
	if (selectedItem.inputId == "Selecao_OE"){
		$('#cd_selecao_OE').val(selectedItem.codigoObjetivo);
		$('#matricula_gestor_OE').val(selectedItem.matriculaResponsavel);
		$('#gestor_OE').val(selectedItem.responsavel);
	}
	else if (selectedItem.inputId == "area_responsave"){
		$('#grupo_area_responsavel').val(selectedItem.grupo);
	}else if(selectedItem.inputId == "objetivoEstrategico"){
		$("#codigoObjetivo").val(selectedItem.ID);
	}else if(selectedItem.inputId == "responsavel"){
		$("#matriculaResponsavel").val(selectedItem.colleagueId);
	}
}

function removedZoomItem(removedItem){
	if (removedItem.inputId == "Selecao_OE"){
		$('#cd_selecao_OE').val('');
		$('#matricula_gestor_OE').val('');
		$('#gestor_OE').val('');
	}
	else if (removedItem.inputId == "area_responsave"){
		$('#grupo_area_responsavel').val('');
	}
}