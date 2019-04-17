let { Organization, Person } = require('../models');

class PersonController {
  constructor() { }

  list(req, res) {
    Person
      .findAll({
        attributes: ['id', 'name', 'contact_details']
      })
      .then((people) => res.status(200).send(people))
      .catch((error) => { res.status(400).send(error);
      });
  }

  create(req, res) {
    let userParams = req.body;

    Person
     .build(userParams)
     .save()
     .then(savedPerson => {
       res.status(200).send({});
     })
     .catch(error => {
       res.status(500).send(error);
     });
  }

  update(req, res) {
    let id = parseInt(req.body.id);
    let updateParams = req.body.params;
    console.log(updateParams);

    Person
    .update(updateParams, {where: {id: id}})
    .then(() => res.status(204).send({}))
    .catch((error) => res.status(400).send(error));
  }

  delete(req, res) {
    let param = parseInt(req.body.id);
    Person
    .destroy({where: {id: param}})
    .then(() => res.status(204).send({}))
    .catch((error) => res.status(400).send(error));
  }
}

module.exports = new PersonController();