/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
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

'use strict';

// MODULES //

var isDateObject = require( '@stdlib/assert/is-date-object' );
var isString = require( '@stdlib/assert/is-string' ).isPrimitive;
var isInteger = require( '@stdlib/assert/is-integer' ).isPrimitive;
var daysInMonth = require( './../../days-in-month' );
var isLeapYear = require( '@stdlib/assert/is-leap-year' );
var lowercase = require( '@stdlib/string/lowercase' );
var format = require( '@stdlib/string/format' );
var MONTHS = require( './months.json' );
var DAYS = require( './days.json' );


// MAIN //

/**
* Returns the day of the year.
*
* @param {(string|integer|Date)} [month] - month (or Date)
* @param {integer} [day] - day
* @param {integer} [year] - year
* @throws {TypeError} first argument must be either a string, integer, or `Date` object
* @throws {Error} must provide a recognized month
* @throws {RangeError} an integer month argument must be on the interval `[1,12]`
* @throws {TypeError} second argument must be an integer
* @throws {RangeError} second argument must be greater than `0` and less than or equal to the maximum number of days in a month
* @throws {TypeError} third argument must be an integer
* @returns {integer} day of the year
*
* @example
* var day = dayOfYear();
* // returns <number>
*
* @example
* var day = dayOfYear( new Date() );
* // returns <number>
*
* @example
* var day = dayOfYear( 12, 31, 2017 );
* // returns 365
*
* @example
* var day = dayOfYear( 12, 31, 2016 );
* // returns 366
*/
function dayOfYear( month, day, year ) {
	var date;
	var days;
	var num;
	var mon;
	var yr;
	var d;
	var i;
	if ( arguments.length === 0 ) {
		// Note: cannot cache as application may cross over into a new year:
		date = new Date();
		mon = date.getMonth() + 1; // zero-based
		yr = date.getFullYear();
		d = date.getDate();
	} else if ( arguments.length === 1 ) {
		if ( isDateObject( month ) ) {
			date = month;
			mon = date.getMonth() + 1; // zero-based
			yr = date.getFullYear();
			d = date.getDate();
		} else {
			throw new TypeError( format( 'invalid argument. If only providing a single argument, must provide a Date object. Value: `%s`.', month ) );
		}
	} else {
		if ( !isString( month ) && !isInteger( month ) ) {
			throw new TypeError( format( 'invalid argument. First argument must be either a string or integer. Value: `%s`.', month ) );
		}
		if ( !isInteger( day ) ) {
			throw new TypeError( format( 'invalid argument. Second argument must be an integer. Value: `%s`.', day ) );
		}
		if ( !isInteger( year ) ) {
			throw new TypeError( format( 'invalid argument. Third argument must be an integer. Value: `%s`.', year ) );
		}
		mon = month;
		d = day;
		yr = year;
	}
	days = daysInMonth( mon, yr );
	if ( d < 1 || d > days ) {
		throw new RangeError( format( 'invalid argument. Day number must be on the interval: [1, %u]. Value: `%d`.', days, d ) );
	}
	mon = lowercase( mon.toString() );
	mon = MONTHS[ mon ];
	num = 0;
	for ( i = 0; i < mon-1; i++ ) {
		num += DAYS[ i ];

		// Check for February during a leap year...
		if ( i === 1 && isLeapYear( yr ) ) {
			num += 1;
		}
	}
	num += d;
	return num;
}


// EXPORTS //

module.exports = dayOfYear;
