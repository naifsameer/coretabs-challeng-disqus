/* eslint-disable no-unused-vars */
/** fetch data
 * @param {string} url
 * @param {object} data object
 * @returns {object} response object
*/
const postData =  async (url = "", data) => {
  if (!url) throw new Error("url is required");
  if (!data) throw new Error("data is required");

  const response = await fetch(url, {
    method: "POST",
    mode: "cors",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
    redirect: "follow",
    body: JSON.stringify(data),
  });
  console.log(await response.json());
  return response;
};
