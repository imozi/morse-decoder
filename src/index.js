const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
  space: " ",
};

function decode(expr) {

  const exprMatch = expr.match(/\d{10}|\*{10}/g);
  let decode = "";

  exprMatch.forEach((e) => {
    if (e === "**********") {
      return (decode += MORSE_TABLE.space);
    }

    const arr = e.match(/\d{2}/g);

    const code = arr
      .filter((e) => {
        return e === "11" || e === "10";
      })
      .map((e) => {
        if (e === "11") return "-";
        if (e === "10") return ".";
      })
      .join("");

    decode += MORSE_TABLE[code];
  });

  return decode;
}

module.exports = {
  decode,
};
