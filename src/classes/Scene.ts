import SceneDTO from './../data-transports/SceneDTO';

const addZero = (n: number) => `${n}`.length === 1 ? `0${n}` : `${n}`;

class Scene {
  videoURL: string;
  similarity: number;
  notSafeToWork: boolean;
  initialInstant: number;
  episode: number;
  portugueseTitle: string;
  originalTitle: string;
  thumbURL: string;
  index: number;
  
  constructor(sceneObject: SceneDTO, index: number) {
    const { anilist: { title, synonyms, isAdult }, episode, from, similarity, video, image } = sceneObject;

    this.videoURL = video;
    this.similarity = similarity;
    this.notSafeToWork = isAdult;
    this.initialInstant = Math.floor(from);
    this.episode = episode;
    this.portugueseTitle = synonyms.at(3) || title.english;
    this.originalTitle = title.romaji;
    this.thumbURL = image;
    this.index = index;
  }

  public getReadableSimilarity(): string {
    return `${Number((this.similarity * 100).toFixed(2)).toLocaleString()}%`;
  }

  public getReadableInitialInstant(): string {
    const minutes = Math.floor(this.initialInstant / 60);
    const seconds = this.initialInstant % 60;
    return `${addZero(minutes)}:${addZero(seconds)}`;
  }
}

export default Scene;