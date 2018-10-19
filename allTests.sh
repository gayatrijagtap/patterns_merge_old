#! /bin/bash
for TESTFILE in tests/*.js
do
  echo "--- start  $TESTFILE---"
  node $TESTFILE
  echo "--- stop ---"
done
