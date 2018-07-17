import React, {Component} from 'react'
import { withRouter } from 'react-router-dom'
import { withTracker } from 'meteor/react-meteor-data';

import Posts from "../../api/posts/Posts";

class PostPage extends Component{
  handleClick = () =>{
    console.log(this.props)
  }
  render() {
    const { loading } = this.props
    return(
      <div>{
        loading ? <h1>CARGANDO SUBSCRIPTION</h1> : <h1 onClick={this.handleClick}>Id</h1>
      }</div>
    )
  }
}

export default withRouter(withTracker((props) => {
  const _id = props.match.params.id
  const subscription = Meteor.subscribe("userPosts");
  const { ready } = subscription;
  if(ready) {
    return {
      post: Posts.findOne({_id}),
      loading: false
    }
  } else return {loading: true}
})(PostPage));