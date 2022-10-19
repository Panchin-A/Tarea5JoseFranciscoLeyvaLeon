var seleccion = prompt('¿Que crees que salga? 1)sello o 2)cara');
document.write( seleccion );

function rollTheDice() {
    setTimeout(function () {
        var randomNumber1 = Math.floor(Math.random() * 2)+1;
  

        document.querySelector(".img1").setAttribute("src",
            "moneda" + randomNumber1 + ".png");

  
        if (seleccion == randomNumber1) {
            alert 
            document.querySelector("h1").innerHTML = "Correcto";
        }

        else if (randomNumber1 != seleccion) {
            document.querySelector("h1").innerHTML
                = ( " Tas mal");
        }

        
    }, 2500);
}