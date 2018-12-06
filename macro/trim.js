/*\

title: $:/plugins/iceity/hive/macro/trim.js
module-type: macro
type: application/javascript

Cut string to length.

\*/
( function () {

    "use strict";

    exports.name = "trim";

    exports.params = [ { name: "text" }, { name: "length" } ]

    exports.run = function ( text, length ) {
        return text.length > length ? text.substring( 0, Number( length ) + 1 ) + " ...": text;
    }

} )();
