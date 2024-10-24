// 1.  Terdapat string "NEGIE1", silahkan reverse alphabet nya dengan angka tetap diakhir kata Hasil = "EIGEN1"
const data = "NEGIE1";

let dataArray = data.split("").slice(0, -1);
let dataNumber = data.slice(-1);

function sortData(sort) {
  sort.reverse();
  return sort;
}

let reversedArray = sortData(dataArray);
let join = reversedArray.join("");
let result1 = join + dataNumber;
console.log(`Hasil reverse dari string tersebut:`, result1);

//2.  Diberikan contoh sebuah kalimat, silahkan cari kata terpanjang dari kalimat tersebut,
//    jika ada kata dengan panjang yang sama silahkan ambil salah satu

const sentence =
  "Batu karang yang ada di Pantai Sepanjang mempunyai bentuk yang sangat indah";

function longest(sentence) {
  let words = sentence.split(" ");
  let longestWord = words.reduce((long, word) => {
    return word.length > long.length ? word : long;
  });
  return longestWord;
}
let result2 = longest(sentence);
console.log(`Salah satu kata terpanjang dari kalimat tersebut:`, result2);

//3.  Terdapat dua buah array yaitu array INPUT dan array QUERY,
//    silahkan tentukan berapa kali kata dalam QUERY terdapat pada array INPUT

const input = ["apel", "jeruk", "pisang", "jeruk", "jeruk", "pisang"];
const query = ["pisang", "mangga", "jeruk"];

function countQuery(input, query) {
  return query.map((a) => input.filter((fruit) => fruit === a).length);
}

let result3 = countQuery(input, query);
console.log(`Jumlah query dalam input tersebut:`, result3);

//4. Silahkan cari hasil dari pengurangan dari jumlah diagonal sebuah matrik NxN

const matrix = [
  [1, 2, 0],
  [4, 5, 6],
  [7, 8, 9],
];

function sumDiagonal(matrix) {
  let b = matrix.length;
  let firstDiagonal = 0;
  let secondDiagonal = 0;
  for (let i = 0; i < b; i++) {
    firstDiagonal += matrix[i][i];
    secondDiagonal += matrix[i][b - 1 - i];
  }
  let min = firstDiagonal - secondDiagonal;
  return min;
}
let result4 = sumDiagonal(matrix);
console.log(
  `Hasil pengurangan dari penjumlahan kedua diagonal matrik tersebut:`,
  result4,
);
