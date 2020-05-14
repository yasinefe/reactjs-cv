import React from 'react';
import {Container, Box, Typography} from '@material-ui/core';
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import {ThemeProvider} from "@material-ui/styles";
import CssBaseline from '@material-ui/core/CssBaseline';
import MainPage from "./component/MainPage";
import {grey, indigo} from "@material-ui/core/colors";

const theme = createMuiTheme({
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
        text: {
            primary: indigo["500"],
        },
        divider: indigo["500"],
        background: {
            default: grey["300"]
        },
    },
});

export default function App() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <Typography>
                <Box padding={2}>
                    <Container maxWidth="md">
                        <MainPage/>
                    </Container>
                </Box>
            </Typography>
        </ThemeProvider>
    );
}