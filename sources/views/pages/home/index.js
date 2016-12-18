import React from 'react';
import { connect } from 'react-redux';

export class HomePage extends React.Component {
  static propTypes = { };

  componentWillMount() {

  }

  render() {
    return (
      <section>Home Page or something</section>
    );
  }
}

//=====================================
//  CONNECT
//-------------------------------------

const mapDispatchToProps = { };

export default connect(null, mapDispatchToProps)(HomePage);
