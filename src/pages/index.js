import React, { Component } from "react"
import * as classes from "./pagesCss/index.module.scss"
import home_page_picture from "../images/home"
import Appear from "../components/Transitions/Appear/Appear"
import * as global from "../App.scss"

class HomePage extends Component {
    state = {
        inProp: false,
    }

    componentDidMount() {
        this.setState({
            inProp: true,
        })
    }

    render() {
        const { inProp } = this.state
        return (
            <div className={classes.Container}>
                <section
                    className={[classes.First, global.Capitalize].join(" ")}
                    style={{
                        backgroundImage: `url(${home_page_picture})`,
                    }}
                >
                    <Appear duration={1000} inProp={inProp}>
                        <h2>Hello, I'm</h2>
                        <h1>Rareș Rusu</h1>
                        <h2
                            className={[
                                classes.Uppercase,
                                classes.Smaller,
                            ].join(" ")}
                        >
                            Welcome to my portfolio
                        </h2>
                    </Appear>
                </section>
                <section className={classes.Second}>
                    <h1>What I do</h1>
                    <h3>
                        Digital Consultant with an interest for software
                        development, user-centred design and product management
                    </h3>
                    <h4>
                        Focused on research, design and implement the best user
                        experience paths for digital products that offer high
                        consumer satisfaction. During my projects, I am trying
                        to stay on top of all development aspects from strategy
                        to implementation.
                    </h4>
                </section>
            </div>
        )
    }
}

export default HomePage
