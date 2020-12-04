import React from 'react'
import { motion } from "framer-motion"

const Options = ({ setGame }) => {
    return (
        <motion.div 
        initial={{ opacity: 0, rotateZ: 360, scale:0 }}
        animate={{ opacity: 1, rotateZ:0, scale:1 }}
        transition={{ duration: 0.7 }}
        exit={{ opacity: 0, rotateZ: 360, scale:0 }}
        className='gameOptions' 
        >

            <div className='option rock' value='rock' onClick={() => setGame('rock')} >
                <span>
                    <img src="./icon-rock.svg" alt="rock" />
                </span>
            </div>

                <div className='option paper' value='paper' onClick={() => setGame('paper')} >
                <span>
                    <img src="./icon-paper.svg" alt="paper" />
                </span>
            </div>

                <div className='option scissors' value='scissors' onClick={() => setGame('scissors')} >
                <span>
                    <img src="./icon-scissors.svg" alt="scissors" />
                </span>
            </div>

                <div className='option lizard' value='lizard' onClick={() =>setGame('lizard')} >
                <span>
                    <img src="./icon-lizard.svg" alt="lizard" />
                </span>
            </div>

                <div className='option spock' value='spock' onClick={() =>setGame('spock')}>
                <span>
                 <img src="./icon-spock.svg" alt="spock" />
                </span>
            </div>

        </motion.div>
    )
}

export default Options
