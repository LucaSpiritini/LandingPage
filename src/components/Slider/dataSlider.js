import { v4 as uuidv4 } from "uuid"

import Img1 from "./images/img1.jpg"
import Img2 from "./images/img2.jpg"

const dataSlider = [
  {
    img: Img1,
    id: uuidv4()
  },
  {
    img: Img2,
    id: uuidv4()
  },
];

export default dataSlider
