let menuVisible = false;
//funcion que oculta o muestra menu
function mostrarOcultarMenu(){
	if (menuVisible) {
		document.getElementById("nav").classList ="";
		menuVisible = false;
	}else{
		document.getElementById("nav").classList ="responsive";
		menuVisible = true;
	}
}

function seleccionar(){
	//oculto el menu una vez que selecciono una opcion
	document.getElementById("nav").classList ="";
	menuVisible = false;
}

//funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
	var skills = document.getElementById("skills");
	var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
	if (distancia_skills >= 300) {
		let habilidades = document.getElementsByClassName("progreso");
		habilidades[0].classList.add("boostrap");
		habilidades[1].classList.add("htmlcss");
		habilidades[2].classList.add("python");
		habilidades[3].classList.add("wordpress");
		habilidades[4].classList.add("sql");
		habilidades[5].classList.add("comunicacion");
		habilidades[6].classList.add("trabajo");
		habilidades[7].classList.add("creatividad");
		habilidades[8].classList.add("dedicacion");
	}
}
//detecto el strolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
	efectoHabilidades();
}

document.getElementById('btn-descargar').addEventListener('click', function() {
    var link = document.createElement('a');
    link.href = 'https://drive.google.com/file/d/14vFB5D_YM0U7wYZ5-R8_ygGB_g_avHEQ/view?usp=sharing';
    link.download = 'Andrea_Aguirre_Ruiz_CV.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
