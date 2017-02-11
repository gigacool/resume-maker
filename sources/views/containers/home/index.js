import React from 'react';
import { connect } from 'react-redux';

export class HomePage extends React.Component {
  static propTypes = { };

  componentWillMount() {

  }

  render() {
    return (
      <section>
        <article>
          <h2>Explore Resume database</h2>
          <p>Some chit chat, then listing of resumes with filtering ability.</p>
        </article>


      </section>
    );
  }
}

//=====================================
//  CONNECT
//-------------------------------------

const mapDispatchToProps = { };

export default connect(null, mapDispatchToProps)(HomePage);
