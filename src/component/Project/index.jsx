import './module.css'


function Project(props){
    return(
            <div className="projects__card card">
                <div className="card__img"><img  src={props.img} alt=""/></div>
                <h4 className="card__titile">{props.title}</h4>
                <p className="card__about">
                    {props.subtitle}
                </p>
                <div>  
                    <button className="neon-btn neon-btn--purple">
                        <a target="_blank" href={props.urlGit}>
                        <img className="card__favico" src="./img/favico/github.png" alt="GitHab-Link"/>
                        <span>GitHab-Link</span>
                        </a>
                    </button>
                    <button className="neon-btn neon-btn--purple">
                        <a target="_blank" href={props.urlDemo}>
                            <img className="card__favico" src="./img/favico/demo.png" alt="Demo-Link"/>
                            <span>Demo-Link</span>
                        </a>
                    </button>

                </div>
            </div>
    )
}

export default Project;