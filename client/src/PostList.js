import React from 'react';
import axios from 'axios';
import Post from './Post';

class PostList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    axios.get('http://localhost:3000/api/posts' )
      .then(res => {
        const posts = res.data;
        this.setState({ posts });
      });
  }

  render() {
    return (
      <div>
        {this.state.posts.map((post)=> <Post title= {post.title} />)}
      </div>
    );
  }
};

export default PostList;
