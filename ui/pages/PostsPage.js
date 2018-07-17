import React, {Component} from 'react'
import { withRouter } from 'react-router-dom'
import { withTracker } from 'meteor/react-meteor-data';
import { Link } from 'react-router-dom'

import Posts from "../../api/posts/Posts";

const ListItem = ({post}) => {
  const onDeleteClick = () => {
    console.log("onDeleteClick")
    Meteor.call('deletePost', post._id, () => {
      console.log('post delete')
    })
  }

  return (

    <div>
      <h1 onClick={onDeleteClick}>Delete Post</h1>
      <Link to={`/post/${post._id}`}>
        <p>{post.content} </p>
      </ Link>
    </div>
  )
}

const ListContainer = ({posts}) => (
  <div> {posts.map(post => <ListItem key={post._id} post={post}/>) } </div>
)

class PostsPage extends Component{
  handleClick = () =>{
    console.log("handleClick")
  }

  render() {
    const { loading, posts } = this.props;
    return(
      <div>{
        loading ? <h1>CARGANDO SUBSCRIPTION</h1> : <ListContainer posts={posts}/>
      }</div>
    )
  }
}

export default withRouter(withTracker((props) => {
  const subscription = Meteor.subscribe("userPosts");
  const { ready } = subscription;
  if(ready) {
    return {
      posts: Posts.find().fetch(),
      loading: false
    }
  } else return {loading: true}
})(PostsPage));