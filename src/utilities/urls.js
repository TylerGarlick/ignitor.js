/**
 * Converts a database connection object ~> string
 *
 * @param {string} [protocol] - defaults to http
 * @param {string} [username] - '' by default
 * @param {string} [password] - '' by default
 * @param {string} [host] - 'localhost' by default
 * @param {number} [port] - 8529 by default
 * @param {string} [databaseName] - '' by default
 *
 * @returns {string}
 */
export const convert = ({ protocol = 'http', username = '', password = '', host = 'localhost', port = 8529, databaseName = '' } = {}) => {
  let auth = '';
  if (username && password) {
    auth = `${username}:${password}@`;
  }
  
  const baseUrl = `${protocol}://${auth}${host}:${port}`;
  if (databaseName) {
    return `${baseUrl}/_db/${databaseName}`;
  }
  return baseUrl;
};
