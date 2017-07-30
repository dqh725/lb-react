import React, { Component } from 'react';

class Post extends Component {

  render() {
    return (
      <div className="post">
        <div class="title"> {this.props.title}</div>
      </div>
    );
  }
};

export default Post;
