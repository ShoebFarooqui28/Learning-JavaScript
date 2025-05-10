const promiseOne = new Promise((resolve) => {
  // 1st: Synchronous code. This executor function runs immediately and goes into the Call Stack
  console.log(1); 

  // 2nd: Still synchronous. Sets the Promise state to "Fulfilled" and value to "Resolved"
  resolve(2); 
  // Note: resolve() does NOT immediately run .then — it just marks the promise as fulfilled and schedules the .then handler into the Microtask Queue
});

promiseOne
// .then() sets up a Promise Fulfillment Reaction
.then(
  res => { 
    // This handler is added to the Microtask Queue.
    // It will run AFTER the current Call Stack is empty.
    console.log(res); // Will go into the Call Stack later (after synchronous code finishes)
  }
);

// 3rd: Synchronous code. Immediately goes into the Call Stack and runs
console.log(3); 

// Output Event : 1 --> 3 --> 2

const slowPromise = new Promise((resolve, reject) => {
  setTimeout(()=>{
    let error = true;
    if (!error){
      resolve("Delay Done");
    }
    else{
      reject("Error: because error is set to true")
    }
  }, 10000)//10 sec delay
})

async function consumeSlowPromise() {
  try {
    console.log("Before Await");
    const response = await slowPromise; //The code after this gets into the micro task queue and the resolved value goes into the result variable
    console.log("After Await", response) 
  } catch (error) {
    console.log(error)
  }
};

consumeSlowPromise(); 