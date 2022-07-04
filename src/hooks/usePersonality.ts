import Personality from "services/personality";
import { useSelector } from "store";

const usePersonality = () => {
  const { job, lifeStyle, character } = useSelector((state) => state.persona);
  const jobList = Personality.getJob();
  const lifeStyleList = Personality.getLifeStyle();
  const characterList = Personality.getCharacter();

  const jobData = jobList.filter((e) => !job.includes(e));
  const lifeStyleData = lifeStyleList.filter((e) => !lifeStyle.includes(e));
  const characterData = characterList.filter((e) => !character.includes(e));

  return { jobData, lifeStyleData, characterData };
};

export default usePersonality;
