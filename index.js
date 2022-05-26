$(document).ready(function() {

    $.fn.getPokemon = function(elemento, pokenumber) {
        var pokemon = "";
        var nombre = "";
        $.ajax({
            url: `https://pokeapi.co/api/v2/pokemon/${pokenumber}`,

            success: function(result) {
                pokemon =   result.sprites.front_shiny;
                nombre  =   result.species.name;
                elemento.html("<image src=" + pokemon + ">");
                alert(`¡Un ${nombre} salvaje ha aparecido!`)
            }
        });
    };

    $("#pokemon_uno_boton").click(function() {
        $.fn.getPokemon($("#pokemon_uno"), 9);

    });

    $("#pokemon_dos_boton").click(function() {
        $.fn.getPokemon($("#pokemon_dos"), 150);
    });

    $("#pokemon_tres_boton").click(function() {
        $.fn.getPokemon($("#pokemon_tres"), 383);
    });
});