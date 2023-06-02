// Authentication program

// const { rejects } = require("assert");
// const { resolve } = require("path");


const userLogin = () => {
	
	console.log("Enter Username and Password");
	let userName = prompt("Enter Username:");
	let passWord = prompt("Enter Password:");

	return new Promise ((resolve, rejects) => {

		setTimeout(() => {
			console.log("Performing User Authentication");

			if(userName === "is0zay" && passWord === "is0zay") {
				resolve("User Authenticated!");
			}else {
				rejects("Authentication Failed!")
			}
		}, 2000);
	});
};

function goToHomePage (userAuthStatus) {
	return Promise.resolve(`Go to homepage as: ${userAuthStatus}`)
}


// Sync

// userLogin()
// .then((response) => {	// First function 
// 	console.log("Validated User")
// 	return goToHomePage(response);
// })
// .then((userAuthStatus) => {	// Second function
// 	console.log(userAuthStatus)
// })
// .catch((err) => {
// 	console.log(err);
// })

// Async

async function performTask() {
	const response = await userLogin();
	console.log("Validated User");
	const userAuthStatus = await goToHomePage(response);
	console.log(userAuthStatus);
}

performTask();