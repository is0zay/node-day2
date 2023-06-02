//Sync Example

// console.log('Starting the program');

// function sleep(milliseconds) {		//Creating a function that will execiteour time
// 	let startTime = new Date().getTime();
// 	console.log("Program is running");

// 	while(new Date().getTime() < startTime + milliseconds) {
// 		console.log("In progress");
// 	}
// 	console.log("Program is done. ");
// }

// sleep(1);	// calling our function to execute

// console.log("Do something else");


// Async Example

console.log("Starting program");

function sleep(milliseconds) {
	console.log("program is running");
	setTimeout(()=>{
		console.log("Program is done");
	}, milliseconds);
}

sleep(1);
console.log("Do something else");