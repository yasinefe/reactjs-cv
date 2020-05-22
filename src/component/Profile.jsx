import React from 'react'
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Box} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    type: {
        textAlign: "justify",
        textIndent: theme.spacing(4),
        paddingBottom: theme.spacing(1),
    }
}));

export default function Profile(props) {
    const classes = useStyles();
    const profile = props.data

    return (
        profile.items.map(item =>
            <Box className={classes.type} dangerouslySetInnerHTML={{__html: item}}/>
        )
    );
}