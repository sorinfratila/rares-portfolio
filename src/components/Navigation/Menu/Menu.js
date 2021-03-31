import React from "react"
import PropTypes from "prop-types"
import Backdrop from "../../UI/Backdrop/Backdrop"
import NavigationItems from "../NavigationItems/NavigationItems"
import CircleIcon from "../../UI/CircleIcon/CircleIcon"
import { FaEnvelope } from "@react-icons/all-files/fa/FaEnvelope"
import { FaBehance } from "@react-icons/all-files/fa/FaBehance"
import { FaLinkedinIn } from "@react-icons/all-files/fa/FaLinkedinIn"
import { FaFacebookF } from "@react-icons/all-files/fa/FaFacebookF"
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram"

function Menu({ clicked, show, menuList, backdropClicked }) {
    const nowYear = new Date().getFullYear()
    const iconsArr = [
        {
            link: "www.google.com",
            Icon: FaLinkedinIn,
        },
        {
            link: "www.google.dk",
            Icon: FaEnvelope,
        },
        {
            link: "www.google.it",
            Icon: FaInstagram,
        },
        {
            link: "www.google.ru",
            Icon: FaFacebookF,
        },
        {
            link: "www.google.ro",
            Icon: FaBehance,
        },
    ]

    return (
        <>
            <Backdrop show={show} clicked={backdropClicked}>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "flex-end",
                        flex: "1",
                    }}
                >
                    <div
                        style={{
                            height: "5%",
                            fontSize: "20px",
                            fontWeight: "500",
                            letterSpacing: "0.5px",
                        }}
                    >
                        &copy;{nowYear} All rights reserved
                    </div>
                </div>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        flex: "1",
                    }}
                >
                    <NavigationItems
                        items={menuList}
                        clicked={clicked}
                        show={show}
                    />
                    <div
                        style={{
                            height: "5%",
                            display: "flex",
                            justifyContent: "flex-end",
                        }}
                    >
                        {iconsArr.map(({ Icon, link, selected }) => {
                            return (
                                <CircleIcon key={link} icon={() => <Icon />} />
                            )
                        })}
                    </div>
                </div>
            </Backdrop>
        </>
    )
}

Menu.propTypes = {
    clicked: PropTypes.func,
    show: PropTypes.bool,
    linkClicked: PropTypes.func,
    menuList: PropTypes.array,
    isMain: PropTypes.bool,
    backdropClicked: PropTypes.func,
}

export default Menu
