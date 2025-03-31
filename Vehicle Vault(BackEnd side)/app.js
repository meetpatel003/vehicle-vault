
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const roleRouter = require("./src/routers/roleRouter");
app.use(roleRouter);

//userRoutes
const userRoutes = require("./src/routers/userRouter")
app.use(userRoutes)

//carRouter
const carRouter = require("./src/routers/carRouter")
app.use(carRouter)

//insuranceRoter
const insuranceRouter = require("./src/routers/insuranceRouter")
app.use("/api/insurance", insuranceRouter);

//featureRouter
const featuresRouter = require("./src/routers/featuresRouter")
app.use("/api/features", featuresRouter);

const stateRoutes = require("./src/routers/stateRouter")
app.use("/state",stateRoutes)
//http://localhost:3000/state/addState

const cityRoutes = require("./src/routers/cityRouter")
app.use("/city",cityRoutes) //http://localhost:3000/city/addCity

const areaRoutes = require("./src/routers/areaRouter")
app.use("/area",areaRoutes)

mongoose.connect("database url").then(() => {
    console.log("database connected....");
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log("server started on port number", PORT);
})

