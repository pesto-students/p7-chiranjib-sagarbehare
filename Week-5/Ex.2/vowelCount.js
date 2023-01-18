function isVowel(char) {
    return 'aeiou'.includes(char);
}

function vowelCount(vowelStr) {
  let vowelMap = new Map()
  
  for (let char of vowelStr) {
    let lcChar = char.toLowerCase()
    if (isVowel(lcChar)) {
      if (vowelMap.has(lcChar)) {
        vowelMap.set(lcChar, vowelMap.get(lcChar) + 1)
      } else {
        vowelMap.set(lcChar, 1)
      }
    }
  }

  return vowelMap
}

console.log(vowelCount('Sachin Ramesh Tendulkar'))