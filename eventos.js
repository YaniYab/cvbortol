document.getElementById("imagenContenedor").addEventListener('click', function() {
    var sectorIntereses = document.getElementById('sectorIntereses');
    
    if (sectorIntereses.style.display === 'none' || sectorIntereses.style.display === '') {
        sectorIntereses.style.display = 'block';
    } else {
        sectorIntereses.style.display = 'none';
    }
});


document.getElementById("textoMapa").addEventListener('click', function() {
    var mapa = document.getElementById('mapa');
    
    if (mapa.style.display === 'none' || mapa.style.display === '') {
        mapa.style.display = 'block';
    } else {
        mapa.style.display = 'none';
    }
});



document.getElementById("boton").addEventListener("click", function() {

    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("E-mail").value;
    var mensaje = document.getElementById("mensaje").value;
  
   
    if (!nombre || !email || !mensaje) {
      alert("Por favor, complete todos los campos requeridos.");
    } else {
     
      alert("Formulario enviado, ¡Gracias por su tiempo!");
    }
  });
  



