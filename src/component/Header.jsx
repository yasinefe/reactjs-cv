import React, {useEffect} from 'react'
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Avatar, Box, Divider, Grid, Paper, TextField, Typography} from '@material-ui/core';
import {Email, GitHub, LinkedIn, PhoneIphone} from "@material-ui/icons";
import {grey, indigo} from "@material-ui/core/colors";
import IconButton from "@material-ui/core/IconButton";
import Zoom from "@material-ui/core/Zoom";

const useStyles = makeStyles((theme) => ({
    avatar: {
        width: theme.spacing(14),
        height: theme.spacing(14),
    },
    icon: {
        color: indigo["100"],
    },
    header: {
        padding: theme.spacing(2),
        borderRadius: theme.spacing(1),
        backgroundColor: indigo["500"],
        color: indigo["100"],
    },
    name: {
        color: indigo["50"],
    },
    avatarBox: {
        padding: theme.spacing(1),
    },
    search: {
        backgroundColor: grey["50"],
        borderRadius: theme.spacing(1),
    },
    divider: {
        height: 2,
        backgroundColor: grey["50"],
        borderColor: grey["50"],
    },
    box: {
        color: indigo["50"],
        paddingLeft: theme.spacing(2),
        fontSize: "1.5rem",
    },
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
                    <Grid container spacing={1}>
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
                    </Grid>
                </Grid>
            </Grid>
        </Paper>
    );
}