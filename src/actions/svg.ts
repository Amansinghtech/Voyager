export const SVG_RENDERING_FINISHED = 'SVG_RENDERING_FINISHED';
export function svgRenderingFinished(svgString) {
  return {
    type: SVG_RENDERING_FINISHED,
    payload: svgString,
  };
}

export const DOWNLOAD_SVG = 'DOWNLOAD_SVG';
export function downloadSvg() {
  return {
    type: DOWNLOAD_SVG,
  };
}
