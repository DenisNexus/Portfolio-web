import './App.css';
import Project from './component/Project';
import React, { useState, useEffect } from 'react';
import {useTranslation} from 'react-i18next';
import My_Project from './My_Project.json'
import Header from './component/Header';
import Footer from './component/Footer';

// json substring
const arr = My_Project.arr


function App() {
  // language connection
const {t} = useTranslation();
  
// Text Animation
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
          <Header/>
          <main>
              {/* <!-- First srction --> */}
              <section className="home" id='home'>
                    <div className="home__info">
                        <h1 className="home__title">{t("homepage.title")} <img className="home__wave" src="./img/wave.png" alt="wave"/></h1>
                        <h2 className="home__name">{text.substring(0, index)}</h2>
                        <p className="home__subtitle">{t("homepage.subtitle")}</p>
                    </div>
                    <div className="home__img">
                      <img src="./img/home-main.svg" alt="men"/>
                    </div>
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
              <section className="projects" id='projects'>
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
              <section className="education"  id='education'>
                <h2 className="education__titile titile">{t("education.title")}</h2>
                <div className='education__info'>
                  <iframe className='education__certificate' title='top'src="https://drive.google.com/file/d/1cJVJQCt0-KDfjlZ-56BlDap-KLQi9hgA/preview" width="600" height="750" allow="autoplay"></iframe>
                  <iframe className='education__certificate' title='top' src="https://drive.google.com/file/d/1wc6Lf1-DmlChdS4O49ZAcJFcYKw9w4x7/preview" width="600" height="750" allow="autoplay"></iframe>
                </div>
              </section>
              {/* <!-- Fifth section --> */}
              <section className="resume"  id='resume'>
                  <h2 className="resume__titile titile">{t("resume.title")}</h2>
                  <div className="resume__dow">
                    <a target="_blank" href="https://drive.google.com/file/d/1knxpLGjDP0IWW7gLfbhBLu284-GRdcgd/view">
                    <img className="resume__pic" src="./img/favico/download.png" alt="GitHab-Link"/>
                    {t("resume.dow")}
                      </a>
                    </div>
                    <div className='resume__iframe'><iframe className='education__certificate' title='top'  align="middle" src="https://drive.google.com/file/d/1knxpLGjDP0IWW7gLfbhBLu284-GRdcgd/preview" width="640" height="680" allow="autoplay"></iframe></div> 
              </section>
          </main>
    </div>
    <Footer/>
    </div>
  );
}



export default App;
