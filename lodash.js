let nums = [1, 2, 3, 4, 5, 0, 7, 1, 2, 3, 4, 5];
let nums2 = [1, 2, 3, 4, 5, 1, 0, 8, 15, 25, 2, 3, 4, 5];
let nums3 = [9, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5];
let nums4 = [9, 5, [6, 7], 8, [9, 1, [2], 3], 4, 5, 1, 2, 3, 4, 5];

let brands = ['Samsung', 'Apple', 'OnePlus', 'Vivo', 'Realme', 'Oppo'];
let arr = [false, 'red', 0, 2, '', null, true, NaN, undefined];
let basedateUsers = [
  { id: 1, name: 'Ivan', sex: 'M', city: 'Gomel', age: 32, active: false },
  { id: 2, name: 'Sergey', sex: 'M', city: 'Minsk', age: 25, active: false },
  { id: 3, name: 'Petr', sex: 'M', city: 'Minsk', age: 22, active: true },
  { id: 4, name: 'Elena', sex: 'F', city: 'Gomel', age: 27, active: true },
  { id: 5, name: 'Kate', sex: 'F', city: 'Gomel', age: 12, active: false },
  { id: 6, name: 'Max', sex: 'M', city: 'Gomel', age: 29, active: false },
  { id: 7, name: 'Aglaya', sex: 'F', city: 'Brest', age: 42, active: true },
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

const flattenDeep = document.getElementById('flattenDeep');
flattenDeep.innerHTML = 'see console log flattenDeep=>';
console.log('flattenDeep (nums4) :>> ', _.flattenDeep(nums4));

const intersection = document.getElementById('intersection');
intersection.innerHTML = ` nums2 ${nums2}<br>nums3 ${nums3}<br> intersection ${_.intersection(
  nums2,
  nums3
)}`;

const takeWhile = document.getElementById('takeWhile');
const takeWhile2 = document.getElementById('takeWhile2');
takeWhile.innerHTML = `basedateUsers <br>${JSON.stringify(basedateUsers)}`;
let res = JSON.stringify(_.takeWhile(basedateUsers, ['active', false]));
takeWhile2.innerHTML = res;
