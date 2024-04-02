import React from "react";

import skills from "../../data/skills.json";
import history from "../../data/history.json";
import lightStyles from "./Experience.module.css";
import darkStyles from "./DarkExperience.module.css";
import { getImageUrl } from "../../utils";

export const Experience = ({ isDarkTheme }) => {
    var styles = isDarkTheme ? darkStyles : lightStyles;

    return (
        <section className={styles.container} id="experience">
            <h2 className={styles.title}>Experience</h2>
            <div className={styles.content}>
                <div className={styles.skills}>
                    {skills.map((skill, id) => {
                        return (
                            <div key={id} className={styles.skill}>
                                <div className={styles.skillImageContainer}>
                                    <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                                </div>
                                <p>{skill.title}</p>
                            </div>
                        );
                    })}
                </div>
                <ul className={styles.history}>
                    {history.map((historyItem, id) => {
                        return (
                            <li key={id} className={styles.historyItem}>
                                <img src={getImageUrl(historyItem.imageSrc)}
                                    alt={`${historyItem.organisation} Logo`}
                                />
                                <div className={styles.historyItemDetails}>
                                    <h3>{`${historyItem.formation}, ${historyItem.organisation}`}
                                    </h3>
                                    <p>{`${historyItem.startDate} - ${historyItem.endDate}`}
                                    </p>
                                    <ul>{historyItem.experiences.map((experience, id) => {
                                        return <li key={id}>{experience}</li>;
                                    })}
                                    </ul>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </section>
    );
};