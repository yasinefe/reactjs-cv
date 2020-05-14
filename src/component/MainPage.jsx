import React from 'react'
import {Grid} from '@material-ui/core';
import CvDataService from "../service/CvDataService";
import Header from "./Header";
import Profile from "./Profile";
import TechnicalSkills from "./TechnicalSkills";
import makeStyles from "@material-ui/core/styles/makeStyles";
import CareerHistory from "./CareerHistory";
import Section from "./Section";

const useStyles = makeStyles((theme) => ({
    root: {
        '& b': {
            color: theme.palette.secondary.main,
        },
        '& mark': {
            color: '#ffffff',
            backgroundColor: '#ef6c00',
        },
    },
}));

export default function MainPage() {
    const classes = useStyles()
    const [cv, setCv] = React.useState(CvDataService.get());

    function filter(event) {
        setCv(CvDataService.find(event.target.value));
    }

    return (
        <Grid container spacing={2} className={classes.root}>
            <Grid item xs={12}>
                <Header data={cv.header} onChange={filter}/>
            </Grid>
            <Grid item xs={12}>
                <Section title={cv.profile.title} expanded={cv.profile.expanded}>
                    <Profile data={cv.profile}/>
                </Section>
            </Grid>
            <Grid item xs={12}>
                <Section title={cv.technicalSkills.title} expanded={cv.technicalSkills.expanded}>
                    <TechnicalSkills data={cv.technicalSkills}/>
                </Section>
            </Grid>
            <Grid item xs={12}>
                <Section title={cv.careerHistory.title} expanded={cv.careerHistory.expanded}>
                    <CareerHistory data={cv.careerHistory}/>
                </Section>
            </Grid>
        </Grid>
    )
}