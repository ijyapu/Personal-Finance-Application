import React from 'react';
import '../styles/Bills.css';

function Bills() {
  return (
    <div className="container">
    <div className='bills'>
        <h1>Bills</h1>
    </div>
    <div className="innerContainer">
      <div className="containerOne">
        <div className="dueDate">Due Dates</div>
        <div className="date">May 1</div>
        <div className="date">May 4</div>
        <div className="date">June 12</div>
      </div>
      <div className="containerTwo">
      <div className="items">Items</div>
        <div className="item">Figma Plan</div>
        <div className="item">Electricity</div>
        <div className="item">Gym Membership</div>
      </div>
      <div className="containerThree">
      <div className="amount">Amount</div>
        <div className="price">$150</div>
        <div className="price">$200</div>
        <div className="price">$50</div>
      </div>
    </div>
    <div className="buttons">
      <button type="submit" id="add">Add</button>
      <button type="submit" id="modify">Modify</button>
      <button type="submit" id="delete">Delete</button>
    </div>

    </div>
    
  )
}

export default Bills