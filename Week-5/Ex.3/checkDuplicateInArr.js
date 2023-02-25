function chkDuplicate(arr) {
  let hasSet =   new Set(arr);

  console.log('set size : ' + hasSet.size);
  console.log('array size : ' + arr.length);

  return  hasSet.size != arr.length ? true : false;
}

console.log('Array has duplicate values : ' + chkDuplicate(new Array(5,6,7)));