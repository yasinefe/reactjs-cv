import React from 'react'
import {Box} from '@material-ui/core';

export default function TechnicalSkills(props) {
    const technicalSkills = props.data

    return (
        technicalSkills.items.filter(skill => skill.expanded).map(skill =>
            <Box>
                <b>{skill.name}: </b>
                <span dangerouslySetInnerHTML={{__html: skill.items.join(", ") + "."}}/>
            </Box>
        )
    );
}