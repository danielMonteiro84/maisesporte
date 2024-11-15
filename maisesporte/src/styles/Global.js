import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

 *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  :root {
    --primary: #F7F9FC;
    --secondary: #15181C;
    --gray: #D9D9D9;
    --blue: #4766FF;
  }

  body {
    background-color: var(--primary);
    font-family: "Dosis", sans-serif;
    font-optical-sizing: auto;
    font-weight: auto;
    font-style: normal;
  }
    color: var(--secondary);
    font-size: 1.2rem;
    font-weight: 400;
  }
  ul, nav {list-style-type: none;}
  a{text-decoration: none;}
`;
