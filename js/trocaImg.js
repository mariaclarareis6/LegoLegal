function trocaImg(img){
    img.closest(".imgPrincipal")
    var srcImgClicada = img.src;
   
    var card = img.closest(".card");
    card.querySelector(".imgPrincipal").src = srcImgClicada;
    
}