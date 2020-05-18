import React from 'react'
import Career from "./Career";

export default function CareerHistory(props) {
    const careerHistory = props.data

    return (
        careerHistory.items.map(item => <Career data={item} expanded={item.expanded}/>)
    );
}