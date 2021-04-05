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
            <>
                <section
                    className={[classes.First, global.Capitalize].join(" ")}
                    style={{
                        backgroundImage: `url(${home_page_picture})`,
                    }}
                >
                    <Appear duration={1000} inProp={inProp}>
                        <h2>Hello, I'm</h2>
                        <h1> Rareș Rusu</h1>
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
                <section className={classes.Second} />
            </>
        )
    }
}

export default HomePage
