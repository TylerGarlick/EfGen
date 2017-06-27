/**
 * Constants
 * @public
 */
export const PARAMETER_RESERVED = [`string`];
export const COLUMN_RESERVED = [`namespace`];

/**
 * Private Constants
 * @private
 */
const _ = `_`;
const NUMBER = `Number`;


/**
 * Sanitizes a Column Name
 *
 * @public
 * @param {string} name
 *
 * @returns {string}
 */
export const column = name => includes(COLUMN_RESERVED, replace(name));


/**
 * Sanitizes a CS Parameter name
 *
 * @public
 * @param {string} name
 *
 * @returns {string}
 */
export const parameter = name => includes(PARAMETER_RESERVED, replace(name));


/**
 * Replace bad values
 *
 * @private
 * @param {string} value
 *
 * @returns {string}
 */
const replace = value => lowercase(value.replace(` `, _)
                                        .replace(`/`, _)
                                        .replace(`&`, _)
                                        .replace(`(`, _)
                                        .replace(`)`, _)
                                        .replace(`#`, NUMBER));

/**
 * Forces a string to lowercasing
 *
 * @private
 * @param {*} value
 *
 * @returns {string}
 *
 */
const lowercase = value => value.toString().toLowerCase();

/**
 * Appends Value to end the end of a string
 *
 * @private
 * @param {string} name
 *
 * @returns {string}
 */
const append = name => `${name}Value`;


/**
 *
 * @param reserved
 * @param value
 */
const includes = (reserved, value) => reserved.includes(value.toLowerCase()) ? append(value) : value;

