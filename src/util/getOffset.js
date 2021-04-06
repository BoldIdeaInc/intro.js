/**
 * Get an element position on the page relative to another element (or root)
 * Thanks to `meouw`: http://stackoverflow.com/a/442474/375966
 *
 * @api private
 * @method _getOffset
 * @param {Object} element
 * @param {Object} relativeEl
 * @returns Element's position info
 */
export default function getOffset(element, relativeEl) {
  const body = document.body;
  const docEl = document.documentElement;
  /**
   * FIXME: setting scrollTop and scrollLeft was breaking on relatively-positioned tours when the
   * page body was scrollable. For some reason, removing scrollTop and scrollLeft completely fixed
   * the issue, but I'm not sure if this breaks other use-cases.
   */
  //const scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
  //const scrollLeft = window.pageXOffset || docEl.scrollLeft || body.scrollLeft;
  const scrollTop = 0;
  const scrollLeft = 0;
  relativeEl = relativeEl || body;
  const x = element.getBoundingClientRect();
  const xr = relativeEl.getBoundingClientRect();
  return {
    top: x.top + scrollTop - xr.top,
    width: x.width,
    height: x.height,
    left: x.left + scrollLeft - xr.left,
  };
}
