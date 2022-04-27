loading = {}
$(window).on('load', function () {
});

$(document).ready(function () {
    init();
    loading = FLUIGC.loading(window);
    $("#div_gerar_pdf").hide()

    // setTimeout(() => {
    //     $('.wcm-panel-content.wcm-panel-left #ecm-documentview-main #ecm-documentview-toolbar').css("display","none")
    // }, 500);

    $("[name='Aprov_D_Executi']").change(function () {
        if ($(this).val() == 'Sim') {
            $("#div_gerar_pdf").show()
        } else {
            $("#div_gerar_pdf").hide()
        }
    });
});

function init() {
    if (ATIVIDADE != 5 && ATIVIDADE != 0 && ATIVIDADE != 10) {
        setTimeout(() => {
            linhasColunas = $('[tablename="tabledetailname3"] tbody tr textarea')
            for (i = 2; i < linhasColunas.length; i++) {
                $(linhasColunas[i]).prop("readonly", true);
            }
            $('[tablename="tabledetailname3"] tbody tr select').remove()

            // OCULTA OS INPUTS VAZIO DA TABELA (VIEW)
            var inputs = $('[tablename="tabledetailname3"] tbody tr input')
            for (i = 0; i < inputs.length; i++) {
                if ($(inputs[i]).val() == '' || $(inputs[i]).val() == '\xa0') {
                    $(inputs[i]).hide()
                }
            }
            
            // OCULTA OS INPUTS/SPAN VAZIOS DA TABELA (EDIT)
            var inputs = $('[tablename="tabledetailname3"] tbody tr span')
            for (i = 10; i < inputs.length; i++) {
                texto = $(inputs[i]).text()
                console.log(texto)
                if (texto == '' || texto == '\xa0' || texto == 'Alteração no escopo (inclusão)' ||
                    texto == 'Selecione um indicador' || texto == 'Selecione uma ação' ||
                    texto == 'Alteração na previsão de fim do projeto' ||
                    texto == 'Alteração na(s) meta(s) estipulada(s) no(s) indicador(es) de desempenho' ||
                    texto == 'Variação orçamentária maior que 25% da proposta inicial' ||
                    texto == 'Alteração no escopo (cancelamento de ações)') {
                    $(inputs[i]).remove()
                }
            }

            if (MODE != 'VIEW') {
                $('tr:first-child>th:first-child').remove()
            }
            $(".bpm-mobile-trash-column").remove()
            $('#Valor_por_entid_div .btn').hide()
        }, 500)
        if ($('[name="Ajustes_conside"]').text()==''||$('[name="Ajustes_conside"]').text()=='\xa0'){
            $("#div_07").hide()
        }
    }

    if (ATIVIDADE != 27) {
        $('#div_gerar_pdf').hide()
    }

    if (ATIVIDADE!=41 && $('[name="Aprov_Resp_O_E"]:checked').length==0){
        $('#div_03').hide()
    }

    if (ATIVIDADE == 5 || ATIVIDADE == 0) {
        setTimeout(() => {
            $('tbody tr i')[1].remove()
        }, 500)
        // wdkAddChild('tabledetailname3');
        $('#div_02').hide()
        $('#div_03').hide()
        $('#div_04').hide()
        $('#div_05').hide()
        $('#div_06').hide()
        $('#div_07').hide()
    } else if (ATIVIDADE == 6) {
        if (MODE == 'VIEW') {
            $('#div_02').hide()
        }
        $('#div_03').hide()
        $('#div_04').hide()
        $('#div_05').hide()
        $('#div_06').hide()
    } else if (ATIVIDADE == 41) {
        $('#div_04').hide()
        $('#div_05').hide()
        $('#div_06').hide()
    } else if (ATIVIDADE == 15) {
        if (MODE == 'VIEW') {
            $('#div_04').hide()
        }
        $('#div_05').hide()
        $('#div_06').hide()
    } else if (ATIVIDADE == 19) {
        if (MODE == 'VIEW') {
            $('#div_05').hide()
        }
        $('#div_06').hide()
    } else if (ATIVIDADE == 27) {
        if (MODE == 'VIEW') {
            $('#div_06').hide()
        }
    } else if (ATIVIDADE == 10) {
        if (MODE != 'VIEW') {
            setTimeout(() => {
                $('tbody tr i')[1].remove()
            }, 500)
        }

        var inputs = $('[tablename="tabledetailname3"] tbody tr')
        for (i = 1; i < inputs.length; i++) {
            $('[name="slc_retificacao_01___' + i + '"').val('')
            $('[name="slc_retificacao_01___' + i + '"').hide()
            $('[name="column2_3___' + i + '"').hide()
            $('[name="column3_3___' + i + '"').hide()
            $('[name="acao_01___' + i + '"').prop('disabled', true)
            $('[name="indicador_01___' + i + '"').prop('disabled', true)
        }
    } else if (ATIVIDADE==50||ATIVIDADE==52||ATIVIDADE==54){
        // $('.link_scopi').remove()
    }
}

function btnLinkScopi(){
    link=$("[name='link_scopi']").val();
    if (link==''){
        link=$("[name='link_scopi']").text();
    }
    window.open(link, '_blank');
}

function carregarLink() {
    let projectId = $("[name='id_do_projeto']").val();
    let link = (projectId == "" || projectId == null)
        ? "" : "https://system.scopi.com.br/#/projects/" + projectId + "/actions";
    $("[name='link_scopi']").val(link);
    // $("#btAbrirScopi").prop('href', link);
}

function carregarUsuarioFluig(scopiUserId) {
    listaUsuarios = carregarListaUsuarios()
    loading.show();
    valor = ''

    if (listaUsuarios != null) {
        loading.hide();
        let email = listaUsuarios[scopiUserId].email;
        let constraints = [DatasetFactory.createConstraint("mail", email, email, ConstraintType.MUST)];
        let dataset = DatasetFactory.getDataset("colleague", ["colleagueId"], constraints, null)
        setTimeout(() => {
            $("[name='matricula_resp_pelo_proj']").val(dataset.values[0].colleagueId);
        }, 500);
    }
    else {
        loading.hide();
        console.log('erro')
    }
    return valor
}

function carregarListaUsuarios() {
    loading.show();
    listaUsuarios = {};
    let dataset = DatasetFactory.getDataset("scopi_consulta_usuarios", null, null, null)
    for (var i = 0; i < dataset.values.length; i++) {
        let user = dataset.values[i];
        listaUsuarios[user.id] = user;
    }
    loading.hide();
    return listaUsuarios
}

function carregarObjetivoEstrategico(objective_id) {
    let constraints = [DatasetFactory.createConstraint("codigoObjetivo", objective_id, objective_id, ConstraintType.MUST)];
    let dataset = DatasetFactory.getDataset("sest_objetivos_estrategicos", null, constraints, null)
    setTimeout(() => {
        $("[name='matricula_GOE']").val(dataset.values[0].matriculaResponsavel);
        $("[name='GOE']").val(dataset.values[0].responsavel);
        $("[name='id_OE']").val(dataset.values[0].codigoObjetivo);
        $("[name='OE']").val(dataset.values[0].objetivoEstrategico);
    }, 300);

}

function carregaDadosRetificacao(projectId) {
    let constraints = [DatasetFactory.createConstraint("idProjeto", projectId, projectId, ConstraintType.MUST)];
    let dataset = DatasetFactory.getDataset("scopi_consulta_projetos", null, constraints, null)
    return dataset
}

function carregaIndicadores() {
    let dataset = DatasetFactory.getDataset("scopi_consulta_indicadores", null, null, null)
    return dataset
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
        // carregaDadosRetificacao(selectedItem.ID)
        carregarLink()
        addLineTable()
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

    nr_pasta=$("[name='nr_pasta']").val()
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

function addLineTable() {
    idProjeto = $('[name="id_do_projeto"]').val()
    // var idProjeto = '4760'
    if (idProjeto == '') {
        FLUIGC.toast({
            message: 'Selecione um projeto!',
            type: 'danger'
        });

        throw "Erro, selecione uma Indicador!"
    }
    setTimeout(() => {
        wdkAddChild('tabledetailname3')

        $('#indicador_01___' + newId).prop('disabled', true).hide()
        $('#acao_01___' + newId).prop('disabled', true).hide()
        $('#column1_3___' + newId).hide()
        $('#column2_3___' + newId).hide()
        $('#column3_3___' + newId).hide()
        $('#column4_3___' + newId).hide()
        $('#column5_3___' + newId).hide()

        $("#slc_retificacao_01___" + newId).change(function () {
            $("#column1_3___" + newId).val($(this).val())

            if ($(this).val() == "Alteração na previsão de fim do projeto;") {
                // REMOVE AS OPTIONS DO SELECT INDICADOR_01
                optionsIndicador = $('#indicador_01___' + newId + ' option')
                for (i = 1; i < optionsIndicador.length; i++) {
                    optionsIndicador[i].remove()
                }

                // REMOVE AS OPTIONS DO SELECT ACAO_01
                optionsAcao = $('#acao_01___' + newId + ' option')
                for (i = 1; i < optionsAcao.length; i++) {
                    optionsAcao[i].remove()
                }

                // CARREGA AS DATAS
                dados = carregaDadosRetificacao(idProjeto)

                // PREENCHE OS DADOS RECUPERADOS E LIMPA OS OUTROS CAMPOS
                $('#column4_3___' + newId).val("").hide()
                dataBr = (dados.values[0].prevision_end).split("-")
                dataBr = dataBr[2] + "/" + dataBr[1] + "/" + dataBr[0]
                $('#column5_3___' + newId).val("Data Final Atual: " + dataBr).show()
                $('#column2_3___' + newId).val('').hide()
                $('#column3_3___' + newId).val('').hide()
                $('#indicador_01___' + newId).prop('disabled', true).hide()
                $('#acao_01___' + newId).prop('disabled', true).hide()
            } else if ($(this).val() == "Variação orçamentária maior que 25% da proposta inicial;") {
                // REMOVE AS OPTIONS DO SELECT INDICADOR_01
                optionsIndicador = $('#indicador_01___' + newId + ' option')
                for (i = 1; i < optionsIndicador.length; i++) {
                    optionsIndicador[i].remove()
                }

                // REMOVE AS OPTIONS DO SELECT ACAO_01
                optionsAcao = $('#acao_01___' + newId + ' option')
                for (i = 1; i < optionsAcao.length; i++) {
                    optionsAcao[i].remove()
                }

                // CARREGA OS VALORES
                dados = carregaDadosRetificacao(idProjeto)

                // PREENCHE OS DADOS RECUPERADOS E LIMPA OS OUTROS CAMPOS
                $('#column5_3___' + newId).val("").hide()
                $('#column4_3___' + newId).val("Valor Atual: " + dados.values[0].expenses).show()
                $('#column2_3___' + newId).val('').hide()
                $('#column3_3___' + newId).val('').hide()
                $('#indicador_01___' + newId).prop('disabled', true).hide()
                $('#acao_01___' + newId).prop('disabled', true).hide()
            
            }else if($(this).val() == "Alteração no escopo (inclusão);"){
                // LIMPA TODOS OS CAMPOS
                $('#indicador_01___' + newId).prop('disabled', true).hide()
                $('#acao_01___' + newId).prop('disabled', true).hide()
                $('#column2_3___' + newId).val('').hide()
                $('#column3_3___' + newId).val('').hide()
                $('#column4_3___' + newId).val('').hide()
                $('#column5_3___' + newId).val("").hide()
            } else {
                // PREENCHE OS DADOS RECUPERADOS E LIMPA OS OUTROS CAMPOS
                $('#column5_3___' + newId).val("").hide()
                $('#column4_3___' + newId).val("").hide()

                if ($(this).val() == 'Alteração no escopo (cancelamento de ações);') {
                    // REMOVE AS OPTIONS DO SELECT INDICADOR_01
                    optionsIndicador = $('#indicador_01___' + newId + ' option')
                    for (i = 1; i < optionsIndicador.length; i++) {
                        optionsIndicador[i].remove()
                    }

                    // CARREGA AS AÇÕES
                    dados = carregaDadosRetificacao(idProjeto)
                    fases = (dados.values[0].phases).split(";")
                    for (i = 0; i < fases.length - 1; i++) {
                        $('#acao_01___' + newId).append($('<option>', {
                            value: fases[i],
                            text: fases[i]
                        }));
                    }

                    // DESABILITA O SELECT INDICADOR_01 E HABILITA O ACAO_01
                    $('#acao_01___' + newId).prop('disabled', false).show()
                    $('#indicador_01___' + newId).prop('disabled', true).hide()
                    $('#column2_3___' + newId).val('').hide()
                } else if ($(this).val() == "Alteração na(s) meta(s) estipulada(s) no(s) indicador(es) de desempenho;") {
                    // REMOVE AS OPTIONS DO SELECT ACAO_01
                    optionsAcao = $('#acao_01___' + newId + ' option')
                    for (i = 1; i < optionsAcao.length; i++) {
                        optionsAcao[i].remove()
                    }

                    // CARREGA OS INDICADORES
                    indicadores = carregaIndicadores()
                    for (i = 0; i < (indicadores.values).length - 1; i++) {
                        $('#indicador_01___' + newId).append(
                            $('<option>', {
                                value: indicadores.values[i].name,
                                text: indicadores.values[i].name
                            })
                        );
                    }

                    // DESABILITA O SELECT ACAO_01 E HABILITA O INDICADOR_01
                    $('#indicador_01___' + newId).prop('disabled', false).show()
                    $('#acao_01___' + newId).prop('disabled', true).hide()
                    $('#column3_3___' + newId).val('').hide()
                }
            }
        });

        $('#indicador_01___' + newId).on("change", function () {
            $('#column2_3___' + newId).val($(this).val())
        })

        $('#acao_01___' + newId).on("change", function () {
            $('#column3_3___' + newId).val($(this).val())
        })
    }, 100)
}