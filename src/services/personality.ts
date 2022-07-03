import * as DB from "./db";

const Personality = {
  getJob: () => {
    return DB.job;
  },
  getLifeStyle: () => {
    return DB.lifeStyle;
  },
  getCharacter: () => {
    return DB.character;
  },
};

export default Personality;
