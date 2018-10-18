//----------------------inserting characters in an array------------------------

const insertChar = function( width,lineGenerator ) {
  let { startChar , midChar, endChar } = lineGenerator;
  let insertedCharacters = [];
  insertedCharacters[0] = startChar;
  insertedCharacters[ width-1 ] = endChar;
  for ( let index = 1; index < width-1; index++ ) {
    insertedCharacters[ index ] = midChar;
  }
  return insertedCharacters;
}

exports.insertChar = insertChar;

//----------------------join the characters------------------------

const joinCharacters = function( insertedCharacters ) {
  let joinedCharacters = insertedCharacters.join('');
  return joinedCharacters;
}

//---------------------------creating a single line-------------------------

const createLine = function( width,lineGenerator ) {
  let insertedCharacters = insertChar( width,lineGenerator );
  let line = joinCharacters( insertedCharacters );
  return line;
}

exports.createLine = createLine;

//----------------------creating filled rectangle------------------------------

const createFilledRectangle = function( width,height ) {
  let filledRectangle = [];
  for ( let index = 0; index < height; index++ ) {
    filledRectangle[ index ] = createLine( width,filledLineGenerator );
  }
  return filledRectangle;
}

exports.createFilledRect = createFilledRectangle;

//----------------------creating alternating rectangle------------------------------

const createAlternatingRectangle = function( width,height ) {
  let alternatingRectangle = [];
  for ( let index = 0; index < height; ) {
    alternatingRectangle[ index ] = createLine( width,filledLineGenerator );
    index++;
    if ( index < height ) {
      alternatingRectangle[ index ] = createLine( width,dashedLineGenerator );
      index++;
    }
  }
  return alternatingRectangle;
}

exports.createAlternatingRect=createAlternatingRectangle;

//-------------------------drawing the rectangle------------------------------------

const drawRectangle = function( width,height,type ) {
  let rectangle = {};
  rectangle[ 'filled' ] = createFilledRectangle( width,height );
  rectangle[ 'empty' ] = createEmptyRectangle( width,height );
  rectangle[ 'alternating' ] = createAlternatingRectangle( width,height );

  for ( let index = 0; index < rectangle[ type ].length; index++ ) {
    console.log( rectangle[ type ][ index ] );
  }
  return;
}


//----------------------creating filled rectangle------------------------------

const createEmptyRectangle = function( width,height ) {
  let emptyRectangle = [];
  emptyRectangle[0] = createLine( width,filledLineGenerator );
  emptyRectangle[ height-1 ] = createLine( width,filledLineGenerator );
  for ( let index = 1; index < height-1; index++ ) {
    emptyRectangle[ index ] = createLine( width,emptyLineGenerator );
  }
  return emptyRectangle;
}

exports.createEmptyRect = createEmptyRectangle;

//-----------------------creating left triangle----------------------------

const createLeftTriangle = function( height ) {
  let leftTringle = [];
  for ( let index = 0; index < height; index++ ) {
    leftTringle[ index ] = createLine( index+1,filledLineGenerator );
  }
  return leftTringle;
}

exports.createLeftTriangle = createLeftTriangle;

//-----------------------creating right triangle-----------------------------

const createRightTriangle = function( height ) {
  let rightTriangle = [];
  for ( let index = 1; index < height; index++ ) {
    let spaces = height - index;
    rightTriangle[ index - 1 ] = createLine( spaces,blankLineGenerator ).concat( createLine( index,filledLineGenerator ) );
  }
  rightTriangle[ height-1 ] = createLine( height,filledLineGenerator );
  return rightTriangle;
}

exports.createRightTriangle = createRightTriangle;

//------------------------------create Line Generator-----------------------------

const createLineGenerator = function( startChar,midChar,endChar ) {
  let lineGenerator = {  
                        startChar : startChar ,
                        midChar : midChar ,
                        endChar : endChar
                      };
  return lineGenerator;
}

//--------------------------------Line Generators------------------------------------

let filledLineGenerator = createLineGenerator( '*','*','*' );
let emptyLineGenerator = createLineGenerator( '*',' ','*' );
let dashedLineGenerator = createLineGenerator( '-','-','-' );
let blankLineGenerator = createLineGenerator( ' ',' ',' ' );

//console.log(createRightTriangle(6));

//console.log(insertChar(6,'*','*','*'));

//drawRectangle(5,5,'alternating');
