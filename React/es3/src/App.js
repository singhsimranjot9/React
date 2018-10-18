// External Css Stylesheet 

/*
import React from 'react';
import './App.css';

const App = () => (
  <div className="div_ext">
    <p className="p_ext">Get started with External CSS stylesheet</p>
  </div>
);

export default App;
*/


//Inline Css Styling 

 /*
import React from 'react';


const divStyle = {
  margin:'10%',
  width: '80%',
  border: '1px solid red'
};
const pStyle = {
  padding: '10px',
  color:'red',
};

const App = () => (
  <div style={divStyle}>
    <p style={pStyle}>Get started with Inline style</p>
  </div>
);

export default App;
*/
 
 
 
 
//Modules Css Styling

/*
import React from 'react';
import styles from './App.css';

const App = () => (
  <div className={styles.container}>
    <p className={styles.content}>Get started with CSS Modules style</p>
  </div>
);

export default App;
*/
 
 //Styled-components
 
 
import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
	margin-left:10%;
	margin-right:10%;
	width:80%;
	border: 1px solid red;
`;

const p = styled.p`
	padding: 10px;
	color:red;
	text-align:center;
`;

const OutsetBox = () => (
  <Div>
    <p>Get started with Css styled-components</p>
  </Div>
);

export default OutsetBox;

