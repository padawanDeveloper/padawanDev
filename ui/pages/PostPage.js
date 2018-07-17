import React, {Component} from 'react'
import { withRouter, Redirect } from 'react-router-dom'
import { withTracker } from 'meteor/react-meteor-data';

import Posts from "../../api/posts/Posts";

class PostPage extends Component{
  handleClick = () =>{
    console.log(this.props)
  }
  render() {
    console.log(this.props)
    const { loading, post } = this.props
    if(loading) return <h1>Loading</h1>
    if(typeof post == undefined) <Redirect to="/" />
    return(
      <div>{
        <h1 onClick={this.handleClick}>{post._id}</h1>
      }</div>
    )
  }
}

export default withRouter(withTracker((props) => {
  const _id = props.match.params.id
  console.log(_id)
  const subscription = Meteor.subscribe("userPosts");
  const { ready } = subscription;
  if(ready) {
    return {
      post: Posts.findOne({_id}),
      loading: false
    }
  } else return {loading: true}
})(PostPage));