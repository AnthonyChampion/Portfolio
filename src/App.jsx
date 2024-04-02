import styles from "./App.module.css";
import { useState } from "react";
import { About } from "./components/About/About";
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/NavBar";
import { Experience } from "./components/Experience/Experience";
import { Projects } from "./components/Projects/Projects";
import { Contact } from "./components/Contact/Contact";

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  return <div className={styles.App}>
    <Navbar isDarkTheme={isDarkTheme} setIsDarkTheme={setIsDarkTheme} />
    <Hero isDarkTheme={isDarkTheme} />
    <About isDarkTheme={isDarkTheme} />
    <Experience isDarkTheme={isDarkTheme} />
    <Projects isDarkTheme={isDarkTheme} />
    <Contact isDarkTheme={isDarkTheme} />
  </div>;

};

export default App;
