const PlaybooksService = require('../service/playbookService')
const CategorieService = require('../service/categoriesService');

async function create(request, response) {
  try {
    const {  categories, name , categoriesName, text } = request.body;

    const { dataValues: { id: categorieId } } = await CategorieService.findOneByName(categories)

    const { dataValues: { id } } = await PlaybooksService.create({
      categorieId,
      name,
      categoriesName,
      text,
    });

    return response.status(201).json({ text });

  } catch ({ message }) {
     return response.status(500).json({ message });
  }
}

async function findAllByUserId(request, response) {
  try {

    const { id } = request.params;

    const playbooks = await PlaybooksService.findAllByUserId(id);


    return response.status(200).json(playbooks);
  } catch ({ message }) {
    return response.status(500).json({ message });
  }
}

async function update(request, response) {
  try {
    const { id } = request.params;

    const { name, text } = request.body;

    await PlaybooksService.update(id, name, text );

    return response.status(204).end()
  } catch ({ message }) {
    return response.status(500).json({ message });
  }
}

module.exports = {
  create,
  findAllByUserId,
  update
};