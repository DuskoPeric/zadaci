function array_merge_sorted(x,z){
	var y=x.concat(z);
	y=y.sort(function (a, b) {  return a - b;  });
	return y;
}
// Yor solution is not OK because PHP function array_unique remove duplicate values from an array and we need all values.
// Time 10min