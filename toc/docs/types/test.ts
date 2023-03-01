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

import toc = require( './index' );


// TESTS //

// The function returns a number array...
{
	toc( [ 17097, 504348707 ] ); // $ExpectType number[]
}

// The compiler throws an error if the function is provided an argument of invalid type...
{
	toc( 3.12 ); // $ExpectError
	toc( {} ); // $ExpectError
	toc( false ); // $ExpectError
	toc( true ); // $ExpectError
	toc( ( x: number ): number => x ); // $ExpectError
	toc( 'beep' ); // $ExpectError
}

// The compiler throws an error if the function is provided more than one argument...
{
	toc( [], 9 ); // $ExpectError
	toc( [], 1, 19 ); // $ExpectError
}
