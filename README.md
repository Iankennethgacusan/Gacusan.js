Explination 1.
Block Scope Demonstration: let respects block scope. Even though a variable named message is declared twice, each one lives in a separate block (inside the if block and outside).
Key Concept: The variable inside the block does not affect the variable outside the block.
Important takeaway: This behavior prevents accidental variable value changes, a common issue with var.

Explination 2.
Immutability: After declaring a variable, const is perfect for values that are not meant to be changed.
Error Prevention: Assigning a new value to greeting will produce a TypeError. This serves to protect developers from making unintended modifications.
Best Practice: When dealing with const, always remember that it should be the first option unless a direct reassignment is necessary.

Explination 3.
Function Scope Demonstration: var does not respect block scope; it is scoped to the entire function.
Key Concept: Both console.log() statements output the same value because var does not create a new variable within the if block.
Hoisting: var is hoisted and initialized to undefined, meaning its declaration is lifted to the top of the function during execution.

Reference:
MDN Web Docs (Mozilla Developer Network)
• https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let
• https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const
• https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var
These are official documentation pages that provide detailed explanations, syntax, and best practices.

W3Schools JavaScript Guide
• https://www.w3schools.com/js/js_let.asp
• https://www.w3schools.com/js/js_const.as
• https://www.w3schools.com/js/js_var.asp
W3Schools provides beginner-friendly content with interactive examples.

GeeksforGeeks
• https://www.geeksforgeeks.org/difference-between-var-let-and-const-keywords-in-javascript/
This source breaks down the differences in a concise and easy-to-understand manner.


