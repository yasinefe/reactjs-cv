import React, {useEffect} from 'react'
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Avatar, Box, Divider, Grid, IconButton, Paper, TextField, Typography} from '@material-ui/core';
import {Email, GitHub, LinkedIn, Opacity, PhoneIphone} from "@material-ui/icons";
import Zoom from "@material-ui/core/Zoom";
import {indigo, deepOrange, purple, teal} from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
    avatar: {
        width: theme.spacing(14),
        height: theme.spacing(14),
    },
    icon: {
        color: theme.palette.getContrastText(theme.palette.text.primary),
    },
    header: {
        padding: theme.spacing(2),
        borderRadius: theme.spacing(1),
        backgroundColor: theme.palette.primary.main,
    },
    name: {
        color: theme.palette.getContrastText(theme.palette.text.primary),
    },
    avatarBox: {
        padding: theme.spacing(1),
    },
    search: {
        backgroundColor: theme.palette.getContrastText(theme.palette.text.primary),
        borderRadius: theme.spacing(1),
    },
    divider: {
        height: 2,
        backgroundColor: theme.palette.getContrastText(theme.palette.text.primary),
    },
    box: {
        color: theme.palette.getContrastText(theme.palette.text.primary),
        paddingLeft: theme.spacing(2),
    },
    colorBox: {
        backgroundColor: theme.palette.getContrastText(theme.palette.text.primary),
        borderRadius: 8,
        textAlign: "center",
    }
}));

export default function Header(props) {
    const classes = useStyles();
    const header = props.data

    const [expanded, setExpanded] = React.useState(true);
    const [value, setValue] = React.useState("email");
    const [link, setLink] = React.useState(header["email"]);

    const handleExpandClick = (button) => {
        if (value === button) {
            setExpanded(!expanded);
        } else {
            setExpanded(true);
        }
        setValue(button);

    };

    useEffect(() => {
            setLink(header[value]);
        }, [value]
    );

    return (
        <Paper className={classes.header}>
            <Grid container>
                <Grid item xs={6}>
                    <Grid container spacing={1}>
                        <Grid item xs={4}>
                            <Box className={classes.avatarBox}>
                                <Avatar alt={header.name} src="/static/images/yasin-efe.jpg"
                                        className={classes.avatar}/>
                            </Box>
                        </Grid>
                        <Grid item xs={8} className={classes.name}>
                            <Typography variant="h4">{header.name}</Typography>
                            <Typography variant="h5">{header.title}</Typography>
                            <Typography variant="h6">{header.type}</Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={6}>
                    <Grid container>
                        <Grid item xs={6}>
                            <IconButton onClick={() => handleExpandClick("email")}>
                                <Box>
                                    <Email className={classes.icon} fontSize={"default"}/>
                                    <Zoom in={value === "email" && expanded}><Divider
                                        className={classes.divider}/></Zoom>
                                </Box>
                            </IconButton>
                            <IconButton onClick={() => handleExpandClick("mobile")}>
                                <Box>
                                    <PhoneIphone className={classes.icon} fontSize={"default"}/>
                                    <Zoom in={value === "mobile" && expanded}><Divider
                                        className={classes.divider}/></Zoom>
                                </Box>
                            </IconButton>
                            <IconButton onClick={() => handleExpandClick("linkedin")}>
                                <Box>
                                    <LinkedIn className={classes.icon} fontSize={"default"}/>
                                    <Zoom in={value === "linkedin" && expanded}><Divider
                                        className={classes.divider}/></Zoom>
                                </Box>
                            </IconButton>
                            <IconButton onClick={() => handleExpandClick("github")}>
                                <Box>
                                    <GitHub className={classes.icon} fontSize={"default"}/>
                                    <Zoom in={value === "github" && expanded}><Divider
                                        className={classes.divider}/></Zoom>
                                </Box>
                            </IconButton>
                        </Grid>
                        <Grid item xs={6}>
                            <TextField size="small" name="search" label="Search a keyword" variant="filled" fullWidth
                                       className={classes.search} onChange={props.onChange}/>
                        </Grid>
                        <Grid item xs={12}>
                            <Zoom in={expanded}>
                                <Box className={classes.box}>{link}</Box>
                            </Zoom>
                        </Grid>
                        <Grid item xs={6}>&nbsp;</Grid>
                        <Grid item xs={6}>
                            <Box className={classes.colorBox}>
                                <Box display="inline">
                                    <IconButton onClick={() => props.changeTheme(indigo)}>
                                        <Opacity style={{color: indigo["500"]}} fontSize={"small"}/>
                                    </IconButton>
                                </Box>
                                <Box display="inline">
                                    <IconButton onClick={() => props.changeTheme(purple)}>
                                        <Opacity style={{color: purple["500"]}} fontSize={"small"}/>
                                    </IconButton>
                                </Box>
                                <Box display="inline">
                                    <IconButton onClick={() => props.changeTheme(teal)}>
                                        <Opacity style={{color: teal["500"]}} fontSize={"small"}/>
                                    </IconButton>
                                </Box>
                                <Box display="inline">
                                    <IconButton onClick={() => props.changeTheme(deepOrange)}>
                                        <Opacity style={{color: deepOrange["500"]}} fontSize={"small"}/>
                                    </IconButton>
                                </Box>
                                <Box display="inline">
                                    <IconButton onClick={() => props.changeTheme("black")}>
                                        <Opacity style={{color: "#000"}} fontSize={"small"}/>
                                    </IconButton>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Paper>
    );
}