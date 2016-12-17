import React from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

export function App({children}) {
  return (
    <div>
      <h1>Yeah baby !</h1>
      {children}
    </div>
  );
}

App.propTypes = {
  children: React.PropTypes.element
};

//=====================================
//  CONNECT
//-------------------------------------

// const mapStateToProps = createSelector();

const mapDispatchToProps = {};

export default connect(null, mapDispatchToProps)(App);
