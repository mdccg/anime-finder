import axios, { AxiosInstance } from 'axios';
import Scene from './../classes/Scene';
import TraceMoeDTO from './../data-transports/TraceMoeDTO';

class TraceMoeService {
  private _http: AxiosInstance;

  constructor() {
    this._http = axios.create({ baseURL: 'https://api.trace.moe' });
  }

  private sanitizeScenes(scenes: Scene[]): Scene[] {
    let sanitizedScenes: Scene[] = scenes;

    sanitizedScenes = sanitizedScenes.filter(({ notSafeToWork }) => !notSafeToWork);
    sanitizedScenes = sanitizedScenes.filter(({ similarity }) => similarity >= .9);
    sanitizedScenes.forEach((scene) => (scene.similarity = Math.round(scene.similarity)));
    sanitizedScenes = sanitizedScenes.filter(({ episode }) => episode);
    sanitizedScenes.sort((a, b) => {
      if (a.similarity > b.similarity) return -1;
      if (a.similarity < b.similarity) return 1;
      if (a.similarity === b.similarity) {
        if (a.initialInstant > b.initialInstant) return -1;
        if (a.initialInstant < b.initialInstant) return 1;
        return 0;
      }
      return 0;
    });

    return sanitizedScenes;
  }

  async getOccurrences(blob: Blob): Promise<Scene[] | null> {
    const formData = new FormData();
    
    formData.append('image', blob);

    const response = await this._http.post('/search?anilistInfo', formData);
    const { data }: { data: TraceMoeDTO } = response;

    if (data.error) {
      return null;
    }

    const scenes: Scene[] = data.result.map((sceneObject, index) => new Scene(sceneObject, index));
    return this.sanitizeScenes(scenes);
  }
}

export default TraceMoeService;