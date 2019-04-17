import React, { Component } from 'react';

export default class AddPersonToOrganization extends Component {

  constructor(props) {
    super(props);
    this.state = {
      person_id: '',
      organization_id: ''
    }
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleFormSubmit =  (event) => {
    event.preventDefault();
    fetch('/api/organizations/addPerson', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        person_id: this.state.person_id,
        organization_id: this.state.organization_id,
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
    console.log(event.target.name);
    this.setState({[event.target.name]: event.target.value});
  }

    render() {
      return (
        <form onSubmit={this.handleFormSubmit}>
          <h1 className="title is-3">Add person to organization</h1>
          <div className="field">
            <div className="control">
              <label className="label">Organization ID</label>
              <input className="input" type="text" name="organization_id" onChange={this.handleChange} placeholder="Organization id" />
            </div>
          </div>
          <div className="field">
            <div className="control">
              <label className="label">Person ID</label>
              <input className="input" type="text" name="person_id" onChange={this.handleChange} placeholder="Person id"/>
            </div>
          </div>
          <div className="field">
            <div className="control">
              <button className="button is-link">Submit</button>
            </div>
          </div>
        </form>
      );
    }
}