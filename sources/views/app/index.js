import React from 'react';
import { connect } from 'react-redux';
import AppHeader from '../components/app-header';
// import { createSelector } from 'reselect';

export function App({children}) {
  return (
    <div>
      <AppHeader />
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
