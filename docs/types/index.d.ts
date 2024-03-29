/*
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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

/* eslint-disable max-lines */

import constants = require( '@stdlib/constants/time' );
import base = require( './../../base' );
import currentYear = require( './../../current-year' );
import dayOfQuarter = require( './../../day-of-quarter' );
import dayOfYear = require( './../../day-of-year' );
import daysInMonth = require( './../../days-in-month' );
import daysInYear = require( './../../days-in-year' );
import duration2ms = require( './../../duration2ms' );
import hoursInMonth = require( './../../hours-in-month' );
import hoursInYear = require( './../../hours-in-year' );
import isoWeeksInYear = require( './../../iso-weeks-in-year' );
import minutesInMonth = require( './../../minutes-in-month' );
import minutesInYear = require( './../../minutes-in-year' );
import ms2duration = require( './../../ms2duration' );
import now = require( './../../now' );
import quarterOfYear = require( './../../quarter-of-year' );
import secondsInMonth = require( './../../seconds-in-month' );
import secondsInYear = require( './../../seconds-in-year' );
import tic = require( './../../tic' );
import toc = require( './../../toc' );

/**
* Interface describing the `time` namespace.
*/
interface Namespace {
	/**
	* Time constants.
	*/
	constants: typeof constants;

	/**
	* Base (i.e., lower-level) time utilities.
	*/
	base: typeof base;

	/**
	* Returns the current year.
	*
	* @returns current year
	*
	* @example
	* var y = ns.currentYear();
	* // returns <number>
	*/
	currentYear: typeof currentYear;

	/**
	* Returns the day of the quarter.
	*
	* ## Notes
	*
	* -   By default, the function returns the day of the quarter for the current date (according to local time). To determine the day of the quarter for a particular day, provide `month`, `day`, and `year` arguments.
	* -   A `month` may be either a month's integer value, three letter abbreviation, or full name (case insensitive).
	* -   The function also accepts a `Date` object.
	*
	* @param month - month (or `Date`)
	* @param day - day
	* @param year - year
	* @throws must provide a recognized month
	* @throws an integer month argument must be on the interval `[1,12]`
	* @throws second argument must be greater than `0` and less than or equal to the maximum number of days in a month
	* @returns day of the quarter
	*
	* @example
	* var day = ns.dayOfQuarter();
	* // returns <number>
	*
	* day = ns.dayOfQuarter( new Date() );
	* // returns <number>
	*
	* day = ns.dayOfQuarter( 12, 31, 2017 );
	* // returns 92
	*/
	dayOfQuarter: typeof dayOfQuarter;

	/**
	* Returns the day of the year.
	*
	* ## Notes
	*
	* -   By default, the function returns the day of the year for the current date (according to local time). To determine the day of the year for a particular day, provide `month`, `day`, and `year` arguments.
	* -   A `month` may be either a month's integer value, three letter abbreviation, or full name (case insensitive).
	* -   The function also accepts a `Date` object.
	*
	* @param month - month (or Date)
	* @param day - day
	* @param year - year
	* @throws must provide a recognized month
	* @throws an integer month argument must be on the interval `[1,12]`
	* @throws second argument must be greater than `0` and less than or equal to the maximum number of days in a month
	* @returns day of the year
	*
	* @example
	* var day = ns.dayOfYear();
	* // returns <number>
	*
	* @example
	* var day = ns.dayOfYear( new Date() );
	* // returns <number>
	*
	* @example
	* var day = ns.dayOfYear( 12, 31, 2017 );
	* // returns 365
	*
	* @example
	* var day = ns.dayOfYear( 12, 31, 2016 );
	* // returns 366
	*/
	dayOfYear: typeof dayOfYear;

	/**
	* Returns the number of days in a month.
	*
	* ## Notes
	*
	* -   By default, the function returns the number of days in the current month of the current year (according to local time). To determine the number of days for a particular month and year, provide `month` and `year` arguments.
	* -   A `month` may be either a month's integer value, three letter abbreviation, or full name (case insensitive).
	* -   The function's return value is a generalization and does **not** take into account inaccuracies due to daylight savings conventions, crossing timezones, or other complications with time and dates.
	*
	* @param month - month (or Date)
	* @param year - year
	* @throws must provide a recognized month
	* @throws an integer month argument must be on the interval `[1,12]`
	* @returns days in a month
	*
	* @example
	* var num = ns.daysInMonth();
	* // returns <number>
	*
	* @example
	* var num = ns.daysInMonth( 2 );
	* // returns <number>
	*
	* @example
	* var num = ns.daysInMonth( 2, 2016 );
	* // returns 29
	*
	* @example
	* var num = ns.daysInMonth( 2, 2017 );
	* // returns 28
	*/
	daysInMonth: typeof daysInMonth;

	/**
	* Returns the number of days in a year according to the Gregorian calendar.
	*
	* ## Notes
	*
	* -   By default, the function returns the number of days in the current year (according to local time). To determine the number of days for a particular year, provide either a year or a `Date` object.
	* -   The function's return value is a generalization and does **not** take into account inaccuracies due to daylight savings conventions, crossing timezones, or other complications with time and dates.
	*
	* @param value - year or `Date` object
	* @returns number of days in a year
	*
	* @example
	* var num = ns.daysInYear();
	* // returns <number>
	*
	* @example
	* var num = ns.daysInYear( 2016 );
	* // returns 366
	*
	* @example
	* var num = ns.daysInYear( 2017 );
	* // returns 365
	*/
	daysInYear: typeof daysInYear;

	/**
	* Converts a duration string to milliseconds.
	*
	* ## Notes
	*
	* -   A duration string is a string containing a sequence of time units. A time unit is a nonnegative integer followed by a unit identifier. The following unit identifiers are supported:
	*
	*     -   `d`: days
	*     -   `h`: hours
	*     -   `m`: minutes
	*     -   `s`: seconds
	*     -   `ms`: milliseconds
	*
	*     For example, the string `1m3s10ms` is a duration string containing three time units: `1m` (1 minute), `3s` (3 seconds), and `10ms` (10 milliseconds). The string `60m` is a duration string containing a single time unit: `60m` (60 minutes).
	*
	* -   Duration strings are case insensitive. For example, the string `1M3S10MS` is equivalent to `1m3s10ms`.
	*
	* @param str - duration string
	* @returns milliseconds
	*
	* @example
	* var ms = ns.duration2ms( '1d' );
	* // returns 86400000
	*
	* @example
	* var ms = ns.duration2ms( '1d2h3m4s5ms' );
	* // returns 93784005
	*/
	duration2ms: typeof duration2ms;

	/**
	* Returns the number of hours in a month.
	*
	* ## Notes
	*
	* -   By default, the function returns the number of hours in the current month of the current year (according to local time). To determine the number of hours for a particular month and year, provide `month` and `year` arguments.
	* -   A `month` may be either a month's integer value, three letter abbreviation, or full name (case insensitive).
	* -   The function's return value is a generalization and does **not** take into account inaccuracies due to daylight savings conventions, crossing timezones, or other complications with time and dates.
	*
	* @param month - month
	* @param year - year
	* @throws must provide a recognized month
	* @throws an integer month argument must be on the interval `[1,12]`
	* @returns hours in a month
	*
	* @example
	* var num = ns.hoursInMonth();
	* // returns <number>
	*
	* @example
	* var num = ns.hoursInMonth( 2 );
	* // returns <number>
	*
	* @example
	* var num = ns.hoursInMonth( 2, 2016 );
	* // returns 696
	*
	* @example
	* var num = ns.hoursInMonth( 2, 2017 );
	* // returns 672
	*/
	hoursInMonth: typeof hoursInMonth;

	/**
	* Returns the number of hours in a year according to the Gregorian calendar.
	*
	* ## Notes
	*
	* -   By default, the function returns the number of hours in the current year (according to local time). To determine the number of hours for a particular year, provide either a year or a `Date` object.
	* -   The function's return value is a generalization and does **not** take into account inaccuracies due to daylight savings conventions, crossing timezones, or other complications with time and dates.
	*
	* @param value - year or `Date` object
	* @returns number of hours in a year
	*
	* @example
	* var num = ns.hoursInYear();
	* // returns <number>
	*
	* @example
	* var num = ns.hoursInYear( 2016 );
	* // returns 8784
	*
	* @example
	* var num = ns.hoursInYear( 2017 );
	* // returns 8760
	*/
	hoursInYear: typeof hoursInYear;

	/**
	* Returns the number of ISO weeks in a year according to the Gregorian calendar.
	*
	* ## Notes
	*
	* -   By default, the function returns the number of ISO weeks in the current year (according to local time). To determine the number of ISO weeks for a particular year, provide either a year or a `Date` object.
	*
	* @param value - year or `Date` object
	* @returns number of ISO weeks in a year
	*
	* @example
	* var num = ns.isoWeeksInYear();
	* // returns <number>
	*
	* @example
	* var num = ns.isoWeeksInYear( 2015 );
	* // returns 53
	*
	* @example
	* var num = ns.isoWeeksInYear( 2017 );
	* // returns 52
	*/
	isoWeeksInYear: typeof isoWeeksInYear;

	/**
	* Returns the number of minutes in a month.
	*
	* ## Notes
	*
	* -   By default, the function returns the number of minutes in the current month of the current year (according to local time). To determine the number of minutes for a particular month and year, provide `month` and `year` arguments.
	* -   A `month` may be either a month's integer value, three letter abbreviation, or full name (case insensitive).
	* -   The function's return value is a generalization and does **not** take into account inaccuracies due to daylight savings conventions, crossing timezones, or other complications with time and dates.
	*
	* @param month - month
	* @param year - year
	* @throws must provide a recognized month
	* @throws an integer month argument must be on the interval `[1,12]`
	* @returns minutes in a month
	*
	* @example
	* var num = ns.minutesInMonth();
	* // returns <number>
	*
	* @example
	* var num = ns.minutesInMonth( 2 );
	* // returns <number>
	*
	* @example
	* var num = ns.minutesInMonth( 2, 2016 );
	* // returns 41760
	*
	* @example
	* var num = ns.minutesInMonth( 2, 2017 );
	* // returns 40320
	*/
	minutesInMonth: typeof minutesInMonth;

	/**
	* Returns the number of minutes in a year according to the Gregorian calendar.
	*
	* ## Notes
	*
	* -   By default, the function returns the number of minutes in the current year (according to local time). To determine the number of minutes for a particular year, provide either a year or a `Date` object.
	* -   The function's return value is a generalization and does **not** take into account inaccuracies due to daylight savings conventions, crossing timezones, or other complications with time and dates.
	*
	* @param value - year or `Date` object
	* @returns number of minutes in a year
	*
	* @example
	* var num = ns.minutesInYear();
	* // returns <number>
	*
	* @example
	* var num = ns.minutesInYear( 2016 );
	* // returns 527040
	*
	* @example
	* var num = ns.minutesInYear( 2017 );
	* // returns 525600
	*/
	minutesInYear: typeof minutesInYear;

	/**
	* Converts a number of milliseconds to a string duration.
	*
	* @param ms - number of milliseconds
	* @returns duration
	*
	* @example
	* var str = ns.ms2duration( 1030 );
	* // returns '1s30ms'
	*
	* @example
	* var str = ns.ms2duration( 3600000 );
	* // returns '1h'
	*/
	ms2duration: typeof ms2duration;

	/**
	* Returns the time in seconds since the epoch.
	*
	* ## Notes
	*
	* -   The Unix epoch is 00:00:00 UTC on 1 January 1970.
	*
	* @returns time
	*
	* @example
	* var ts = ns.now();
	* // returns <number>
	*/
	now: typeof now;

	/**
	* Returns the quarter of the year.
	*
	* ## Notes
	*
	* -   By default, the function returns the quarter of the year for the current month in the current year (according to local time). To determine the quarter for a particular month, provide either a month or a `Date` object.
	* -   A `month` may be either a month's integer value, three letter abbreviation, or full name (case insensitive).
	*
	* @param month - month (or `Date`)
	* @throws must provide a recognized month
	* @throws an integer month argument must be on the interval `[1,12]`
	* @returns quarter of the year
	*
	* @example
	* var q = ns.quarterOfYear( new Date() );
	* // returns <number>
	*
	* @example
	* var q = ns.quarterOfYear( 4 );
	* // returns 2
	*
	* @example
	* var q = ns.quarterOfYear( 'June' );
	* // returns 2
	*/
	quarterOfYear: typeof quarterOfYear;

	/**
	* Returns the number of seconds in a month.
	*
	* ## Notes
	*
	* -   By default, the function returns the number of seconds in the current month of the current year (according to local time). To determine the number of seconds for a particular month and year, provide `month` and `year` arguments.
	* -   A `month` may be either a month's integer value, three letter abbreviation, or full name (case insensitive).
	* -   The function's return value is a generalization and does **not** take into account inaccuracies due to daylight savings conventions, crossing timezones, or other complications with time and dates.
	*
	* @param month - month
	* @param year - year
	* @throws must provide a recognized month
	* @throws an integer month argument must be on the interval `[1,12]`
	* @returns seconds in a month
	*
	* @example
	* var num = ns.secondsInMonth();
	* // returns <number>
	*
	* @example
	* var num = ns.secondsInMonth( 2 );
	* // returns <number>
	*
	* @example
	* var num = ns.secondsInMonth( 2, 2016 );
	* // returns 2505600
	*
	* @example
	* var num = ns.secondsInMonth( 2, 2017 );
	* // returns 2419200
	*/
	secondsInMonth: typeof secondsInMonth;

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
	* var num = ns.secondsInYear();
	* // returns <number>
	*
	* @example
	* var num = ns.secondsInYear( 2016 );
	* // returns 31622400
	*
	* @example
	* var num = ns.secondsInYear( 2017 );
	* // returns 31536000
	*/
	secondsInYear: typeof secondsInYear;

	/**
	* Returns a high-resolution time.
	*
	* ## Notes
	*
	* -   The returned array has the following format: `[seconds, nanoseconds]`.
	*
	*
	* @returns high resolution time
	*
	* @example
	* var t = ns.tic();
	* // returns [<number>,<number>]
	*/
	tic: typeof tic;

	/**
	* Returns a high-resolution time difference, where `time` is a two-element array with format `[seconds, nanoseconds]`.
	*
	* ## Notes
	*
	* -   Similar to `time`, the returned array has format `[seconds, nanoseconds]`.
	*
	*
	* @param time - high-resolution time
	* @throws must provide a nonnegative integer array
	* @throws input array must have length `2`
	* @returns high resolution time difference
	*
	* @example
	* var tic = require( './../../tic' );
	*
	* var start = tic();
	* var delta = ns.toc( start );
	* // returns [<number>,<number>]
	*/
	toc: typeof toc;
}

/**
* Time utilities.
*/
declare var ns: Namespace;


// EXPORTS //

export = ns;
