const app = require("./app");

const env = require("dotenv");

dotenv.config({path:"backend/config/config.env"});

app.listen(process.env.PORT, () =>{

    console.log(`Server is working on http://localhost:${process.env.PORT}`);
});


