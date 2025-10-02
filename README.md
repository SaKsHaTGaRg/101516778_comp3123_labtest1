<!-- **How I solved QUESTION1:**  
1. I wrote a function `lowerCaseWords(mixedArray)` that checks if the input is an array.  
2. Inside the function, I wrapped the logic inside a `Promise`.  
3. I used `Array.filter()` to keep only string elements.  
4. Then I used `Array.map()` to transform them into lowercase.  
5. Finally, I resolved the Promise with the new array, or rejected it if input was invalid. 


**How I solved QUESTION2:**  
How I solved it:

I created resolvedPromise() which returns a new Promise.

Inside, I used setTimeout() with 500ms delay, and then called resolve({ message: "delayed success" }).

I created rejectedPromise() in a similar way but used reject({ message: "delayed exception" }).

To test them, I called both functions separately.

Used .then() to log resolved results.

Used .catch() to log rejected results.


**How I solved QUESTION3:** 
For add.js:

I checked if the Logs directory already exists with fs.existsSync().

If not, I created it using fs.mkdirSync().

I then used process.chdir() to change the working directory to Logs.

Using a for loop, I created 10 files (log1.txt to log10.txt) with fs.writeFileSync() and wrote sample text inside each.

For each file created, I printed the filename in the console.

For remove.js:

I checked if the Logs directory exists.

If it does, I used fs.readdirSync() to list all files inside.

For each file, I deleted it using fs.unlinkSync() and logged the filename being removed.

Finally, I deleted the Logs directory itself with fs.rmdirSync(). 
 -->
