const categoryService = require('../services/categoryService');

class categoryController {

    async listCategories(req, res) {
        try {
            const categories = await categoryService.getCategories();

            if (categories.length === 0) {
                return res
                       .status(404)
                       .json({ message: "Category not found." });
            }
                res
                .status(200)
                .json(categories);

        } catch (error) {
                res
                .status(500)
                .json({ error: error.message || "Failed to find category." });
        }
    }
    async createCategory(req, res) {
        try {
            const { name, icon, products } = req.body;
            const categoryCreated = await categoryService.createCategory(name, icon, products);

            if (!name || !icon || !products) {
                res
                .status(400)
                .json({ message: "Category name, icon and/or product required." });
            }

                res
                .status(201)
                .json(categoryCreated);

        } catch (error) {
                res
                .status(500)
                .json({ Error: error.message || "Failed to create category." })
        }
    }
}

module.exports = new categoryController();