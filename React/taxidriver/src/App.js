import React, { Component } from 'react';
import './App.css';
import $ from 'jquery';
import './script.js';


class App extends Component {
  render() {
    return (

      <div classNameName="App">

	<body>
		
			
		<div id="tasti">
			<pre>USARE I TASTI DIREZIONALI O WASD PER CONTROLLARE LA MACCHINA</pre>   
		</div>
		
		<div id="score_div">                                          
			Score: <span id="score">0</span>
		</div>

		<div id="container">										 
		
			<div id="line_1" className="line"></div>                      
			<div id="line_2" className="line"></div>
			<div id="line_3" className="line"></div>
			
			<div id="car" className="car">  
				

				<div className="f_glass"></div>
				<div className="b_glass"></div>
				<div className="f_light_l"></div>
				<div className="f_light_r"></div>
				<div className="f_tyre_l"></div>
				<div className="f_tyre_r"></div>
				<div className="b_tyre_l"></div>
				<div className="b_tyre_r"></div>
			</div>
																	  
			<div id="car_1" className="car">
				<div className="f_glass"></div>
				<div className="b_glass"></div>
				<div className="f_light_l"></div>
				<div className="f_light_r"></div>
				<div className="f_tyre_l"></div>
				<div className="f_tyre_r"></div>
				<div className="b_tyre_l"></div>
				<div className="b_tyre_r"></div>
			</div>
			
			<div id="car_2" className="car">
				<div className="f_glass"></div>
				<div className="b_glass"></div>
				<div className="f_light_l"></div>
				<div className="f_light_r"></div>
				<div className="f_tyre_l"></div>
				<div className="f_tyre_r"></div>
				<div className="b_tyre_l"></div>
				<div className="b_tyre_r"></div>
			</div>
			
			<div id="car_3" className="car">
				<div className="f_glass"></div>
				<div className="b_glass"></div>
				<div className="f_light_l"></div>
				<div className="f_light_r"></div>
				<div className="f_tyre_l"></div>
				<div className="f_tyre_r"></div>
				<div className="b_tyre_l"></div>
				<div className="b_tyre_r"></div>
			</div>
	 
				
			<div id="restart_div">
				<button id="restart">
					Game Over<br></br>
					<small className="piccolo">(Premi Invio per riprovare)</small>
				</button>
			</div>
		</div>

	</body>
		
		
		
		
		
      </div>
    );
  }
}

export default App;
