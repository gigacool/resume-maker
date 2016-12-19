import React from 'react';
import { connect } from 'react-redux';

export class AboutPage extends React.Component {
  static propTypes = { };

  componentWillMount() {

  }

  render() {
    return (
      <section>About</section>
    );
  }
}

//=====================================
//  CONNECT
//-------------------------------------

const mapDispatchToProps = { };

export default connect(null, mapDispatchToProps)(AboutPage);
