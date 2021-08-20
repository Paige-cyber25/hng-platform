import React from 'react';
import classes from '../Pages/About.module.css'

const About = () => {
    return (
        <div className={classes.aboutContainer}>
            <div className={classes.aboutContent}>
            <h3>We find the most talented African developers</h3>
            <p>. . .and give them the opportunity to excel.</p>
            </div>
            <img className={classes.aboutImage} src="https://thumbs.dreamstime.com/z/isometric-artwork-people-programming-multiple-languages-to-make-mobile-apps-website-isometric-artwork-concept-137999203.jpg" alt="homeImage" />
        </div>
    )
}

export default About;
