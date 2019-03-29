import React from 'react';
import {ThemeContext} from './theme';

export class Header extends React.Component {
  render() {
    return (
      <h1>{this.props.headerText}</h1>
    );
  }
}

export const Header = props => ( <ThemeContext.Consumer>
  {theme => (
      <header
        className="App-header"
        style={{backgroundColor: theme.background}}
      >
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title" style={{color: theme.foreground}}>
          Welcome to React
        </h1>
      </header>
  )}
  </ThemeContext.Consumer>
);
