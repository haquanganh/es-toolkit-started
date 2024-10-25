import { camelCase, constantCase, upperFirst } from 'es-toolkit/string';

camelCase('camelCase'); // returns 'camelCase'
camelCase('some whitespace'); // returns 'someWhitespace'
camelCase('hyphen-text'); // returns 'hyphenText'
camelCase('HTTPRequest'); // returns 'httpRequest'
camelCase('Keep unicode 😅'); // returns 'keepUnicode😅'

const convertedStr1 = constantCase('camelCase'); // returns 'CAMEL_CASE'
const convertedStr2 = constantCase('some whitespace'); // returns 'SOME_WHITESPACE'
const convertedStr3 = constantCase('hyphen-text'); // returns 'HYPHEN_TEXT'
const convertedStr4 = constantCase('HTTPRequest'); // returns 'HTTP_REQUEST'

import { escape } from 'es-toolkit/string';

escape('This is a <div> element.'); // returns 'This is a &lt;div&gt; element.'
escape('This is a "quote"'); // returns 'This is a &quot;quote&quot;'
escape("This is a 'quote'"); // returns 'This is a &#39;quote&#39;'
escape('This is a & symbol'); // returns 'This is a &amp; symbol'

upperFirst('fred'); // returns 'Fred'
upperFirst('Fred'); // returns 'Fred'
upperFirst('FRED'); // returns 'FRED'
