// custom typefaces
import "typeface-montserrat"
import "typeface-merriweather"
// normalize CSS across browsers
import "./src/normalize.css"
// custom CSS styles
import "./src/style.css"

import { wrapRootElement as wrap } from "./src/components/wrap-root-element"

export const wrapRootElement = wrap
  