import SceneDTO from './../data-transports/SceneDTO';

class Scene {
  thumbnail: string;
  video: string;
  similarity: number;
  startTime: number;
  endTime: number;
  notSafeToWork: boolean;

  constructor(sceneObject: SceneDTO) {
    const { anilist: { title, isAdult }, episode, from, to, similarity, video, image } = sceneObject;
    
    this.thumbnail = image;
    this.video = video;
    this.similarity = similarity;
    this.startTime = from;
    this.endTime = to;
    this.notSafeToWork = isAdult;
  }

  public getSimilarityString(): string {
    return `${Number((this.similarity * 1e2).toFixed(2)).toLocaleString()}%`;
  }
}

export default Scene;