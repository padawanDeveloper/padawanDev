import React, {Component} from 'react'

class PostForm extends Component{
  state={
    content: ''
  }

  handleChange = (event) => {
    const name = event.target.id,
          value = event.target.value;
    this.setState({
      [name]: value
    })
  }

  onSubmit = (event) =>{
    event.preventDefault()
    console.log(this.state)
    const params = { content: this.state.content, apellido: "apellido"}
    Meteor.call('insertPost', params)
  }

  render() {
    const { content } = this.state;
    return(
      <form onSubmit={this.onSubmit}>
        <h1>Form</h1>
        <label>
        content:
          <input 
            type="text" 
            value={content} 
            onChange={this.handleChange} 
            id="content"
          />
        </label>
        <button type='submit'>Submit!</button>
      </form>
    )
  }
}

export default PostForm 