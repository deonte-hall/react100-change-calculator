import React, { Component } from 'react';
import { useState } from 'react';

class App extends Component {
    //Used constructor to set initial state values of each output 
  constructor(props) {
    super(props);
    this.state = {
        amountDue: "", 
        amountPaid: "", 
        result: "",
        twentys: "",
        tens: "",
        fives: "",
        ones: "",
        quarters: "",
        dimes: "",
        nickels: "",
        pennys: "",
        noChange: "",
    }   
    this.calculate = this.calculate.bind(this);
    this.handleChange = this.handleChange.bind(this);
    //this.stateChanger = this.stateChanger.bind(this);
  }
  
  calculate(due, paid) {
//Declaring values of all bill denominations and the entire result 
    let changeOwed=0;
    let theirAmount=0;
    let twentys=0;
    let tens=0;
    let fives=0;
    let ones=0;
    let quarters=0;
    let dimes=0;
    let nickels=0;
    let pennys=0;
    console.log('paid', paid, 'due', due)
    
        if(paid < due || paid === 0){
            this.setState({
                noChange: `You have no change, you are short $${due-paid} dollars.`
            })
        return null;
      }
        if(paid > due){
            changeOwed = paid - due
            theirAmount = Math.abs(paid - due)
            console.log("their-amount:", theirAmount, "change-owed:", changeOwed)
        }
//Series of if statements to filter changeOwed and separate each bill and coin denomination
        if(changeOwed >= 20){
            while(changeOwed >= 20){
                twentys++;
                changeOwed -= 20;
            }
        }
        if(changeOwed >= 10){
            while(changeOwed >= 10){
                tens++;
                changeOwed -= 10;
            }
        }
        if(changeOwed >= 5){
            while(changeOwed >= 5){
                fives++;
                changeOwed -= 5;
            }
        }
        if(changeOwed >= 1){
            while(changeOwed >= 1){
                ones++;
                changeOwed -= 1;
            }
        }
        if(changeOwed >= 0.25){
            while(changeOwed >= 0.25){
                quarters++;
                changeOwed -= 0.25;
            }
        }
        if(changeOwed >= 0.10){
            while(changeOwed >= 0.10){
                dimes++;
                changeOwed -= 0.10;
            }
        }
        if(changeOwed >= 0.05){
            while(changeOwed >= 0.05){
                nickels++;
                changeOwed -= 0.05;
            }
        }
        changeOwed = changeOwed.toFixed(2);
        if(changeOwed > 0.00){
            while(changeOwed > 0.00){
                pennys++;
                changeOwed -= 0.01;
                
            }
        }
      //trying to update state values so that they can be re-rendered onto the U/I
     
        this.setState({
            result: `You have ${theirAmount.toFixed(2)} in change.`,
            twentys,
            tens,
            fives,
            ones,
            quarters,
            dimes,
            nickels,
            pennys
        }, () => console.log("state-changed"));

        console.log("twenties" ,twentys);
        console.log("tens" ,tens);
        console.log("fives" ,fives);
        console.log( "ones", ones);
        console.log("quarters", quarters);
        console.log("dimes", dimes);
        console.log("nickels", nickels);
        console.log("pennies", pennys);

      
        
        }
  /*** Change handler that is called upon user input that will 
  update state values to what user has inputted ***/

  handleChange(event){
    this.setState({
     [event.target.name] : event.target.value
  });
  }
  render() {
    return (
    <div className='parent container'>
        <div className='Page'>
            <h3 id="header" className='text-center'>Change Calculator</h3>
            <div className="child container row" id="inputOutputBox">
                <div className='child1 col bg-secondary' id="input">
                    <p className="fw-bold row">Input Values Here:</p>
                    <input type="number" name="amountDue" placeholder='amount due' className='amountDue' onChange={this.handleChange}/>
                    <input type="number" placeholder='amount paid' name="amountPaid" className='amountReceived' onChange={this.handleChange}/>
                    <button id='calculate' name="calculate" className='calculate-change' onClick={() => this.calculate(this.state.amountDue, this.state.amountPaid)}>Calculate</button>
                </div>
                <div className="child2 col">
                    <table className="table-bordered table-grou-separator-color blue col" id="bo">
                        <tbody>
                            <tr className='row'>
                                <th className='col text-center'>Twenties <br /><p>{this.state.twentys}</p></th>
                                <th className='col text-center'>Tens <br /><p>{this.state.tens}</p></th>
                                <th className='col text-center'>Fives <br /><p>{this.state.fives}</p></th>
                                <th className='col text-center'>Ones <br /><p>{this.state.ones}</p></th>
                            </tr>
                            <tr className='row'>
                                <th className='col text-center'>Quarters <br /><p>{this.state.quarters}</p></th>
                                <th className='col text-center'>Dimes <br /><p>{this.state.dimes}</p></th>
                                <th className='col text-center'>Nickels <br /><p>{this.state.nickels}</p></th>
                                <th className='col text-center'>Pennies <br /><p>{this.state.pennys}</p></th>
                            </tr>
                         </tbody>
                    </table>
                    <h4 className='fc-red'>{this.state.noChange}</h4>
                    <h4 className='fc-green'>{this.state.result}</h4>
                </div>
            </div>
        </div>
    </div>
    )}
}
export default App;
