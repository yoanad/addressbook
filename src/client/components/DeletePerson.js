import React, { Component } from 'react';

export default class DeletePerson extends Component {

  constructor(props) {
    super(props);
    this.state = {
      id: '',
    }
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleFormSubmit =  (event) => {
    event.preventDefault();
    fetch('/api/people/delete', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: this.state.id,
      }),
    })
    .then((responseJson) => {
      this.props.action();
    })
    .catch((error) => {
      console.error(error);
    });
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value});
  }

    render() {
      return (
        <form onSubmit={this.handleFormSubmit}>
          <h1 className="title is-3">Remove person</h1>
          <div className="field">
            <div className="control">
              <label className="label">Person ID</label>
              <input className="input"
                     type="text"
                     name="id"
                     onChange={this.handleChange}
                     placeholder="Person id" />
            </div>
          </div>
          <div className="field">
            <div className="control">
              <button className="button is-link">Delete</button>
            </div>
          </div>
        </form>
      );
    }
}