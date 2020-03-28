import React, { Component, Fragment } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { IntlProvider } from 'react-intl';

import Menu from 'components/Menu';
import ThemeSwitcher from 'components/ThemeSwitcher';
import LocaleSwitcher from 'components/LocaleSwitcher';

import Home from 'containers/Home';

import GlobalStyle from 'utils/styles/global';
import setTheme from 'utils/styles/theme';

import store from 'store';

import intlMessages from './intl';

export default class extends Component {
  state = {
    locale: 'en',
    menuIsOpen: false,
    theme: 'light'
  };

  componentWillMount() {
    window.localStorage.setItem('locale', 'en');
    window.localStorage.setItem('theme', 'light');
  }

  handleLocaleChange = locale => {
    this.setState({ locale });
    window.localStorage.setItem('locale', locale);
  };

  handleMenuToggle = e => {
    e.preventDefault();
    const { menuIsOpen } = this.state;
    this.setState({ menuIsOpen: !menuIsOpen });
  };

  handleThemeChange = e => {
    e.preventDefault();
    const { theme } = this.state;
    const newTheme = theme === 'light' ? 'dark' : 'light';
    this.setState({ theme: newTheme });
    window.localStorage.setItem('theme', newTheme);
  };

  render() {
    const { locale, menuIsOpen, theme } = this.state;

    return (
      <IntlProvider locale={locale} messages={intlMessages[locale]}>
        <Provider store={store}>
          <ThemeProvider theme={setTheme(theme)}>
            <Fragment>
              <GlobalStyle />
              <Menu isOpen={menuIsOpen} handleMenuToggle={this.handleMenuToggle} />
              <ThemeSwitcher handleThemeChange={this.handleThemeChange} />
              <LocaleSwitcher handleLocaleChange={this.handleLocaleChange} locale={locale} />
              <Router>
                <Switch>
                  <Route exact path="/" component={Home} />
                </Switch>
              </Router>
            </Fragment>
          </ThemeProvider>
        </Provider>
      </IntlProvider>
    );
  }
}
