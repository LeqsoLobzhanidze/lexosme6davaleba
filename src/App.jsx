import { useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [advice, setAdvice] = useState(0);
  const [giveadvice, setGiveadvice] = useState({});
  const [bgColor, setBgColor] = useState('#ffffff'); 

  const handleButtonClick = () => {
    setAdvice(advice + 1);
  };

  const getSomeAdvice = async () => {
    try {
      const res = await axios.get('https://api.adviceslip.com/advice');
      console.log(res.data);
      setGiveadvice(res.data);
      setBgColor(getRandomColor()); 
      handleButtonClick(); 
    } catch (error) {
      console.error('Error fetching advice:', error);
    }
  };

  const getRandomColor = () => {
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    return randomColor;
  };

  return (
    <div className="card" style={{ backgroundColor: bgColor }}>
      <h3>ADVICE #{advice}</h3>
      <p>“{giveadvice.slip?.advice}”</p>
      <div className="button-container">
        <button className="dice-button" onClick={getSomeAdvice}>🎲</button>
      </div>
    </div>
  );
}

export default App;

