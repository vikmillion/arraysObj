let nums = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];
let nums2 = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];
let nums3 = [9, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5];
let nums4 = [9, 5, [6, 7], 8, [9, 1, [2], 3], 4, 5, 1, 2, 3, 4, 5];

let brands = ['Samsung', 'Apple', 'OnePlus', 'Vivo', 'Realme', 'Oppo'];
let arr = [false, 'red', 0, 2, '', null, true, NaN, undefined];
let basedateUsers = [
  { id: 1, name: 'Ivan', sex: 'M', city: 'Gomel', age: 32 },
  { id: 2, name: 'Sergey', sex: 'M', city: 'Minsk', age: 25 },
  { id: 3, name: 'Petr', sex: 'M', city: 'Minsk', age: 22 },
  { id: 4, name: 'Elena', sex: 'F', city: 'Gomel', age: 27 },
  { id: 5, name: 'Kate', sex: 'F', city: 'Gomel', age: 12 },
  { id: 6, name: 'Max', sex: 'M', city: 'Gomel', age: 29 },
  { id: 7, name: 'Aglaya', sex: 'F', city: 'Brest', age: 42 },
];
const chunk = document.getElementById('chunk');
chunk.innerHTML = `nums => ${nums} <br> ${_.chunk(nums, 2).join('<br>')}`;

const findIndex = document.getElementById('findIndex');
findIndex.innerHTML = `findIndex  Sergey <br>${_.findIndex(
  basedateUsers,
  (inx) => inx.name === 'Sergey'
)}`;

const flatten = document.getElementById('flatten');
flatten.innerHTML = 'see console.log';
console.log('nums4 :>> ', nums4);
console.log('nums4New :>> ', _.flatten(nums4));
