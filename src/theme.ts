import { createTheme, responsiveFontSizes } from "@mui/material";

let theme = createTheme({
    palette: {
        primary: {
            main: 'rgb(10, 10, 10)', //Preto
        },
        secondary: {
            main: '#FFFFFF',
        },
    },
    typography: {
        fontFamily: [
                 
            // '"Helvetica Neue"',
            // '-apple-system',
               'Saira',
            // 'BlinkMacSystemFont',
            // '"Segoe UI"',
            // 'Roboto',
            // '"Helvetica Neue"',
            // 'Arial',
            // 'sans-serif',
            // '"Apple Color Emoji"',
            // '"Segoe UI Emoji"',
            // '"Segoe UI Symbol"',
        ].join(','),
    }
});

theme = responsiveFontSizes(theme);

export default theme;

// #05080D - PRETO
// #112E40 - AZUL ESCURO 
// #7EA6BF - AZUL CLARO
// #3F768C - AZUL MEDIA
// #F2F2F2 - BRANCO