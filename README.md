1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Ans: getElementById() selects an element by specified id.

getElementsByClassName() selects multiple elements by specified class.

querySelector() selects the first matching element using a CSS selector.

querySelectorAll() selects all matching elements using a CSS selector.


2. How do you create and insert a new element into the DOM?
Ans: I use document.createElement() to create a new element and use appendChild() to insert it into the DOM.

3. What is Event Bubbling? And how does it work?
Ans: Event Bubbling is a process where when an event occurs in a child element, it propagates step by step to the parent element.

HOw it works_
If a button is clicked inside, then:
first the event occures in the button, then it goes to its parent, then it goes to its parent's parent.
Thus reaching the document.



4. What is Event Delegation in JavaScript? Why is it useful?
Ans: Event Delegation is a method of handaling events of child elements by placing an event listener on the parent element.

This is useful because-
no need to setup many listeners,
can handle dynamic elements,
code is cleaner...........


5. What is the difference between preventDefault() and stopPropagation() methods?
Ans: preventDefault() disables the browser's default behavior.
And stopPropagation() disables event bubbling.