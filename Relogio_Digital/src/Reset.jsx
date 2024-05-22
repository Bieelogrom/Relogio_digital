import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap');

    *{
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        font-family: "Space Mono", monospace;
        background: #1E1E24;
    }

    html,
    body{
        width: 100%;
        height: 100%;
    }

    #root{
        width: 100%;
        height: 100%;
    }
`