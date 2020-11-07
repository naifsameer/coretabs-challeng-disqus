/* eslint-disable no-unused-vars */
const session = sessionStorage;

/** session stracture for user TODO delete this comment
 * login true or false
 * username,
 * userId,
 * imgSrc,
 */

/** set to session
 * @param {object} object username, userId, imgSrc
*/
const setToSession = (username, userId, imgSrc = "/images/user-img.jpg") => {
  session.setItem("username", username);
  session.setItem("userId", userId);
  session.setItem("imgSrc", imgSrc);
  console.table(session.getItem("username"));
  return session;
};
