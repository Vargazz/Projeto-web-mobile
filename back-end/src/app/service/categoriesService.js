const { Categories } = require('../../database/models');

async function findAllByUserId(id) {
  const categories = await Categories.findAll({ where: { userId: id } });

  return categories;
}

async function create({ userId, name }) {

  const categories = await Categories.create({
    userId,
    name,
  });

  return categories;
}

async function findOneByName(name) {
  const categorie = await Categories.findOne({ where: { name } });

  return categorie;
}

async function update(id, name) {
  await Categories.update({ name }, { where: { id } });
}

module.exports = {
  create,
  findAllByUserId,
  findOneByName,
  update,
};