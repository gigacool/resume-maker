import React from 'react';
import { connect } from 'react-redux';

import { Button, Input, Icon } from 'antd';


// import * as styles from 'antd/lib/button/style/css'; // import style
export class Editor extends React.Component {
  static propTypes = { };
  state = {
    userName: ''
  }

  componentWillMount() {

  }

  onChangeUserName = (event) => {
    this.setState({userName: event.target.value});
  }

  render() {
    return (
      <section>
        <article>
          <h2>Edit your resume</h2>
          <Input
            placeholder="Enter your userName"
            prefix={<Icon type="user" />}
            // suffix={suffix}
            value={this.state.userName}
            onChange={this.onChangeUserName}
            // ref={node => this.userNameInput = node}
          />
          <Button type="primary">Do something</Button>
        </article>
      </section>
    );
  }
}

const mapDispatchToProps = { };

export default connect(null, mapDispatchToProps)(Editor);
