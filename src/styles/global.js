import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Blinker:wght@100;200;300;400;600;700;800;900&display=swap');

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
  

  #main {
    /* background: linear-gradient(180deg, #21c25e, #1ce267); */
    color: #000;
    background-color: #1E1E1E;
    font-family: 'Roboto', sans-serif;
    overflow-x: hidden;
    overflow-y: auto;
    height: 100vh;
  }

  body{
    overflow: hidden;
  }
`;
