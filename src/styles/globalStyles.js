import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
 ${reset}
 * {
   box-sizing:border-box;
   outline:none;
   border:none;
 }
 body {
 width: 100%;
 background: #fafafa;
}

button {
  border: none;
  cursor: pointer;
  outline: none;
}
`;

export default GlobalStyles;
