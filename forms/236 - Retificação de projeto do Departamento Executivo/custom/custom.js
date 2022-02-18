loading = {}
$(document).ready(function () {
    init();
    loading = FLUIGC.loading(window);
    setTimeout(() => {
        $('.wcm-panel-content.wcm-panel-left #ecm-documentview-main #ecm-documentview-toolbar').css("display","none")
    }, 500);
    
});

function init() {
    console.log(MODE)
    if (ATIVIDADE!=5&&ATIVIDADE!=0&&ATIVIDADE!=10){
        setTimeout(()=>{
            linhasColunas=$('[data-field-name="Retifica__o"] tbody tr input')
            for(i=2;i<linhasColunas.length;i++){
                $(linhasColunas[i]).prop("readonly",true);
            }
            $('[data-field-name="Retifica__o"] tbody tr select option:not(:selected)').remove()
            if (MODE!='VIEW'){
            	$('tr:first-child>th:first-child').remove()
            }
            $(".bpm-mobile-trash-column").remove()
            $('[data-field-name="Retifica__o"] .btn').hide()
            
        },500)
    }

    if (ATIVIDADE!=27){
        $('#div_gerar_pdf').hide()
    }

    if(ATIVIDADE==5||ATIVIDADE==0){
        setTimeout(()=>{
            $('tbody tr i')[1].remove()
        },500)
        wdkAddChild('tabledetailname3');
         $('#div_02').hide()
         $('#div_03').hide()
         $('#div_04').hide()
         $('#div_05').hide()
         $('#div_06').hide()
         $('#div_07').hide()
    }
     if(ATIVIDADE==6){
         $('#div_03').hide()
         $('#div_04').hide()
         $('#div_05').hide()
         $('#div_06').hide()
     }
     if(ATIVIDADE==41){
         $('#div_04').hide()
         $('#div_05').hide()
         $('#div_06').hide()
     }
     if(ATIVIDADE==15){
         $('#div_05').hide()
         $('#div_06').hide()
     }
     if(ATIVIDADE==19){
         $('#div_06').hide()
     }
     if(ATIVIDADE==27){

     }
     if(ATIVIDADE==10){
         setTimeout(()=>{
             $('tbody tr i')[1].remove()
         },500)
     }
}

function carregarLink(){
    let projectId = $("[name='id_do_projeto']").val();
    let link = (projectId == "" || projectId == null)
        ? "" : "https://system.scopi.com.br/#/projects/"+projectId+"/actions";
    $("[name='link_scopi']").val(link);
	$("#btAbrirScopi").prop('href', link);
    // $('#link_scopi').trigger('change');
}

function carregarUsuarioFluig(scopiUserId){
    listaUsuarios=carregarListaUsuarios()
    loading.show();
    valor = ''
    
    if(listaUsuarios != null){
        loading.hide();
        let email = listaUsuarios[scopiUserId].email;
        let constraints = [ DatasetFactory.createConstraint("mail", email, email, ConstraintType.MUST) ];
        let dataset = DatasetFactory.getDataset("colleague", ["colleagueId"], constraints, null)
        setTimeout(()=>{
            $("[name='matricula_resp_pelo_proj']").val(dataset.values[0].colleagueId);
        }, 500);
    }
    else{
        loading.hide();
        console.log('erro')
    }
    return valor
}

function carregarListaUsuarios(){
    loading.show();
    listaUsuarios = {};
    let dataset = DatasetFactory.getDataset("scopi_consulta_usuarios", null, null, null)
    for(var i = 0; i < dataset.values.length; i++) {
        let user = dataset.values[i];
        listaUsuarios[user.id] = user;
    }
    loading.hide();
    return listaUsuarios
}

function carregarObjetivoEstrategico(objective_id){
    let constraints = [ DatasetFactory.createConstraint("codigoObjetivo", objective_id, objective_id, ConstraintType.MUST) ];
    let dataset = DatasetFactory.getDataset("sest_objetivos_estrategicos", null, constraints, null)
    setTimeout(()=>{
        $("[name='matricula_GOE']").val(dataset.values[0].matriculaResponsavel);
        $("[name='GOE']").val(dataset.values[0].responsavel);
        $("[name='id_OE']").val(dataset.values[0].codigoObjetivo);
        $("[name='OE']").val(dataset.values[0].objetivoEstrategico);
    }, 300);
    
}

function setSelectedZoomItem(selectedItem) {
    if (selectedItem.inputId == "Nome_do_projeto") {
        $("[name='id_do_projeto']").val(selectedItem.ID);
        $("[name='data_inicio']").val(moment(
            selectedItem.prevision_start
            , 'YYYY-MM-DD', true).format('DD/MM/YYYY'));
        $("[name='data_fim']").val(moment(
            selectedItem.prevision_end
            , 'YYYY-MM-DD', true).format('DD/MM/YYYY'));
        $("[name='Descricao_proj']").val(selectedItem.description);
        $("[name='id_area_responsavel']").val(selectedItem.division_id);
		$("[name='area_responsave']").val(selectedItem.division_name);
		$("[name='resp_pelo_proj']").val(selectedItem.coordinator_name);

        carregarUsuarioFluig(selectedItem.coordinator_id)
        carregarObjetivoEstrategico(selectedItem.objective_id)
        carregarLink()
    }

}

function removedZoomItem(removedItem) {
    $("[name='id_do_projeto']").val('');
    $("[name='data_inicio']").val('');
    $("[name='data_fim']").val('');
    $("[name='Descricao_proj']").val('');
    $("[name='id_area_responsavel']").val('');
	$("[name='area_responsave']").val('');
    $("[name='matricula_resp_pelo_proj']").val('');
	$("[name='resp_pelo_proj']").val('');
    $("[name='matricula_GOE']").val('');
    $("[name='GOE']").val('');
    $("[name='id_OE']").val('');
    $("[name='OE']").val('');

    carregarLink();
}

function criarPDFAbertura(nr_pasta, nm_arquivo) {
    var pdf = new jsPDF('p', 'pt', 'a4');
    $(window).scrollTop(0);
    pdf.internal.scaleFactor = 2;
    var options = {
        pagesplit: true,
        'background': '#fff'
    };

    pdf.addHTML($('#form_content'), options, function () {
        var out = pdf.output('blob');
        var reader = new FileReader();
        reader.readAsDataURL(out);
        reader.onloadend = function () {
            base64data = reader.result;
            base64 = base64data;
            base64 = base64.split("data:application/pdf;base64,")[1];

            var constraintsDocument = new Array();
            constraintsDocument.push(DatasetFactory.createConstraint("nm_arquivo", nm_arquivo, nm_arquivo, ConstraintType.MUST));
            constraintsDocument.push(DatasetFactory.createConstraint("nr_pasta", nr_pasta, nr_pasta, ConstraintType.MUST));
            constraintsDocument.push(DatasetFactory.createConstraint("base64", base64, base64, ConstraintType.MUST));
            let dsDocument = DatasetFactory.getDataset('ds_grava_documento', null, constraintsDocument, null)

            if (dsDocument != null && dsDocument != undefined) {
                if (dsDocument.values.length > 0) {
                    documentId = dsDocument.values[0]["documentId"];
                    $("[name='doc_id']").val(documentId)
                    FLUIGC.toast({
                        message: 'Formulário do Processo gerado com sucesso.',
                        type: 'success'
                    });
                }
            }
        }
    });
}

function verificaPDF() {
    $("#div_02").hide();
    $("#div_03").hide();
    $("#div_04").hide();
    $("#div_05").hide();
    $("#div_06").hide();
    $("#div_07").hide();

    var nr_pasta = "6792";
    $("[name='nr_pasta']").val(nr_pasta)
    var nr_solicitacao = NUM_PROCESS;
    var nm_arquivo = "solic_" + nr_solicitacao + ".pdf";

    criarPDFAbertura(nr_pasta, nm_arquivo)

    $("#div_02").show();
    $("#div_03").show();
    $("#div_04").show();
    $("#div_05").show();
    $("#div_06").show();
    $("#div_07").show();
}