import { ADD_CERAMIC, DELETE_CERAMIC } from "./ActionsNames";

export const addCeramic = (index) => {
  return {
    type: ADD_CERAMIC,
    info: "add product to basket",
    payload: index,
  };
};

export const deleteCeramic = (index) => {
  return {
    type: DELETE_CERAMIC,
    info: "delete product from basket",
    payload: index,
  };
};
