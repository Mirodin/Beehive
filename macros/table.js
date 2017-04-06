/*\

title: $:/plugins/iceity/beehive/macros/table.js
module-type: macro
type: application/javascript

Generate table

\*/
( function () {

    "use strict";

    exports.name = "table";

    exports.params = [
        { name: "filter" },
        { name: "fields" },
        { name: "headings" }
    ];

    exports.run = function ( filter, fields, headings ) {
        const tiddlerNames = this.wiki.filterTiddlers( filter, null );
        const columns = fields.split( " " );
        const heads = headings ? headings.split( " " ) : columns;
        const table = [ "<table>" ];
        table.push( "<tr>" );
        for ( let h = 0; h < heads.length; h++ ) {
            table.push( "<th>", heads[h], "</th>" );
        }
        table.push( "</tr>" );
        for ( let r = 0; r < tiddlerNames.length; r++ ) {
            table.push( "<tr>" );
            for ( let c = 0; c < columns.length; c++ ) {
                let text = this.wiki.getTextReference( tiddlerNames[r] + "!!" + columns[c], "" );
                if ( c === 0 ) {
                    text = "<a class='tc-tiddlylink tc-tiddlylink-shadow' href='#" + text + "'>" + text + "</a>";
                }
                table.push( "<td>", text, "</td>" );
            }
            table.push( "</tr>" );
        }
        table.push( "</table>" );
        return table.join( "" );
    };

} )();
