import { useState, useEffect } from 'react'
import { AnimatePresence } from "framer-motion"
import Head from 'next/head'

import Rules from '../components/Rules'
import ScoreBoard from '../components/ScoreBoard';
import Options from '../components/Options';
import Picked from '../components/Picked';

export default function Home() {

  const [modal, setModal] = useState(false)

  const [currentScore, setCurrentScore] = useState(0)
  const [playerChoice, setPlayerChoice] = useState('')
  const [houseChoice, setHouseChoice] = useState('')
  const [start, setStart] = useState(false)
  const [win, setWin] = useState(false)
  const [draw, setDraw] = useState(false)


  const [iconChoice, setIconChoice] = useState('')
  const [iconHouse , setIconHouse ] = useState('')

  const choices = [
    'rock',
    'paper',
    'scissors',
    'lizard',
    'spock'
  ]

  const setGame = (choice) => {

    setPlayerChoice('')
    setHouseChoice('')

    setWin(false)
    setDraw(false)
    setPlayerChoice(choice)
    setStart(true)
    const enemy = choices[Math.floor(Math.random()*5)]
    setHouseChoice(enemy)
    
    setIconChoice(`./icon-${choice}.svg`)
    setIconHouse(`./icon-${enemy}.svg`)

        setTimeout(() => {

          if (choice === 'scissors' && (enemy === 'paper' || enemy === 'lizard' )) {
            setWin(true)
            setCurrentScore(prev => prev + 1)
          } else  if (choice === 'rock' && (enemy === 'scissors' || enemy === 'lizard' )) {
            setWin(true)
            setCurrentScore(prev => prev + 1)
          }  else  if (choice === 'sponk' && (enemy === 'scissors' || enemy === 'rock' )) {
            setWin(true)
            setCurrentScore(prev => prev + 1)
          } else  if (choice === 'paper' && (enemy === 'spock' || enemy === 'rock' )) {
            setWin(true)
            setCurrentScore(prev => prev + 1)
          } else  if (choice === 'lizard' && (enemy === 'spock' || enemy === 'paper' )) {
            setWin(true)
            setCurrentScore(prev => prev + 1)
          }  else if (choice === enemy) {
            setDraw(true)
          } else {
            setCurrentScore(prev => prev - 1)
            setWin(false)
          }
        },3000)
  }

  return (
    <div className='App'>
        <Head>
        <title> Rock - Paper - Scissor </title>
        <link rel="shortcut icon" href="./logo.svg" type="image/x-icon" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <ScoreBoard currentScore={currentScore}/>

      <AnimatePresence>
    { !start && <Options setPlayerChoice={setPlayerChoice} setGame={setGame} /> }
      </AnimatePresence>

    <AnimatePresence>
      { start && <Picked 
                                  setStart={setStart}
                                  iconHouse={iconHouse}
                                  iconChoice={iconChoice}
                                  playerChoice={playerChoice}
                                  houseChoice={houseChoice}
                                  win={win}
                                  draw={draw}
                                  />}
    </AnimatePresence>

    <button className='reset_button ' onClick={() =>  {
      
      setWin(false)
      setDraw(false)
      setPlayerChoice('')
      setStart(false)
      setCurrentScore(0)
    }}>Reset</button>

     <button className='rules_button' onClick={() => setModal(prev => !prev)}>Rules</button>

    <p class="attribution" style={{textAlign:'center', fontSize:'1.3rem', color:'white', padding:'1rem'}}>
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" style={{color:'#1F3756'}}>Frontend Mentor</a>.
        Coded by <a href="https://github.com/BanguisMV" style={{color:'#1F3756'}} >BanguisMV</a>.
    </p>

    <AnimatePresence>
    { modal &&  <Rules setModal={setModal} />  }
    </AnimatePresence>

    </div>
  )
}
