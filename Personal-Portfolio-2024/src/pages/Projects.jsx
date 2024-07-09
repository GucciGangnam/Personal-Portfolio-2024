// IMPORTS 
// Styles 
import "./Projects.css"


//COMPONENT 
export const Projects = () => {
    return (
        <div className="Projects">
            <div className="Top-margin">

            </div>
            <div className="Main">

                <div className="Project-container">

                    <div className="Project-graphics">

                        <div className="Project-title">
                            Catch-em-all
                        </div>
                        <img src="/Pokemon.png" className="Project-image">
                            
                        </img>
                        <div className="Project-buttons">
                            <button className="Code-BTN">code</button>
                            <button className="Live-BTN">Live</button>
                        </div>

                    </div>

                    <div className="Project-description">
                    Catch Em All was my first fully front end focused web app. Its a simple memory game designed to showcase the implementation of a large scope of the React framework.
                    <div className="Project-Technology">
                        <img
                        className="Project-tech-icon"
                        src="/JavaScript.png"
                        ></img>
                        <img
                        className="Project-tech-icon"
                        src="/CSS.png"
                        ></img>
                        <img
                        className="Project-tech-icon"
                        src="/React.png"
                        ></img>
                        <img
                        className="Project-tech-icon"
                        src="/Vite.png"
                        ></img>
                    </div>
                    </div>

                </div>

            </div>
        </div>
    )
}