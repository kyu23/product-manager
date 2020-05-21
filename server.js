const express = require("express"),
    app = express(),
    cors = require("cors"),
    port = 8000,
    db = "product-manager",
    server = app.listen(port, () => console.log(`Listening on port ${port}`));

app.use(cors());
app.use(express.json());

require("./server/config/database.config")(db); 
require("./server/routes/pmanager.routes")(app);