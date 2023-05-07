'use client';
import Image from 'next/image'
import { useState } from 'react';
import Square from './square';

export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [nextValue, setNextValue] = useState('X');
  const [theStatus, setTheStatus] = useState('Next player: X');

  function handleClick(i:number) {
    if (squares[i]) return;

    const nextSquares = squares.slice();
    let nv = nextValue;
    nextSquares[i] = nv;
    console.log('nv', nv);
    nv = nv === 'X' ? 'O' : 'X';
    setNextValue(nv);
    setSquares(nextSquares);

    const winner = calculateWinner(nextSquares);
    console.log('winner', winner);
    let nextStatus = '';
    if (winner) {
      nextStatus = "Winner: " + winner;
    } else {
      nextStatus = "Next player: " + nv;
    }
    setTheStatus(nextStatus);
    console.log('theStatus', theStatus);


  }

  return (
    <>
      <div className="status">{theStatus}</div>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );

}


function calculateWinner(squares: number[]) {
  console.log('squares', squares);
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

