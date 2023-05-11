import SceneDTO from './../data-transports/SceneDTO';

class Scene {
  englishTitle: string;
  thumbnail: string;
  video: string;
  similarity: number;
  episode: number;
  from: number;
  to: number;
  notSafeToWork: boolean;

  constructor(sceneObject: SceneDTO) {
    const { anilist: { title, isAdult }, episode, from, to, similarity, video, image } = sceneObject;
    
    this.englishTitle = title.english;
    this.thumbnail = image;
    this.video = video;
    this.similarity = similarity;
    this.episode = episode;
    this.from = from;
    this.to = to;
    this.notSafeToWork = isAdult;
  }

  public getSimilarityString(): string {
    return `${Number((this.similarity * 1e2).toFixed(2)).toLocaleString()}%`;
  }
}

export default Scene;