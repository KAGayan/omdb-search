/* eslint-disable no-undef */
export const appSettings = {
  API_URL: process.env.REACT_APP_API_URL,
  API_KEY: process.env.REACT_APP_API_KEY,
  PAGINATION_ITEMS_PER_PAGE: parseInt(
    `${process.env.REACT_APP_PAGINATION_ITEMS_PER_PAGE}`,
  ),
  PAGINATION_INITIAL_PAGE: parseInt(
    `${process.env.REACT_APP_PAGINATION_INITIAL_PAGE}`,
  ),
};
