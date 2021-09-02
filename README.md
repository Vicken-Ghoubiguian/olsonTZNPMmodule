# olsonTZNPMmodule

This is an NPM module written in JavaScript to get, treat and return datetime for all timezones.

## Contents

1. [What is this project ?](#what_is_this_project)

2. [How is an NPM module structured ?](#how_is_structured_an_npm_module)

3. [How to use it ?](#how_to_use_it)

    * [From locally...](#from_locally)
  
    * [From GitHub...](#from_github)
  
    * [From NPM...](#from_npm)

4. [Little examples](#little_examples)

5. [Where use it ?](#where_use_it)

6. [A few usefull links](#a_few_links)

7. [Conclusion](#conclusion)

__Cultural precision__:

<a name="what_is_this_project"></a>
## What is this project ?

This project consists to develop an NPM module written in JavaScript to get, treat and return datetime for all timezones in the world.

This NPM module is composed of 1 array and 10 functions in total. They are presented right here:

* 1 array called `timezones` and which contains fundamental datas (timezone name, country name, ISO 3166-1 alpha-2 country code, country flag URL and current datetime) for all timezones in the world each in JSON format and which is not exported outside the present module;

* 1 function called `getAllDatasFromMultipleTimezones` and which return all datas from all wished timezones in an array containing elements of 'String' type and even the current datetime in a wished format;

* 1 function called `getAllDatasFromOneTimezone` and which return all datas from only one whished timezone as 'String' type and even the current datetime in a wished format;

* 1 function called `getFlagFromMultipleTimezones` and which return the corresponding flag as 'String' type from all wished timezones in an array containing elements of 'String' type;

* 1 function called `getFlagFromOneTimezone` and which return the corresponding flag as 'String' type from only one whished timezone as 'String' type as a 'String' object;

* 1 function called `getCountryFromMultipleTimezones` and which return the corresponding country name (or country) as 'String' type from all wished timezones in an array containing elements of 'String' type;

* 1 function called `getCountryFromOneTimezone` and which return the corresponding country name (or country) as 'String' type from only one whished timezone as 'String' type as a 'String' object;

* 1 function called `getCountryCodeISO3166_1Alpha2FromMultipleTimezones` and which return the corresponding country code ISO 3166-1 alpha-2 as 'String' type from all wished timezones in an array containing elements of 'String' type;

* 1 function called `getCountryCodeISO3166_1Alpha2FromOneTimezone` and which return the corresponding country code ISO 3166-1 alpha-2 as 'String' type from only one whished timezone as 'String' type as a 'String' object;

* 1 function called `getCountryCodeISO3166_1NumericFromMultipleTimezones` and which return the corresponding country code ISO 3166-1 alpha numeric as 'String' type from all wished timezones in an array containing elements of 'String' type;

* 1 function called `getCountryCodeISO3166_1NumericFromOneTimezone` and which return the corresponding country code ISO 3166-1 alpha numeric as 'String' type from only one whished timezone as 'String' type as a 'String' object;

* 1 function called `getCountryCodeISO3166_1Alpha3FromMultipleTimezones` and which return the corresponding country code ISO 3166-1 alpha-3 from all wished timezones in an array containing elements of 'String' type;

* 1 function called `getCountryCodeISO3166_1Alpha3FromOneTimezone` and which return the corresponding country code ISO 3166-1 alpha-3 as 'String' type from only one whished timezone as 'String' type as a 'String' object;

* 1 function called `getDateTimeFromMultipleTimezones` and which return the current date and time in the whiched format from all wished timezones in an array containing elements of 'String' type;

* 1 function called `getDateTimeFromOneTimezone` and which return the current date and time as 'String' type from only one whished timezone as 'String' type as a 'String' object;

* 1 function called `getGeographicRegionFromMultipleTimezones`

* 1 function called `getGeographicRegionFromOneTimezone` and which return the geographic region as 'String' type from only one whished timezone as 'String' type as a 'String' object.

<a name="how_is_structured_an_npm_module"></a>
## How is an NPM module structured ?

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

// defining the 'wishedTimezone' array which contains the wished timezone...
var wishedTimezone = 'Europe/Paris';

// ========================== display the datetime from the wished timezone... ==========================

// display the '==== display the datetime from the wished timezone... ====' string in console...
console.log("==== display the datetime from the wished timezone... ====\n");

// getting datetime from the wished timezone...
var olsonArray_datetime = olsonTZNPMmodule.getDateTimeFromOneTimezone(wishedTimezone);

// display the 'olsonArray_datetime' associative array which contains the wished timezone as key and its current datetime as value...
console.log(olsonArray_datetime);

// break a line...
console.log("\n");

// ========================== display the country from the wished timezone... ==========================

// display the '==== display the country from the wished timezone... ====' string in console...
console.log("==== display the country from the wished timezone... ====\n");

// getting the country from the wished timezone...
var olsonArray_country = olsonTZNPMmodule.getCountryFromOneTimezone(wishedTimezone);

// display the 'olsonArray_country' associative array which contains the wished timezone as key and its country as value...
console.log(olsonArray_country);

// break a line...
console.log("\n");

// ========================== display the country flag URL from the wished timezone... ==========================

// display the '==== display the country flag URL from the wished timezone... ====' string in console...
console.log("==== display the country flag URL from the wished timezone... ====\n");

// getting the country flag URL from the wished timezone...
var olsonArray_country_flag_url = olsonTZNPMmodule.getFlagFromOneTimezone(wishedTimezone);

// display the 'olsonArray_country_flag_url' associative array which contains the wished timezone as key and its country flag URL as value...
console.log(olsonArray_country_flag_url);

// break a line...
console.log("\n");

// ========================== display the country code ISO 3166 1 Numeric from the wished timezone... ==========================

// display the '==== display the country code ISO 3166 1 Numeric from the wished timezone... ====' string in console...
console.log("==== display the country code ISO 3166 1 Numeric from the wished timezone... ====\n");

// getting the country code ISO 3166 1 Numeric from the wished timezone...
var olsonArray_country_code_iso_3166_1_numeric = olsonTZNPMmodule.getCountryCodeISO3166_1NumericFromOneTimezone(wishedTimezone);

// display the 'olsonArray_country_code_iso_3166_1_numeric' associative array which contains the wished timezone as key and its country code ISO 3166 1 Numeric as value...
console.log(olsonArray_country_code_iso_3166_1_numeric);

// break a line...
console.log("\n");

// ========================== display the country code ISO 3166 1 Alpha 3 from the wished timezone... ==========================

// display the '==== display the country code ISO 3166 1 Alpha 3 from the wished timezone... ====' string in console...
console.log("==== display the country code ISO 3166 1 Alpha 3 from the wished timezone... ====\n");

// getting the country code ISO 3166 1 Alpha 3 from the wished timezone...
var olsonArray_country_code_iso_3166_1_3 = olsonTZNPMmodule.getCountryCodeISO3166_1Alpha3FromOneTimezone(wishedTimezone);

// display the 'olsonArray_country_code_iso_3166_1_3' associative array which contains the wished timezone as key and its country code ISO 3166 1 3 as value...
console.log(olsonArray_country_code_iso_3166_1_3);

// break a line...
console.log("\n");

// ========================== display the country code ISO 3166 1 Alpha 2 from the wished timezone... ==========================

// display the '==== display the country code ISO 3166 1 Alpha 2 from the wished timezone... ====' string in console...
console.log("==== display the country code ISO 3166 1 Alpha 2 from the wished timezone... ====\n");

// getting the country code ISO 3166 1 Alpha 2 from the wished timezone...
var olsonArray_country_code_iso_3166_1_2 = olsonTZNPMmodule.getCountryCodeISO3166_1Alpha2FromOneTimezone(wishedTimezone);

// display the 'olsonArray_country_code_iso_3166_1_2' associative array which contains the wished timezone as key and its country code ISO 3166 1 2 as value...
console.log(olsonArray_country_code_iso_3166_1_2);

// break a line...
console.log("\n");

// ========================== display the geographic region from the wished timezone... ==========================

// display the '==== display the geographic region from the wished timezone... ====' string in console...
console.log("==== display the geographic region from the wished timezone... ====\n");

// getting the geographic region from the wished timezone...
var olsonArray_geographic_region = olsonTZNPMmodule.getGeographicRegionFromOneTimezone(wishedTimezone);

// display the 'olsonArray_geographic_region' associative array which contains the wished timezone as key and its geographic region as values...
console.log(olsonArray_geographic_region);

// break a line...
console.log("\n");

// ========================== display all datas from the wished timezone... ==========================

// display the '==== display all datas from the wished timezone... ====' string in console...
console.log("==== display all datas from the wished timezone... ====\n");

// getting all datas from the wished timezone...
var olsonArray_all_datas = olsonTZNPMmodule.getAllDatasFromOneTimezone(wishedTimezone);

// display the 'olsonArray_all_datas' associative array which contains the wished timezone as key and all of its datas as values...
console.log(olsonArray_all_datas);

// break a line...
console.log("\n");

```

For several timezones:

```js
// import the 'olsonTZNPMmodule' module...
var olsonTZNPMmodule = require('@wicken/olsonTZNPMmodule');

// defining the 'wishedTimezonesArray' array which contains all wished timezones...
var wishedTimezonesArray = ['Europe/Paris', 'Europe/Moscow'];

// ========================== display the datetime from all wished timezones in the 'wishedTimezonesArray' array... ==========================

// display the '==== display the datetime from all wished timezones in the 'wishedTimezonesArray' array... ====' string in console...
console.log("==== display the datetime from all wished timezones in the 'wishedTimezonesArray' array... ====\n");

// getting datetime from all wished timezones stocked in the 'wishedTimezonesArray' array...
var olsonArray_datetime = olsonTZNPMmodule.getDateTimeFromMultipleTimezones(wishedTimezonesArray);

// display the 'olsonArray_datetime' associative array which contains all returning timezones as key and their current datetime as values...
console.log(olsonArray_datetime);

// break a line...
console.log("\n");

// ========================== display the country from all wished timezones in the 'wishedTimezonesArray' array... ==========================

// display the '==== display the country from all wished timezones in the 'wishedTimezonesArray' array... ====' string in console...
console.log("==== display the country from all wished timezones in the 'wishedTimezonesArray' array... ====\n");

// getting countries from all wished timezones stocked in the 'wishedTimezonesArray' array...
var olsonArray_country = olsonTZNPMmodule.getCountryFromMultipleTimezones(wishedTimezonesArray);

// display the 'olsonArray_country' associative array which contains all returning timezones as key and their current country as values...
console.log(olsonArray_country);

// break a line...
console.log("\n");

// ========================== display the country flag URL from all wished timezones in the 'wishedTimezonesArray' array... ==========================

// display the '==== display the country flag URL from all wished timezones in the 'wishedTimezonesArray' array... ====' string in console...
console.log("==== display the country flag URL from all wished timezones in the 'wishedTimezonesArray' array... ====\n");

// getting country flag URL from all wished timezones stocked in the 'wishedTimezonesArray' array...
var olsonArray_country_flag_url = olsonTZNPMmodule.getFlagFromMultipleTimezones(wishedTimezonesArray);

// display the 'olsonArray_country_flag_url' associative array which contains all returning timezones as key and their country flag URL as values...
console.log(olsonArray_country_flag_url);

// break a line...
console.log("\n");

// ========================== display the country code ISO 3166 1 Numeric from all wished timezones in the 'wishedTimezonesArray' array... ==========================

// display the '==== display the country code ISO 3166 1 Numeric from all wished timezones in the 'wishedTimezonesArray' array... ====' string in console...
console.log("==== display the country code ISO 3166 1 Numeric from all wished timezones in the 'wishedTimezonesArray' array... ====\n");

// getting country code iso 3166 1 numeric from all wished timezones stocked in the 'wishedTimezonesArray' array...
var olsonArray_country_code_iso_3166_1_numeric = olsonTZNPMmodule.getCountryCodeISO3166_1NumericFromMultipleTimezones(wishedTimezonesArray);

// display the 'olsonArray_country_code_iso_3166_1_numeric' associative array which contains all returning timezones as key and their country code iso 3166 1 numeric as values...
console.log(olsonArray_country_code_iso_3166_1_numeric);

// break a line...
console.log("\n");

// ========================== display the country code ISO 3166 1 Alpha 3 from all wished timezones in the 'wishedTimezonesArray' array... ==========================

// display the '==== display the country code ISO 3166 1 Alpha 3 from all wished timezones in the 'wishedTimezonesArray' array... ====' string in console...
console.log("==== display the country code ISO 3166 1 Alpha 3 from all wished timezones in the 'wishedTimezonesArray' array... ====\n");

// getting country code iso 3166 1 alpha 3 from all wished timezones stocked in the 'wishedTimezonesArray' array...
var olsonArray_country_code_iso_3166_1_alpha_3 = olsonTZNPMmodule.getCountryCodeISO3166_1Alpha3FromMultipleTimezones(wishedTimezonesArray);

// display the 'olsonArray_country_code_iso_3166_1_alpha_3' associative array which contains all returning timezones as key and their country code iso 3166 1 alpha 3 as values...
console.log(olsonArray_country_code_iso_3166_1_alpha_3);

// break a line...
console.log("\n");

// ========================== display the country code ISO 3166 1 Alpha 2 from all wished timezones in the 'wishedTimezonesArray' array... ==========================

// display the '==== display the country code ISO 3166 1 Alpha 2 from all wished timezones in the 'wishedTimezonesArray' array... ====' string in console...
console.log("==== display the country code ISO 3166 1 Alpha 2 from all wished timezones in the 'wishedTimezonesArray' array... ====\n");

// getting country code iso 3166 1 alpha 2 from all wished timezones stocked in the 'wishedTimezonesArray' array...
var olsonArray_country_code_iso_3166_1_alpha_2 = olsonTZNPMmodule.getCountryCodeISO3166_1Alpha2FromMultipleTimezones(wishedTimezonesArray);

// display the 'olsonArray_country_code_iso_3166_1_alpha_3' associative array which contains all returning timezones as key and their country code iso 3166 1 alpha 2 as values...
console.log(olsonArray_country_code_iso_3166_1_alpha_2);

// break a line...
console.log("\n");

// ========================== display the geographic region from all wished timezones in the 'wishedTimezonesArray' array... ==========================

// display the '==== display the geographic region from all wished timezones in the 'wishedTimezonesArray' array... ====' string in console...
console.log("==== display the geographic region from all wished timezones in the 'wishedTimezonesArray' array... ====\n");



// ========================== display all datas from all wished timezones in the 'wishedTimezonesArray' array... ==========================

// display the '==== display all datas from all wished timezones in the 'wishedTimezonesArray' array... ====' string in console...
console.log("==== display all datas from all wished timezones in the 'wishedTimezonesArray' array... ====\n");

// getting all datas from all wished timezone...
var olsonArray_all_datas = olsonTZNPMmodule.getAllDatasFromMultipleTimezones(wishedTimezonesArray);

// display the 'olsonArray_datetime' associative array which contains all returning timezones as key and all of their datas as values...
console.log(olsonArray_all_datas);

// break a line...
console.log("\n");

```

<a name="where_use_it"></a>
## Where use it ?

<a name="a_few_links"></a>
## A few usefull links

* [NodeJS official website](https://nodejs.org/en/),
* [NPM official website](https://www.npmjs.com/),
* [Creating NodeJS modules](https://docs.npmjs.com/creating-node-js-modules),
* [About the tz database](https://fr.wikipedia.org/wiki/Tz_database),
* [List of tz database time zones](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones),
* [About the ISO 3166-1 standard](https://en.wikipedia.org/wiki/ISO_3166-1)

<a name="conclusion"></a>
## Conclusion

It is an interesting NPM module and can be used in many ways in many areas.
