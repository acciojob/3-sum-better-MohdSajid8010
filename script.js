function threeSum(arr, target) {
// write your code here
	arr.sort((a,b)=>a-b);

	let potetialSum;
	let minDiff=Number.MAX_VALUE;
	for(let i=0; i<=arr.length-3 ; i++){
		let sum =arr[i]+arr[i+1]+arr[i+2];
		let dif=Math.abs(sum - target);
		if(dif<minDiff)
		{
			minDiff=dif;
			potetialSum = sum;
		}
	}
	return potetialSum;
  
}

module.exports = threeSum;
