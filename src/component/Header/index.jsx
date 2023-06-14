import './module.css'
import {useTranslation} from 'react-i18next';
import { useState } from 'react';

function Header(){
    const {t,i18n} = useTranslation();
  
    const changeLanguage = (lang) =>(
        i18n.changeLanguage(lang)
    );

    // Burger menu
    const [isStyled, setIsStyled] = useState(false);

    const handleButtonClick = () => {
    setIsStyled(!isStyled);
    };

    return(
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
              <img className="menu__favico" src="./img/header/education.png" alt="education"/>
              <a href="#education" className="menu__link">{t("menu.education")}</a>
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
    <div  className={isStyled ? "burger-menu burger-menu__btn--active " :"burger-menu"}  id="burger">
          <div onClick={handleButtonClick} className="burger-menu__btn">
              <span></span>
              <span></span>
              <span></span>
          </div>
          <ul className="burger-menu__list">
               <li className="burger-menu__item">
                  <img className="menu__favico" src="./img/header/home.svg" alt="home"/>
                  <a href="#home" onClick={handleButtonClick} className="burger-menu__link">{t("menu.home")}</a>
              </li>
              <li className="burger-menu__item">
                  <img className="menu__favico" src="./img/header/about.svg" alt="home"/>
                  <a href="#about" onClick={handleButtonClick} className="burger-menu__link">{t("menu.about")}</a>
              </li>
              <li className="burger-menu__item">
                <img className="menu__favico" src="./img/header/projects.svg" alt="projects"/>
                <a href="#projects" onClick={handleButtonClick} className="burger-menu__link">{t("menu.projects")}</a>
              </li>
              <li className="burger-menu__item">
                <img className="menu__favico" src="./img/header/education.png" alt="education"/>
                <a href="#education" onClick={handleButtonClick} className="burger-menu__link">{t("menu.education")}</a>
              </li>
              <li className="burger-menu__item">
                <img className="menu__favico" src="./img/header/resume.svg" alt="resume"/>
                <a href="#resume" onClick={handleButtonClick} className="burger-menu__link">{t("menu.resume")}</a>
              </li>
              <li className="burger-menu__item">
                <button onClick={()=> changeLanguage("en")}>
                <img className="menu__favicoLang" src="./img/header/en.png" alt="en"/>
                </button>
                <button  onClick={()=> changeLanguage("ua")}>
            <img className="menu__favicoLang" src="./img/header/ua.png" alt="ua"/>
            </button> 
              </li>
              <li className="burger-menu__item">

              </li>
              <li className="burger-menu__item">
            </li> 
           </ul>
      </div>
</header>)
}
export default Header;