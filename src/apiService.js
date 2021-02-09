import request from 'request';

const getRecommendations = (str) => {
  const options = {
    method: 'POST',
    url: 'https://news-api.lateral.io/documents/similar-to-text',
    headers: {
      'content-type': 'application/json',
      'subscription-key': 'f53dd4aea5bfc8ecd850fcbe1b08921e',
    },
    body: {
      text: str,
    },
    json: true,
  };
  request(options, function (error, res, body) {
    if (error) throw new Error(error);
    console.log(body);
  });
};

//Receives url from an article and extracts the body (text). Finally calls getRecommendations() passing the text to it.
export const getArticles = async (str) => {
  const options = {
    method: 'GET',
    url: 'https://document-parser-api.lateral.io/',
    qs: {
      url: str,
    },
    headers: {
      'content-type': 'application/json',
      'subscription-key': 'f53dd4aea5bfc8ecd850fcbe1b08921e',
    },
  };
  await request(options, function (error, res, body) {
    if (error) throw new Error(error);
    let parsed = JSON.parse(body);
    let stringed = JSON.stringify(parsed.body);
    return getRecommendations(stringed);
  });
};

// getArticles(
//   'https://www.vice.com/en/article/y3ge9k/cops-pepper-sprayed-a-9-year-old-girl-and-told-her-she-was-acting-like-a-child',
// );

// export default getArticles;
