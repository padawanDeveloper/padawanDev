import { Meteor } from 'meteor/meteor'
import Posts from '../api/posts/Posts'
import './accounts'

Meteor.startup(() => {
  console.log('server starter')
  Meteor.methods({
    insertPost(params){
      const {content, apellido } = params
      Posts.insert({content, apellido, owner: Meteor.userId()})
    },
    deletePost(id){
      Posts.remove({_id: id})
    }
  })

  Meteor.publish('userPosts', function userPostsPublication(){
    return Posts.find({owner: Meteor.userId()})
  })
});