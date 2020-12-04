import React from 'react'

const ScoreBoard = ({ currentScore }) => {

    return (
        <div className='scoreBoard'>

            <div className='title'>
                <h1>
                    Rock
                    <br />
                    Paper
                    <br />
                    Scissor
                    <br />
                    Lizard
                    <br />
                    Spock
                </h1>
            </div>

        <div className='score'>
            <p>Your Score</p>
            <h3> { currentScore } </h3>
        </div>
        </div>
    )
}

export default ScoreBoard
