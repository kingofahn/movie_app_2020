import React from "react";
import "./About.css"

function About(props) {
    console.log(props)
    return (
        <div className="about_container">
            <h1>Hyungjun Ahn</h1>
            <p>Web Developer</p>
            <p>Linkedin profile : www.linkedin.com/in/hyungjun-ahn-aaa0731a8</p>
            <p>Github : https://github.com/kingofahn</p>
        </div>
    );
}

export default About;