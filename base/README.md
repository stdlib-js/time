<!--

@license Apache-2.0

Copyright (c) 2022 The Stdlib Authors.

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

# Base Time

> Base (i.e., lower-level) time utilities.

<section class="usage">

## Usage

```javascript
var time = require( '@stdlib/time/base' );
```

#### time

Namespace containing "base" (i.e., lower-level) time utilities.

```javascript
var ns = time;
// returns {...}
```

The namespace has the following utilities:

<!-- <toc pattern="*"> -->

<div class="namespace-toc">

-   <span class="signature">[`parseDuration`][@stdlib/time/base/parse-duration]</span><span class="delimiter">: </span><span class="description">parse a duration string into an object.</span>

</div>

<!-- </toc> -->

</section>

<!-- /.usage -->

<!-- Package notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- TODO: better examples -->

<!-- eslint no-undef: "error" -->

```javascript
var objectKeys = require( '@stdlib/utils/keys' );
var ns = require( '@stdlib/time/base' );

console.log( objectKeys( ns ) );

// Parse a duration string
var obj = ns.parseDuration( '1m3s10ms' );
// returns { 'days': 0, 'hours': 0, 'minutes': 1, 'seconds': 3, 'milliseconds': 10 }

obj = ns.parseDuration( '1m3s' );
// returns { 'days': 0, 'hours': 0, 'minutes': 1, 'seconds': 3, 'milliseconds': 0 }
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

<!-- <toc-links> -->

[@stdlib/time/base/parse-duration]: https://github.com/stdlib-js/time/tree/main/base/parse-duration

<!-- </toc-links> -->

</section>

<!-- /.links -->
