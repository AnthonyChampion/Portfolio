import React from "react";

import lightStyles from "./Hero.module.css";
import darkStyles from "./DarkHero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = ({ isDarkTheme }) => {
    var styles = isDarkTheme ? darkStyles : lightStyles;

    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hi, I am Anthony</h1>
                <p className={styles.description}>I'm a developer in learning. </p>
                <a href="mailto:anthonyrodrigues.c@gmail.com"
                    className={styles.contactBtn}>Contact Me</a>
            </div>
            <img src={getImageUrl("hero/profil.png")}
                alt="Hero image of me"
                className={styles.heroImg} />
            <div className={styles.topBlur} />
            <div className={styles.bottomBlur} />
        </section>
    );
}
