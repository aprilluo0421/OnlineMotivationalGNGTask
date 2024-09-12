// polyfill for old IE
if (!Array.prototype.fill) {
	Object.defineProperty(Array.prototype, 'fill', {
		value: function(value) {

			// Steps 1-2.
			if (this == null) {
				throw new TypeError('this is null or not defined');
			}

			var O = Object(this);

			// Steps 3-5.
			var len = O.length >>> 0;

			// Steps 6-7.
			var start = arguments[1];
			var relativeStart = start >> 0;

			// Step 8.
			var k = relativeStart < 0 ?
				Math.max(len + relativeStart, 0) :
				Math.min(relativeStart, len);

			// Steps 9-10.
			var end = arguments[2];
			var relativeEnd = end === undefined ?
				len : end >> 0;

			// Step 11.
			var final = relativeEnd < 0 ?
				Math.max(len + relativeEnd, 0) :
				Math.min(relativeEnd, len);

			// Step 12.
			while (k < final) {
				O[k] = value;
				k++;
			}

			// Step 13.
			return O;
		}
	});
}
/*
if (!Array.prototype.map) {
	Array.prototype.map = function(callback) {

		var T, A, k;

		if (this == null) {
			throw new TypeError('this is null or not defined');
		}

		// 1. Let O be the result of calling ToObject passing the |this| 
		//    value as the argument.
		var O = Object(this);

		// 2. Let lenValue be the result of calling the Get internal 
		//    method of O with the argument "length".
		// 3. Let len be ToUint32(lenValue).
		var len = O.length >>> 0;

		// 4. If IsCallable(callback) is false, throw a TypeError exception.
		// See: http://es5.github.com/#x9.11
		if (typeof callback !== 'function') {
			throw new TypeError(callback + ' is not a function');
		}

		// 5. If thisArg was supplied, let T be thisArg; else let T be undefined.
		if (arguments.length > 1) {
			T = arguments[1];
		}

		// 6. Let A be a new array created as if by the expression new Array(len) 
		//    where Array is the standard built-in constructor with that name and 
		//    len is the value of len.
		A = new Array(len);

		// 7. Let k be 0
		k = 0;

		// 8. Repeat, while k < len
		while (k < len) {

			var kValue, mappedValue;

			// a. Let Pk be ToString(k).
			//   This is implicit for LHS operands of the in operator
			// b. Let kPresent be the result of calling the HasProperty internal 
			//    method of O with argument Pk.
			//   This step can be combined with c
			// c. If kPresent is true, then
			if (k in O) {

				// i. Let kValue be the result of calling the Get internal 
				//    method of O with argument Pk.
				kValue = O[k];

				// ii. Let mappedValue be the result of calling the Call internal 
				//     method of callback with T as the this value and argument 
				//     list containing kValue, k, and O.
				mappedValue = callback.call(T, kValue, k, O);

				// iii. Call the DefineOwnProperty internal method of A with arguments
				// Pk, Property Descriptor
				// { Value: mappedValue,
				//   Writable: true,
				//   Enumerable: true,
				//   Configurable: true },
				// and false.

				// In browsers that support Object.defineProperty, use the following:
				// Object.defineProperty(A, k, {
				//   value: mappedValue,
				//   writable: true,
				//   enumerable: true,
				//   configurable: true
				// });

				// For best browser support, use the following:
				A[k] = mappedValue;
			}
			// d. Increase k by 1.
			k++;
		}

		// 9. return A
		return A;
	};
}
*/
function randomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min;
}

function randomInt(max) {
	max = Math.floor(max);
	return Math.floor(Math.random() * max);
}

Array.prototype.repeat = function(n){
	var result = []
	var len = this.length
	for(var i=0; i < len * n; i++)
		result.push(this[i % len])
	return result
}


Array.prototype.combinations = function(n){
	// Return all combinations of length n
	// If this is not a set, you may get unexpected results.
	// If you want permutations of the combinations too, use pcombinations
	var i, j, combs, head, tailcombs
	// all combinations of length n
	if(n > this.length || n <= 0)
		return []
	
	// n-sized set has only one n-sized subset.
	if(n == this.length)
		return [this]
		
	// There are n size-1 subsets in a size-1 set.
	if(n==1){
		combs = [];
		for (i=0; i < this.length; i++)
			combs.push([this[i]])
		return combs
	}
	
	combs = []
	for(i=0; i<this.length-n+1; i++){
		// head is a list that includes only our current element.
		head = this.slice(i, i + 1) // each element once except the n-1 last
		// We take smaller combinations from the subsequent elements
		tailcombs = this.slice(i+1).combinations(n-1) // 
		// For each (n-1)-combination we join it with the current
		// and store it to the set of n-combinations.
		for (var j=0; j<tailcombs.length; j++)
			combs.push(head.concat(tailcombs[j]))
	}
	return combs
}

function combinations(set, n){
	return set.combinations(n)
}

Array.prototype.permutations = function() {
	// Heap's method
	var length = this.length,
		result = new Array([0, 1, 2, 6, 24, 120, 720, 5040, 40320, 362880, 3628800, 39916800, 479001600][length]),
		c = new Array(length).fill(0),
		i = 1,
		j = 1

	result[0] = this.slice()
	while(i < length){
		if (c[i] < i){
			var k = (i % 2) ? c[i] : 0, p = this[i]
			this[i] = this[k]
			this[k] = p
			++c[i]
			i = 1
			result[j] = this.slice()
			++j
		} else {
			c[i] = 0
			++i
		}
	}
	return result;
}

function permutations(a){
	return a.permutations()
}

Array.prototype.pcombinations = function(n){
	// all permutations of combinations of length n
	return [].concat.apply([], this.combinations(n).map(function(e){ return e.permutations() }))
}

// helper functions for shuffle
// equalities
function equal(a, b){ return a==b } // associative
function lt2(a, b){ return Math.abs(a-b)<2 } // non-associative
function allEqual(a, b){ return a[0]==b[0]&&a[1]==b[1]} // associative
//pairing
function pairEqual(a, b){ return a[0]==b[0]&&a[1]==b[1] || a[0]==b[1]&&a[1]==b[0]} // associative
function anyEqual(a, b){ return a[0]==b[0] || a[1]==b[1] || a[0]==b[1] || a[1]==b[0]} // non-associative 
function equalToLast(a, equality){
	//count number of consecutive identical elements at tail
	// for non-associative equality functions pairwiseEqual and equalToLast give different result 
	// (a, b), (b, c), (c, d) = 2 consecutive with equality=anyEqual
	// 1, 2, 3, 4 = 2 consecutive with equality=lt2
	if (a.length<=1)
		return a.length
	for(var i=1; i<a.length; i++)
		if(!equality(a[a.length-1-i], a[a.length-1]))
			return i
	return i
}
function pairwiseEqual(a, equality){
	// count number of consecutive identical elements at tail
	// for non-associative equality functions pairwiseEqual and equalToLast give different result 
	// (a, b), (b, c), (c, d) = 3 consecutive with equality=anyEqual
	// 1, 2, 3, 4 = 4 consecutive with equality=lt2
	if (a.length<=1)
		return a.length
	for(var i=1; i<a.length; i++)
		if(!equality(a[a.length-1-i], a[a.length-i]))
			return i
	return i
}
function shuffle(aa, nMax, equality, tail){
	// permute array and return one level deep copy of aa
	// Reut Sharabani, sequential optimistic retry
	// 
	// nMax:     maximum consecutive number of equal elements
	// equality: Function that defines equality.
	// tail:     Function that determines the association of the consecutive elements.
	//           This is only important if the equality function is non-associative.
	if(equality===undefined)
		equality=equal
	if(tail===undefined)
		tail=equalToLast
	var a = []; for(var i=0; i<aa.length; i++) a.push(aa[i]) // one level deep copy
	var b = []
	nFail = 0
	while (a.length>0){
		//console.log("b: " + b + ", tail" + countTail(b))
		// test if last nMax elements of b are the same:
		if (nMax && b.length >= nMax && tail(b, equality)==nMax){
			// add some other element (it may not exist)
			// make array without the last element of b
			var a2 = []; 
			for(var i=0; i<a.length; i++) 
				if(!equality(a[i], b[b.length-1])) 
					a2.push(a[i])
			//console.log("  draw from: " + a2)
			if(a2.length==0){ // failure, restart
				//console.log("fail"+b)
				nFail++
				a = []; for(var i=0; i<aa.length; i++) a.push(aa[i])
				b = []
			} else {
				var j = randomInt(a2.length)
				b.push(a2[j])
				a.splice(a.indexOf(a2[j]), 1) // remove from a, always success
			}
		} else {
			// add any element from a to b
			var	j = randomInt(a.length)
			b.push(a.splice(j, 1)[0]) // move element from a to b
		}
	}
	return b
}


function randomCombination(aa, n){
	// get a combination of n elements of array a
	// deep copy of aa
	var a = []; for(var i=0; i<aa.length; i++) a.push(aa[i])
	var b = []
	for(var i=0; i<n; i++){
		var	j = randomInt(a.length)
		b.push(a.splice(j, 1)[0]) // move element from aa to b
	}
	return b
}

function pickFromRange(nRange, nPicks, minDist){
	// pick nPicks indices from a range of length nRange with a minimum distance of minDist
	var picks = []
	var min = minDist
	var max = nRange - minDist // exclusive
	var iTotal = 0
	pickLoop: for(var i=0; i<nPicks; ){
		if(iTotal++>100000){ // fail
			//minDist=0 // lower your standards
			//throw "ERROR: Failure generating sequence:\n " + picks
			console.log("ERROR: could not generate list of checks")
			return [] // silently fail
		}
		var e = Math.floor(Math.random() * (max - min)) + min
		testLoop: for(j=e-minDist; j<=e+minDist; j++){
			if(picks.indexOf(j)!=-1){
				continue pickLoop
			}
		}
		picks.push(e)
		i++
	}
	return picks
}
//console = {log: print}
//var a = [1, 1, 2, 2, 4, 4, 5, 5]
//var b = [[1, 2], [2, 1], [1, 2], [5, 5]]
//console.log(randomCombination(a, 2))
//print(JSON.stringify([1,2,3].combinations(2)))
//print(JSON.stringify([2,1].permutations()));
//print(JSON.stringify([1,2,3].combinations(2).map(function(e){ return e.permutations() })));
//console.log(shuffle(a, 2, close))
//console.log(JSON.stringify(shuffle(b, 2, pairEqual)))
//print(pickFromRange(200, 20, 3))

