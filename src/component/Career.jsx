import React, {useEffect} from 'react'
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Box, Collapse, Divider, Grid, IconButton} from '@material-ui/core';
import {ExpandMore} from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
    root: {
        alignItems: "center",
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
        textAlign: "end",
        color: theme.palette.primary.main,
    },
    divider: {
        height: 1,
    },
    company: {
        fontWeight: "bold",
        color: theme.palette.primary.dark,
        fontSize: "1.5em",
    },
    companyOther: {
        fontWeight: "bold",
        color: theme.palette.primary.dark,
        fontSize: "1.1em",
    },
    period: {
        color: theme.palette.primary.light,
    },
    title: {
        textAlign: "end",
    },
    iconContainer: {
        textAlign: "end",
    },
}));

export default function Career(props) {
    const classes = useStyles();
    const career = props.data

    const [expanded, setExpanded] = React.useState(props.expanded);
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    useEffect(() => {
        setExpanded(props.expanded);
    }, [props]);

    return (
        <Grid container spacing={2} className={classes.root}>
            <Grid item xs={4} className={career.items ? classes.company : classes.companyOther}>{career.company}</Grid>
            <Grid item xs={3} className={classes.period}>{career.period}</Grid>
            <Grid item xs={5} className={classes.title}>
                <Box padding={1} display="inline">{career.title}</Box>
                <IconButton size={"small"} className={expanded ? classes.expandOpen : classes.expand}
                            onClick={handleExpandClick}>
                    {career.items && <ExpandMore className={classes.icon}/>}
                </IconButton>
            </Grid>
            {career.items &&
            <Grid item xs={12}>
                <Divider className={classes.divider}/>
            </Grid>
            }
            <Collapse in={expanded}>
                <Grid item xs={12}>
                    {career.items && career.items.map(item => <li dangerouslySetInnerHTML={{__html: item}}/>)}
                </Grid>
                {career.projectItems &&
                <Grid item xs={12}>
                    <h4>{career.projectTitle}</h4>
                    {career.projectItems.map(item => <li dangerouslySetInnerHTML={{__html: item}}/>)}
                </Grid>
                }
            </Collapse>
        </Grid>
    );
}