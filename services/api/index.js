import 'isomorphic-unfetch';

export const getFrontpage = async (page = 1) => {
  return fetch(`https://api.hackerwebapp.com/news?page=${page}`);
};

export const getNewPage = async (page = 1) => {
  return fetch(`https://api.hackerwebapp.com/newest?page=${page}`);
};
