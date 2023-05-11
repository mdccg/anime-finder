import SceneDTO from './../data-transports/SceneDTO';

class Scene {
  thumbnail: string;
  video: string;
  similarity: string;
  startTime: number;
  endTime: number;
  notSafeToWork: boolean;

  constructor(sceneObject: SceneDTO) {
    const { anilist: { title, isAdult }, episode, from, to, similarity, video, image } = sceneObject;
    
    this.thumbnail = image;
    this.video = video;
    this.similarity = `${Number((similarity * 1e2).toFixed(2)).toLocaleString()}%`;
    this.startTime = from;
    this.endTime = to;
    this.notSafeToWork = isAdult;
  }
}

export default Scene;