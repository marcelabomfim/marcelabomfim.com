import React, { Component, Fragment } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import ThemeSwitcher from './components/ThemeSwitcher';
import Menu from './components/Menu';

import Home from './containers/Home';

import GlobalStyle from './utils/styles/global';
import setTheme from './utils/styles/theme';

import store from './store';

export default class extends Component {
  state = {
    theme: 'light',
    menuIsOpen: false
  };

  componentWillMount() {
    window.localStorage.setItem('theme', 'light');
  }

  handleThemeChange = e => {
    e.preventDefault();
    const { theme } = this.state;
    const newTheme = theme === 'light' ? 'dark' : 'light';
    this.setState({ theme: newTheme });
    window.localStorage.setItem('theme', newTheme);
  };

  handleMenuToggle = e => {
    e.preventDefault();
    const { menuIsOpen } = this.state;
    this.setState({ menuIsOpen: !menuIsOpen });
  };

  render() {
    const { theme, menuIsOpen } = this.state;

    return (
      <Provider store={store}>
        <ThemeProvider theme={setTheme(theme)}>
          <Fragment>
            <GlobalStyle />
            <Menu isOpen={menuIsOpen} handleMenuToggle={this.handleMenuToggle} />
            <ThemeSwitcher handleThemeChange={this.handleThemeChange} />
            <Router>
              <Switch>
                <Route exact path="/" component={Home} />
              </Switch>
            </Router>
          </Fragment>
        </ThemeProvider>
      </Provider>
    );
  }
}
