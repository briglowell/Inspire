
import imageService from "../Services/ImageService.js";
import { ProxyState } from "../AppState.js";

//      (you may wish to set it as a background image: https://www.w3schools.com/JSREF/prop_style_backgroundimage.asp)

function _drawImage() {
  let img = ProxyState.image.url
  document.body.style.backgroundImage = `url('${img}')`;
}

export default class ImageController {

  constructor() {
    ProxyState.on("image", _drawImage)
    this.getImg()
  }

  getImg() {
    try {
      imageService.getImg();
    } catch (error) {
      console.error(error)
    }
  }
}