import Personality from "services/personality";

const usePersonality = () => {
  const jobData = Personality.getJob();
  const lifeStyleData = Personality.getLifeStyle();
  const characterData = Personality.getCharacter();

  return { jobData, lifeStyleData, characterData };
};

export default usePersonality;
