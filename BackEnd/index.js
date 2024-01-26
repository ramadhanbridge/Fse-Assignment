import express from "express";
import PORT from "./config/port.js";
import routes from "./routes/routes_index.js";
import not_found from "./routes/default.js";
import db_init from "./models/db.js";
const app = express();

db_init.create_tables();

app.use("/api/v1", routes);
app.use(not_found);

app.listen(PORT, () => console.log(`server started on PORT ${PORT}`));
export default app;