import React from "react"
import SlideShow from "../components/UI/SlideShow/SlideShow"
import slidesArray from "../images/about"
import raresrusu from "../images/about/raresrusu.jpg"
import * as classes from "./pagesCss/about.module.scss"

const about = () => {
    const classesArr = [classes.Header]
    classesArr.push(classes.Appear)

    return (
        <div className={classes.Container}>
            <section className={classesArr.join(" ")}>
                <p>
                    Rares Rusu - <span>Digital Consultant</span> interested in
                    <br />
                    <span>User-Centered Design</span> and{" "}
                    <span>Visual Communication</span> <br /> with strong
                    experience in the field of digital media
                </p>
            </section>
            <section className={classes.Slides}>
                <SlideShow images={slidesArray} />
            </section>
            <section className={classes.Content}>
                <p>
                    I am focused on research, design and develop the best user
                    experience paths for digital products that offer high
                    consumer satisfaction. In my projects, I am trying to stay
                    on top of all development aspects from design until
                    implementation. Being part of all these steps helps me reach
                    and deliver a state of art product.
                </p>
                <p>
                    Currently, I am active on the Swiss market and my recent
                    experience was working for the Swisscom TV project for a
                    Multi-Screen solution with Android-based Set-Top-Box, HTML5
                    client and a Mobile Apps (iOS / Android).
                </p>
                <p>
                    I consider myself as being a multidisciplinary designer
                    always open for new challenges. For this, I am offering
                    full-service consultancy for UX Design, Visual
                    Communication, Web Design, Web and Apps Development,
                    Research, User Testing, Content Management and Digital
                    Campaigns for products and businesses.
                </p>
            </section>
            <section className={classes.About}>
                <div className={classes.Skills}>
                    <p>Core Skills</p>
                    <p>
                        UX Design and Research (user analysis & profiling plus
                        other insight gathering and planning activities)
                    </p>
                    <p>
                        Information Architecture (page/content groupings,
                        hierarchy, placement)
                    </p>
                    <p>
                        Interaction Design (goal-oriented design, personas,
                        prototyping, usability testing, design testing)
                    </p>
                    <p>
                        Visual Design (sketching, wireframing, graphic design,
                        photography, video content, animation)
                    </p>
                </div>
                <div className={classes.ImageContainer}>
                    <img src={raresrusu} alt="rares rusu" />
                </div>
            </section>
        </div>
    )
}

about.propTypes = {
    // prop: PropTypes,
}

export default about
