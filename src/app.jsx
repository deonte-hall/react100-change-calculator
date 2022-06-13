import React, { Component } from 'react';
import { useState } from 'react';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {amountDue: "", amountOwed: "", result: "" }
    this.calculate = this.calculate.bind(this);
  }
  calculate(e){
      console.log("this is log", this.state.amountDue)
      this.setState({
        [e.target.name]: e.target.value
    });

     
  }
  render() {
    return (
    <div className='container'>
      <div className='Page'>
      <h3 id="header" className='text-center'>My Change Calculator!</h3>
      
      <div className="row">
        <div className='col bg-white offcanvas-horizontal-width' id="input-box">
            <p className="fw-bold">Input Values Here:</p>
            <input type="number" placeholder='amount-due' id='balance-due' value={this.state.amountDue}/>
            <input type="number" placeholder='amount-paid' id='balance-paid' value={this.state.amountOwed}/>
            <button id='calculate' onClick={this.calculate}>Calculate Change</button>
            <h3 className="result">You are owed {this.state.result} in change!</h3>
        </div>
        <div className="col">

        </div>
      </div>
      



      </div>
    </div>
    )
  }
}
export default App;
