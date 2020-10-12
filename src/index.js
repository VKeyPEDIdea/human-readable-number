module.exports = function toReadable(number) {
  const dictionary = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
    20: 'twenty',
    30: 'thirty',
    40: 'forty',
    50: 'fifty',
    60: 'sixty',
    70: 'seventy',
    80: 'eighty',
    90: 'ninety',
  };

  if (dictionary.hasOwnProperty(number)) {

    return dictionary[number];

  } else if (number > 20 && number < 100) {

    let string = number.toString().split('');

    let dozen = string[0] * 10;
    let unit = string[1];

    return dictionary[dozen] + ' ' + dictionary[unit];

  } else if (number >= 100 && number < 1000) {

    let string = number.toString().split('');

    let hundred = string[0];
    let dozen = string[1] * 10;
    let unit = string[2] * 1;
    let hrn;

    if (!dozen && !unit) {
      hrn = `${dictionary[hundred]} hundred`;
    } else if (!dozen) {
      hrn = `${dictionary[hundred]} hundred ${dictionary[unit]}`;
    } else if (!unit) {
      hrn = `${dictionary[hundred]} hundred ${dictionary[dozen]}`;
    } else if (dozen == 10) {
      hrn = `${dictionary[hundred]} hundred ${dictionary[dozen + unit]}`;
    } else {
      hrn = `${dictionary[hundred]} hundred ${dictionary[dozen]} ${dictionary[unit]}`
    }

    return hrn;
  }
}
