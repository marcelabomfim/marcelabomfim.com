import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';

export default class extends Component {
  state = {
    open: !!this.props.open
  };

  handleToggle = open => e => {
    e.preventDefault();
    this.setState({ open });
  };

  render() {
    const { open } = this.state;
    const { data } = this.props;
    const image = require(`assets/experiences/${data.image}`);

    return (
      <li className={`exp-item ${open ? 'is-open' : ''}`}>
        <div className="exp-flex">
          <img className="exp-img" src={image} alt={data.title} />
          <label className="exp-title" onClick={this.handleToggle(!open)}>
            <h4>{data.title}</h4>
            <p>
              {data.where} - <i>{data.when}</i>
            </p>
          </label>
        </div>
        <div className="exp-description">
          <p>{data.about}</p>
          {data.skills && (
            <p>
              <strong>
                <FormattedMessage id="experience.techs" />
              </strong>{' '}
              {data.skills}
            </p>
          )}
        </div>
        <button className="exp-toggle" onClick={this.handleToggle(!open)}>
          <span />
        </button>
      </li>
    );
  }
}
