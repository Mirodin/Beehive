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
        const type = typeof arguments[1];
        const args = ( type === "string" || type === "number" ) ? Array.prototype.slice.call( arguments, 1 ) : arguments[1];
        const currentTiddler = this.getVariable( "currentTiddler" );
        for ( let key in args ) {
            str = str.replace( new RegExp( "\\{" + key + "\\}", "gi" ), this.wiki.getTextReference( args[key], args[key], currentTiddler ) );
        }
        return str;
    };

} )();
