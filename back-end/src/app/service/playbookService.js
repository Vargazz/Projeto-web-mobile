const { Playbooks } = require('../../database/models');

async function create({ categorieId , name, categoriesName, text }) {

  const playbooks = await Playbooks.create({
    categorieId,
    name,
    categoriesName,
    text,
  });

  return playbooks;
}

async function findAllByUserId(categorieId) {
  const categories = await Playbooks.findAll({ where: { categorieId: categorieId } });

  return categories;
}

async function update(id, name, text) {
  await Playbooks.update({ name, text }, { where: { id } });
}


module.exports = {
  create,
  findAllByUserId,
  update,
};