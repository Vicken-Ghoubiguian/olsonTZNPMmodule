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

This NPM module is composed of 1 array and 4 functions in total. They are presented right here:

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

```bash
mkdir test
```
```bash
cd test
```
```bash
git clone https://github.com/Vicken-Ghoubiguian/olsonTZNPMmodule
```
```bash
touch index.js

nano index.js
```
```bash
var openWeather = require('./olsonTZNPMmodule');
```
<a name="from_github"></a>
### From GitHub...

```bash
mkdir test
```
```bash
cd test
```
```bash
npm install https://github.com/Vicken-Ghoubiguian/olsonTZNPMmodule
```
```bash
touch index.js

nano index.js
```
```bash
var openWeather = require('@wicken/olsonTZNPMmodule');
```
<a name="from_npm"></a>
### From NPM...

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
