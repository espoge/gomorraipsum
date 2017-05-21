var error_msg="Attenzione, inserisci il numero di paragrafi";
var capitoli=document.getElementById("text-cont");
var erx =document.getElementById("errore");
var btnLorem =document.getElementById("btn");

function generaLorem(){
capitoli.innerHTML= " ";
erx.innerHTML=" ";
var valSelected = parseInt(document.getElementById("number").value);
var titleSelezionato = document.getElementById('titolo').value;

if (valSelected == ' '){
	erx.innerHTML=error_msg;
	return false;
};

if (titleSelezionato == 'notitle'){
	for (var i=0; i < valSelected; i++){
	var frasiRandom=Math.floor(Math.random()*frasi.length);
	capitoli.innerHTML+='<p>'+(frasi[frasiRandom])+'</p>'
	
	};
}else{
	for (var i=0; i < valSelected; i++){
	var titoliRandom=Math.floor(Math.random()*titoli.length);
	capitoli.innerHTML+= '<'+titleSelezionato+'>'+(titoli[titoliRandom])+'</'+titleSelezionato+'>';
	var frasiRandom=Math.floor(Math.random()*frasi.length);
	capitoli.innerHTML+='<p>'+(frasi[frasiRandom])+'</p>'
		};
	}
}


 btnLorem.addEventListener("click", generaLorem, false);

