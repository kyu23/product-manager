const ProductManagerController = require("../controllers/pmanager.controllers");

module.exports = (app) => {
    app.get("/api/products", ProductManagerController.index);
    app.post("/api/products", ProductManagerController.create);
    app.get("/api/products/:id", ProductManagerController.show);
    app.put("/api/products/:id", ProductManagerController.update);
    app.delete("/api/products/:id", ProductManagerController.delete);
    
}