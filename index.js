function vaxTrail(object) {
  let A = [],
    B = [],
    C = [],
    D = [],
    resultobject = {};

  for (let i = 0; i < object.length; i++) {
    if (
      object[i].age >= 20 &&
      object[i].age <= 30 &&
      object[i].temperature < 100
    ) {
      A.push(object[i]);
    } else if (
      object[i].age >= 31 &&
      object[i].age <= 40 &&
      object[i].temperature < 100
    ) {
      B.push(object[i]);
    } else if (
      object[i].age >= 41 &&
      object[i].age <= 50 &&
      object[i].temperature < 100
    ) {
      C.push(object[i]);
    } else if (object[i].temperature >= 100) {
      D.push(object[i]);
    }
  }

  A = sortedByEvenAges(A);
  B = sortedByEvenAges(B);
  C = sortedByEvenAges(C);
  D = sortedByEvenAges(D);

  resultobject = { A, B, C, D };

  return resultobject;
}

function sortedByEvenAges(arr) {
  let left = 0,
    right = arr.length - 1;

  while (left < right) {
    while (arr[left].age % 2 == 0 && left < right) {
      left++;
    }

    while (arr[right].age % 2 == 1 && left < right) {
      right--;
    }

    if (left < right) {
      let temp = arr[left];
      arr[left] = arr[right];
      arr[right] = temp;
      left++;
      right--;
    }
  }
  return arr;
}

const givenObject = [
  { name: 'sunil', age: 21, temperature: 98 },
  { name: 'Biplap', age: 22, temperature: 98 },
  { name: 'Kabir', age: 36, temperature: 99 },
  { name: 'Rahul', age: 37, temperature: 99 },
  { name: 'Paul', age: 42, temperature: 98 },
  { name: 'Kat', age: 41, temperature: 98 },
  { name: 'Nayem', age: 50, temperature: 100 },
  { name: 'Sabnaj', age: 51, temperature: 101 },
];

const res = vaxTrail(givenObject);
console.log(res);
