const CategoriesService = require('../service/categoriesService')
const UserService = require('../service/userService');

async function create(request, response) {
  try {
    const { userName, name } = request.body;

    const { dataValues: { id: userId } } = await UserService.findOneByName(userName);

    const { dataValues: { id } } = await CategoriesService.create({
      userId,
      name,
    });

    return response.status(201).json({ userId });
  } catch ({ message }) {
    return response.status(500).json({ message });
  }
}

async function findAllByUserId(request, response) {
  try {
    const { id } = request.params;

    const categories = await CategoriesService.findAllByUserId(id);

    return response.status(200).json(categories);
  } catch ({ message }) {
    return response.status(500).json({ message });
  }
}

module.exports = {
  create,
  findAllByUserId,
};