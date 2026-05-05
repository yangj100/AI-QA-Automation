Tuesday, May 05, 2026

Today, I'm going through more of the document agenda. 

Starting off: 

I'm learning the different types of testing where over 100 different testing's definitions are presented. I scimmed through various ones and learned the overall theme. The theme is to not only get the app or whatever being tested to be working but also prioritize on what is needed heavily. For instance, if it's banking, it prioirtizes on security rather than most testing.

Not only that, but, also the basics such as accesibility testing, malicious attacking testing(penetration testing), boundary testings and so on.


On the next content: We focuse on SDLC and STLC.

Where the SDLC is where all the standard phases which are involved during tthe software development process and whereas the STLC process defines various  activities to improve the quality of the product.

SDLC is the development side. (which is the actual work that takes place)
STLC is the testing side. (which prepares the environment)

Basically, I learned the comparisons and contrasts towards the two one being the whole life cycle of development and the other being testing. Both having a lot of steps of checking work and documentation. I also learned that they STLC is a subset of SDLC, also Agile Method comes in contact with SDLC working together to make everythign piece together.


_____

Installing Playwright: Day 8

npm init playwright@latest

So I'm learning how to see the tests being run and why there are such things as "workers". Workers are used to split different tests in sections to do them ten at a time as opposed to one. It uses more CPU and ram to run but with balance it's more useful for testing.


Also they are running in different browsers so tthat they can tests these compatabilities simutamiliously.

Now they are making me run this: 

npx playwright test --ui

I ran a couple of simples tests to see what the UI looks like. I installed Playwright.

___ I'm supposed to write a test to google.com to do some random play around tests.

@testPractice.spec.ts

So I asked Chat of how to locate objects in a specific website (this one being Google) because we don't have the original source, but there is something called the DOM where we can see the HTML.