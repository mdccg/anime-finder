import axios, { AxiosInstance } from 'axios';
import Scene from './../classes/Scene';
import TraceMoeDTO from './../data-transports/TraceMoeDTO';

class TraceMoeService {
  private _http: AxiosInstance;

  constructor() {
    this._http = axios.create({ baseURL: 'https://api.trace.moe' });
  }

  async getOccurrences(blob: Blob): Promise<Scene[] | null> {
    const formData = new FormData();
    
    formData.append('image', blob);

    const { data }: { data: TraceMoeDTO } = await this._http.post('/search?anilistInfo', formData);
    
    if (data.error) {
      return null;
    }

    const scenes: Scene[] = data.result
      .map((sceneObject) => new Scene(sceneObject))
      .filter(({ notSafeToWork }) => !notSafeToWork)
      .sort((a, b) => Number(a.similarity) + Number(b.similarity));

    return scenes;
  }
}

export default TraceMoeService;