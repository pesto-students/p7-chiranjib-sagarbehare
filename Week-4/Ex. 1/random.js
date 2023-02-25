let myPromise = new Promise(function(myResolve, myReject) {

  let n = getNumber();
  
  console.log(" n :: " + n);
  if(n % 5 == 0){
    myReject();
  } else {
    myResolve();
  }
  
});

// "Consuming Code" (Must wait for a fulfilled Promise)
myPromise.then(
    function(value) { console.log("test 2"); },
    function(error) { console.log("test 3");}
);

function getNumber() {
  return Math.floor((Math.random() * 100) + 1);
}