const palindrome = (str) => {
  
    var regex= /[\W_]/g; 
    
    var lowRegStr = str.toLowerCase().replace(regex, '');
    
    var reverseStr = lowRegStr.split('').reverse().join(''); 
    
    return reverseStr === lowRegStr;
  }

  console.log(palindrome('ibu ratna antar ubi'))
  console.log(palindrome('kasur ini rusak'))
  console.log(palindrome('A nut for a jar of tuna.'))
  console.log(palindrome('Borrow or rob?'))
  console.log(palindrome('Was it a car or a cat I saw?'))
  console.log(palindrome('Yo, banana boy!'))
  console.log(palindrome('UFO tofu?'))