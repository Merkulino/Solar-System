import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Title extends Component {
  render() {
    const { headline } = this.props;
    return (
      <h2>
        {headline}
      </h2>
    );
  }
}

Title.defaultProps = {
  headline: '',
};

Title.propTypes = {
  headline: PropTypes.string,
};
