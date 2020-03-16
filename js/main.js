$(document).ready(function() {

//SCOPO DEL GIOCO: Griglia 6x6, ad ogni click parte una richiesta AJAX che prende un numero
//random da 1 a 9. Se è <= 5 il quadrato diventa giallo, se è > di 5 il quadrato diventa verde.
//Il numero ottenuto appare al centro del quadrato.

    $('.square').click(function(){
        //console.log($(this));
        var quadratoCliccato = $(this);
        $.ajax({
            url:'https://flynn.boolean.careers/exercises/api/random/int',// richiamo un url che genera numeri randon
            method:'GET',
            success: function (data) {
                var numeroBoolean = data.response;
                //console.log(numeroBoolean);
                colore(quadratoCliccato , numeroBoolean);

            },
            error: function() {
                alert('Qualcosa non va !!!');
            }
        });
    });

    function colore(quadratoCliccato , numeroBoolean){
        if(numeroBoolean <= 5) {
            console.log(numeroBoolean);
            $('.square').append(numeroBoolean);
            $(quadratoCliccato).addClass('giallo')
        }else if( numeroBoolean > 5) {
            console.log(numeroBoolean);
            $('.square').append(numeroBoolean);
            $(quadratoCliccato).addClass('verde')
        }
    }


















});
