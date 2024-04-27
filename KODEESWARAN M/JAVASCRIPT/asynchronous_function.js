//Asynchronous function

function getDetails(callback) {
    setTimeout(() => {
        const data = { name: 'Ajay', age: 18 };
        callback(data);
    }, 2000); 
}


getDetails((data) => {
    console.log("Received data:", data);
});

//Asynchronous function using a Promise

function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = { name: 'vijay', age: 40 };
            resolve(data);
        }, 2000); 
    });
}

fetchData()
    .then((data) => {
        console.log("Received data:", data);
    })
    .catch((error) => {
        console.error("Error:", error);
    });



