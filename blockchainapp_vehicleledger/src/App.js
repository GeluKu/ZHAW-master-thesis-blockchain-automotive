import React, { Component } from 'react';

import './App.css';
import web3 from './web3'; //imports the local, metamask injected, web3 version from web3.js file
import vehicle from './vehicle'; //imports the smart contract for the vehicle
import abi from './vehicle_abi'; //imports the abi definition of the smart contract

var accountIDVehicle_create;
var accountIDVehicle_search;
var accountIDVehicle_change;


class App extends Component {

  //WIP: others attribute to be defined here
  state={
    contractAddress:'',
    contractBalance:'',
    deployedFromAddress:'',

    emailOwner:'',
    emailOwner_searched:'                    ',

    ownerVehicle_searched:'                    ',


    message:'',
    message_ContractCreation:'',
    message_ownershipChange:'',

    telephoneOwner:'',
    vehiclePlateNumber:'',

    statusVehicle:'',
    vehicleChassisNumber:'',
    vehicleChassisNumber_searched:'                    ',
    vehicleChassisNumber_create:'',
    vehicleBrand:'',
    vehicleBrand_searched:'                    ',
    vehicleBrand_create:'',
    vehicleSalesDesignation:'',
    vehicleSalesDesignation_searched:'                    ',
    VehicleSalesDesignation_create:'',
    vehicleLastMilage:'',  
    vehicleLastMilageDate:'',
    vehicleFirstRegistrationDate:'', 
    vehicleProductionDate:'',
    vehicleProductionDate_searched:'                    ',
    vehicleProductionDate_create:'',
    vehicleBlockchaiID_searched:'                    ',
   
    vehicleValue:'',
    vehicleNotes:'',
    vehicleNotes_searched:'                    ',
    vehicleNotes_create:'',

    VehicleID:'',
    

    VehicleID_change:'',
    NewOwnerID_change:''
    
    
  };

  //event handler for vehicle creation
  onVehicleCreation = async (event)=> {
          
    event.preventDefault();
    console.log(this.state.vehicleChassisNumber_create);
    

    this.setState({message_ContractCreation:'Waiting on transaction to be performed...'});
    
    //accountIDVehicle_change = new web3.eth.Contract(abi, accountVehicle_change);
    //let _ownerActualVehicle = await accountIDVehicle_change.methods.ownerVehicle().call();
    //await accountIDVehicle_change.methods.transferVehicleOwnership(accountNewOwner).send({from:_ownerActualVehicle});

    this.setState({vehicleChassisNumber_create:''});
    this.setState({vehicleProductionDate_create:''});
    this.setState({vehicleBrand_create:''});
    this.setState({VehicleSalesDesignation_create:''});
    this.setState({vehicleNotes_create:''});

    this.setState({message_ContractCreation:'Ownership transfer executed succefully!'});
    
    }


    //event handler for vehicle search with the Blockchain ID
  onNewVehicleSearch = async (event)=> {
    event.preventDefault();
    let accountSearchedVehicle=this.state.VehicleID;
    
    accountIDVehicle_search = new web3.eth.Contract(abi, accountSearchedVehicle); 
    this.setState({VehicleID:''});

    let _vehicleChassisNumber_searched = await accountIDVehicle_search.methods.vehicleChassisNumber().call();
    let _vehicleProductionDate_searched = await accountIDVehicle_search.methods.vehicleProductionDate().call();
    let _vehicleBrand_searched = await accountIDVehicle_search.methods.vehicleBrand().call();
    let _vehicleSalesDesignation_searched = await accountIDVehicle_search.methods.vehicleSalesDesignation().call();
    let _vehicleNotes_searched = await accountIDVehicle_search.methods.vehicleNotes().call();
    let _emailOwner_searched = await accountIDVehicle_search.methods.emailOwner().call();
    let _ownerVehicle_searched = await accountIDVehicle_search.methods.ownerVehicle().call();
    
    this.setState({vehicleBlockchaiID_searched:accountSearchedVehicle});
    this.setState({vehicleChassisNumber_searched:_vehicleChassisNumber_searched});
    this.setState({vehicleProductionDate_searched:_vehicleProductionDate_searched});
    this.setState({vehicleBrand_searched:_vehicleBrand_searched});
    this.setState({vehicleNotes_searched:_vehicleNotes_searched});
    this.setState({emailOwner_searched:_emailOwner_searched});
    this.setState({vehicleSalesDesignation_searched:_vehicleSalesDesignation_searched});
    this.setState({ownerVehicle_searched:_ownerVehicle_searched});
    
    }

    //event handler for vehicle owner change
    onVehicleOwnerChange = async (event)=> {
          
    event.preventDefault();
    let accountVehicle_change=this.state.VehicleID_change;
    let accountNewOwner=this.state.NewOwnerID_change;

    this.setState({message_ownershipChange:'Waiting on transaction to be performed...'});
    
    accountIDVehicle_change = new web3.eth.Contract(abi, accountVehicle_change);
    let _ownerActualVehicle = await accountIDVehicle_change.methods.ownerVehicle().call();
    await accountIDVehicle_change.methods.transferVehicleOwnership(accountNewOwner).send({from:_ownerActualVehicle});

    this.setState({VehicleID_change:''});
    this.setState({NewOwnerID_change:''});

    this.setState({message_ownershipChange:'Ownership transfer executed succefully!'});
    
    }




  async componentDidMount(){

    const accounts=await web3.eth.getAccounts();
//WIP
    const contractAddress = await vehicle.options.address;
    const deployedFromAddress=accounts[0];

    let emailOwner = await vehicle.methods.emailOwner().call();
    let ownerName = await vehicle.methods.ownerName().call();
    let telephoneOwner = await vehicle.methods.telephoneOwner().call();
    let vehiclePlateNumber = await vehicle.methods.vehiclePlateNumber().call();
    let statusVehicle = await vehicle.methods.statusVehicle().call();
    let vehicleChassisNumber = await vehicle.methods.vehicleChassisNumber().call();
    let vehicleBrand = await vehicle.methods.vehicleBrand().call();
    let vehicleSalesDesignation = await vehicle.methods.vehicleSalesDesignation().call();
    let vehicleLastMilage = await vehicle.methods.vehicleLastMilage().call(); 
    let vehicleLastMilageDate = await vehicle.methods.vehicleLastMilageDate().call();
    let vehicleFirstRegistrationDate = await vehicle.methods.vehicleFirstRegistrationDate().call();
    let vehicleProductionDate = await vehicle.methods.vehicleProductionDate().call();
   
  
    let vehicleValue = await vehicle.methods.vehicleValue().call();    //actual vehicle value according to owner declaration
    let vehicleNotes= await vehicle.methods.vehicleNotes().call();

    

    

//WIP
    this.setState({contractAddress});
    this.setState({emailOwner});
    this.setState({deployedFromAddress});
    this.setState({ownerName});
    this.setState({telephoneOwner});
    this.setState({vehiclePlateNumber});
    this.setState({statusVehicle});
    this.setState({vehicleChassisNumber});
    
    this.setState({vehicleBrand});
    
    this.setState({vehicleSalesDesignation});
    
    this.setState({vehicleLastMilage});
    this.setState({vehicleLastMilageDate});
    this.setState({vehicleFirstRegistrationDate});
    this.setState({vehicleProductionDate});
    this.setState({vehicleValue});
    this.setState({vehicleNotes});
    
   


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
      <a href="#fixed-tab-3" class="mdl-layout__tab">Update vehicle information</a>
      <a href="#fixed-tab-4" class="mdl-layout__tab">Vehicle ownership transfer</a>
      <a href="#fixed-tab-5" class="mdl-layout__tab">Vehicle repair history</a>
      <a href="#fixed-tab-6" class="mdl-layout__tab">Delete vehicle from blockchain</a>
      
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
                    <form action="#" onSubmit={this.onVehicleCreation}>
    
                      <div id="name">
                        <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                          <input class="mdl-textfield__input" type="text" id="VehicleVIN" value={this.state.vehicleChassisNumber_create}
              onChange={event => this.setState({vehicleChassisNumber_create: event.target.value})}></input> 
                          <label class="mdl-textfield__label" for="sample3">Vehicle chassis number</label>
                        </div>

                        <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                          <input class="mdl-textfield__input" type="text" id="ProductionDate" value={this.state.vehicleProductionDate_create}
              onChange={event => this.setState({vehicleProductionDate_create: event.target.value})}></input> 
                          <label class="mdl-textfield__label" for="sample3">Vehicle production date</label>
                        </div>

                      </div>
    
                      <div id="name">

                      <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                          <input class="mdl-textfield__input" type="text" id="VehicleBrand" value={this.state.vehicleBrand_create}
              onChange={event => this.setState({vehicleBrand_create: event.target.value})}></input> 
                          <label class="mdl-textfield__label" for="sample3">Vehicle brand name</label>
                        </div>

                      <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                          <input class="mdl-textfield__input" type="text" id="VehicleSalesDesignation" value={this.state.vehicleSalesDesignation_create}
              onChange={event => this.setState({vehicleSalesDesignation_create: event.target.value})} ></input> 
                          <label class="mdl-textfield__label" for="sample3">Vehicle sales designation</label>
                        </div>
                      </div>
                      
                      <div id="name">
                        <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                          <input class="mdl-textfield__input" type="text" id="VehicleNotes" value={this.state.vehicleNotes_create}
              onChange={event => this.setState({vehicleNotes_create: event.target.value})}></input> 
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
      Please input the Blockchain ID (hash value) for the vehicle to be searched
        <form action="#" onSubmit={this.onNewVehicleSearch}>

          <div id="name">
            <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
              <input class="mdl-textfield__input" type="text" id="VehicleID" value={this.state.VehicleID}
              onChange={event => this.setState({VehicleID: event.target.value})}></input>
              <label class="mdl-textfield__label" for="sample3">Vehicle Blockchain ID</label>
            </div>
          </div>

       

        <div id="next">
          <button class="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect">
          <i class="material-icons">arrow_forward</i>
          </button>
        </div>

        </form>


<br/>
<br/>
        
<div>      
<table class="mdl-data-table mdl-js-data-table">
 
  <tbody>
  <tr>      
      <td class="mdl-data-table__cell--non-numeric">Vehicle Blockchain ID</td>
      <td class="mdl-data-table__cell--non-numeric">{this.state.vehicleBlockchaiID_searched}</td>
    </tr>

    <tr>      
      <td class="mdl-data-table__cell--non-numeric">Vehicle chassis number</td>
      <td class="mdl-data-table__cell--non-numeric">{this.state.vehicleChassisNumber_searched}</td>
    </tr>
    <tr>
      <td class="mdl-data-table__cell--non-numeric">Vehicle production date</td>
      <td class="mdl-data-table__cell--non-numeric">{this.state.vehicleProductionDate_searched}</td>
    </tr>

    <tr>
      <td class="mdl-data-table__cell--non-numeric">Vehicle brand</td> 
      <td class="mdl-data-table__cell--non-numeric">{this.state.vehicleBrand_searched}</td>
      
    </tr>

    <tr>
      <td class="mdl-data-table__cell--non-numeric">Vehicle sales designation</td>
      <td class="mdl-data-table__cell--non-numeric">{this.state.vehicleSalesDesignation_searched}</td>
    </tr>

    <tr>
      <td class="mdl-data-table__cell--non-numeric">Vehicle notes</td>
      <td class="mdl-data-table__cell--non-numeric">{this.state.vehicleNotes_searched}</td>
    </tr>

    <tr>
      <td class="mdl-data-table__cell--non-numeric">Vehicle Owner</td>
      <td class="mdl-data-table__cell--non-numeric">{this.state.ownerVehicle_searched}</td>
    </tr>

    <tr>
      <td class="mdl-data-table__cell--non-numeric">Vehicle Owner E-Mail</td>
      <td class="mdl-data-table__cell--non-numeric">{this.state.emailOwner_searched}</td>
    </tr>

  </tbody>
</table>

 </div>


<div> </div>

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
        <h2 class="mdl-card__title-text">Update vehicle information</h2>
      </div>


      <div class="mdl-card__supporting-text">
      Please input the Blockchain ID (hash value) for the vehicle to be updated
        <form action="#" onSubmit={this.onNewVehicleSearch}>

          <div id="name">
            <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
              <input class="mdl-textfield__input" type="text" id="VehicleID" value={this.state.VehicleID}
              onChange={event => this.setState({VehicleID: event.target.value})}></input>
              <label class="mdl-textfield__label" for="sample3">Vehicle Blockchain ID</label>
            </div>
          </div>

       

        <div id="next">
          <button class="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect">
          <i class="material-icons">arrow_forward</i>
          </button>
        </div>

        </form>


<br/>
<br/>
        
<div>      
<table class="mdl-data-table mdl-js-data-table">
 
  <tbody>
  <tr>      
      <td class="mdl-data-table__cell--non-numeric">Vehicle Blockchain ID</td>
      <td class="mdl-data-table__cell--non-numeric">{this.state.vehicleBlockchaiID_searched}</td>
    </tr>

    <tr>      
      <td class="mdl-data-table__cell--non-numeric">Vehicle chassis number</td>
      <td class="mdl-data-table__cell--non-numeric">{this.state.vehicleChassisNumber_searched}</td>
    </tr>
    <tr>
      <td class="mdl-data-table__cell--non-numeric">Vehicle production date</td>
      <td class="mdl-data-table__cell--non-numeric">{this.state.vehicleProductionDate_searched}</td>
    </tr>

    <tr>
      <td class="mdl-data-table__cell--non-numeric">Vehicle brand</td> 
      <td class="mdl-data-table__cell--non-numeric">{this.state.vehicleBrand_searched}</td>
      
    </tr>

    <tr>
      <td class="mdl-data-table__cell--non-numeric">Vehicle sales designation</td>
      <td class="mdl-data-table__cell--non-numeric">{this.state.vehicleSalesDesignation_searched}</td>
    </tr>

    <tr>
      <td class="mdl-data-table__cell--non-numeric">Vehicle notes</td>
      <td class="mdl-data-table__cell--non-numeric">{this.state.vehicleNotes_searched}</td>
    </tr>

    <tr>
      <td class="mdl-data-table__cell--non-numeric">Vehicle Owner</td>
      <td class="mdl-data-table__cell--non-numeric">{this.state.ownerVehicle_searched}</td>
    </tr>

    <tr>
      <td class="mdl-data-table__cell--non-numeric">Vehicle Owner E-Mail</td>
      <td class="mdl-data-table__cell--non-numeric">{this.state.emailOwner_searched}</td>
    </tr>

  </tbody>
</table>

 </div>


<div> </div>

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
        <h2 class="mdl-card__title-text">Ownership transfer</h2>
      </div>
      <div class="mdl-card__supporting-text">
      Please input the Blockchain IDs (hash value) necessary for the vehicle ownership transfer
        <form action="#" onSubmit={this.onVehicleOwnerChange}>

          <div id="name">
            <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
              <input class="mdl-textfield__input" type="text" id="VehicleID_change" value={this.state.VehicleID_change}
              onChange={event => this.setState({VehicleID_change: event.target.value})}></input>
              <label class="mdl-textfield__label" for="sample3">Vehicle Blockchain ID</label>
            </div>
          </div>

          <div id="name">
            <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
              <input class="mdl-textfield__input" type="text" id="NewOwnerID_change" value={this.state.NewOwnerID_change}
              onChange={event => this.setState({NewOwnerID_change: event.target.value})}></input>
              <label class="mdl-textfield__label" for="sample3">New owner Blockchain ID</label>
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
                  <input class="mdl-textfield__input" type="text" id="GrundNr"></input>
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

  <section class="mdl-layout__tab-panel" id="fixed-tab-6">

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