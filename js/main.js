$(document).ready(function() {

//SCOPO DEL GIOCO: Griglia 6x6, ad ogni click parte una richiesta AJAX che prende un numero
//random da 1 a 9. Se è <= 5 il quadrato diventa giallo, se è > di 5 il quadrato diventa verde.
//Il numero ottenuto appare al centro del quadrato.

    $('.square').click(function(){
        console.log($(this));
        $.ajax({
            url:'https://flynn.boolean.careers/exercises/api/random/int',// richiamo un url che genera numeri randon
            method:'GET',
            success: function (data) {
                var numeroBoolean = data.response;
                console.log(numeroBoolean);

            },
            error: function() {
                alert('Qualcosa non va !!!');
            }
        });
    });

    function colore(numeroBoolean){
        if(numeroBoolean <= 5) {
            $(this).addClass('giallo')
        }else if( numeroBoolean > 5) {
            $(this).addClass('verde')

        }

    }


















});
