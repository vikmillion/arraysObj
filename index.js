const out = (responce) => {
  responce.forEach((element) => {
    console.log(`name ${element.name} sex ${element.sex}`);
  });
};

const readAr = () => {
  fetch('./file.json')
    .then((res) => res.json())
    .then(out);
};

// readAr();

let nums = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];
let nums2 = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];
let nums3 = [9, 5, 6, 7, 8, 9, 1, 2, 3, 4, 11, 5, 1, 2, 3, 4, 5];
let nums4 = [1, 2, 3, 4, 6, 9, 10, 12];
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

// Вам даны два отсортированных массива, оба из которых содержат только целые числа.
//Ваша задача — найти способ объединить их в один, отсортированный по возрастанию.
// Выполните функцию mergeArrays(arr1, arr2), где arr1 и arr2 — исходные отсортированные массивы. Вам не нужно беспокоиться о проверке, так как arr1 и arr2 должны быть массивами с 0 или более целыми числами.
// Если и arr1, и arr2 пусты, просто верните пустой массив. Примечание: arr1 и arr2 могут быть отсортированы в разном порядке.
// Также arr1 и arr2 могут иметь одинаковые целые числа.
// Удалить дубликаты в возвращаемом результате
const mergeArrays = (arr1 = [5, 2, 3], arr2 = [4, 5, 5]) => {
  let res = [];
  if (arr1.length >= 1 || arr2.length >= 1) {
    res = arr1.concat(arr2);
    console.log('res :>> ', res);
    const res2 = [...new Set(res)].sort((a, b) => a - b);
    return res2;
  } else return res;
};
console.log('mergeArrays :>> ', mergeArrays(nums4, nums3));
// Given a number n, return the number of positive odd numbers below n, EASY!
// Examples (Input -> Output)
// * 7  -> 3 (because odd numbers below 7 are [1, 3, 5])
// * 15 -> 7 (because odd numbers below 15 are [1, 3, 5, 7, 9, 11, 13])
function oddCount(n) {
  let res = [];
  for (let i = 0; i < n; i++) {
    if (i % 2 !== 0) res.push(i);
  }
  return res;
}
console.log('oddCount(7) :>> ', oddCount(15));
//найти поле с false
const testObj = {
  name: null,
  age: 23,
  job: 'Dev',
};

const validTest = !!Object.values(testObj).every((elem) => !!elem);
console.log('valid :>> ', validTest);

//Метод map() создаёт новый массив с результатом вызова указанной функции для каждого элемента массива.
//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/map
const mapDeferent = basedateUsers.map(
  (currentValue, index, array, thisArg) => currentValue.age * 2
);
console.log('mapDeferent :>> ', mapDeferent);
//Метод find() возвращает значение первого найденного в массиве элемента, которое удовлетворяет условию переданному в callback функции.  В противном случае возвращается undefined.
//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/find
const findId = basedateUsers.find((item) => item.id === 3);
console.log('findId :>> ', findId);

//меняем элементы массива
const basedateUpdate2 = basedateUsers.slice(); //этот метод не работает
basedateUpdate2[2].name = 'Vasiliy';
console.log('basedateUsers :>> ', basedateUsers);
console.log('basedateUpdade2 :>> ', basedateUpdate2);
const basedateUpdate3 = JSON.parse(JSON.stringify(basedateUsers.slice())); //это рабочий. но плохо работает с объектами типа даты. нужно иницциализировать  восстанавливать
basedateUpdate3[2].name = 'Andrey';
console.log('basedateUpdade3:>> ', basedateUpdate3);

//рандомное число из массива
let newRandom = nums3[Math.floor(Math.random() * nums3.length)];
// console.log('newRandom :>> ', newRandom);
//заполнение
let new_arr_fill = new Array(10).fill(1, 2, 5);
// console.log('new_arr_fill :>> ', new_arr_fill);
//реверс, массив наоборот
let new_nums = nums.reverse();
// console.log('new_nums :>> ', new_nums);

//пересечение данных массивов
let new_nums3 = [...new Set(nums)].filter((item) => nums3.includes(item));
console.log('new_nums3 :>> ', new_nums3);
// очищение массива
nums2.splice(0, nums2.length);
// nums2 = [];
// console.log('nums2 :>> ', nums2);
//массив объектов
let basedateUpdate = Array.from(
  basedateUsers,
  ({ id, name, sex, city }) => ` ${id} ${name} ${city} ${sex}`
);
// console.log('basedateUpdate :>> ', basedateUpdate);

//splice изменение массива
// console.log('brands :>> ', brands);
const brandsSecond = brands;
1;

brandsSecond.splice(0, 2, 'Xiaomi', 'LG');
// console.log('brandsSecond :>> ', brandsSecond);

brandsSecond.splice(3, 2, 'Xiaomi', 'LG');
// console.log('brandsSecond :>> ', brandsSecond);

//уникальные числа
let unicNumber = [...new Set(nums)];
let unicNumber2 = Array.from(new Set(nums));
// console.log('unicNumber :>> ', unicNumber);
// console.log('unicNumber2 :>> ', unicNumber2);

//array to Obj массив в объект
let obj = [...arr, ...brands];

//Метод reduce() применяет функцию reduce к каждому элементу массива (слева-направо), возвращая одно результирующее значение.
//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
const reduceArr = nums.reduce(
  (accumulator, index, array) => accumulator + index
);
console.log('reduceArr :>> ', reduceArr);

const reduceArr2 = basedateUsers.reduce((acc, index) => {
  console.log('acc :>> ', acc);
  console.log('index :>> ', index);
  return index.id;
}, {});
console.log('reduceArr2 :>> ', reduceArr2);

//сумма элементов массива
const sum = nums.reduce((x, y) => x + y);
// console.log('sum ->', sum);

//Метод filter() создаёт новый массив со всеми элементами, прошедшими проверку, задаваемую в передаваемой функции.
//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
// let new_arr = arr.filter(Boolean);
let filterArr = basedateUsers.filter(
  (element, index, array, thisArg) =>
    element.city === 'Gomel' && element.age > 18 && element.sex === 'M'
);
// console.log('new_arr only Boolean :>> ', new_arr);
console.log('filterArr :>> ', filterArr);
// console.log('obj :>> ', obj);
