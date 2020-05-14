import React from 'react'
import Career from "./Career";
import {Box} from "@material-ui/core";

export default function CareerHistory(props) {
    const careerHistory = props.data

    return (
        careerHistory.items.map(item =>
            <Box padding={1} paddingBottom={2}>
                <Career data={item} expanded={item.expanded}/>
            </Box>
        )
    );
}