imagenes=["Chrysanthemum.jpg","Desert.jpg","Jellyfish.jpg","Koala.jpg","Lighthouse.jpg","Penguins.jpg","Tulips.jpg"];
window.setInterval(function(){
    let n=(Math.random()*(imagenes.length-1)).toFixed(0);
    $("section img").attr({
        "src":"img/"+imagenes[n],
        "alt":imagenes[n],
        "title":imagenes[n]
    });
        $("h2").text(imagenes[n]);
},1000)

$("#1").on("click",function(){
    // se agrega al final de los p
    $("p").append($("#buscar").val().toUpperCase())
    // se cambia el texto
    $("h2").text($("#buscar").val());
    // se vacia el input 
    $("#buscar").val("");
  
  
})