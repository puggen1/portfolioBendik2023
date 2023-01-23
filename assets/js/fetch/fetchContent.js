/**
 *
 * @param {string} contentToGet the filename of the content to get
 * @returns {Promise} a promise that will return the content
 */
export default async function getContent(contentToGet) {
  let response = await fetch("./assets/content/" + contentToGet + ".json").then(
    (response) => response.json()
  );
  return response;
}
