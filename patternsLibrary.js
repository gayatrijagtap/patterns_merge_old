//----------------------inserting characters in an array------------------------

const insertChar = function(width,startChar,midChar,endChar) {
  let repeatedCharArray = [];
  repeatedCharArray[0] = startChar;
  repeatedCharArray[width-1] = endChar;
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

//----------------------creating alternating rectangle------------------------------

const createAlternatingRect = function(width,height) {
  let alternatingRectArray = [];
  for(let i=0; i<height;) {
    alternatingRectArray[i] = createLine(width,'*','*','*');
    i++;
    if(i<height) {
      alternatingRectArray[i] = createLine(width,'-','-','-');
      i++;
    }
  }
  return alternatingRectArray;
}

exports.createAlternatingRect=createAlternatingRect;

//-------------------------drawing the rectangle------------------------------------

const drawRectangle = function(width,height,pattern) {
  let rectangle={};
  rectangle['filled']=createFilledRect(width,height);
  rectangle['empty']=createEmptyRectangle(width,height);
  rectangle['alternating']=createAlternatingRect(width,height);

  for(let i=0; i<rectangle[pattern].length; i++) {
    console.log(rectangle[pattern][i]);
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

//-----------------------creating left triangle----------------------------

const createLeftTriangle = function(height) {
  let leftTringle = [];
  for(let i=0; i<height; i++) {
    leftTringle[i] = createLine(i+1,'*','*','*');
  }
  return leftTringle;
}

exports.createLeftTriangle = createLeftTriangle;

//-----------------------creating right triangle-----------------------------

const createRightTriangle = function(height) {
  let rightTriangle = [];
  for(let i=1; i<height; i++) {
    let blanks = height-i;
    rightTriangle[i-1] = createLine(blanks,' ',' ',' ').concat(createLine(i,'*','*','*'));
  }
  rightTriangle[height-1] = createLine(height,'*','*','*');
  return rightTriangle;
}

exports.createRightTriangle = createRightTriangle;

console.log(createRightTriangle(6));

//console.log(insertChar(6,'*','*','*'));

//drawRectangle(5,5,'alternating');
