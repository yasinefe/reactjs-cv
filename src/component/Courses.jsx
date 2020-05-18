import React from 'react'
import {Grid} from '@material-ui/core';

export default function Courses(props) {
    const courses = props.data

    return (
        <Grid container spacing={1}>
            {
                courses.items.map(item =>
                    <>
                        <Grid item xs={4}><b>{item.title}</b></Grid>
                        <Grid item xs={8}>{item.detail}</Grid>
                    </>
                )
            }
        </Grid>
    );
}