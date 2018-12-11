/*\

title: $:/plugins/iceity/hive/macro/either.js
module-type: macro
type: application/javascript

Show "yes" or "no" for boolean field

\*/
( function () {

    "use strict";

    exports.name = "either";

    exports.params = [ { name: "field" } ];

    exports.run = function ( field ) {
        const current = this.getVariable( "currentTiddler" );
        const value = this.wiki.getTextReference( field, "", current );
        return value == "1" ? "yes" : "no";
    };

} )();
