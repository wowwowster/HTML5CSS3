//form du coin haut gauche
var canvas_coin_haut_gauche = document.createElement('canvas' );
var div_header = document.getElementById("header");  
canvas_coin_haut_gauche.id     = "coin-haut-gauche";
var hauteur_header_temp = Math.floor(hauteur_header * 1) ;
var the_line_width =  Math.floor(hauteur_header_temp / 7) ;
canvas_coin_haut_gauche.style.height = hauteur_header_temp  + "px"; 
canvas_coin_haut_gauche.style.zIndex   = 2;

var ctx_coin_haut_gauche = canvas_coin_haut_gauche.getContext("2d");


if (canvas_coin_haut_gauche.getContext) {
	 
	ctx_coin_haut_gauche.beginPath();
	ctx_coin_haut_gauche.fillStyle = "#9FCBE8";
	ctx_coin_haut_gauche.arc(0, 0, hauteur_header_temp*1.0,   0, Math.PI );
	ctx_coin_haut_gauche.shadowBlur = 30;
	ctx_coin_haut_gauche.shadowColor = "#9FCBE8";
	ctx_coin_haut_gauche.lineWidth =  the_line_width ; 
	ctx_coin_haut_gauche.strokeStyle = "white";
	ctx_coin_haut_gauche.fill();
	ctx_coin_haut_gauche.stroke();

	ctx_coin_haut_gauche.closePath();
	div_header.appendChild(canvas_coin_haut_gauche);
} 
          

//form du coin haut droit
var canvas_coin_haut_droit = document.createElement('canvas' );
var div_header = document.getElementById("header");  
canvas_coin_haut_droit.id     = "coin-haut-droit";

canvas_coin_haut_droit.style.height  =hauteur_header_temp  + "px"; 

canvas_coin_haut_droit.style.zIndex   = 2;

var ctx_coin_haut_droit = canvas_coin_haut_droit.getContext("2d");

if (canvas_coin_haut_droit.getContext) {
	 
	ctx_coin_haut_droit.beginPath();
	ctx_coin_haut_droit.fillStyle = "#9FCBE8";
	ctx_coin_haut_droit.arc(canvas_coin_haut_droit.width ,0, hauteur_header_temp*1.0, Math.PI*0.5    , 1.5*Math.PI);
 	
	ctx_coin_haut_droit.shadowBlur = 30;
	ctx_coin_haut_droit.shadowColor = "#9FCBE8";
	ctx_coin_haut_droit.lineWidth =  the_line_width ;
	ctx_coin_haut_droit.strokeStyle = "white";
	ctx_coin_haut_droit.fill();
	ctx_coin_haut_droit.stroke();

	ctx_coin_haut_droit.closePath();
	div_header.appendChild(canvas_coin_haut_droit);
} 
 

 

//form du coin bas gauche
var canvas_coin_bas_gauche = document.createElement('canvas' );
var div_footer = document.getElementById("footer");  
canvas_coin_bas_gauche.id     = "coin-bas-gauche";

canvas_coin_bas_gauche.height =hauteur_header_temp ; 
canvas_coin_bas_gauche.style.zIndex   = 2;

var ctx_coin_bas_gauche = canvas_coin_bas_gauche.getContext("2d");

if (canvas_coin_bas_gauche.getContext) {
	 
	ctx_coin_bas_gauche.beginPath();
	ctx_coin_bas_gauche.fillStyle = "#9FCBE8";

	ctx_coin_bas_gauche.arc(0, hauteur_header_temp, hauteur_header_temp*0.7, Math.PI ,  Math.PI  * 2);
	
	ctx_coin_bas_gauche.shadowBlur = 30;
	ctx_coin_bas_gauche.shadowColor = "#9FCBE8";
	ctx_coin_bas_gauche.lineWidth = the_line_width;
	ctx_coin_bas_gauche.strokeStyle = "white";
	ctx_coin_bas_gauche.fill();
	ctx_coin_bas_gauche.stroke();

	ctx_coin_bas_gauche.closePath();
	div_footer.appendChild(canvas_coin_bas_gauche);
}


//form du coin bas droit

var canvas_coin_bas_droit = document.createElement('canvas' );
var div_footer = document.getElementById("footer");  
canvas_coin_bas_droit.id     = "coin-bas-droit";

canvas_coin_bas_droit.height =hauteur_header_temp ;

canvas_coin_bas_droit.style.zIndex   = 2;

var ctx_coin_bas_droit = canvas_coin_bas_droit.getContext("2d");

if (canvas_coin_bas_droit.getContext) {
	 
	ctx_coin_bas_droit.beginPath();
	ctx_coin_bas_droit.fillStyle = "#9FCBE8";
	ctx_coin_bas_droit.arc(canvas_coin_bas_droit.width , hauteur_header_temp, hauteur_header_temp*0.7, Math.PI *0.5, Math.PI *1.5);	
	
	ctx_coin_bas_droit.shadowBlur = 30;
	ctx_coin_bas_droit.shadowColor = "#9FCBE8";
	ctx_coin_bas_droit.lineWidth = the_line_width ;
	ctx_coin_bas_droit.strokeStyle = "white";
	ctx_coin_bas_droit.fill();
	ctx_coin_bas_droit.stroke();

	ctx_coin_bas_droit.closePath();
	div_footer.appendChild(canvas_coin_bas_droit);
}
  
    	 


  