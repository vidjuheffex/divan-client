import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const App = ({ children }) => (
  <div>
    {children}
  </div>
);

App.propTypes = {
  children: PropTypes.node.isRequired
};

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
