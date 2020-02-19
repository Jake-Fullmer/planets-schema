import mongoose from "mongoose";
import Galaxy from "../models/Galaxy";

const _repository = mongoose.model("Galaxy", Galaxy);

class GalaxyService {

  async getAll() {
    return await _repository.find({});
  }
  async create(rawData) {
    return await _repository.create(rawData);
  }
}

const galaxyService = new GalaxyService();
export default galaxyService;
