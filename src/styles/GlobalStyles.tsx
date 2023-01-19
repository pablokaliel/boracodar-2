import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *{
      margin:0;
      padding:0;
      box-sizing:border-box;

      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
  }

  html,body,#root{
      width:100%;
      height: 100%;
  }

  html{
     background-color:#D9CDF7;
     font-family: sans-serif;
   
  }
  
`;
