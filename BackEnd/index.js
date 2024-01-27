import express from "express";
import {createServer} from "http";
import {Server} from "socket.io";
import cors from "cors";
import socketconfig from "./config/socket.js";
import PORT from "./config/port.js";
import routes from "./routes/routes_index.js";
import not_found from "./routes/default.js";
import db_init from "./models/db.js";

 
const app = express();


app.use(cors( {origin:"*"} ));


app.use(express.json());
const httpServer = createServer(app);
const io = new Server(httpServer,{cors:{origin:"*"}});


db_init.create_tables();
socketconfig(io);


 

app.use("/api/v1", routes);
app.use(not_found);

httpServer.listen(PORT, () => console.log(`server started on PORT ${PORT}`));
export default app;