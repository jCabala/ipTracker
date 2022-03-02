import { createGlobalStyle } from 'styled-components';

export const Global = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,800;1,200&family=Roboto:wght@100;700&family=Rubik:wght@400;500;700&display=swap');
    
    *{
        font-family: 'Rubik', sans-serif;
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        text-decoration: none;
    }

    body{
        overflow-x: hidden;
    }
`;
