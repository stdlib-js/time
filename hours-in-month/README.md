<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# hoursInMonth

> Determine the number of hours in a month.

<section class="usage">

## Usage

```javascript
var hoursInMonth = require( '@stdlib/time/hours-in-month' );
```

#### hoursInMonth( \[month\[, year]] )

Returns the number of hours in a month.

```javascript
var num = hoursInMonth();
// returns <number>
```

By default, the function returns the number of hours in the current month of the current year (according to local time). To determine the number of hours for a particular month and year, provide `month` and `year` arguments.

```javascript
var num = hoursInMonth( 2 );
// returns <number>

num = hoursInMonth( 2, 2016 );
// returns 696

num = hoursInMonth( 2, 2017 );
// returns 672
```

A `month` may be either a month's integer value, three letter abbreviation, or full name (case insensitive).

```javascript
var num = hoursInMonth( 2, 2016 );
// returns 696

num = hoursInMonth( 'feb', 2016 );
// returns 696

num = hoursInMonth( 'february', 2016 );
// returns 696
```

The function also supports providing a [`Date`][date-object] object.

```javascript
var num = hoursInMonth( new Date() );
// returns <number>
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   The function's return value is a generalization and does **not** take into account inaccuracies due to daylight savings conventions, crossing timezones, or other complications with time and dates. 

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var hoursInMonth = require( '@stdlib/time/hours-in-month' );

var v;
var i;

for ( i = 0; i < 2021; i++ ) {
    v = hoursInMonth( 'feb', i );
    console.log( 'In the year %d, February has %d hours.', i, v );
}
```

</section>

<!-- /.examples -->

* * *

<section class="cli">

## CLI

<section class="usage">

### Usage

```text
Usage: hours-in-month [options] [month] [year]

Options:

  -h,    --help                Print this message.
  -V,    --version             Print the package version.
```

</section>

<!-- /.usage -->

<section class="examples">

### Examples

```bash
$ hours-in-month
<number>
```

For a specific month,

```bash
$ hours-in-month 2
<number>
```

For a specific month and year,

```bash
$ hours-in-month 2 2016
696
```

</section>

<!-- /.examples -->

</section>

<!-- /.cli -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/time/hours-in-year`][@stdlib/time/hours-in-year]</span><span class="delimiter">: </span><span class="description">determine the number of hours in a year according to the Gregorian calendar.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[date-object]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date

<!-- <related-links> -->

[@stdlib/time/hours-in-year]: https://github.com/stdlib-js/time/tree/main/hours-in-year

<!-- </related-links> -->

</section>

<!-- /.links -->
