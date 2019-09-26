export const timeValidate = time => {
  const re = /\s*([0-2]?[0-9]h)\s*([0-5]?[0-9]m)|(([0-2]?[0-9]h)|([0-5]?[0-9]m))\s*/;
  const match = time.match(re);

  return match && time === match[0];
};

export const numberValidate = value => {
  const re = /\s*[0-9]*\s*/;
  const match = value.match(re);

  return match && value === match[0] && match[0] > 0;
};

export const timeStringToInt = time => {
  const re = /\s*([0-2]?[0-9]h)\s*([0-5]?[0-9]m)|(([0-2]?[0-9]h)|([0-5]?[0-9]m))\s*/;
  const match = time.match(re);

  // return;
  const parseHour = str => {
    return parseInt(str.substring(-1)) * 60;
  };

  const parseMin = str => {
    return parseInt(str.substring(-1));
  };

  if (match[1]) {
    // <= 23h 59 min
    return parseHour(match[1]) + parseMin(match[2]);
  } else if (match[4]) {
    // <= 24 hours
    return parseHour(match[4]);
  } else if (match[5]) {
    // <= 60 min
    return parseMin(match[5]);
  }
};

export const intToTimeString = time => {};
