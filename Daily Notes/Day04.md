Date 4/07/26
- Today, I am focusing on the writing test cases from my document section. It's saying I need to:

Learn: https://www.guru99.com/test-case.html
Do: Write 5 signup test cases:
Invalid email
Weak password
Boundary lengths


I'm reading the article and basically it's telling me what Test cases are and the 'Proper' documentation for that test is. Proper is emphasized because it varies for different companies and what that may look like. 

It also suggests a template of what a usual test set of cases should look like including their test ID, description, expected values, actual values, pass/fail status and something along those lines.

It should not include redundant test cases that has been already covered. Also the intent is to solidify the application before it's ready maximizing the need for bugs and such.


Do:
Invalid Email

testCaseNum: 001
testCaseDes: Test checks if email is in our database.
testCaseData: ntsaimyaj@gmail.com
expValues: The email given did not match our records. Please try again with an email that does match or create an account.
actValues: The email given did not match our records. Please try again with an email that does match or create an account.
PFStatus: Pass // Pass because we are testing an Invalid Email rather than a passing email.

Wrong Password
testCaseNum: 002
testCaseDes: Test checks to see if the password for the email matches and should tell user if it works.
testCaseData: [mockEmail] ntsaimyaj@gmail.com [mockPassword] 123455
expValues: The password does not match the corresponding email. Please reset password.
actValues: The password does not match the corresponding email. Please reset password.
PFStatus: Pass // Pass because we are testing an Wrong PAssword rather than a passing email.

Empty fields
testCaseNum: 003
testCaseDes: Tests if there are empty fields in the password or in the email. If so, notify user and advice them to retype correct password.
testCaseData: [mockEmail] ntsaimyaj@gma il.com [mockPassword] 1234  55
expValues: There are empty fields in the password or email, please retype correct password or reset password.
actValues: There are empty fields in the password or email, please retype correct password or reset password.
PFStatus: Pass // Pass because we are testing an Empty Field rather than a passing email.


Next assignment: ✅ Day 3 — Bug Reporting
Learn
https://www.browserstack.com/guide/how-to-write-a-bug-report
Do
Write 3 bug reports for any site.
Format:
Steps
Expected
Actual


Test Scenario = Idea of what to test.
Test Case = Implementation of how to test that idea.

So basically the beginning talks about how you have to be super super specifc about how its not working-- like the version and the browser.

________________

Working on: https://www.browserstack.com/guide/how-to-write-a-bug-report 

Elements of an effective bug report includes:

What the problem is.

How can the developer reproduce the bug (to see it for themselves).

Where in the software has the problem appeared.

What is the environment (browser, device, ios) did the problem occur?


Essential Parts of Bug Report:


Title/Bug ID
Environment
Steps to reproduce a Bug
Expected Result
Actual Result
Visual Proof (screenshots, videos, text) of Bug
Severity/Priority


Within them they have sub specifics that are helping like the version of the environment like their ios and connection strength to wifi etc.


Here is a template to use if needed for in the future:

Field	Details
Title/Summary	[Clear and concise description of the bug]
Description	[Detailed explanation of the issue and its impact]
Steps to Reproduce	1. [Step 1]
2. [Step 2]

3. [Step 3]

4. [Step 4]

Expected Result	[Describe what should happen]
Actual Result	[Describe what actually happens]
Environment	Operating System: [e.g., Windows 10, macOS 14]
Browser/App Version: [e.g., Chrome 93, App v3.2.1]

Device: [e.g., Desktop, iPhone X]

Severity	[Low / Medium / High / Critical]
Priority	[Low / Medium / High / Urgent]
Attachments	[Screenshots, logs, videos, or console output]


Are article is so repeatative. It's stating the same facts over and over again.



(Done)


Different type of Testing.

This article is going over the different type of testing.