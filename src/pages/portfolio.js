import React, { useState, useEffect } from "react"

import Headline from "../components/UI/Headline/Headline"
import ProjectTile from "../components/ProjectTile/ProjectTile"
import Header from "../components/Header/Header"
import Appear from "../components/Transitions/Appear/Appear"

const Portfolio = () => {
    const [inProp, setInProp] = useState(false)
    useEffect(() => {
        setInProp(true)
    }, [])

    return (
        <>
            <Header title="Portfolio" />
            <Appear duration={1000} inProp={inProp}>
                <Headline size="large">Designed by Rares</Headline>
                <ProjectTile />
                <ProjectTile />
                <ProjectTile />
                <ProjectTile />
                <ProjectTile />
            </Appear>
        </>
    )
}

export default Portfolio
