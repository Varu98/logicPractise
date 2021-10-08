// A program that reads three strings and prints the longest and smallest one

function checkStringLength(stringA, stringB, stringC) {
  let strings;
  la = stringA.length;
  lb = stringB.length;
  lc = stringC.length;

  if (lb > la && lb > lc) {
    strings = stringB;
  } else if (lc > la && lc > lb) {
    strings = stringC;
  } else if (la > lb && la > lc) {
    strings = stringA;
  }
  console.log(strings);
}
checkStringLength("hello", "varuajkj;", "cat");
