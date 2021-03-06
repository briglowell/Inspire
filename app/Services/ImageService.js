//TODO create methods to retrieve data and save to the State
import { ProxyState } from "../AppState.js";
import Image from "../models/Image.js"
import { api } from "./AxiosService.js"

class ImageService {

  async getImg() {
    let res = await api.get("images")
    ProxyState.image = new Image(res.data)
  }
}

const imageService = new ImageService();
export default imageService;