

// $('#carouselExampleControls').carousel({
// 	 interval: 1300 //Carousel 
// });


jQuery(window).load(function () {
	$(".loader").delay(1500).fadeOut("slow"); 
      // $(".loader").delay(1500).fadeOut("slow"); 
    $(".wrapper").toggle("fast");
});

//animaçõs scrol


// Adiciona a classe .js ao elemento HTML. Assim eu garanto que os elementos só serão escondidos caso o JavaScript esteja habilitado
var root = document.documentElement;
root.className += ' js';

// Cria a função boxTop responsável por definir a distância entre o topo to elemento e a página
function boxTop(idBox) {
	var boxOffset = $(idBox).offset().top;
	return boxOffset;
}

// Verifica se o documento está pronto
$(document).ready(function() {
	
			// target define os elementos que serão animados. Neste 	caso todos os que possuirem a classe .anime	
	var $target = $('.anime'),
			
			// animationClass define a classe que será injetada no elemento durante o scroll. É nessa classe que	definimos como a animação irá ocorrer
			animationClass = 'anime-init',
			
			// windowHeight pega a altura total da janela do browser
			windowHeight = $(window).height(),
			
			// offset é definido a partir da altura da janela, menos um quarto dessa atlura. Isso vai garantir que o browser não fique com um espaço grande em branco
			offset = windowHeight - ((windowHeight) / 8);

	// animeScroll é a função responsável por adicionar a classe animationClass ao elemento da página.
	function animeScroll() {
		
		// documentTop vai definir a distância entre o topo da página e o scroll. O valor é atualizado sempre a função animeScroll é ativada.
		var documentTop = $(document).scrollTop();
		
		// target.each serve para adicionarmos a função a cada elemento que tiver a classe do target. Assim garantimos que elementos com distâncias diferentes do topo da página, animem no momento correto
		$target.each(function() {
			
			// o if verifica se a distância entre o topo da página e o scroll é maior que a distância do elemento - o valor fo offset
			if (documentTop > boxTop(this) - offset) {
				
				// caso seja verdadeiro, ele vai adicionar a classe que está em animationClass ao elemento
				$(this).addClass(animationClass);
			} else {
				
				// caso seja falso ele vai remover a classe do elemento. Se você não quiser que a animação ocorra mais de uma vez, ou seja, quando o cliente voltar o scroll para cima os elementos continuem fixos, basta remover este else
				$(this).removeClass(animationClass);
			}
		});
	}
	
	// dispara a função animeScroll, nesse primeiro momento ele dispara para verificar se já não existe nenhum elemento na página que esteja no campo de visão do usuário
	animeScroll();
	
	// com o document.scroll vamos verificar sempre que um evento de scroll ocorrer na página
	$(document).scroll(function() {
		
		// quando o evento de scroll ocorre disparamos novamente a função animeScroll. Com um setTimeout para evetira que ela seja disparada diversas vezes
		setTimeout(function() {
			animeScroll()
		}, 150);
	});
});



function dark()
{
	// document.getElementById('navbar1').style.backgroundColor = "#272c34";
	// document.querySelector("div.nav-link").style.color = "#fff";
	if (!document.getElementById('cssId'))
	{
		var href = "";
		if (!document.getElementById('contato'))
		{
			href = 'frontend/css/bootstrap-4.3.1-dist/css/bootstrap.css';
		}
		else
		{
			href = 'css/bootstrap-4.3.1-dist/css/bootstrap.css'
		}
	    var head  = document.getElementsByTagName('head')[0];
	    var link  = document.createElement('link');
	    link.id   = 'cssId';
	    link.rel  = 'stylesheet';
	    link.type = 'text/css';
	    link.href = href;
	    head.appendChild(link);

    	if (!document.getElementById('contato'))
	    {
	    	 if (!document.getElementById('imagem_redesSociais'))
		    {
		    	var card_before_redesSociais = document.getElementById('card_before_redesSociais');
			    var img1 = document.createElement('img');
			    img1.id = "imagem_redesSociais";
			    img1.src = "frontend/img/cards/people_branco.png";
			    img1.className = "card-img-top";

			    card_before_redesSociais.insertBefore(img1, card_before_redesSociais.childNodes[0]);
			    // document.insertBefore(card_before_redesSociais, card_after_redesSociais); 
		    }
		    else
		    {
		    	document.getElementById('imagem_redesSociais').remove();
		    	var card_before_redesSociais = document.getElementById('card_before_redesSociais');
			    var img1 = document.createElement('img');
			    img1.id = "imagem_redesSociais";
			    img1.src = "frontend/img/cards/people_branco.png";
			    img1.className = "card-img-top";

			    card_before_redesSociais.insertBefore(img1, card_before_redesSociais.childNodes[0]);
		    }

		    if (!document.getElementById('imagem_empoderamento'))
		    {
		    	var card_before_empoderamento = document.getElementById('card_before_empoderamento');
			    var img2 = document.createElement('img');
			    img2.id = "imagem_empoderamento";
			    img2.src = "frontend/img/cards/fist_branco.png";
			    img2.className = "card-img-top";

			    card_before_empoderamento.insertBefore(img2, card_before_empoderamento.childNodes[0]);
		    }
		    else
		    {
		    	document.getElementById('imagem_redesSociais').remove();

		    	var card_before_empoderamento = document.getElementById('card_before_empoderamento');
			    var img2 = document.createElement('img');
			    img2.id = "imagem_empoderamento";
			    img2.src = "frontend/img/cards/fist_branco.png";
			    img2.className = "card-img-top";
			    card_before_empoderamento.insertBefore(img2, card_before_empoderamento.childNodes[0]);
		    }
	    }

	   
	    
	}
	else
	{
		document.getElementById('cssId').remove();
		var href = "";
		if (!document.getElementById('contato'))
		{
			href = 'frontend/css/bootstrap-4.3.1-dist/css/bootstrap.css';
		}
		else
		{
			href = 'css/bootstrap-4.3.1-dist/css/bootstrap.css'
		}
		var head  = document.getElementsByTagName('head')[0];
	    var link  = document.createElement('link');
	    link.id   = 'cssId';
	    link.rel  = 'stylesheet';
	    link.type = 'text/css';
	    link.href = href;
	    head.appendChild(link);


	    if (!document.getElementById('contato'))
	    {
		    if (!document.getElementById('imagem_redesSociais'))
		    {
		    	var card_before_redesSociais = document.getElementById('card_before_redesSociais');
			    var img1 = document.createElement('img');
			    img1.id = "imagem_redesSociais";
			    img1.src = "frontend/img/cards/people_branco.png";
			    img1.className = "card-img-top";
			    
			    card_before_redesSociais.insertBefore(img1, card_before_redesSociais.childNodes[0]);
		    }
		    else
		    {
		    	document.getElementById('imagem_redesSociais').remove();
		    	var card_before_redesSociais = document.getElementById('card_before_redesSociais');
			    var img1 = document.createElement('img');
			    img1.id = "imagem_redesSociais";
			    img1.src = "frontend/img/cards/people_branco.png";
			    img1.className = "card-img-top";
			    
			    card_before_redesSociais.insertBefore(img1, card_before_redesSociais.childNodes[0]);
		    }

		    if (!document.getElementById('imagem_empoderamento'))
		    {
		    	var card_before_empoderamento = document.getElementById('card_before_empoderamento');
			    var img2 = document.createElement('img');
			    img2.id = "imagem_empoderamento";
			    img2.src = "frontend/img/cards/fist_branco.png";
			    img2.className = "card-img-top";

			    card_before_empoderamento.insertBefore(img2, card_before_empoderamento.childNodes[0]);
		    }
		    else
		    {
		    	document.getElementById('imagem_empoderamento').remove();

		    	var card_before_empoderamento = document.getElementById('card_before_empoderamento');
			    var img2 = document.createElement('img');
			    img2.id = "imagem_empoderamento";
			    img2.src = "frontend/img/cards/fist_branco.png";
			    img2.className = "card-img-top";
			    card_before_empoderamento.insertBefore(img2, card_before_empoderamento.childNodes[0]);
		    }
		} //verificação do contato
	} //else do css
} //func dark


function light()
{
	if (!document.getElementById('cssId'))
	{
		var href = "";
		if (!document.getElementById('contato'))
		{
			href = 'frontend/css/bootstrap-4.3.1-dist/css/bootstrapLight.css';
		}
		else
		{
			href = 'css/bootstrap-4.3.1-dist/css/bootstrapLight.css'
		}		
	    var head  = document.getElementsByTagName('head')[0];
	    var link  = document.createElement('link');
	    link.id   = 'cssId';
	    link.rel  = 'stylesheet';
	    link.type = 'text/css';
	    link.href = href;
	    head.appendChild(link);


		if (!document.getElementById('contato'))
		{
		    if (!document.getElementById('imagem_redesSociais'))
		    {
		    	var card_before_redesSociais = document.getElementById('card_before_redesSociais');
			    var img1 = document.createElement('img');
			    img1.id = "imagem_redesSociais";
			    img1.src = "frontend/img/cards/people.png";
			    img1.className = "card-img-top";

			    card_before_redesSociais.insertBefore(img1, card_before_redesSociais.childNodes[0]);
			    // document.insertBefore(card_before_redesSociais, card_after_redesSociais); 
		    }
		    else
		    {
		    	document.getElementById('imagem_redesSociais').remove();
		    	var card_before_redesSociais = document.getElementById('card_before_redesSociais');
			    var img1 = document.createElement('img');
			    img1.id = "imagem_redesSociais";
			    img1.src = "frontend/img/cards/people.png";
			    img1.className = "card-img-top";

			    card_before_redesSociais.insertBefore(img1, card_before_redesSociais.childNodes[0]);
		    }

		    if (!document.getElementById('imagem_empoderamento'))
		    {
		    	var card_before_empoderamento = document.getElementById('card_before_empoderamento');
			    var img2 = document.createElement('img');
			    img2.id = "imagem_empoderamento";
			    img2.src = "frontend/img/cards/fist.png";
			    img2.className = "card-img-top";

			    card_before_empoderamento.insertBefore(img2, card_before_empoderamento.childNodes[0]);
		    }
		    else
		    {
		    	document.getElementById('imagem_redesSociais').remove();

		    	var card_before_empoderamento = document.getElementById('card_before_empoderamento');
			    var img2 = document.createElement('img');
			    img2.id = "imagem_empoderamento";
			    img2.src = "frontend/img/cards/fist.png";
			    img2.className = "card-img-top";
			    card_before_empoderamento.insertBefore(img2, card_before_empoderamento.childNodes[0]);
		    }	
		}    

	}

	else
	{
		document.getElementById('cssId').remove();
		var href = "";
		if (!document.getElementById('contato'))
		{
			href = 'frontend/css/bootstrap-4.3.1-dist/css/bootstrapLight.css';
		}
		else
		{
			href = 'css/bootstrap-4.3.1-dist/css/bootstrapLight.css'
		}
		var head  = document.getElementsByTagName('head')[0];
	    var link  = document.createElement('link');
	    link.id   = 'cssId';
	    link.rel  = 'stylesheet';
	    link.type = 'text/css';
	    link.href = href;
	    head.appendChild(link);

	    if (!document.getElementById('contato'))
	    {
		    if (!document.getElementById('imagem_redesSociais'))
		    {
		    	var card_before_redesSociais = document.getElementById('card_before_redesSociais');
			    var img1 = document.createElement('img');
			    img1.id = "imagem_redesSociais";
			    img1.src = "frontend/img/cards/people.png";
			    img1.className = "card-img-top";
			    
			    card_before_redesSociais.insertBefore(img1, card_before_redesSociais.childNodes[0]);
		    }
		    else
		    {
		    	document.getElementById('imagem_redesSociais').remove();
		    	var card_before_redesSociais = document.getElementById('card_before_redesSociais');
			    var img1 = document.createElement('img');
			    img1.id = "imagem_redesSociais";
			    img1.src = "frontend/img/cards/people.png";
			    img1.className = "card-img-top";
			    
			    card_before_redesSociais.insertBefore(img1, card_before_redesSociais.childNodes[0]);
		    }

		    if (!document.getElementById('imagem_empoderamento'))
		    {
		    	var card_before_empoderamento = document.getElementById('card_before_empoderamento');
			    var img2 = document.createElement('img');
			    img2.id = "imagem_empoderamento";
			    img2.src = "frontend/img/cards/fist.png";
			    img2.className = "card-img-top";

			    card_before_empoderamento.insertBefore(img2, card_before_empoderamento.childNodes[0]);
		    }
		    else
		    {
		    	document.getElementById('imagem_empoderamento').remove();

		    	var card_before_empoderamento = document.getElementById('card_before_empoderamento');
			    var img2 = document.createElement('img');
			    img2.id = "imagem_empoderamento";
			    img2.src = "frontend/img/cards/fist.png";
			    img2.className = "card-img-top";
			    card_before_empoderamento.insertBefore(img2, card_before_empoderamento.childNodes[0]);
		    }	
		}   
	}
}

if (document.getElementById('customSwitch1'))
{
	const selecionado = document.querySelector("#customSwitch1");
	selecionado.addEventListener("change", (el) => {
	  if (selecionado.checked) 
	  {
	   	light();
	  }
	  else
	  {
	  	dark();
	  }
	});

	selecionado.dispatchEvent(new Event("change"));
}
