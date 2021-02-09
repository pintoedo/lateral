const request = require('request');

const getRecommendations = (str, func) => {
  const options = {
    method: 'POST',
    url: 'https://news-api.lateral.io/documents/similar-to-text',
    headers: {
      'content-type': 'application/json',
      'subscription-key': process.env.REACT_APP_API_KEY,
    },
    body: {
      text: str,
    },
    json: true,
  };
  request(options, function (error, res, body) {
    if (error) throw new Error(error);
    func(body);
  });
};

const getArticles = async (str, func) => {
  const options = {
    method: 'GET',
    url: 'https://document-parser-api.lateral.io/',
    qs: {
      url: str,
    },
    headers: {
      'content-type': 'application/json',
      'subscription-key': process.env.REACT_APP_API_KEY,
    },
  };
  await request(options, function (error, res, body) {
    if (error) throw new Error(error);
    let parsed = JSON.parse(body);
    let stringed = JSON.stringify(parsed.body);
    return getRecommendations(stringed, func);
  });
};

export { getArticles, getRecommendations };
