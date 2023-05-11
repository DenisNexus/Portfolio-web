import './App.css';
import Project from './component/Project';
import React, { useState, useEffect } from 'react';
import {useTranslation} from 'react-i18next';
import My_Project from './My_Project.json'

const arr = My_Project.arr

function App() {
const {t,i18n} = useTranslation();
  
const changeLanguage = (lang) =>(
    i18n.changeLanguage(lang)
);

const text = t("homepage.name");
  const [index, setIndex] = useState(0);
  const delay = 80; 

  useEffect(() => {
    const timerId = setInterval(() => {
      setIndex(prevIndex => prevIndex + 1);
    }, 80);
    return () => {
      clearInterval(timerId);
    };
  }, [delay]);

  return (
    <div className="App">
        <div className="container">
          <header className="header">
              <img className="header__logo" src="/img/logo.png" alt="logo"/>
              <nav className="menu">
                  <ul className="first"> 
                      <li className="menu__item">
                        <img className="menu__favico" src="./img/header/home.svg" alt="home"/>
                        <a href="#home" className="menu__link">{t("menu.home")}</a>
                        </li>
                      <li className="menu__item">
                        <img className="menu__favico" src="./img/header/about.svg" alt="home"/>
                        <a href="#about" className="menu__link">{t("menu.about")}</a>
                        </li>
                      <li className="menu__item">
                        <img className="menu__favico" src="./img/header/projects.svg" alt="projects"/>
                        <a href="#projects" className="menu__link">{t("menu.projects")}</a>
                      </li>
                      <li className="menu__item">
                        <img className="menu__favico" src="./img/header/resume.svg" alt="resume"/>
                        <a href="#resume" className="menu__link">{t("menu.resume")}</a>
                    </li>
                    <li className="menu__item">
                    <button onClick={()=> changeLanguage("en")}>
                    <img className="menu__favicoLang" src="./img/header/en.png" alt="en"/>
                    </button>
                    </li>
                  <li className="menu__item">
                    <button onClick={()=> changeLanguage("ua")}>
                    <img className="menu__favicoLang" src="./img/header/ua.png" alt="ua"/>
                      </button> 
                    </li>
                  </ul>
              </nav>
          </header>
          <main>
              {/* <!-- First srction --> */}
              <section className="home" id='home'>
                    <div className="home__info">
                        <h1 className="home__title">{t("homepage.title")} <img className="home__wave" src="./img/wave.png" alt="wave"/></h1>
                        <h2 className="home__name">{text.substring(0, index)}</h2>
                        <p className="home__subtitle">{t("homepage.subtitle")}</p>
                    </div>
                    <img className="home__img" src="./img/home-main.svg" alt="men"/>
              </section>
              {/* <!-- Second section --> */}
              <section className="about" id='about'>
                    <div className="about__wrapper">
                        <div className="about__info">
                            <h2 className="about__titile titile">{t("about.title")}</h2>
                            <p className="about__text">{t("about.text")}</p>
                        </div>
                        <img className="about__img" src="/img/avatar.svg" alt="avatar"/>
                    </div>
                
                    <div className="skills">
                        <h2 className="skills__titile titile">{t("skills.title")}</h2>
                        <div className="skills__wrapper">
                            <div className="skills__item">
                                <img src="./img/skills/HTML.webp" alt="html-pic"/>
                                <p className="skills__text">HTML</p>
                            </div>
                            <div className="skills__item">
                                <img src="./img/skills/CSS3.webp" alt="css3-pic"/> 
                                <p className="skills__text">CSS3</p>
                            </div>
                            <div className="skills__item">
                                <img src="./img/skills/JS.webp" alt="js-pic"/>
                                <p className="skills__text">JS</p>
                            </div>
                            <div className="skills__item">
                                <img src="./img/skills/Git.webp" alt="git-pic"/> 
                                <p className="skills__text">Git</p>
                            </div>
                            <div className="skills__item">
                                <img src="./img/skills/webpack.webp" alt="webpack-pic"/>
                                <p className="skills__text">Webpack</p>
                            </div>
                            <div className="skills__item">
                                <img className="skills__pic" src="./img/skills/Bootstrap.webp" alt="bootstrap-pic"/>
                                <p className="skills__text">Bootstrap</p>
                            </div>
                        </div>
                    </div>
              </section>
              {/* <!-- Third section --> */}
              <section classNameName="projects" id='projects'>
                <h2 className="projects__titile titile">{t("projects.title")}</h2>
                <div className="projects__cards">
                {arr.map((obj)=>(<Project
                key={obj.id}
                title = {obj.title}
                subtitle = {obj.subtitle}
                img = {obj.img}          
                urlGit = {obj.urlGit}
                urlDemo = {obj.urlDemo}
                />))}
              </div>
              </section>
              {/* <!-- Fourth section --> */}
              <section className="resume"  id='resume'>
                  <h2 className="resume__titile titile">{t("resume.title")}</h2>
                  <div className="resume__dow">
                    <a target="_blank" href="https://drive.google.com/file/d/1knxpLGjDP0IWW7gLfbhBLu284-GRdcgd/view">
                    <img className="resume__pic" src="./img/favico/download.png" alt="GitHab-Link"/>
                    {t("resume.dow")}
                      </a>
                    </div> 
                    <iframe src="https://drive.google.com/file/d/1knxpLGjDP0IWW7gLfbhBLu284-GRdcgd/preview" width="640" height="680" allow="autoplay"></iframe>
              </section>
          </main>
    </div>
    <footer className="footer">
        <p>© 2023</p>
    </footer>
    </div>
  );
}



export default App;
