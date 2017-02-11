import React from 'react';
import { connect } from 'react-redux';

export class EditorPage extends React.Component {
  static propTypes = { };

  componentWillMount() {

  }

  render() {
    return (
      <section>
        <article>
          <h2>Edit your resume</h2>
        </article>
      </section>
    );
  }
}

//=====================================
//  CONNECT
//-------------------------------------

const mapDispatchToProps = { };

export default connect(null, mapDispatchToProps)(EditorPage);
