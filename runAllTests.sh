#! /bin/bash
for TESTFILE in tests/*Test.js
do
  echo "--- start  $TESTFILE---"
  node $TESTFILE
  echo "--- stop ---"
done
