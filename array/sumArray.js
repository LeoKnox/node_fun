var petCount = [4,2,0,1,2,0,3];
var numStudents = petCount.length;
var totalPets = 0;

for (var i = 0; i < numStudents; i++) {
  totalPets += petCount[i];
}

totalPets2 = petCount.sum;

console.log(totalPets2 / numStudents);
