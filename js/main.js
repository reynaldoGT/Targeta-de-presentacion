//accedemos a nuestro documento con esta linea
$(document).ready(function() {
    var banner = {
        padre: $('#banner'),
        numeroSlides: $('#banner').children('.slide').length,
        posicion: 1
    }
	var info = {
        padre: $('#info'),
        numeroSlides: $('#info').children('.slide').length,
        posicion: 1
    }
    banner.padre.children('.slide').first().css({
        'left': 0

    });
	info.padre.children('.slide').first().css({
        'left': 0

    });
	/*	con esta funcion se calcula el tamaño del elemebnto  */
    var altoBanner = function() {
        var alto = banner.padre.children('.slide').outerHeight();
        banner.padre.css({
            //cambia el codigo css para transformarlo
            'height': alto + 'px'
        })
        console.log(alto);
    }

	var altoinfo = function() {
        var alto = info.padre.children('.active').outerHeight();
        info.padre.animate({
            //cambia el codigo css para transformarlo
            'height': alto + 'px'
        });
	}

	var altoContenedor = function() {
		var altoVentana = $(window).height();

		if(altoVentana <=$('#contenedor').outerHeight()+200) {
		$('#contenedor').css({
			'height':''
		});
		} else {
			$('#contenedor').css({
				'height':altoVentana+'px'
		  });
		 }
	 }

    altoBanner();
	altoinfo();
	altoContenedor();


    $(window).resize(function() {
        // esta funtcion solo se ejecuta cuando se cambia el tamaño de la ventana
        altoBanner();
		altoinfo();
		altoContenedor();
    });
	$('#info').children('.slide').each(function(){
	  $('#botones').append('<span>')
	});

	$('#botones').children('span').first().addClass('active');
    /*============== Esta bien esta parte no mover el codigo para nada ===========*/
    /*Codificando el los botones para hacer el slider*/
    /*=================Banner===================
	==================Boton Siguiente*/
    $('#banner-next').on('click', function(e) {
        e.preventDefault();
        if (banner.posicion < banner.numeroSlides) {
            banner.padre.children().not('.active').css({
                'left': '100%'
            });
            $('#banner .active').removeClass('active').next().addClass('active').animate({
                'left': '0'
            });
            $('#banner .active').prev().animate({
                'left': '-100%'
            });
            banner.posicion = banner.posicion + 1;
        } else {
            $('#banner .active').animate({
                'left': '-100%'
            });
            //todo va a bien hasta este punto
            banner.padre.children().not('.active').css({
                'left': '100%'
            });
            $('#banner .active').removeClass('active');
            banner.padre.children('.slide').first().addClass('active').animate({
                'left': '0'
            });

            banner.posicion = 1;
            /*Todo esta bien no modificar nada y analizar con calma cada elemento*/
        }
    });

    //Boton anterior
    $('#banner-prev').on('click', function(e) {
        e.preventDefault();
        if (banner.posicion > 1) {

            banner.padre.children().not('.active').css({
                'left': '-100%'
            });
            $('#banner .active').animate({
                'left': '100%'
            });
			$('#banner .active').removeClass('active').prev().addClass('active').animate({
				'left':0
			});
			banner.posicion=banner.posicion - 1;
        }else{
			banner.padre.children().not('.active').css({
				'left':'-100%'
			});
			$('#banner .active').animate({
				'left':'100%'
			});
			$('#banner .active').removeClass('active');
			banner.padre.children().last().addClass('active').animate({
				 'left':0
			});
			banner.posicion=banner.numeroSlides;
		}
    });
	/*	======================================= */

	$('#info-next').on('click', function(e) {
        e.preventDefault();
        if (info.posicion < info.numeroSlides) {
            info.padre.children().not('.active').css({
                'left': '100%'
            });
            $('#info .active').removeClass('active').next().addClass('active').animate({
                'left': '0'
            });
            $('#info .active').prev().animate({
                'left': '-100%'
            });
			$('#botones').children('.active').removeClass('active').next().addClass('active');
            info.posicion = info.posicion + 1;
        } else {
            $('#info .active').animate({
                'left': '-100%'
            });
            //todo va a bien hasta este punto
            info.padre.children().not('.active').css({
                'left': '100%'
            });
            $('#banner .active').removeClass('active');
            info.padre.children('.slide').first().addClass('active').animate({
                'left': '0'
            });
			$('#botones').children('active').removeClass('active');
			$('#botones').children('span').first().addClass('active');


            info.posicion = 1;
            /*Todo esta bien no modificar nada y analizar con calma cada elemento*/
        }
		altoinfo();

    });

    //Boton anterior
    $('#info-prev').on('click', function(e) {
        e.preventDefault();
        if (info.posicion > 1) {

            info.padre.children().not('.active').css({
                'left': '-100%'
            });
            $('#info .active').animate({
                'left': '100%'
            });
			$('#info .active').removeClass('active').prev().addClass('active').animate({
				'left':0
			});
			$('#botones').children('.active').removeClass('active').prev().addClass('active');
				info.posicion=info.posicion - 1;
        }else{
			info.padre.children().not('.active').css({
				'left':'-100%'
			});
			$('#info .active').animate({
				'left':'100%'
			});
			$('#info .active').removeClass('active');
			info.padre.children().last().addClass('active').animate({
				 'left':0
			});
			$('#botones').children('.active').removeClass('active');
			$('#botones').children('span').last().addClass('active');

			info.posicion=info.numeroSlides;
		}
		altoinfo();

    });
	/*	======================================= */
});
