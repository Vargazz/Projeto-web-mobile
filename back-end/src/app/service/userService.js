const md5 = require('md5');
const { User } = require('../../database/models');

async function findAll () {
  const users = await User.findAll();

  return users
};

async function findOneByEmail(email) {
  const user = await User.findOne({ where: { email } });

  return user;
}

async function findOneById(id) {
  const user = await User.findOne({ where: { id } });

  return user;
}

async function findOneByName(name) {
  const user = await User.findOne({ where: { name } });

  return user;
}

async function create(object) {
  const newUser = await User.create({ ...object, password: md5(object.password)});
  
  return newUser;
}

async function update(id, name, email, password) {
  console.log(email);
  await User.update({ name: name, email: email, password: md5(password) }, { where: { id } });
}


module.exports = {
  findAll,
  findOneByEmail,
  findOneByName,
  findOneById,
  create,
  update,
};