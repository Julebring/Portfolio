
import { useInView } from 'react-intersection-observer';
import { useAnimation, motion} from 'framer-motion';
import React, { useEffect } from "react";

const buttonVariants = {
    visible: {opacity: 1, scale: 1, transition:{duration:0.2}},
    hidden: {opacity: 0, scale: 0}
  };

function Card(params){
    const controls = useAnimation(); /* för första kanppen, "Fler projekt" */
  const {ref, inView} = useInView();  /* för första kanppen, "Fler projekt" */

  useEffect(() => {  /* för första kanppen, "Fler projekt" */
  if (inView){
    controls.start('visible');
  }
  }, [controls, inView]);

    return(
        <div >
           
            
            
                <motion.div  ref={ref} animate={controls} initial="hidden" variants={buttonVariants} exit={{scale: 1}}  className="card">
                    <motion.img  className="cardImage" src={params.image} alt={params.title} />
                    <h3 className="cardTitle">{params.title}</h3>
                    <p className="cardPara">{params.bread}</p>
                    
                </motion.div>
                <a  href={params.link} target="_blank" rel="noreferrer">
               
                    <motion.div whileHover={{scale: 1.1}}   className="showMe">Det vill jag se</motion.div>
                 
                </a>
        </div>
    )
};

export default Card;