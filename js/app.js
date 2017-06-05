/*
 * Archivo principal de JS
 */
 //funcion modal para portafolio
 function modalPortafolio(){
 	var imags = Array.from(document.getElementsByClassName("imgs"));
 	var divSoporte = document.getElementById("modal");
 	var divi, title, titulo, parrafo, textoParrafo, x, ima;

 	imags.forEach(function(cv){
 		cv.addEventListener("click", function(){
 			//div
 			divi = document.createElement("div");
 			divi.classList.add("contenedor-fotos");
 			//titulo
			titulo = document.createElement("p");
			titulo.classList.add("titulo-modal");
			title = document.createTextNode("Project title");
			titulo.appendChild(title);
			divi.appendChild(titulo);
			//aparece la imagen
			divi.innerHTML += cv.innerHTML;
			//parrafo
			parrafo = document.createElement("p");
			parrafo.classList.add("parrafo-modal"); 
			textoParrafo = document.createTextNode("Use this area of the page to describe your project. The icon above is part of a free icon set by Flat Icons. On their website, you can download their free set with 16 icons, or you can purchase the entire set with 146 icons for only $12!");
			parrafo.appendChild(textoParrafo);
			divi.appendChild(parrafo);
 			//div creado a div modal que está en html.
			divSoporte.appendChild(divi);
 			divSoporte.classList.remove("hiden");
 			//se crea x
 			x = document.createElement("div");
			x.classList.add("cerrar");
			ima = document.createElement("img");
			ima.setAttribute("src", "http://estaticos.lab.eldiario.es/estaticos/close.png");
			ima.setAttribute("width", "50");
			x.appendChild(ima);
			modal.appendChild(x);
			x.addEventListener("click",function(){
				modal.classList.add("hiden");
			});


 		});
 	});
 }
 modalPortafolio();
 