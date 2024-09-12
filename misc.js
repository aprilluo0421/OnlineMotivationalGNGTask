function countTrue(a, n){
	// count number of true's in the last n elements of array
	var nTrue = 0
	for(var i=a.length-n; i<a.length; i++)
		if(a[i])
			nTrue++
	return nTrue
}

function countFalse(a){
	// count number of consecutive false's at the end of array
	for(var i=0; i<a.length; i++)
		if(a[a.length-i-1])
			break
	return i
}