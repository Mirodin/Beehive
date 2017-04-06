/*\

title: $:/plugins/iceity/beehive/macros/format.js
module-type: macro
type: application/javascript

Calculate simple expressions

\*/
( function () {

    "use strict";

    exports.name = "format";

    exports.params = [];

    exports.run = function ( str ) {
        if ( arguments.length ) {
            const t = typeof arguments[1];
            const args = ( t === "string" || t === "number" ) ? Array.prototype.slice.call( arguments, 1 ) : arguments[1];
            for ( let key in args ) {
                str = str.replace( new RegExp( "\\{" + key + "\\}", "gi" ), args[key] );
            }
        }
        return str;
    };

} )();
