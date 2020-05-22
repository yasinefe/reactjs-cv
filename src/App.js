import React from 'react';
import {Box, Container, Typography} from '@material-ui/core';
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import {ThemeProvider} from "@material-ui/styles";
import CssBaseline from '@material-ui/core/CssBaseline';
import MainPage from "./component/MainPage";
import {grey, indigo, pink} from "@material-ui/core/colors";

const printable = createMuiTheme({
    typography: {
        h4: {
            fontWeight: "bold",
        },
        h5: {
            fontWeight: "bold",
        },
        fontSize: 10,
        htmlFontSize: 12,
    },
    palette: {
        primary: {
            main: "#000",
            contrastText: "#000"
        },
        secondary: {
            main: "#000",
        },
        text: {
            primary: "#000",
            secondary: "#000",
        },
        divider: "#000",
        background: {
            default: grey["300"]
        },
        mark: {
            color: '#ffffff',
            backgroundColor: '#ef6c00',
        }
    },
    breakpoints: {
        values: {
            md: 960,
        }
    },
});

function createTheme(color) {
    return createMuiTheme({
        typography: {
            h4: {
                fontWeight: "bold",
            },
            h5: {
                fontWeight: "bold",
            },
            fontSize: 10,
            htmlFontSize: 12,
        },
        palette: {
            primary: color,
            secondary: pink,
            text: {
                primary: color["900"],
                secondary: pink["500"],
            },
            divider: color["500"],
            background: {
                default: grey["300"]
            },
            mark: {
                color: '#ffffff',
                backgroundColor: '#ef6c00',
            }
        },
        breakpoints: {
            values: {
                md: 960,
            }
        },
    });
}

export default function App() {
    const [currentTheme, setCurrentTheme] = React.useState(createTheme(indigo));

    function changeTheme(color) {
        setCurrentTheme(color === "black" ? printable : createTheme(color));
    }

    return (
        <ThemeProvider theme={currentTheme}>
            <CssBaseline/>
            <Typography>
                <Box padding={2}>
                    <Container maxWidth="md">
                        <MainPage changeTheme={changeTheme}/>
                    </Container>
                </Box>
            </Typography>
        </ThemeProvider>
    );
}