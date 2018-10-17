//----------------------inserting characters in an array------------------------

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

//----------------------join the characters------------------------

const joinCharacters = function(repeatedCharArray) {
  let joinedChars = repeatedCharArray.join('');
  return joinedChars;
}

//---------------------------creating a single line-------------------------

const createLine = function(width,startChar,midChar,endChar) {
  let repeatedCharArray = insertChar(width,startChar,midChar,endChar);
  let line = joinCharacters(repeatedCharArray);
  return line;
}

exports.createLine = createLine;

//----------------------creating filled rectangle------------------------------

const createFilledRect = function(width,height) {
  let filledRectArray = [];
  for(let i=0; i<height; i++) {
    filledRectArray[i] = createLine(width,'*','*','*');
  }
  return filledRectArray;
}

//-------------------------drawing the rectangle------------------------------------

const printFilledRectangle = function(width,height) {
  let filledRectangleArray = createFilledRect(width,height);
  for(let i=0; i<filledRectangleArray.length; i++) {
    console.log(filledRectangleArray[i]);
  }
  return;
}

exports.createFilledRect = createFilledRect;

//----------------------creating filled rectangle------------------------------

const createEmptyRectangle = function(width,height) {
  let emptyRectArray = [];
  emptyRectArray[0] = createLine(width,'*','*','*');
  emptyRectArray[height-1] = createLine(width,'*','*','*');
  for(let i=1; i<height-1; i++) {
  emptyRectArray[i] = createLine(width,'*',' ','*');
  }
  return emptyRectArray;
}

exports.createEmptyRect = createEmptyRectangle;

//printFilledRectangle(5,5);
