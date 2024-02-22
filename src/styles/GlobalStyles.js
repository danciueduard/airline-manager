import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`



:root{





body {
  font-size: 1.7rem; 
  padding: 0;
  margin: 0;
  font-family: 'Nova Square', sans-serif;
}

button {
  font-family: 'Nova Square', sans-serif;
}


// HIDE SCROLLBAR
body::-webkit-scrollbar {
  display: none;
}

& {

--initial-width:100vw;
--margin-top-fix: 8rem;

--primary-color: #334155;
--secondary-color: #fb923c;
--background-color:#94a3b8


--color-orange-600:#ea580c;

--shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.04);
--shadow-md: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.06);
--shadow-lg: 0 2rem 2.5rem rgba(0, 0, 0, 0.12);



--border-radius-tiny: 3px;
--border-radius-sm: 5px;
--border-radius-md: 7px;
--border-radius-lg: 9px;

--image-grayscale: 0;
--image-opacity: 100%;
 }



  
  }
  

li {
  list-style: none;
}

a{
  text-decoration: none;
}

p{
  margin: 0;
}

`;

export default GlobalStyles;
