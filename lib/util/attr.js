/**
 * Clean classname from spaces
 *
 * @param {string} str The attribute's value
 * @returns {String}
 */
function cleanClassname(str) {
  return str.replace(/\s{1,}/g, "");
}

/**
 * Confirms that attribute value is on a single line
 *
 * @param {string} str The attribute's value
 * @returns {Boolean}
 */
function isSingleLine(str) {
  return str.indexOf("\n") === -1;
}

/**
 * Convert a class[Name] attribute's values to an array of classnames
 *
 * @param {string} attrVal The attribute's value
 * @returns {Array}
 */
function getClassNamesFromAttribute(attrVal) {
  if (isSingleLine(attrVal)) {
    // Fix multiple spaces
    attrVal = attrVal.replace(/\s{2,}/g, " ");
    return attrVal.split(" ");
  } else {
    return attrVal.split("\n");
  }
}

module.exports = {
  cleanClassname,
  isSingleLine,
  getClassNamesFromAttribute,
};