function leapYear(startYear,endYear)
{ 
  var tahun_kabisat = Array();
  for (let year = startYear; year <= endYear; year++) {
     if (((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)) {
        tahun_kabisat.push(year)
     }
  }
  return tahun_kabisat
}

console.log(leapYear('1790','2020'))