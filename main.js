//1. Function that if sum is less than 100 true : false
function lessThan100(a, b) {
	if(a+b < 100) {
		console.log(true);
	}else{
        console.log(false);
	}
}
lessThan100(99,2);

//2. returns the sum of two arguments
function addition(a, b) {
	console.log(a+b); 
}
addition(5,6);

//3. converting years to days
function ageToDays(age) {
    console.log(`${age *  365} = days`);
}
ageToDays(19);

//4. converting minutes to seconds
function minutesToSec(min) {
    console.log(`${min * 60} = secs`);
}
minutesToSec(2);


//5. returning string
function redundant(str) {
    return str
}
console.log(redundant('apple'))

//6. concatinanting last and fname
function concatName(firstName, lastName) {
	console.log(`FullName: ${firstName+ ' ' + lastName}`)
}
concatName('John', 'Doe');

//7. returning the length of boolean
function countTrue(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        arr[i] ? count++ : count
    }
    return count;
}

const booleanArray = [true, false, true, true, false, true];
console.log(countTrue(booleanArray)); // Output will be 4

//8. Returning an "Add" Function
function addTo(n) {
    return function(x) {
        console.log(n + x) ;
    };
}

// 9. concatinating two arrays
const first = [1,2,3];
const second  = [4,5,6];
const conctinated = first.concat(second);
console.log(conctinated);

// 10. taking array lemgth
const arr = ['hi','I am Abubakrsiddik', 'Say', 'Goodbye'];
console.log(arr.length)


