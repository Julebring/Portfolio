import { NavLink } from "react-router-dom";
import {motion} from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { useState } from "react";



function Menu() {
    const [ham, setHam] = useState(true);
    const location = useLocation();         /* hämta object med info om var man är */
    const path=location.pathname;            /* plocka ut path från routen */
    /* setHam(false); */
    return (
        <div className="menuMain">
            
            <nav className="menuContainer">
                
                <motion.div whileHover={{ scale: 1.2, originX: 1}} transition={{type:'spring', stiffness: 50}}>
                    {/* om man är på contact eller portfolio använd class navItemOn, annars navItem */}
                    {/* <NavLink className={((path==="/contact") || (path==="/portfolio"))?"navItemOn":"navItem"} to="/" >Home</NavLink> */}
                    <NavLink className={(path==="/")?"navItem":"navItemOn"} to="/" >Home</NavLink>
                </motion.div>
                <motion.div whileHover={{ scale: 1.2, originX: 1}} transition={{type:'spring', stiffness: 50}}>
                    <NavLink className={(path==="/")?"navItem":"navItemOn"} to="/portfolio" >Portfolio</NavLink>
                </motion.div>
                <motion.div whileHover={{ scale: 1.2, originX: 1}} transition={{type:'spring', stiffness: 50}}>
                    <NavLink className={(path==="/")?"navItem":"navItemOn"} to="/about" >About</NavLink>
                </motion.div>
                <motion.div whileHover={{ scale: 1.2, originX: 1}} transition={{type:'spring', stiffness: 50}}>
                    <NavLink className={(path==="/")?"navItem":"navItemOn"} to="/contact" >Kontakt</NavLink>
                </motion.div>
                
            </nav>

            <div className="ham">
                {ham?<div  className="menuHam" onClick={ () => setHam(false)}>
                        <div  className="bar1"></div>
                        <div  className="bar2"></div>
                        <div  className="bar3"></div>
                    </div>:
                <motion.div whileHover={{backgroundColor: 'rgb(199, 182, 144)'}} transition={{duration: 0.3}} className="menuHamClose" onClick={ () => setHam(true)}></motion.div>} 
                {!ham?<motion.div animate={{opacity:1}} initial={{opacity:0}} transition={{duration: 0.7}}>
                    <motion.nav className="menuContainer2" animate={{height:300}} initial={{height:0}}>

                        <motion.div whileHover={{backgroundColor: 'rgb(199, 182, 144)'}} transition={{duration: 0.3}}>
                            <NavLink className="navItemOn" to="/" >Home</NavLink>
                        </motion.div>
                        <motion.div whileHover={{backgroundColor: 'rgb(199, 182, 144)'}} transition={{duration: 0.3}}>
                            <NavLink className="navItemOn" to="/portfolio" >Portfolio</NavLink>
                        </motion.div>
                        <motion.div whileHover={{backgroundColor: 'rgb(199, 182, 144)'}} transition={{duration: 0.3}}>
                            <NavLink className="navItemOn" to="/about" >About</NavLink>
                        </motion.div>
                        <motion.div whileHover={{backgroundColor: 'rgb(199, 182, 144)'}} transition={{duration: 0.3}}>
                            <NavLink className="navItemOn" to="/contact" >Kontakt</NavLink>
                        </motion.div>

                    </motion.nav>
                </motion.div>:null}
            </div>
           
        </div>
    );
  }
  
  export default Menu;