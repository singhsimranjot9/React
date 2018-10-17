const $ = window.$;
$(function() {

    var animazione;

    //creo gli oggetti del Dom
    var container = $('#container');
    var car = $('#car');
    var car_1 = $('#car_1');
    var car_2 = $('#car_2');
    var car_3 = $('#car_3');
    var line_1 = $('#line_1');
    var line_2 = $('#line_2');
    var line_3 = $('#line_3');
    var restart_div = $('#restart_div');
    var restart_btn = $('#restart');
    var score = $('#score');

    //variabili di supporto
    var container_left = parseInt(container.css('left'));   //Return string 35%
    var container_width = parseInt(container.width());
    var container_height = parseInt(container.height());    
    var car_width = parseInt(car.width());
    var car_height = parseInt(car.height());

    var game_over = false;

    var score_cont = 1;

    var speed = 2;
    var line_speed = 5;

    var move_right = false;
    var move_left = false; 
    var move_up = false;
    var move_down = false;

    /* ------------------------------codice di gioco------------------------------------------- */

    /*movimenti delle macchine*/                                                           //Quando si tiene premuta la freccia si attivano le 
    $(document).on('keydown', function(e) {                                                //funzioni right,left,up,down
        if (game_over === false) {														   //che continuano finche' non avviene il keyup o game over
            var key = e.keyCode;
            if ((key === 37 || key === 65) && move_left === false) {
                move_left = requestAnimationFrame(left);                              //requestAnimationFrame--> al posto di set intervall
            } else if ((key === 39 || key === 68) && move_right === false) {
                move_right = requestAnimationFrame(right);
            } else if ((key === 38 || key === 87) && move_up === false) {
                move_up = requestAnimationFrame(up);
            } else if ((key === 40 || key === 83) && move_down === false) {
                move_down = requestAnimationFrame(down);
            }
        }
    });

    $(document).on('keyup', function(e) {                                                  //Quando si lascia la freccia viene 
        if (game_over === false) {                        								   //interrotto il movimento della macchina
            var key = e.keyCode;
            if (key === 37 || key === 65) {
                cancelAnimationFrame(move_left);
                move_left = false;
            } else if (key === 39 || key === 68) {
                cancelAnimationFrame(move_right);
                move_right = false;
            } else if (key === 38 || key === 87) {
                cancelAnimationFrame(move_up);
                move_up = false;
            } else if (key === 40 || key === 83) {
                cancelAnimationFrame(move_down);
                move_down = false;
            }
        }
    });
																				
																				
																				           //funzioni per il movimento delle macchine nelle 4 
																				           //direzioni che vanno ad agire direttamente sul css 
																				           //cambiano posizione e facendo muovere le macchine
																				
																				
    function left() {                                                                  
        if (game_over === false && parseInt(car.css('left')) > 0) {                   //Controllo che la macchina non esca fuori dal conteiner   
            car.css('left', parseInt(car.css('left')) - 5);                           //del gioco
            move_left = requestAnimationFrame(left);
        }
    }

    function right() {
        if (game_over === false && parseInt(car.css('left')) < container_width - car_width) {
            car.css('left', parseInt(car.css('left')) + 5);
            move_right = requestAnimationFrame(right);
        }
    }

    function up() {
        if (game_over === false && parseInt(car.css('top')) > 0) {
            car.css('top', parseInt(car.css('top')) - 3);
            move_up = requestAnimationFrame(up);
        }
    }

    function down() {
        if (game_over === false && parseInt(car.css('top')) < container_height - car_height) {
            car.css('top', parseInt(car.css('top')) + 5);
            move_down = requestAnimationFrame(down);
        }
    }

	
	                                                                                       //Funzione in loop fino a quando non avviene una collisione
	
    /*macchine da schivare e linea della strada*/                                     
    animazione = requestAnimationFrame(repeat);
              //MAIN FUNCTION
    function repeat() {                                                               //Controllo avvenuta collizione con una delle 3 macchine
        if (collisione(car, car_1) || collisione(car, car_2) || collisione(car, car_3)) {
            stop_the_game();
            return;
        }

        score_cont++;                                                                 //Aumento contatore dello score

        if (score_cont % 20 == 0) {
            score.text(parseInt(score.text()) + 1);
        }
        if (score_cont % 200 == 0) {                                                  //Ad ogni +10 score aumenta la velocita 
            speed++;
            line_speed++;
        }

        car_down(car_1);
        car_down(car_2);
        car_down(car_3);

        line_down(line_1);
        line_down(line_2);
        line_down(line_3);

		
        animazione = requestAnimationFrame(repeat);
    }
                                                                                           //Funzione che stampa random le macchine de schivare
    function car_down(car) {                                       						   //e le linee della strada
        var car_current_top = parseInt(car.css('top'));  //Return -100px -200px -350px
        if (car_current_top > container_height) {
            car_current_top = -200;
            var car_left = parseInt(Math.random() * (container_width - car_width));
            car.css('left', car_left);
        }
        car.css('top', car_current_top + speed);                                      //Le macchine scendono sempre piu velocemente 
    }																			      //all'aumentare dello score		

    function line_down(line) {
        var line_current_top = parseInt(line.css('top'));
        if (line_current_top > container_height) {
            line_current_top = -300;
        }
        line.css('top', line_current_top + line_speed);
    }

    function stop_the_game() {                                                             //Quando avviene una collisione si attiva la funzione
        game_over = true;																   //che interrompe tutte le animazioni e fa apparire		
        cancelAnimationFrame(animazione);												   //il bottone restart			
        cancelAnimationFrame(move_right);
        cancelAnimationFrame(move_left);
        cancelAnimationFrame(move_up);
        cancelAnimationFrame(move_down);
        restart_div.slideDown();
        restart_btn.focus();//Si puo attivare da tastiera(invio o spazio)
		
		
		restart_btn.click(function() {                                                    //Bottone che riavvia il gioco
			window.location.reload();       // ricarica pagina(f5)
		});
}

	/*collisioni con le macchine*/
	
    function collisione($div1, $div2) {
        var x1 = $div1.offset().left; 
        var y1 = $div1.offset().top;
        var h1 = $div1.outerHeight(true);
        var w1 = $div1.outerWidth(true);
        var b1 = y1 + h1;
        var r1 = x1 + w1;
		
        var x2 = $div2.offset().left;
        var y2 = $div2.offset().top;
        var h2 = $div2.outerHeight(true);
        var w2 = $div2.outerWidth(true);
        var b2 = y2 + h2;
        var r2 = x2 + w2;

        if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) return false;
        return true;
    }
});