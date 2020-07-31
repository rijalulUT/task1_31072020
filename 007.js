let temp = `Aku ingin begini
Aku ingin begitu
Ingin ini itu banyak sekali

Semua semua semua
Dapat dikabulkan
Dapat dikabulkan
Dengan kantong ajaib

Aku ingin terbang bebas
Di angkasa
Hei… baling baling bambu

La... la... la...
Aku sayang sekali
Doraemon

La... la... la...
Aku sayang sekali`;

let lowercase = temp.toLowerCase()
let countAku = (lowercase.match(/aku/g) || []).length;
let countIngin = (lowercase.match(/ingin/g) || []).length;
let countDapat = (lowercase.match(/dapat/g) || []).length;
console.log(countAku);
console.log(countIngin);
console.log(countDapat);
