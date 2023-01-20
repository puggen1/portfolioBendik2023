export default async function getContent(contentToGet) {
  let response = await fetch("./assets/content/" + contentToGet + ".json").then(
    (response) => response.json()
  );
  return response;
}
