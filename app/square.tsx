import { useState } from 'react';
import React from 'react';

interface SquareProps {
  value: string;
  onSquareClick: () => void;
}

export default function Square({value, onSquareClick}: SquareProps) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}
