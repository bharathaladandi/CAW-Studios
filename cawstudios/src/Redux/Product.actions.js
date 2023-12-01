import {
    APPROVED,
    MISSING,
    MISSING_URGENT
  } from "./Product.types";
  

export const Approve = () => ({
    type: APPROVED,
  });
  
  export const Missing = () => ({
    type: MISSING,
  });
  
  export const MissingUrgent = () => ({
    type: MISSING_URGENT,
  });
  