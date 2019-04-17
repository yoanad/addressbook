import React, { Component } from 'react';

export default class DeleteOrganization extends Component {

  constructor(props) {
    super(props);
    this.state = {
      id: '',
    }
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleFormSubmit =  (event) => {
    event.preventDefault();
    fetch('/api/organizations/delete', {
      method: 'POST',
      headers: {
         Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: this.state.id,
      }),
    })
    .then((response) => {
      this.props.action();
    })
    .catch((error) => {
      console.error(error);
    })
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value});
  }

    render() {
      return (
        <form onSubmit={this.handleFormSubmit}>
          <h1 className="title is-3">Remove organization</h1>
          <div className="field">
            <div className="control">
             <label className="label">Organization ID</label>
              <input className="input"
                     type="text"
                     name="id"
                     onChange={this.handleChange}
                     placeholder="Organization id" />
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