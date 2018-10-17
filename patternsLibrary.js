const repeatChar = function(start,end,character) {
  let repeatedCharArray = [];
  for(let i=start; i<end; i++) {
    repeatedCharArray[i]=character;
  }
  return repeatedCharArray;
}

exports.repeatChar = repeatChar;

const joinCharacters = function(repeatedCharArray) {
  let joinedChars = repeatedCharArray.join('');
  return joinedChars;
}

const createLine = function(start,end,character) {
  let repeatedCharArray = repeatChar(start,end,character);
  let line = joinCharacters(repeatedCharArray);
  return line;
}

exports.createLine = createLine;

const createFilledRect = function(width,height) {
  let filledRectArray = [];
  for(let i=0; i<height; i++) {
    filledRectArray[i] = createLine(0,width,'*');
  }
  return filledRectArray;
}

exports.createFilledRect = createFilledRect;
