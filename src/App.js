import React, { Component } from 'react';
import Menu from './Menu/Menu';
import Doctor from './Doctor/Doctor';
import SideDrawer from '../src/SideDrawer/SideDrawer';
import BackDrop from '../src/BackDrop/BackDrop';


class App extends Component {

  state = {
    sideDrawerOpen: false
  };

  drawerMenuClickHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen};
    });
  };

  backDropClickHandler = () => {
    this.setState({sideDrawerOpen: false});
  };

  render() {

    let backDrop;

    if(this.state.sideDrawerOpen){
      backDrop = <BackDrop click={this.backDropClickHandler}/>
    }

    return (
      <div style={{height: '100%' }}>
        <Menu drawerClickHandler={this.drawerMenuClickHandler}/>
        <SideDrawer show={this.state.sideDrawerOpen} />
        {backDrop}
      </div>
    );
  }
}

export default App;
