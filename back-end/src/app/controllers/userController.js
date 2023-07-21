const md5 = require('md5');
const UserService = require('../service/userService');
const { sign } = require('../helpers/jwt');

async function findAll(_, response) {
  try {
    const users = await UserService.findAll();

    return response.status(200).json(users);
  } catch ({ message }) {
    return response.status(500).json({ message });
  }
}

async function findOneByEmail(request, response) {
  try {
    const { body: { email, password } } = request;

    const user = await UserService.findOneByEmail(email);

    if (!user) {
      return response.status(404).end();
    }

    const token = sign(email);

    if (md5(password) === user.dataValues.password) {
      return response.status(200).json({
        name: user.dataValues.name,
        email: user.dataValues.email,
        id: user.dataValues.id,
        token,
      });
    }
  } catch ({ message }) {
    return response.status(500).json({ message });
  }
}

async function create(request, response) {
  try {
    const {
      body: { name, email, password },
    } = request;
    const object = {name, email, password }
    await UserService.create(object);
    return response.status(201).end();
  } catch (error) {
    return response.status(500).json({ message })
  }
}

async function update(request, response) {
  try {
    const { id } = request.params;

    const { name, email, password } = request.body;
    const token = sign(email);

    await UserService.update(id, name, email, password);

    return response.status(204).json({ token });
  } catch ({ message }) {
    return response.status(500).json({ message });
  }
}


module.exports = {
  findAll,
  findOneByEmail,
  create,
  update,
};