import * as React from "react";

export const isNullUndefinedOrBlank = (obj) => {
  if (obj == null || obj === undefined || (obj === "" && obj !== 0)) {
    return true;
  }
  return false;
};
export const isEmptyObjectOrNullUndefiend = (...value) => {
  if (value && value.length > 0) {
    for (let i = 0; i < value.length; i++) {
      if (isNullUndefinedOrBlank(value[i]) || isEmptyObject(value[i])) {
        return true;
      }
    }
  }
  return false;
};
/*
 *
 * Used to check if object ios empaty or not..!
 * @param obj = 'indecated object which you want to check'
 * return true if empty..!
 */
export const isEmptyObject = (obj) => {
  return obj && Object.keys(obj).length === 0;
};

export const isNumeric = (value) => {
  return /^\d+$/.test(value);
};
export const preventSpace = (event) => {
  event.target.value = event.target.value.replace(/^\s+/g, "");
};

export const removeFooterFromSpecificRoute = (routeName) => {
  return routeName;
};
