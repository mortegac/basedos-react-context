import React, {Component} from 'react';

import logo from './logo.svg';
import './App.css';

import * as themes from "./themes";
import {Context} from "./components/context";

import List from './components/list';

class App extends Component {
  state = {
    theme: themes.dark,
    list: ['Carmen','Alejandro', 'Ingrid', 'Miguel'],
    name:'',
  };

  toggleTheme = () => {
    const {theme} = this.state;

      this.setState({
        theme: theme === themes.dark ? themes.light : themes.dark
      });
  };

  handleChange =(event) => {
    this.setState({name: event.target.value});
  }

  handlerAddUser = (e) =>{
     e.preventDefault();
    const {list, name} =  this.state;

    this.setState({
        list: [ ...list, name ],
        name:''
      });
    
  }

  render(){
    const {theme, theme:{background}, theme:{color}, name } = this.state;
    return (
      <>
        <Context.Provider value={this.state}>

                <div className="App">
                  <header 
                    className="App-header"
                    style={{
                      backgroundColor: background,
                      color: color
                    }}
                  
                  >
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>React Context API</p>
                    <code style={{color: 'gray', fontSize: 14}}>Tema: {JSON.stringify(this.state.theme)}</code>
                    <code style={{color: '#705151', fontSize: 14}}>Listado: {JSON.stringify(this.state.list)}</code>
                    <br />
                    <button 
                      onClick={this.toggleTheme}
                      style={{ 
                          backgroundColor: background,
                          color: theme.color
                        }}
                    >Cambiar tema</button>


                    <div class="new-user">
                      <input type="text" name="name" value={name} onChange={this.handleChange}/>
                      <button 
                        onClick={this.handlerAddUser}
                        style={{ 
                            backgroundColor: background,
                            color: theme.color
                          }}
                      >Agregar</button>

                      <List/>
                    </div>


                  </header>
                </div>

         </Context.Provider>
      </>
    );
  }


}

export default App;