import React from 'react'
import { motion } from "framer-motion"

const Picked = ({iconChoice, iconHouse, houseChoice, playerChoice,  win, setStart ,draw}) => {

    return (
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        exit={{ opacity: 0, x: -100 }}
        className="pick"
        >
               <motion.div
                  initial={{ x: -500 }}
                  animate={{ x: 0}}
                  transition={{ delay: 1.2 }}
                  className={'a '}
               >
                   <h1>You picked</h1>
                   <div className={"option picked "+ playerChoice +" "+ ( win && 'heartbeat') }>
                        <span>
                            <img src={iconChoice} alt="rock" />
                        </span>
                    </div>
               </motion.div>

               <motion.div className='result b '
                      initial={{ scale: 0 }}
                      animate={{ scale: 1  }}
                      transition={{ delay: 3 }}
               >

                   {draw ? <h1 className='message'>DRAW</h1> : 
                   <h1 className='message'>{ win ? "YOU WIN" : "YOU LOSE"}</h1> 
                   }
                   <span onClick={() => setStart(false) }>PLAY AGAIN</span>
               </motion.div>

               <motion.div 
                   initial={{ x: 500 }}
                   animate={{ x: 0  }}
                   transition={{ delay: 1.5 }}
               >
                   <h1>The House Picked</h1>
                   <div className={"option picked c "+houseChoice  + " " + (!draw && !win && 'heartbeat')}>
                        <span>
                            <motion.img 
                            src={iconHouse } 
                            alt="rock"    
                            initial={{ opacity: 0, rotateZ: 0 }}
                            animate={{ opacity: 1, rotateZ: 360 }}
                            transition={{ delay: 1.2 ,duration:1 }}/>
                        </span>
                    </div>
               </motion.div>
        </motion.div>
    )
}

export default Picked
