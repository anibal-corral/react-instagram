import { keyframes, css } from 'styled-components'
const fadein = ({ time = '1s', type = 'ease' } = {}) => {
  return css`
    animation: ${time} ${fadeInKeyrames} ${type};
    `
}

const fadeInKeyrames = keyframes`
from {
  filter: blur(5px);
  opacity:0
}
to {
  filter: blur(0);
  opacity:1
}
`
export { fadein }
