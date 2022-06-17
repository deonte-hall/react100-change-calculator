
import React, { Component } from 'react';
import { useState } from 'react';

 useState
class App extends Component {

    //Used constructor to set initial state values of each output 
  constructor(props) {
    super(props);
    this.state = {
        amountDue: "", 
        amountPaid: "", 
        result: "",
    twentyBills: "",
    tenBills: "",
    fiveBills: "",
    oneBills: "",
    quarterCoins: "",
    dimeCoins: "",
    nickelCoins: "",
    pennyCoins: ""

}
    this.calculate = this.calculate.bind(this);
    this.handleChange = this.handleChange.bind(this);
    //this.stateChanger = this.stateChanger.bind(this);
  }
  
  calculate(due, paid = null){
   
//Declaring values of all bill denominations and the entire result 


    let changeOwed=0;
    let theirAmount=0;
    let twentyBills=0;
    let tenBills=0;
    let fiveBills=0;

    let oneBills=0;
    let quarterCoins=0;
    let dimeCoins=0;
    let nickelCoins=0;
    let pennyCoins=0;

      console.log("this is log", due, paid)
      
    

    
        if(paid >= due){
                changeOwed = paid - due
                theirAmount = Math.abs(paid - due)
                console.log("their-amount:", theirAmount, "change-owed:", changeOwed)

        }

//Series of if statements to filter changeOwed and separate each bill and coin denomination
        if(changeOwed >= 20){
            while(changeOwed >= 20){
                twentyBills++;
                changeOwed -= 20;
            }
        }
        if(changeOwed >= 10){
            while(changeOwed >= 10){
                tenBills++;
                changeOwed -= 10;
            }
        }
        if(changeOwed >= 5){
            while(changeOwed >= 5){
                fiveBills++;
                changeOwed -= 5;
            }
        }
        // if(changeOwed >=2){
        //     while(changeOwed >= 2){
        //         twoBills++;
        //         changeOwed -= 2;
        //     }
        // }
        if(changeOwed >= 1){
            while(changeOwed >= 1){
                oneBills++;
                changeOwed -= 1;
            }
        }
        if(changeOwed >= 0.25){
            while(changeOwed >= 0.25){
                quarterCoins++;
                changeOwed -= 0.25;
            }
        }
        if(changeOwed >= 0.10){
            while(changeOwed >= 0.10){
                dimeCoins++;
                changeOwed -= 0.10;
            }
        }
        if(changeOwed >= 0.05){
            while(changeOwed >= 0.05){
                nickelCoins++;
                changeOwed -= 0.05;
            }
        }
        changeOwed = changeOwed.toFixed(2);
        if(changeOwed > 0.00){
            while(changeOwed > 0.00){
                pennyCoins++;
                changeOwed -= 0.01;
                
            }
        }
        if(paid < due){
            changeOwed = due - paid;
            
        }

    
      //trying to update state values so that they can be re-rendered onto the U/I
        this.setState({
                [this.state.result]: Math.floor(changeOwed),
                [this.state.twentyBills]: twentyBills,
                [this.state.tenBills]: tenBills,
                [this.state.fiveBills]: fiveBills,
                [this.state.oneBills]: oneBills,
                [this.state.quarterCoins]: quarterCoins,
                [this.state.dimeCoins]: dimeCoins,
                [this.state.nickelCoins]: nickelCoins,
                [this.state.pennyCoins]: pennyCoins
        });
          
        //logs of each bill and coin denomination
       console.log("twenties" ,twentyBills);
        console.log("tens" ,tenBills);
        console.log("fives" ,fiveBills);
        console.log( "ones" ,oneBills);
        console.log("quarters", quarterCoins);
        console.log("dimes" , dimeCoins);
        console.log("nickels" ,nickelCoins);
        console.log("pennies" ,pennyCoins); 
    
    
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
    <div className='container'>
      <div className='Page'>
      <h3 id="header" className='text-center'>My Change Calculator!</h3>
      
      <div className="row">
        <div className='col bg-white offcanvas-horizontal-width' id="input-box">
            <p className="fw-bold">Input Values Here:</p>
            <input type="number" name="amountDue"placeholder='amount due' onChange={this.handleChange}/>
            <input type="number" placeholder='amount paid' name="amountPaid" onChange={this.handleChange}/>
            <button id='calculate' onClick={(e) => {
                e.preventDefault();
                this.calculate(this.state.amountDue, this.state.amountPaid);
                
            }}> Calculate Change</button>
            <br />
            <p>{this.state.result}</p>

        </div>
        <div className="col">
        <table className="table-primary">
            {/* table to output All bill denomination values via state */}
            <tbody>
                <tr>
                    <td>{this.state.twentyBills}</td>
                    <td>{this.state.tenBills}</td>
                    <td>{this.state.fiveBills}</td>
                    <td>{this.state.oneBills}</td>
                    <td>{this.state.quarterCoins}</td>
                    <td>{this.state.dimeCoins}</td>
                    <td>{this.state.nickelCoins}</td>
                    <td>{this.state.pennyCoins}</td>

                </tr>
                <tr>
                    <th>Twenties</th>
                    <th>Tens</th>
                    <th>Fives</th>
                    <th>Ones</th>
                    <th>Quarters</th>
                    <th>Dimes</th>
                    <th>Nickels</th>
                    <th>Pennies</th>
                 </tr>

            </tbody>
        </table>
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
