import React, { useState } from "react";
import PropTypes from "prop-types";

import lightStyles from "./NavBar.module.css";
import darkStyles from "./DarkNavBar.module.css";
import { getImageUrl } from "../../utils";


export const Navbar = ({ isDarkTheme, setIsDarkTheme }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    var styles = isDarkTheme ? darkStyles : lightStyles;

    return (
        <nav className={styles.navbar}>
            <a className={styles.title} href="/">
                Portfolio
            </a>
            <div className={styles.menu}>
                <img className={styles.menuBtn}
                    src={
                        menuOpen
                            ? getImageUrl("nav/closeIcon.png")
                            : getImageUrl("nav/menuIcon.png")
                    }
                    alt="menu-button"
                    onClick={() => setMenuOpen(!menuOpen)}
                />
                <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
                    onClick={() => setMenuOpen(false)}>

                    < li >
                        <a href="#about">About</a>
                    </li>
                    <li>
                        <a href="#experience">Experience</a>
                    </li>
                    <li>
                        <a href="#projects">Projects</a>
                    </li>
                    <li>
                        <a href="#contact">Contact</a>
                    </li>
                    <input
                        type="checkbox"
                        checked={isDarkTheme ? "checked" : ""}
                        onClick={() => setIsDarkTheme(!isDarkTheme)} />
                </ul>

            </div >

        </nav >
    );
};

Navbar.propTypes = {
    isDarkTheme: PropTypes.bool.isRequired,
    setIsDarkTheme: PropTypes.func.isRequired,
};

