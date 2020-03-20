require("isomorphic-unfetch");

const getDescription = async url => {
  return await (
    await fetch(
      `https://v1.nocodeapi.com/akshitgarg/link_preview/jYIYKEPeLtLUVVxU?url=${url}`
    )
  ).json();
};

module.exports = { getDescription };
