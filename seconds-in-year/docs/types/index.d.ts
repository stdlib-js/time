/*
* @license Apache-2.0
*
* Copyright (c) 2019 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

// TypeScript Version: 4.1

/**
* Returns the number of seconds in a year according to the Gregorian calendar.
*
* ## Notes
*
* -   By default, the function returns the number of seconds in the current year (according to local time). To determine the number of seconds for a particular year, provide either a year or a `Date` object.
* -   The function's return value is a generalization and does **not** take into account inaccuracies due to daylight savings conventions, crossing timezones, or other complications with time and dates.
*
* @param value - year or `Date` object
* @returns number of seconds in a year
*
* @example
* var num = secondsInYear();
* // returns <number>
*
* @example
* var num = secondsInYear( 2016 );
* // returns 31622400
*
* @example
* var num = secondsInYear( 2017 );
* // returns 31536000
*/
declare function secondsInYear( value?: number | Date ): number;


// EXPORTS //

export = secondsInYear;
