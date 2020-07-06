import { createGlobalStyle } from 'styled-components';

import 'react-perfect-scrollbar/dist/css/styles.css';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

  *{
    box-sizing: border-box;
    padding:0;
    margin:0;
    outline:0;
  }

  *:focus{
    outline:0;
  }

  body, html, #root{
    height:100%;
  }

  body, input, button{
    font: 14px 'Roboto',sans-serif;
  }

  a{
    text-decoration:none
  }

  ul{
    list-style:none;
  }

  button{
    cursor: pointer;
  }

`;
