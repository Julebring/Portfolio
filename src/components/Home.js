import { NavLink } from "react-router-dom";
import { useAnimation, motion, useViewportScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import React, { useEffect } from "react";
import Punsh from './Punsh';
import Card from './Card';
import Projects from "../jsonfile/projects.json";

const buttonVariants = {
  visible: {opacity: 1, scale: 1, transition:{duration:0.2}},
  hidden: {opacity: 0, scale: 0}
};



function Home() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const proj = Projects;
  const controls = useAnimation(); /* för första kanppen, "Fler projekt" */
  const {ref, inView} = useInView();  /* för första kanppen, "Fler projekt" */
  const {scrollY, scrollYProgress }= useViewportScroll(); /* för sista dividern */
  const scale = useTransform(scrollYProgress, [0.5,1],[0.5,1]); /* för sista dividern */

  useEffect(() => {  /* för första kanppen, "Fler projekt" */
    if (inView){
      controls.start('visible');
    }
  }, [controls, inView]);



    return (
      <div className="wrapper">
        
        <div className="hero">
          <Punsh punsh="Webbdesign" soft="Webbutveckling - Grafisk Design - SEO"/>
        </div>
        
        <div className="flexContainer">
          <div className="dividerContainer">
            <img className="divider" src="/assets/martinDvider.png" alt="divider"></img>
          </div>
          <article className="article">
            <div className="titles">
              <h2 role="contentinfo" className="articleTitle">Mina senaste projekt</h2>
              <h3 className="articleTitleSecond">Kika gärna på mina senaste projekt.</h3>
            </div>
                        
            <div className="articleContent">
              <motion.div animate={{x:0}} initial={{x: -400}} className="cardWrapper">
                <Card title={proj[0].title} image={proj[0].image} link={proj[0].link} bread={proj[0].bread}/>
              </motion.div>
              <motion.div animate={{x: 0}} initial={{x: 2000}} className="cardWrapper">
                <Card title={proj[1].title} image={proj[1].image} link={proj[1].link} bread={proj[1].bread}/>
              </motion.div>
            </div>
            <div className="miniFlex2">
            <motion.div whileHover={{scale: 1.1}}>
              <motion.div className="buttonContainer" ref={ref} animate={controls} initial="hidden" variants={buttonVariants}>
                <NavLink  className="articleButton" to="/portfolio" >Fler projekt</NavLink>
              </motion.div>
            </motion.div>
            </div>
          </article>

          <div className="dividerContainer">
            <img className="divider" src="/assets/martinDvider.png" alt="divider"></img>
          </div>

          <article  className="article">
            <div className="titles">
              <h2 role="contentinfo" className="articleTitle">En kort presentation</h2>
              {/* <h3 className="articleTitleSecond">En kort presentation.</h3> */}
            </div>
            <div className="articleContent">
                <img  src="./assets/guy.webp" alt="Me"></img>
                <div>
                  <p>Webbutvecklare</p>
                  <br />
                  <p>Arkitekt</p>
                  <br />
                  <p>Student på Högskolan Väst i Trollhättan.</p>
                </div>
                <div className="miniFlex">
                  <p>HTML, CSS, SASS, Bootstrap, UX, UI, JS, jQuery, React, WordPress, SEO, PHP, SQL, Node.js, Linux</p>
                  <motion.div   whileHover={{scale: 1.1}} className="buttonContainer2">
                    <NavLink  className="articleButton2" to="/about" >Mer om mig</NavLink>
                  </motion.div>         
                </div>
                
            </div>
            
            
            
            
          </article>
          <motion.div style={{scale}}  className="dividerContainer">
            <img className="divider" src="/assets/martinDvider.png" alt="divider"></img>
          </motion.div>
        </div>
      </div>
    );
  }
  
  export default Home;
