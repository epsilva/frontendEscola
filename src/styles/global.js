import { createGlobalStyle } from "styled-components";

// import background from '../assets/images/background.svg'
// import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
        height: 100%;
    }

    body {
        -webkit-font-smothing: antialiazed;
    }

    body, input, button {
        font: 14px Roboto, sans-serif;
    }

    #root {
        margin: 0 auto;
    }

    button {
        cursor: pointer;
    }
`;
