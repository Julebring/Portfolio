import { motion, useViewportScroll, useTransform } from 'framer-motion';
import React from 'react';
import Card from './Card';
import Punsh from './Punsh';
import Projects from "../jsonfile/projects.json";



function Portfolio() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const {scrollY, scrollYProgress }= useViewportScroll(); /* för sista dividern */
  const scale = useTransform(scrollYProgress, [0.5,1],[0.5,1]); /* för sista dividern */

  const proj = Projects;
    return (
      <div className="wrapper">
        
        <div  className="heroPortfolio">
          <Punsh punsh="Portfolio" soft="Ett urval av olika porjekt" />
        </div>
        <div className="cardContainer">
          <div className="dividerContainer">
            <img className="divider" src="/assets/martinDvider.png" alt="divider"></img>
          </div>
          {/* <Card title="Språk"  image="assets/code.webp" bread="Utbildning i HTML, JS, CSS, SASS, jQuery, React, Node.js, Wordpress, UX, UI, Media för webben, PHP, Linux, SEO, SQL. Introduktion i Typescript, Asp.Net, Juridik på nätet"/> */}
          { proj.map(post => 
                (
                  
                    <Card key={post.Produkt} title={post.title} image={post.image} link={post.link} bread={post.bread}/> 
                  
                )
          )}
          <motion.div style={{scale}} className="dividerContainer">
            <img className="divider" src="/assets/martinDvider.png" alt="divider"></img>
          </motion.div>
        </div>
      </div>
    );
  }
  
  export default Portfolio;

 