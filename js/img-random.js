(function (){
var myimages = ["immagini/genni.jpg","immagini/ciro.jpg", "immagini/gruppo1.jpg", 
"immagini/savastano.jpg", "immagini/conte.jpg","immagini/genni-spara.jpg","immagini/chanel.jpg"];
var ry=Math.floor(Math.random()*myimages.length)
var fotoTop=document.getElementById("foto");
fotoTop.innerHTML=' <img src=' +myimages[ry]+ '>';
})();


