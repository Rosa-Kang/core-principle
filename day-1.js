 // Summary
// We can use a <script> tag to add JavaScript code to a page. 
 // The type and language attributes are not required.
// A script in an external file can be inserted with <script src="path/to/script.js"></script>. 

//  2. Code Structure
// We recommend putting semicolons between statements even if they are separated by newlines. This rule is widely adopted by the community. Let’s note once again – it is possible to leave out semicolons most of the time. But it’s safer – especially for a beginner – to use them. 

//  3. Modern Mode (use strict)
// "use strict" can be put at the beginning of a function. Doing that enables strict mode in that function only. But usually people use it for the whole script. 
//  One could recommend to start scripts with "use strict"… But you know what’s cool?

// Modern JavaScript supports “classes” and “modules” – advanced language structures (we’ll surely get to them), that enable use strict automatically. So we don’t need to add the "use strict" directive, if we use them.

// So, for now "use strict"; is a welcome guest at the top of your scripts. Later, when your code is all in classes and modules, you may omit it. 

//  4. Javacrtipt Variables
// There are two limitations on variable names in JavaScript:

// 1) The name must contain only letters, digits, or the symbols $ and _.
// 2) The first character must not be a digit. 

// When the name contains multiple words, camelCase is commonly used. That is: words go one after another, each word except first starting with a capital letter: myVeryLongName.

// What’s interesting – the dollar sign '$' and the underscore '_' can also be used in names. They are regular symbols, just like letters, without any special meaning.
let $ = 1; // declared a variable with the name "$"
let _ = 2; // and now a variable with the name "_"

alert($ + _); // 3

// Case matters
// Variables named apple and APPLE are two different variables.