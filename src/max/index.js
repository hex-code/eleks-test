/**
* This function should return max number in array
* @param {Array} arr - this is an array of numbers
* @return {number} - max number in array
* @example
* max([1, 2, 4]); // 4
* max([-1, 0]);   // 0
*/
const max = arr => {
	return arr
		.filter(el => !isFinite(el) || isNaN(el) ? false : true)
		.reduce((acc, curr) => acc > curr ? acc : curr)
};

export default max;
