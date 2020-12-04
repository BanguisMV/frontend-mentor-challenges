import React from 'react'
import { motion} from "framer-motion"

const Modal = ({ setModal }) => {
    return (
        <motion.div className='rules'
            initial={{ scale: 0 }}
            animate={{ scale: 1  }}
            transition={{ duration: 0.4 }}
            exit={{ scale: 0 }}
            >
                <div className=' control '>
                    <h1>rules</h1>
                    <h1 className='close' onClick={() => setModal(prev => !prev)} >✖</h1>
                </div>
                <img src="./image-rules-bonus.svg" alt="Rules" />
        </motion.div>
    )
}

export default Modal
