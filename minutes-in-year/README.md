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

# minutesInYear

> Determine the number of minutes in a year according to the [Gregorian calendar][gregorian-calendar].

<section class="usage">

## Usage

```javascript
var minutesInYear = require( '@stdlib/time/minutes-in-year' );
```

#### minutesInYear( \[value] )

Returns the number of minutes in a year according to the [Gregorian calendar][gregorian-calendar].

```javascript
var num = minutesInYear();
// returns <number>
```

By default, the function returns the number of minutes in the current year (according to local time). To determine the number of minutes for a particular year, provide either a year or a [`Date`][date-object] object.

```javascript
var num = minutesInYear( new Date() );
// returns <number>

num = minutesInYear( 2000 );
// returns 527040

num = minutesInYear( 2017 );
// returns 525600
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
var minutesInYear = require( '@stdlib/time/minutes-in-year' );

var v;
var i;

for ( i = 0; i < 2021; i++ ) {
    v = minutesInYear( i );
    console.log( 'The year %d has %d minutes.', i, v );
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
Usage: minutes-in-year [options] [year]

Options:

  -h,    --help                Print this message.
  -V,    --version             Print the package version.
```

</section>

<!-- /.usage -->

<section class="examples">

### Examples

```bash
$ minutes-in-year
<number>
```

For a specific year,

```bash
$ minutes-in-year 2016
527040
```

</section>

<!-- /.examples -->

</section>

<!-- /.cli -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/time/minutes-in-month`][@stdlib/time/minutes-in-month]</span><span class="delimiter">: </span><span class="description">determine the number of minutes in a month.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[gregorian-calendar]: https://en.wikipedia.org/wiki/Gregorian_calendar

[date-object]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date

<!-- <related-links> -->

[@stdlib/time/minutes-in-month]: https://github.com/stdlib-js/time/tree/main/minutes-in-month

<!-- </related-links> -->

</section>

<!-- /.links -->
