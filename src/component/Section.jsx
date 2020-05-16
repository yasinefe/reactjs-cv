import React, {useEffect} from 'react'
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Card, CardContent, CardHeader, Collapse, Divider, IconButton} from '@material-ui/core';
import {ExpandMore} from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
    card: {
        padding: theme.spacing(1),
        borderRadius: theme.spacing(1),
    },
    expand: {
        transform: 'rotate(0deg)',
        transition: theme.transitions.create('transform', {
            duration: 500,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
        transition: theme.transitions.create('transform', {
            duration: 500,
        }),
    },
    icon: {
        color: theme.palette.primary.main,
    },
    divider: {
        height: 2
    },
}));

export default function Section(props) {
    const classes = useStyles();
    const title = props.title

    const [expanded, setExpanded] = React.useState(props.expanded);
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    useEffect(() => {
        setExpanded(props.expanded);
    }, [props]);

    return (
        <Card className={classes.card}>
            <CardHeader
                title={title}
                action={
                    <IconButton className={expanded ? classes.expandOpen : classes.expand} onClick={handleExpandClick}>
                        <ExpandMore className={classes.icon}/>
                    </IconButton>
                }
            />
            <Collapse in={expanded}>
                <Divider className={classes.divider}/>
                <CardContent>
                    {props.children}
                </CardContent>
            </Collapse>
        </Card>
    );
}