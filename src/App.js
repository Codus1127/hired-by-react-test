import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      title: "",
      input: "",
      post: {}
    };

    this.handleAddTask = this.handleAddTask.bind(this);
  }

//this is what makes a cope of the spread of list, creates the new post with the title and input fields, creates a new time string and also clears both input fields on click of the button.

  handleAddTask() {
    this.setState({
      list: [
        ...this.state.list,
        {
          post: {
            title: this.state.title,
            content: this.state.input,
            time: new Date().toLocaleTimeString([], {
              timeStyle: "short",
              dateStyle: "medium"
            })
          }
        }
      ],
      input: "",
      title: ""
    });
  }

  handleTitleChange(value) {
    this.setState({ title: value });
  }

  handleInputChange(value) {
    this.setState({ input: value });
  }

  removePost(name) {
    this.setState({
      list: this.state.list.filter(el => el !== name)
    });
  }

  render() {
    let list = this.state.list.map((el, i) => {
      console.log(el.post);
      return (
        <div className="post" key={i}>
          <h3>{el.post.title} </h3>
          <h4>{el.post.content}</h4>
          <p>{el.post.time}</p>
          <button className='delete'
            onClick={() => {
              this.removePost(el);
            }}
          >
            Delete
          </button>
        </div>
      );
    });
    return (
      <div className="App">
        <div className="form">
        <h3>Add New Log</h3>
          <input
            value={this.state.title}
            placeholder="Log Title"
            onChange={e => this.handleTitleChange(e.target.value)}
          />
          <textarea
            value={this.state.input}
            placeholder="Log Message"
            onChange={e => this.handleInputChange(e.target.value)}
          />

          <button onClick={this.handleAddTask}>Submit Log</button>
        </div>
        {list}
      </div>
    );
  }
}

export default App;
