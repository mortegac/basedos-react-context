import React, {Component} from 'react';

import logo from './logo.svg';
import './App.css';

import * as themes from "./themes";
import ThemeContext from "./themes/context";

class App extends Component {
  state = {
    theme: themes.dark
  };

  toggleTheme = () => {
      this.setState({
        theme: this.state.theme === themes.dark ? themes.light : themes.dark
      });
  };

  render(){
    const {theme} = this.state;
    return (
      <>
        <ThemeContext.Provider value={theme}>

                <div className="App">
                  <header 
                    className="App-header"
                    style={{
                      backgroundColor: this.state.theme.background,
                      color: this.state.theme.color
                    }}
                  
                  >
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>React Context API</p>
                    <code style={{color: 'gray', fontSize: 14}}>Tema: {JSON.stringify(this.state)}</code>
                    <br />
                    <button 
                      onClick={this.toggleTheme}
                      style={{ 
                          backgroundColor: this.state.theme.background,
                          color: this.state.theme.color
                        }}
                    >Cambiar tema</button>

                  </header>
                </div>

         </ThemeContext.Provider>
      </>
    );
  }


}

export default App;