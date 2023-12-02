import {
    APPROVED,
    MISSING,
    MISSING_URGENT,
    QUANTITY
  } from "./Product.types";
  

export const Approve = (id) => ({
    type: APPROVED,
    payload: { id },
  });
  
  export const Missing = (id) => ({
    type: MISSING,
    payload: { id },
  });
  
  export const MissingUrgent = (id) => ({
    type: MISSING_URGENT,
    payload: { id },
  });
  

  export const Quantity = (id, newQuantity) => ({
    type: QUANTITY,
    payload: {
      id,
      newQuantity,
    },
  });