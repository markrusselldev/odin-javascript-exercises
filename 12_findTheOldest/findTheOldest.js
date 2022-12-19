const findTheOldest = function (people) {
  return people.reduce((acc, curr) => {
    // if person is still living, check against this year
    if (!acc.yearOfDeath) acc.yearOfDeath = new Date().getFullYear();
    // no clue if i'm doing this right... but it works
    if (curr.yearOfDeath - curr.yearOfBirth > acc.yearOfDeath - acc.yearOfBirth) {
      acc = curr;
    }
    return acc;
  });
};

// Do not edit below this line
module.exports = findTheOldest;
