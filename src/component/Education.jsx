import React from 'react'
import {Grid} from '@material-ui/core';

export default function Education(props) {
    const education = props.data

    return (
        <Grid container spacing={2}>
            {
                education.items.map(item =>
                    <>
                        <Grid item xs={4} style={{fontSize: "1.2rem"}}>{item.title}</Grid>
                        <Grid item xs={8} style={{alignSelf: "center"}}>{item.detail}</Grid>
                    </>
                )
            }
        </Grid>
    );
}