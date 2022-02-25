import { motion, useViewportScroll, useTransform } from 'framer-motion';
import Punsh from './Punsh';
import React from 'react';


function About(){
    React.useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    const {scrollY, scrollYProgress }= useViewportScroll(); /* för sista dividern */
    const scale = useTransform(scrollYProgress, [0.5,1],[0.5,1]); /* för sista dividern */
    return(
        <div>
            <div  className="heroAbout">
                <Punsh punsh="About" soft="" />
            </div>
            <div className="flexContainer">
                <div className="dividerContainer">
                    <img className="divider" src="/assets/martinDvider.png" alt="divider"></img>
                </div>
                <section className="about">
                    
                    <article className="article">
                        <div className="articleContent">
                            <img src="./assets/self.webp" alt="Me"></img>
                            
                        </div>
                                    
                    </article>

                    <article className="article">
                        <div className="articleContent aboutContent">
                            För närvarande pluggar jag till Webbutvecklare på Högskolan Väst i Trollhättan. På fritiden kodar jag lite mer och hittar på bus med mina två pojkar. Det jag brinner för är webbdesign, kodning, och film. Utöver det skapar jag musik så ofta vardagen tillåter.
                        </div>
                        
                    </article>

                    
                </section>

                <div className="dividerContainer">
                    <img className="divider" src="/assets/martinDvider.png" alt="divider"></img>
                </div>

                <section className="about">
                    <article className="article">
                        <a href="https://www.chrisportfolio.se" target="_blank"  rel="noreferrer">
                            <motion.div whileHover={{scale: 1.2}} className="articleContent">
                                <img src="./assets/co-op.webp" alt="Me"></img>
                            </motion.div>
                        </a>
                    </article>
                    <article className="article">
                        <div className="articleContent aboutContent">
                            Med solthet får jag berätta att jag påbörjat ett samarbete med Christopher Olsson. Han är en fullstack men med expertis och skarpa ögon på frontend.
                        </div>
                
                
                    </article>
                </section>

                <motion.div style={{scale}} className="dividerContainer">
                    <img className="divider" src="/assets/martinDvider.png" alt="divider"></img>
                </motion.div>

            </div>
        </div>
    )
};

export default About;