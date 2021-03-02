import React from 'react'
import Board from './Board'

export  default class Game extends React.Component {
    constructor() {
        super() // calling super is a must
        //We will define a state

        this.state = {
            xIsNext: true,
            stepNumber: 0,
            history : [
                {squares: Array(9).fill(null)}
            ],
            
        }
    }

    handleClick = (i) => {
        const history = this.state.history
        const current = history[history.length - 1]
        const squares = current.squares
        
        if(squares[i]) {
            return
        } 
        let winner = calculateWinner(squares)
        if(winner) {
            return
        }

        squares[i] = this.state.xIsNext ? 'X' : 'O'

        this.setState( {
            history: history.concat ({
                squares: squares
            }),
            xIsNext: !this.state.xIsNext,
            stepNumber: history.length
        } )

        winner = calculateWinner(squares)
        if(winner) {
            return
        }
    }
    

    render() {
        const history = this.state.history
        const current = history[history.length - 1] 
        const squares = current.squares
        let win = calculateWinner(squares)
        let show
        if(win) {
           show = "Winner is " + win
        } else {
            show =( this.state.xIsNext ? 'X' : 'O' ) + "'s turn"
        }
        return(
            <div className="game">
                <div className="game-board">
                    <Board clickAction={(i) => this.handleClick(i)} squares={squares}/>    
                </div>
                
                <div className="winner">{show}</div>
            </div>
        )
    }

}

function calculateWinner(squares) {
    
    const possibilities = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [6,7,8]
    ]

    for(let i=0;i<possibilities.length;i++) {
        const [a , b, c] = possibilities[i]
        
        
        if(squares[a]) {
            if(squares[a]==squares[b] && squares[b]==squares[c])
            return squares[a]
        }
          
    }
}