const Wine = require('../../models/wine');

module.exports = {
    index,
    show
};

async function index(req, res) {
    const wines = await Wine.find({}).sort('name').populate('category').exec();
  // re-sort based upon the sortOrder of the categories
    wines.sort((a, b) => a.category.sortOrder - b.category.sortOrder);
    res.json(wines);
}

async function show(req, res) {
    const wine = await Wine.findById(req.params.id);
    res.json(wine);
}