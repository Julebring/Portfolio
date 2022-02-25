import { motion, useViewportScroll, useTransform } from 'framer-motion';
import Punsh from './Punsh';
import React from 'react';

function Contact() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const {scrollY, scrollYProgress }= useViewportScroll(); /* för sista dividern */
  const scale = useTransform(scrollYProgress, [0.5,1],[0.5,1]); /* för sista dividern */
  
    return (
      <div className="wrapper">
        <div  className="heroContact">
          <Punsh punsh="Kontakt" soft=""/>
        </div>
        
        <div className="flexContainer">
                <div className="dividerContainer">
                    <img className="divider" src="/assets/martinDvider.png" alt="divider"></img>
                </div>

                <section className="about">
                    
                    <article className="article">
                        <div className="articleContent">
                            <img src="" alt="contact"></img>
                            
                        </div>
                                    
                    </article>

                    <article className="article">
                        <div className="articleContent">
                          <p>
                            Martin Bürge
                            <br />
                            Ryrvägen 19
                            <br />
                            461 55 Trollhättan
                            <br />
                            <br />
                            <a href="mailto:martin@arque.se">martin@arque.se</a>
                            <br />
                            <br />
                            <a href="www.linkedin.com/in/martin-bürge-71588a5" target="_blank">LinkedIn</a>
                          </p>
                        </div>
                
                
                    </article>

                </section>

                <motion.div style={{scale}} className="dividerContainer">
                    <img className="divider" src="/assets/martinDvider.png" alt="divider"></img>
                </motion.div>


        </div>
      </div>
    );
  }
  
  export default Contact;