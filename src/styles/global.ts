import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    --color-background: #FFFFFF;
	  --color-text: #000000;
    --color-white: #ffffff;
    --color-blue-700: #2F69AC;
    --color-blue-500:#6facf3;
    --color-blue-400: #B4D0F0;
    --color-blue-300: #E3EEFB;
    --color-green-500: #9ED79C;
    --color-green-300: #DAF3DA;
    --color-gray-100: #F8F9FA;
    --color-gray-300: #868E96;
    --color-gray-500: #343B41;
    --color-gray-600:#212529;
    --color-gray-700:#121214;
    --color-red: #ed4337;
  }
  
  * {
    margin:0;
    padding: 0;
    outline:0;
    box-sizing: border-box;
    color: var(--color-text);
	font-family: "Nunito";

  }

  body {
    background-color: var(--color-background);
    -webkit-font-smoothing: antialiased;
    overflow-y: auto;
    width: 100vw;
    height: 100vh;
  }

  button {
    cursor: pointer;
    border: 0;
    background-color: transparent;
  }
  input{
    border: 0;
  }
  /* width */
  ::-webkit-scrollbar {
    width: 10px;
  }
  /* Track */
  ::-webkit-scrollbar-track {
    margin: 1rem;
    border-radius: 1.6rem;
  }
  /* Handle */
  ::-webkit-scrollbar-thumb {
    border-radius: 1.6rem;
  }
  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
  }
  ul{
    list-style: none;
  }
`;
