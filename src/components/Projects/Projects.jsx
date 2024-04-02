import React from "react";

import lightStyles from "./Projects.module.css";
import darkStyles from "./DarkProjects.module.css";

import projects from "../../data/projects.json";
import { ProjectCard } from "./ProjectCard";

export const Projects = ({ isDarkTheme }) => {
    var styles = isDarkTheme ? darkStyles : lightStyles;

    return (
        <section className={styles.container} id="projects">
            <h2 className={styles.title}>Projects</h2>
            <div className={styles.projects}>
                {projects.map((project, id) => {
                    return <ProjectCard key={id} project={project} />;
                })}
            </div>
        </section>
    )
};