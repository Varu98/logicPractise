//Write a program that removes the time from the given date string "Wed April 15, 7pm". It should return only the date without the time.

function lessTime(str) {
  str = str.split(" ").map((e) => {
    if (e.includes("am") || e.includes("pm")) {
      return (e = e.replace(" "));
    }
    return e;
  });
  console.log(str);
}
lessTime("thursday 5th of october 5:30pm");

// add comment
