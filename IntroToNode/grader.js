function average(array){
	var total = 0;
	for(var i in array){
		total += array[i];
	}
	return Math.round(total/array.length);
}
var scores1 = [90, 98, 89, 100, 100, 86, 94];
console.log(average(scores1));