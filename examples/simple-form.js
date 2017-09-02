import Input from './input';
import PropTypes from 'prop-types';
import React from 'react';
import {states} from '../src/state-machine';
import update from 'immutability-helper';

export default class SimpleForm extends React.Component {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    status: PropTypes.oneOf(Object.keys(states)).isRequired,
    value: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired
    })).isRequired
  }

  handleChange = (inputValue, idx) => {
    const {onChange, value} = this.props;
    onChange(update(value, {
      [idx]: {value: {$set: inputValue}}
    }));
  }

  renderInputs() {
    const {status, value} = this.props;
    return value.map(({title, value: inputValue}, idx) =>
      <li key={title} className='form-item'>
        <span>{title}: </span>
        <Input
          onChange={(nextValue) => this.handleChange(nextValue, idx)}
          value={inputValue}
          status={status}
        />
      </li>
    );
  }

  render() {
    return <ul>
      {this.renderInputs()}
    </ul>;
  }
}