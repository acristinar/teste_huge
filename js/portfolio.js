$(function(){

    /*aqui é o estilo do botão all works q entra ativado quando carrega a página*/
    $('#allworks').css({
        "background-color" : "#3f3f3f",
        "color" : "#f9c741",
        "border-color" : "#3f3f3f"
    });

    $('#portfolio-filter').children().click(function(){
        var $tipo = $(this).data("type");

        /*aqui são os botões sendo desligados*/
        $('#portfolio-filter').children().css({
            "background-color" : "#f9c741",
            "color" : "#eff3f3",
            "border-color" : "#eff3f3"
        });
        //aqui é o botão sendo ligado
        $(this).css({
            "background-color" : "#3f3f3f",
            "color" : "#f9c741",
            "border-color" : "#3f3f3f"
        });

        var $portfolio = $("#portfolio-list").children();

        if( $tipo === "all"){
            $portfolio.show();
        }
        else {
            $portfolio.each(function(){
                if($(this).data("type") !== $tipo){
                    $(this).hide();
                }
                else {
                    $(this).show();
                }
            });
        }

    });

});
