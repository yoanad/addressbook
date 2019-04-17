import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
//import "react-tabs/style/react-tabs.css";

import AddPersonToOrganization from './components/AddPersonToOrganization.js';
import RemovePersonFromOrganization from './components/RemovePersonFromOrganization.js';
import AddOrganization from './components/AddOrganization.js';
import UpdateOrganization from './components/UpdateOrganization.js';
import DeleteOrganization from './components/DeleteOrganization.js';
import AddPerson from './components/AddPerson.js';
import UpdatePerson from './components/UpdatePerson.js';
import DeletePerson from './components/DeletePerson.js';


import './app.scss';

export default class App extends Component {

  componentDidMount() {
    this.getPeople();
    this.getOrganizations();
  }

  getPeople = _ => {
    fetch('/api/people')
      .then(res => res.json())
      .then(res => this.setState({ people: res }))
      .catch(err => console.error(err));
  }

  getOrganizations = _ => {
    fetch('/api/organizations')
      .then(res => res.json())
      .then(res => this.setState({ organizations: res }))
      .catch(err => console.error(err));
  }

  state = {
    organizations: [ {
        id: '',
      name: '',
      contact_details: '',
      People: []
    }],
    people: [],
    organization_name: '',
    organization_contact_details: ''
  };

  renderOrganization = ({id, name, contact_details, People}, index) =>
    <tr>
      <th>{id}</th>
      <td>{name}</td>
      <td>{contact_details}</td>
      <td>
        {People.map(function(person, idx){
                 return (<span className="" key={idx}>{person.name}; </span>)
               })}
      </td>
    </tr>

    renderPerson = ({id, name, contact_details}, index) =>
      <tr>
        <th>{id}</th>
        <td>{name}</td>
        <td>{contact_details}</td>
      </tr>

  render() {
    return (
      <>
      <section className="hero">
        <div className="hero-body">
          <div className="container">
            <h1 className="title is-1">
              Address book
            </h1>
          </div>
        </div>
      </section>
      <div className="container">
        <div className="organizations">
          <h1 className="title is-2">Organizations</h1>
          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Contact Details</th>
                <th>People</th>
              </tr>
            </thead>
            <tbody>
              {this.state.organizations.map(this.renderOrganization)}
            </tbody>
          </table>
        </div>
      </div>
      <div className="container">
        <div className="organizations">
          <h1 className="title is-2">People</h1>
          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Contact Details</th>
              </tr>
            </thead>
            <tbody>
              {this.state.people.map(this.renderPerson)}
            </tbody>
          </table>
        </div>
      </div>
      <div className="container">
        <h1 className="title is-2">Edit schema</h1>
        <div className="forms-container">
        <Tabs>
          <TabList>
            <Tab>AddPersonToOrganization</Tab>
            <Tab>RemovePersonFromOrganization</Tab>
            <Tab>AddOrganization</Tab>
            <Tab>UpdateOrganization</Tab>
            <Tab>DeleteOrganization</Tab>
            <Tab>AddPerson</Tab>
            <Tab>UpdatePerson</Tab>
            <Tab>DeletePerson</Tab>
          </TabList>
          <TabPanel>
            <AddPersonToOrganization action = { this.getOrganizations} />
          </TabPanel>
          <TabPanel>
            <RemovePersonFromOrganization action = { this.getOrganizations } />
          </TabPanel>
          <TabPanel>
            <AddOrganization action = { this.getOrganizations} />
          </TabPanel>
          <TabPanel>
            <UpdateOrganization action = { this.getOrganizations} />
          </TabPanel>
          <TabPanel>
            <DeleteOrganization action = { this.getOrganizations} />
          </TabPanel>
          <TabPanel>
            <AddPerson action = { this.getPeople} />
          </TabPanel>
          <TabPanel>
            <UpdatePerson action = { this.getPeople} />
          </TabPanel>
          <TabPanel>
            <DeletePerson action = { this.getPeople} />
          </TabPanel>
        </Tabs>
        </div>
      </div>
      </>
    );
  }
}
