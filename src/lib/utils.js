export const timeValidate = time => {
  const re = /\s*([0-2]?[0-9]h)\s*([0-5]?[0-9]m)|(([0-2]?[0-9]h)|([0-5]?[0-9]m))\s*/;
  const match = time.match(re);

  return match && time === match[0];
};

export const numberValidate = value => {
  const re = /\s*[0-9]*\s*/;
  const match = value.match(re);

  return match && value === match[0];
};

export const timeStringToInt = time => {};

export const intToTimeString = time => {};
