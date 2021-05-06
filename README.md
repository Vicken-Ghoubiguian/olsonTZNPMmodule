# olsonTZNPMmodule

This is an NPM module written in JavaScript to get, treat and return datetime for all timezones.

## Contents

1. [What is this project ?](#what_is_this_project)

2. [How to use it ?](#how_to_use_it)

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

<a name="little_examples"></a>
## Little examples

For one timezone:

```js
// import the 'olsonTZNPMmodule' module...
var olsonTZNPMmodule = require('olsonTZNPMmodule');

// getting datetime from the wished timezones...
var olsonArray = olsonTZNPMmodule.getDateTimeForOneTimezone('Europe/Paris');

// display the 'olsonArray' associative array which contains all returning timezones as key and they current datetime as values...
console.log(olsonArray);
```

For several timezones:

```js
// import the 'olsonTZNPMmodule' module...
var olsonTZNPMmodule = require('olsonTZNPMmodule');

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
