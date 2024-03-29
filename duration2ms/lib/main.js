/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
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

var isDurationString = require( '@stdlib/assert/is-duration-string' );
var parseDuration = require( './../../base/parse-duration' );
var format = require( '@stdlib/string/format' );


// MAIN //

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
* @param {string} str - duration string
* @throws {TypeError} must provide a duration string
* @returns {NonNegativeInteger} milliseconds
*
* @example
* var ms = duration2ms( '1d' );
* // returns 86400000
*
* @example
* var ms = duration2ms( '1d2h3m4s5ms' );
* // returns 93784005
*/
function duration2ms( str ) {
	var duration;
	var out;

	if ( !isDurationString( str ) ) {
		throw new TypeError( format( 'invalid argument. Must provide a valid duration string. Value: `%s`.', str ) );
	}
	duration = parseDuration( str );
	out = duration.days * 86400000;
	out += duration.hours * 3600000;
	out += duration.minutes * 60000;
	out += duration.seconds * 1000;
	out += duration.milliseconds;
	return out;
}


// EXPORTS //

module.exports = duration2ms;
