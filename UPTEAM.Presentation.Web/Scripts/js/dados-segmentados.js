﻿$(document).ready(function () {
    colocarCheckBox();
    carregarCiclos();

});
function colocarCheckBox() {
    $('input').each(function () {
        var self = $(this),
          label = self.next(),
          label_text = label.text();

        label.remove();
        self.iCheck({
            checkboxClass: 'icheckbox_line-blue',
            radioClass: 'iradio_line-blue',
            insert: '<div class="icheck_line-icon"></div>' + label_text
        });
    });
}
function carregarCiclos() {
    requisicaoAjaxAsync('GET', 'json', urlbase + 'Ciclo/ObterTodosCiclos', null,
    function (dados) {
        preencherDadosDDL($("#ciclo"), dados.src, "idCiclo", "nomeCiclo", "Ciclo", false);
    });
}