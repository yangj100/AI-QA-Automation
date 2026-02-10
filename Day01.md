**To Do:**

Watch (30–40 min):
Software Testing Full Course (freeCodeCamp)
https://youtu.be/7r4xVDI2vho 

**And lets follow along with the tutorial**

Write 5 login test cases:
Valid login
Wrong password
Empty fields
Save in Google Doc.

**Notes:**


Learning "jest" in javascript.

We are creating some simple tests.

- So I ran npm init -y to install locally using the default settings. I ran to a problem where it was it was saying that this was disabled on this system but I figured that I could just set the "Set-Execution Policy to use the current user and force.

Basically this is making the computer use the files I downloaded from the web.

- It made an automatic package.json for me. 

- To incorperate jest, I used npm i -D jest (D is for dependency) which downloaded package-lock.json for me


- The video crash course is making me create a functions.js and a functions.tests.js for me to essentially tests and write functions in.

- Im following along with the video as I'm setting it up, I ran to a problem where it's not configured correctly-- different from the video. 
    Error Message: 
    PS C:\Users\LaKookies\Documents\AI-QA-Automation> npm test

> ai-qa-automation@1.0.0 test
> echo "Error: no test specified" && exit 1

"Error: no test specified" 
PS C:\Users\LaKookies\Documents\AI-QA-Automation> 

- I found this from google: https://jestjs.io/docs/getting-started
    Because I wanted to look for the jest docs; I typed into google: "jest docs"

And it look like it could be that I didn't update the package.json to use jest. So let's check.

- So it does to seem like it's working correctly with the testing but not it's not recognizing the test. 
> ai-qa-automation@1.0.0 test
> jest

 FAIL  ./functions.test.js
  ● Test suite failed to run

    Your test suite must contain at least one test.

- It seems that I have written the vice versa code in the wrong files. I wrote what was supposed to be written in function.test.js.
So let me copy and paste both into the right place.

- npm test

> ai-qa-automation@1.0.0 test
> jest

 PASS  ./functions.test.js
  √ Adds 2 + 2 to equal 4 (1 ms)
                                                                                             
Test Suites: 1 passed, 1 total                                                               
Tests:       1 passed, 1 total                                                               
Snapshots:   0 total
Time:        0.225 s
Ran all test suites.
PS C:\Users\LaKookies\Documents\AI-QA-Automation>

Booyahhh!!! Nice!


The next thing that I did was questioned why we need: 

const functions = require('./functions'); 

The reason why is because this acts as an import so that we see what's in functions.

Whats the point of: module.exports = functions;?


https://www.w3schools.com/js/js_modules_export.asp

So basically I'm just exporting this individually.

And then the test is importing it.


- We changed tobe to use .not.toBe just to see other cases.

Now we are checking different types.

We are using null, x, undefinied, defined, truthy, falsy

- Make sure to use toEquals instead of toBe for objects.