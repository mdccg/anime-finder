type Anilist = {
  id: number;
  idMal: number;
  title: { [key: string]: string; };
  synonyms: string[];
  isAdult: boolean;
};

type SceneDTO = {
  anilist: Anilist;
  filename: string;
  episode: number;
  from: number;
  to: number;
  similarity: number;
  video: string;
  image: string;
}

export default SceneDTO;