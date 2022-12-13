import logo from './logo.svg';
import './App.css';

import Toggle from './Toggle';
import React, { useState } from 'react';
import Switch from 'react-switch';


function App() {

  const bigMoney = ["$199.99", "$249.99", "$399.99"];
  const smallMoney = ["$19.99", "$24.99", "$39.99"];

  const [moneyToggle, setMoneyToggle] = useState(false);

  const toggleMoneyFunction = () => {
    setMoneyToggle((curr) => (curr === false ? true : false));
  }

  return (
    <div className="App">
      <h1>Our Pricing</h1>
      <h3>Annually
        <Switch onChange={toggleMoneyFunction} checked={moneyToggle === true}
          uncheckedIcon={false}
          checkedIcon={false}
          onColor="#696fdd"
          handleDiameter={20}
        ></Switch>
        Monthly
      </h3>
      {/* <button onClick={() => setToggle((prev) => !prev)} src={toggle ? "light" : "dark"} className='switcher'></button> */}
      {/* <Toggle></Toggle> */}
      <div className='switch'>

      </div>
      <div className='cards'>
        <div className='card' >
          <h3>Basic</h3>
          <h1 className='price'>{moneyToggle ? smallMoney[0] : bigMoney[0]}</h1>

          <li>
            <ul>500 GB Storage</ul>
            <ul>2 Users Allowed</ul>
            <ul>Send up to 3 GB</ul>
          </li>
          <button className='btn-grad'>Learn More</button>
        </div>
        <div className='card professional'>
          <h3>Professional</h3>
          <h1 className='price'>{moneyToggle ? smallMoney[1] : bigMoney[1]}</h1>
          <li>
            <ul>1 TB Storage</ul>
            <ul>5 Users Allowed</ul>
            <ul>Send up to 10 GB</ul>
          </li>
          <button className='btn-grad' style={{ backgroundColor: "white" }}>Learn More</button>
        </div>
        <div className='card'>
          <h3>Master</h3>
          <h1 className='price'>{moneyToggle ? smallMoney[2] : bigMoney[2]}</h1>
          <li>
            <ul>2 TB Storage</ul>
            <ul>10 Users Allowed</ul>
            <ul>Send up to 20 GB</ul>
          </li>
          <button className='btn-grad'>Learn More</button>
        </div>
      </div>











      <div className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
        Coded by <a href="#">nikoProg</a>.
      </div>
    </div>
  );
}

export default App;
