# olsonTZNPMmodule

This is an NPM module written in JavaScript to get, treat and return datetime for all timezones.

## Contents

1. [What is this project ?](#what_is_this_project)

2. [How to use it ?](#how_to_use_it)

    * [From locally...](#from_locally)
  
    * [From GitHub...](#from_github)
  
    * [From NPM...](#from_npm)

3. [Little examples](#little_examples)

4. [A few usefull links](#a_few_links)

5. [Conclusion](#conclusion)

<a name="what_is_this_project"></a>
## What is this project ?

This project consists to develop an NPM module written in JavaScript to get, treat and return datetime for all timezones.

This NPM module is composed of 1 array and 10 functions in total. They are presented right here:

* 1 array which contains 

*

*

*

*

*

*

*

*

*

*

<a name="how_to_use_it"></a>
## How to use it ?

There are 3 ways to use this NPM module. Here they are:

<a name="from_locally"></a>
### From locally...

First of all, create an empty folder whatever your location in the file system of your computer:
```bash
mkdir test
```
__Clarification:__ the empty folder created is named ```test``` and will be the case for the rest of the demonstration, however you can name it whatever you like.

Now, go to the newly created directory:
```bash
cd test
```
You have to clone the ```olsonTZNPMmodule``` git repos on GitHub:
```bash
git clone https://github.com/Vicken-Ghoubiguian/olsonTZNPMmodule
```
It's time to install the NPM module ```moment-timezone```:
```bash
npm install moment-timezone
```
Now it's time to create your JavaScript file and open it to then use the module ```olsonTZNPMmodule```. To do so, create a file named ```index.js``` and open it:
```bash
touch index.js

nano index.js
```
__Clarification__: the empty file created is named index.js and will be the case for the rest of the demonstration, however you can name it whatever you like.

In the newly created file ```index.js```, it is now time to import the module ```olsonTZNPMmodule```. To do this, copy then paste the following line into the file ```index.js```:
```bash
var olsonTZNPMmodule = require('./olsonTZNPMmodule');
```
Now it's your turn to have fun. So...Get ready, get set and code.

<a name="from_github"></a>
### From GitHub...

First of all, create an empty folder whatever your location in the file system of your computer:
```bash
mkdir test
```
__Clarification:__ the empty folder created is named ```test``` and will be the case for the rest of the demonstration, however you can name it whatever you like.

Now, go to the newly created directory:
```bash
cd test
```
You have to install the NPM module ```olsonTZNPMmodule``` from GitHub via NPM:
```bash
npm install https://github.com/Vicken-Ghoubiguian/olsonTZNPMmodule
```
Now it's time to create your JavaScript file and open it to then use the module ```olsonTZNPMmodule```. To do so, create a file named ```index.js``` and open it:
```bash
touch index.js

nano index.js
```
__Clarification__: the empty file created is named index.js and will be the case for the rest of the demonstration, however you can name it whatever you like.

In the newly created file ```index.js```, it is now time to import the module ```olsonTZNPMmodule```. To do this, copy then paste the following line into the file ```index.js```:
```bash
var olsonTZNPMmodule = require('@wicken/olsonTZNPMmodule');
```
Now it's your turn to have fun. So...Get ready, get set and code.

<a name="from_npm"></a>
### From NPM...

Coming soon...

<a name="little_examples"></a>
## Little examples

Below, there are 2 examples, one for each case (for a single location or many of them), to illustrate how to use this module in any NodeJS project.

For one timezone:

```js
// import the 'olsonTZNPMmodule' module...
var olsonTZNPMmodule = require('@wicken/olsonTZNPMmodule');

// getting datetime from the wished timezones...
var olsonArray = olsonTZNPMmodule.getDateTimeForOneTimezone('Europe/Paris');

// display the 'olsonArray' associative array which contains all returning timezones as key and they current datetime as values...
console.log(olsonArray);
```

For several timezones:

```js
// import the 'olsonTZNPMmodule' module...
var olsonTZNPMmodule = require('@wicken/olsonTZNPMmodule');

// defining the 'wishedTimezonesArray' array which contains all wished timezones we want their current datetime...
var wishedTimezonesArray = ['Europe/Paris', 'Europe/Moscow'];

// getting datetime from all wished timezones stocked in the 'wishedTimezonesArray' array...
var olsonArray = olsonTZNPMmodule.getDatTimeForMultipleTimezones(wishedTimezonesArray);

// display the 'olsonArray' associative array which contains all returning timezones as key and they current datetime as values...
console.log(olsonArray);
```

<a name="a_few_links"></a>
## A few usefull links

<a name="conclusion"></a>
## Conclusion
