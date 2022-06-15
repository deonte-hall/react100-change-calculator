
import React, { Component } from 'react';
import { useState } from 'react';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {amountDue: "", amountPaid: "", result: "" }
    this.calculate = this.calculate.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  
  calculate(due, paid){
      console.log("this is log", due, paid)
    
    let changeOwed = 0;
    let theirAmount =0;
    let twentyBills = 0;
    let tenBills =0;
    let fiveBills =0;
    //let twoBills = 0;
    let oneBills = 0;
    let quarterCoins =0;
    let dimeCoins =0;
    let nickelCoins=0;
    let pennyCoins=0;
        if(paid >= due){
                changeOwed = paid - due;
                theirAmount = Math.abs(paid - due);
        }
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
          console.log(changeOwed)
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
            console.log(changeOwed);
            while(changeOwed > 0.00){
                pennyCoins++;
                changeOwed -= 0.01;
                
            }
        }
        if(paid < due){
            changeOwed = due - paid;
            
        }
        this.setState({
          [this.state.result]: Math.floor(changeOwed)
        });
    
       console.log("twenties" ,twentyBills);
        console.log("tens" ,tenBills);
        console.log("fives" ,fiveBills);
        console.log( "ones" ,oneBills);
        console.log("quarters", quarterCoins);
        console.log("dimes" , dimeCoins);
        console.log("nickels" ,nickelCoins);
        console.log("pennies" ,pennyCoins); 
  }
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
            <input type="number" name="amountDue"placeholder='amount due' onChange={this.handleChange} />
            <input type="number" placeholder='amount paid' name="amountPaid" onChange={this.handleChange}/>
            <button id='calculate' onClick={() => this.calculate(this.state.amountDue, this.state.amountPaid)}>Calculate Change</button>
            
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
