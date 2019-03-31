import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import web3 from './web3'; //imports the local, metamask injected, web3 version from web3.js file
import vehicle from './vehicle'; //imports the smart contract for the vehicle

let accounts;

class App extends Component {

  //WIP: others attribute to be defined here
  state={
    contractAddress:'',
    contractBalance:'',
    deployedFromAddress:'',
    emailOwner:'',
    //vehicleChassyNumber,
   // vehicleSalesDesignation,
    //vehicleActualMilage,
    message:''
  };


  //event handler for the change e-mail form
  onMailUpdateSubmit = async (event)=> {
    event.preventDefault();
    const accounts = await web3.eth.getAccounts();
    
    this.setState({message:'Waiting on transaction to be performed...'});
    let emailOwner=this.state.newEmail;
    this.setState({newEmail:''});

    await vehicle.methods.setEmail(emailOwner).send({from: accounts[0]});

    this.setState({message:'Transaction performed!'});
    
  }


  async componentDidMount(){

    const accounts=await web3.eth.getAccounts();
//WIP
    const contractAddress = await vehicle.options.address;
    let emailOwner = await vehicle.methods.emailOwner().call();
    const deployedFromAddress=accounts[0];

//WIP
    this.setState({contractAddress});
    this.setState({emailOwner});
    this.setState({deployedFromAddress});
  }

  render() {

    return (
      <div>

        
<div class="mdl-layout mdl-js-layout mdl-layout--fixed-header mdl-layout--fixed-tabs">

  <header class="mdl-layout__header">
    
    <div class="mdl-layout__header-row">
      <span class="mdl-layout-title">ZHAW master thesis | Vehicle Ledger Prototype based on Blockchain</span>
    </div>
    <div class="mdl-layout__header-row">
      <span class="mdl-layout-title">Project Author: Gelu Constantin Liuta</span>
      </div>


    <div class="mdl-layout__tab-bar mdl-js-ripple-effect">
      <a href="#fixed-tab-1" class="mdl-layout__tab is-active">New vehicle registration</a>
      <a href="#fixed-tab-2" class="mdl-layout__tab">Vehicle information</a>
      <a href="#fixed-tab-3" class="mdl-layout__tab">Change vehicle information</a>
      <a href="#fixed-tab-4" class="mdl-layout__tab">Vehicle repair history</a>
      <a href="#fixed-tab-5" class="mdl-layout__tab">Delete vehicle from blockchain</a>
      
    </div>

  </header>

  <main class="mdl-layout__content">
  
  <section class="mdl-layout__tab-panel is-active" id="fixed-tab-1">
            <div class="page-content">
    
              <div id="mycard">
    
                <div class="demo-card-wide mdl-card mdl-shadow--2dp">
    
                  <div class="mdl-card__title">
                    <h2 class="mdl-card__title-text">Factory first registration of vehicle in Blockchain</h2>
                  </div>
    
    
                  <div class="mdl-card__supporting-text">
                    Please fill out all relevant information (all fields are mandatory)
                    <form action="#">
    
                      <div id="name">
                        <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                          <input class="mdl-textfield__input" type="number" id="VehicleVIN"></input> 
                          <label class="mdl-textfield__label" for="sample3">Vehicle chassy number</label>
                        </div>

                      </div>
    
                      <div id="name">

                      <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                          <input class="mdl-textfield__input" type="number" id="VehicleBrand"></input> 
                          <label class="mdl-textfield__label" for="sample3">Vehicle brand name</label>
                        </div>

                      <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                          <input class="mdl-textfield__input" type="number" id="VehicleSalesDesignation"></input> 
                          <label class="mdl-textfield__label" for="sample3">Vehicle sales designation</label>
                        </div>
                      </div>

                      
                      <div id="name">
                        <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                          <input class="mdl-textfield__input" type="number" id="VehicleNotes"></input> 
                          <label class="mdl-textfield__label" for="sample3">Vehicle Notes</label>
                        </div>
                      </div>

                      <div> </div>

    
                      <div id="next">
                        <button class="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect">
                          <i class="material-icons">arrow_forward</i>
                        </button>
                      </div>
    
                    </form>
    
                  </div>
    
                </div>
    
              </div>
    
            </div>
    
          </section>
  
          
<section class="mdl-layout__tab-panel" id="fixed-tab-2">

  <div class="page-content">

  <div id="mycard">

    <div class="demo-card-wide mdl-card mdl-shadow--2dp">
      <div class="mdl-card__title">
        <h2 class="mdl-card__title-text">Search vehicle information</h2>
      </div>


      <div class="mdl-card__supporting-text">
      Please input the ID (hash value) for the vehicle
        <form action="#">

          <div id="name">
            <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
              <input class="mdl-textfield__input" type="number" id="GrundNr"></input>
              <label class="mdl-textfield__label" for="sample3">hashkey</label>
            </div>
          </div>

       

        <div id="next">
          <button class="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect">
          <i class="material-icons">arrow_forward</i>
          </button>
        </div>
        </form>

        
        <hr />
        <h6>Vehicle data</h6> 
        <p>The vehicle ID is:  {this.state.contractAddress}</p>
        <p>Blockchain registration was executed from the account: {this.state.deployedFromAddress}</p>
        <p>The vehicle owner e-mail is: {this.state.email}</p>
        

           
      
        
        </div>
        </div>
        </div>
        

      </div>

</section>

<section class="mdl-layout__tab-panel" id="fixed-tab-3">

<div class="page-content">

  <div id="mycard">

    <div class="demo-card-wide mdl-card mdl-shadow--2dp">
      <div class="mdl-card__title">
        <h2 class="mdl-card__title-text">Change vehicle registration</h2>
      </div>
      <div class="mdl-card__supporting-text">
      Please input the ID (hash value) for the vehicle
        <form action="#">

          <div id="name">
            <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
              <input class="mdl-textfield__input" type="number" id="GrundNr"></input>
              <label class="mdl-textfield__label" for="sample3">hashkey</label>
            </div>
          </div>

          <div id="next">
            <button class="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect">
              <i class="material-icons">arrow_forward</i>
            </button>
          </div>

        </form>
        <br/>
      

      {/*change e-mail adress of the contract */}
      Please enter the new e-mail address

        <form action="#" onSubmit={this.onMailUpdateSubmit}>

          <div id="name">
            <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
              <input class="mdl-textfield__input" type="text" id="E-Mail" value={this.state.newEmail}
onChange={event => this.setState({newEmail: event.target.value})}></input>
              <label class="mdl-textfield__label" for="sample3"> new e-mail adress</label>
            </div>
          </div>

          <div id="next">
            <button class="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect">
              <i class="material-icons">arrow_forward</i>
            </button>
          </div>

        </form>




{/* status message for waiting times*/}
<br />
<h7>{this.state.message}</h7>

      </div>    
        
      
      </div>
      </div>

    </div>

  </section>

  <section class="mdl-layout__tab-panel" id="fixed-tab-4">

    <div class="page-content">

      <div id="mycard">

        <div class="demo-card-wide mdl-card mdl-shadow--2dp">

          <div class="mdl-card__title">
            <h2 class="mdl-card__title-text">Delete vehicle registration</h2>
          </div>


          <div class="mdl-card__supporting-text">
          Please input the ID (hash value) for the vehicle
            <form action="#">

              <div id="name">
                <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                  <input class="mdl-textfield__input" type="number" id="GrundNr"></input>
                  <label class="mdl-textfield__label" for="sample3">hashkey</label>
                </div>

              </div>

              <div id="next">
                <button class="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect">
                  <i class="material-icons">arrow_forward</i>
                </button>
              </div>

            </form>

          </div>

        </div>

      </div>

    </div>

  </section>

  <section class="mdl-layout__tab-panel" id="fixed-tab-5">

    <div class="page-content">

      <div id="mycard">

        <div class="demo-card-wide mdl-card mdl-shadow--2dp">

          <div class="mdl-card__title">
            <h2 class="mdl-card__title-text">Delete vehicle registration</h2>
          </div>


          <div class="mdl-card__supporting-text">
          Please input the ID (hash value) for the vehicle
            <form action="#">

              <div id="name">
                <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                  <input class="mdl-textfield__input" type="number" id="GrundNr"></input>
                  <label class="mdl-textfield__label" for="sample3">hashkey</label>
                </div>

              </div>

              <div id="next">
                <button class="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect">
                  <i class="material-icons">arrow_forward</i>
                </button>
              </div>

            </form>

          </div>

        </div>

      </div>

    </div>

  </section>
  
  </main>

  </div>   

</div>  

    );
  }
}

export default App;