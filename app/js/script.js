/* FUNCAO DE ANCORA DO MENU */
jQuery(document).ready(function($) {
    $(".scroll").click(function(event){
       event.preventDefault();
       $('html,body').animate({scrollTop:$(this.hash).offset().top}, 800);
    });

    /* FUNCAO PARA CONTADOR*/
    var text_max = 140;
    $('#textarea_feedback').html(text_max + ' caracteres restantes');

    $('#answer').keyup(function() {
       var text_length = $('#answer').val().length;
       var text_remaining = text_max - text_length;

       $('#textarea_feedback').html(text_remaining + ' caracteres restantes');
    });

    $('#phone').mask(SPMaskBehavior, spOptions);
    /* --------------------- */

});

/* --------------------------- */

/* FUNCAO QUE CHECA O EMAIL VALIDO POR REGEX */

function checkEmail(emailAddress) {
    var pattern = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
    return pattern.test(emailAddress);
}

/* https://igorescobar.github.io/jQuery-Mask-Plugin/ */

function SPMaskBehavior(val) {
  return val.replace(/\D/g, '').length === 11 ? '(00) 00000-0000' : '(00) 0000-00009';
}

var spOptions = {
  onKeyPress: function(val, e, field, options) {
      field.mask(SPMaskBehavior.apply({}, arguments), options);
    }
};

/* --------------------- */