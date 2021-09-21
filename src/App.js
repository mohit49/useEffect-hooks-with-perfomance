import React from 'react';
import { useState, useEffect } from 'react';
import './style.css';

export default function App() {
  let intialCount = 0;
  const [intialVal, changeVal] = useState(intialCount);
  const [inputVal, inchangeVal] = useState('');
  useEffect(() => {
    console.log(`intialVal change ${intialVal}`);
    document.title = `the title is ${intialVal}`;
  }, [intialVal]);
  return (
    <div>
      <div class="my-tuts">
        <input type="text" onChange={(e) => inchangeVal(e.target.value)} />
        <button onClick={() => changeVal(intialVal + 1)}>Update Count </button>
        <p>{inputVal}</p>
        <p>{intialVal}</p>
      </div>
    </div>
  );
}
