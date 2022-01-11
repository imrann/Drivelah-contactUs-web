export const nameValidation = function (value) {
  if (value === "undefined") {
    return "";
  }
  //  else if (value.trim() === '' ) {
  //   return "Please enter some text";
  // }
  else if (value.length > 20) {
    return "Maximum allowed character is 20";
  } else {
    return "";
  }
};

export const emailValidation = function (value) {
  if (value.trim() === "") {
    return "Please enter some text";
  } else if (!/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(value.trim())) {
    return "Please enter a valid email";
  } else {
    return "";
  }
};

export const msgValidation = function (value) {
  if (value === "undefined") {
    return "";
  } else if (value.trim() === "") {
    return "Please enter some text";
  } else if (value.length > 1000) {
    return "Maximum allowed character is 1000";
  } else {
    return "";
  }
};
