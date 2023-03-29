// function threeSum(arr, target) {
// // write your code here
// 	arr.sort((a,b)=>a-b);

// 	let potetialSum;
// 	let minDiff=Number.MAX_VALUE;
// 	for(let i=0; i<=arr.length-3 ; i++){
// 		let sum =arr[i]+arr[i+1]+arr[i+2];
// 		let dif=Math.abs(sum - target);
// 		if(dif<minDiff)
// 		{
// 			minDiff=dif;
// 			potetialSum = sum;
// 		}
// 	}
// 	return potetialSum;
  
// }

// module.exports = threeSum;





function threeSum(arr, target) {
// write your code here
  
  arr.sort((a, b) => a - b);
  let potetialSum;
	let minDiff=Number.MAX_VALUE;
  for (let i = 0; i <=arr.length - 3; i++) {
    let k = arr.length - 1;
	  
    while (i+1 < k)
		{
      let sum = arr[i] + arr[i+1] + arr[k];
		let dif=Math.abs(sum - target);
      if (dif < minDiff)
	  {
		  minDiff=dif;
        potetialSum = sum;
      }
     k--;
    }
	  
  }
  return potetialSum;
}
 module.exports = threeSum;