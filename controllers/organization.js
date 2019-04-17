let { Organization, Person } = require('../models');

class OrganizationController {
  constructor() { }

  list(req, res) {
    Organization
      .findAll({
        attributes: ['id', 'name', 'contact_details'],
        include: [{
          model: Person,
          attributes: ['id', 'name', 'contact_details']
        }],
      })
      .then((organizations) => res.status(200).send(organizations))
      .catch((error) => { res.status(400).send(error); });
  }

  create(req, res) {
    let params = req.body;
    Person
    .findAll({ where: { organization_id: params } })
    .spread((person, created) => {
      person.organization_id = null;
      person.save().then(savedPerson => {
        res.status(200).send({});
      })
    .catch(error => {
      res.status(500).send(error);
    })
   })
   
    Organization
     .build(params)
     .save()
     .then(savedOrganization => {
       res.status(200).send(savedOrganization);
     })
     .catch(error => {
       res.status(500).send(error);
     });
  }

  update(req, res) {
    let id = parseInt(req.body.id);
    let updateParams = req.body.params;
    console.log(updateParams);

    Organization
    .update(updateParams, {where: {id: id}})
    .then(() => res.status(204).send({}))
    .catch((error) => res.status(400).send(error));
  }

  delete(req, res) {
    let param = parseInt(req.body.id);
    Organization
    .destroy({where: {id: param}})
    .then(() => res.status(204).send({}))
    .catch((error) => res.status(400).send(error));
  }

  addPerson(req, res) {
    let person_id = parseInt(req.body.person_id);
    let organization_id = parseInt(req.body.organization_id);

    Person
    .findOrCreate({ where: { id: person_id } })
    .spread((person, created) => {
      person.organization_id = organization_id;
      person.save().then(savedPerson => {
        res.status(200).send({});
      })
    .catch(error => {
      res.status(500).send(error);
    })
    })
  }

  deletePerson(req, res) {
    let person_id = parseInt(req.body.person_id);
    let organization_id = parseInt(req.body.organization_id);
    let updateParams = {organization_id: null};

    Person
    .update(updateParams, {where: {id: person_id}})
    .then(() => res.status(204).send({}))
    .catch((error) => res.status(400).send(error));
  }
}
module.exports = new OrganizationController();