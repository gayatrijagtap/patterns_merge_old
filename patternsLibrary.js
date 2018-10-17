const insertChar = function(width,startChar,midChar,endChar) {
  let repeatedCharArray = [];
  repeatedCharArray[0] = [startChar];
  repeatedCharArray[width-1] = [endChar]
  for(let i=1; i<width-1; i++) {
    repeatedCharArray[i]=midChar;
  }
  return repeatedCharArray;
}

exports.insertChar = insertChar;

const joinCharacters = function(repeatedCharArray) {
  let joinedChars = repeatedCharArray.join('');
  return joinedChars;
}

const createLine = function(width,startChar,midChar,endChar) {
  let repeatedCharArray = insertChar(width,startChar,midChar,endChar);
  let line = joinCharacters(repeatedCharArray);
  return line;
}

exports.createLine = createLine;

const createFilledRect = function(width,height) {
  let filledRectArray = [];
  for(let i=0; i<height; i++) {
    filledRectArray[i] = createLine(width,'*','*','*');
  }
  return filledRectArray;
}

const printFilledRectangle = function(width,height) {
  let filledRectangleArray = createFilledRect(width,height);
  for(let i=0; i<filledRectangleArray.length; i++) {
    console.log(filledRectangleArray[i]);
  }
  return;
}

exports.createFilledRect = createFilledRect;

//printFilledRectangle(5,5);
