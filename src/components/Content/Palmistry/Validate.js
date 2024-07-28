export const isValidEmail = (value = "") => {
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value);
};

export const isValidName = (value = "") => {
  return /^[^\s].+[a-zA-Z]+[a-zA-Z]+$/.test(value);
};

export const isNumber = (value = "") => {
  var res = value.charAt(0);
  // eslint-disable-next-line radix
  res = Number.isInteger(parseInt(res));
  return res;
};

export const isValidMobile = (value = "") => {
  return /^(\d*\.)?\d+$/.test(value);
};
export const isValidMobileNumber = (value = "") => {
  return /^[6,7,8,9][0-9]{0,9}$/.test(value);
};

export const isUserEmail = (value = "") => {
  let isValid = "";
  if (value === "") {
    isValid = "Please enter email id";
  } else if (!isValidEmail(value)) {
    isValid = "Please enter valid email id";
  }
  return isValid;
};

export const isUserName = (value = "") => {
  let isValid = "";
  if (value === "") {
    isValid = "Please enter name";
  } else if (!isValidName(value)) {
    isValid = "Please enter valid name";
  }
  return isValid;
};

export const isUserNumber = (value = "") => {
  let isValid = "";
  if (value === "") {
    isValid = "Please enter mobile number";
  } else if (isNumber(value) && !isValidMobile(value)) {
    isValid = "Please enter a valid mobile number";
  } else if (isNumber(value) && !isValidMobileNumber(value)) {
    isValid = "Mobile number should  be start with 6,7,8,9";
  }
  return isValid;
};

export const isValidCity = (value = "") => {
  let isValid = "";
  if (value === "") {
    isValid = "Please enter city";
  }
  return isValid;
};
