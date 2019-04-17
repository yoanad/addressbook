import React, { Component } from 'react';

export default class UpdatePerson extends Component {

  constructor(props) {
    super(props);
    this.state = {
      id: '',
      name: '',
      contact_details: ''
    }
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleFormSubmit =  (event) => {
    event.preventDefault();
    fetch('/api/people/update', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: this.state.id,
        params: {
          name: this.state.name,
          contact_details: this.state.contact_details,
        }
      }),
    })
    .then((response) => response.json().catch(err => { console.error(`'${err}' happened, but no big deal!`); return {}; }))
    .then((responseJson) => {
      this.props.action();
      return responseJson;
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
        <h1 className="title is-3">Update person</h1>
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
              <label className="label">Name</label>
              <input className="input"
                     type="text"
                     name="name"
                     onChange={this.handleChange}
                     placeholder="Name" />
            </div>
          </div>
          <div className="field">
            <div className="control">
              <label className="label">Contact details</label>
              <input className="input"
                    type="text"
                    onChange={this.handleChange}
                    name="contact_details"
                    placeholder="Contact details"/>
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