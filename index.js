$(document).ready(function() {

    $.fn.getPokemon = function(elemento, pokenumber) {
        var pokemon = "";
        $.ajax({
            url: `https://pokeapi.co/api/v2/pokemon/${pokenumber}`,

            success: function(result) {
                pokemon = result.sprites.front_shiny;
                elemento.html("<image src=" + pokemon + ">");
            }
        });
    };

    $("#pokemon_uno_boton").click(function() {
        $.fn.getPokemon($("#pokemon_uno"), 9);
        alert("¡Un pokemon salvaje ha aparecido!")
    });

    $("#pokemon_dos_boton").click(function() {
        $.fn.getPokemon($("#pokemon_dos"), 150);
        alert("¡Un pokemon salvaje ha aparecido!")
    });

    $("#pokemon_tres_boton").click(function() {
        $.fn.getPokemon($("#pokemon_tres"), 383);
        alert("¡Un pokemon salvaje ha aparecido!")
    });
});

