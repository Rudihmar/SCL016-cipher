const cipher = {
  encode: (offset, message) => {
    let finalMessage = "";
    let desplazamiento = parseInt(offset);
    let messageToUppercase = message.toUpperCase();

    for (let index = 0; index < message.length; index++) {
      let letterInAscii = messageToUppercase.charCodeAt(index);
      let newLetterInAscii = ((letterInAscii - 65 + desplazamiento) % 26) + 65;
      let letterEncoded = String.fromCharCode(newLetterInAscii);
      finalMessage += letterEncoded;
    }

    return finalMessage;
  },

  decode: (offset, message) => {
    let finalMessage = "";
    let desplazamiento = parseInt(offset);
    let messageToUppercase = message.toUpperCase();

    for (let index = 0; index < message.length; index++) {
      let letterInAscii = messageToUppercase.charCodeAt(index);
      let newLetterInAscii = ((letterInAscii + 65 - desplazamiento) % 26) + 65;
      let letterEncoded = String.fromCharCode(newLetterInAscii);
      finalMessage += letterEncoded;
    }

    return finalMessage;
  },
};
export default cipher;
