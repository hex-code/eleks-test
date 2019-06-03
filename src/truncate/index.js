/**
 * This function should truncate the passed string and add "..." to
 * the end of it. Should exist ability to change "..." to some other symbols
 *
 * @param {string} str - string which should be truncated
 * @param {number} length - the max length of string after truncation
 * @param {string} replacer - the string which will be added to the end
 * @return {string} truncated string
 */
const truncate = (str, length = 0, replacer = '...') => {
	return str.length && length < str.length ? 
		length > 0 ? str.slice(0, length).slice(0, -1 * replacer.length) + replacer :
		str.slice(0).slice(0, -1 * replacer.length) + replacer :
		str.slice(0, length);
};

export default truncate;
