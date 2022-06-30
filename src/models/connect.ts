import mongoose from "mongoose";

import { Service } from "typedi";

@Service("Mongo")
class Mongo {
  static async connect() {
    try {
      const options = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        // useCreateIndex: true,
        // useFindAndModify: false,
        autoIndex: true,
        ignoreUndefined: true,
      };

      await mongoose.connect("mongodb://localhost/dbname", options);
      console.log("DB connection 🔌");
    } catch (err) {
      console.log(err);
    }
  }
}

export default Mongo;
