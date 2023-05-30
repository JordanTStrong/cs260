This is where my notes will go. 
This assignment was actually really fun. I have used Git a little bit at work, but very infrequently, so it is fun to 
have the chance to practice and gain experience with file manipulation within git. 

##KEY GIT COMMANDS:
git pull -- pulls a branch
git add -- 'stages' a change for commit
git commit -m "message here" -- Commits the changes
git push <branch-name> -- Pushes the changes to GitHub


#----------------------------------------------------------------------------------------------------------------------------
#						CLASS 5/11 -- CSS
#----------------------------------------------------------------------------------------------------------------------------

CSS is for styling
; separates statements 
3 ways to overlay css
	1) InLine style 
		```
		<body>				 )
		<p style="color:red">css</p>     >   <--- this whole thing is called a rule set. Things like "color", "font size", etc are declarations
		</body>				 )		
		```
	This isn't used very much
	Inline style overrides anything above it

	2) Multiline Style
	
	3) Separate styles file


Text design
	Called an "em" because of typography practices back in the day. Where x is an int, xem means take the em size and multiply it by x
	Box Model
		margin outermost
		border inside margin
		padding inside border
		content inside padding

 CSS doesn't create any new parts of the website, it just modifies and stylizes the already-written HTML
 	Selectors are used to identify specific pieces to style
 	Declarations are the parts of selectors that actually modify the site

 When I see something like p{} or div{} that is setting a default style for any p or div elements found in the HTML doc
 	<div>, like <p>, groups things together without creating a new paragraph like <p>.
	*{} will select all elements, is lowest precedence	


RESPONSIVE, GRID, FLEX

5 different display properties
	1) none
	2) block
	3) inline
	4) flex
	5) grid

![Display types](display_types_css.png)
Every webpage I make, be sure to include <meta name="viewport" /> 
	This overrides any guessing done by the browser in terms of style


FLEX
	Changes size, position, and alignment


CLASSES
	When I create a class in HTML, I reference that class with .className

----------------------------------------------------------------------------------------------------------------------------


** **#GOOD TO REMEMBER:
It's the nested div element that creates a new paragraph when using grids, not the <p>> element. The <p> element behaves the same regardless of if inside of grids or not









#----------------------------------------------------------------------------------------------------------------------------
#                                               CLASS 5/16 -- JavaScript
#----------------------------------------------------------------------------------------------------------------------------


1+1 is valid JS. Even just 1 is valid. 'Hello world' is valid.

Chrome took over because their JS execution was so fast (developed JS interpreter called V8)

Playgrounds:
- CodePen
- VSCpde (LiveServer)
- Node.js

consol.log('hello' + ' ' + 'world') <- console.log() prints out to console
Arrays have same funcitonality as python
	const words = ['hello', 'world'];
	words.forEach((word) => {		<-- function that prints out all contents of words array
	   console.log(word);
	});


How to access JS in html file:
	script file
	script tag		<- See class notes for examples of each of these	
	script attribute

closures are functions that are fixed in a single state



#----------------------------------------------------------------------------------------------------------------------------
#                                               JavaScript
#----------------------------------------------------------------------------------------------------------------------------

Insert JS into HTML by:
	a) directly including it in the HTML within <script> element
	b) using the src attribute of script element to reference external JS file (src === #include or import)
	```
	<head>
 	   <script src="javascript.js"></script>
	</head>
	<body>
  	   <button onclick="sayHello()">Say Hello</button>
 	   <button onclick="sayGoodbye()">Say Goodbye</button>
  	   <script>
    		function sayGoodbye() {
      		alert('Goodbye');
    	   	}
  	   </script>
	</body>
 	```

Functions
---------
	
	First class objects, meaning can be assigned name, passed as parameter, returned as a result, and referenced from an object or array anywhere in the script

	Anonymous functions:
		Allows for defining of functions inline without explicit function declaration or name
		// Function that takes a function as a parameter
		function doMath(operation, a, b) {
  		   return operation(a, b);
		}

		// Anonymous function assigned to a variable
		const add = function (a, b) {
  		   return a + b;
		};

		console.log(doMath(add, 5, 3));
		// OUTPUT: 8

		// Anonymous function assigned to a parameter
		console.log(
  		   doMath(
    		      function (a, b) {
      			return a - b;
    		      },
    		      5,
    		      3
  		   )
		);
		// OUTPUT: 2
	

	Arrow Functions:
		const a = [1, 2, 3, 4];

		// standard function syntax
		a.sort(function (v1, v2) {
  		   return v1 - v2;
		});

		// arrow function syntax
		a.sort((v1, v2) => v1 - v2);

		Special rules for return values:
			() => 3;
			// RETURNS: 3

			() => {
  			   3;
			};
			// RETURNS: undefined

			() => {
  			   return 3;
			};
			// RETURNS: 3





		this pointer:
			arrow functions inherit the this pointer from scope of where it is created
			This makes a closure
				Closure allows functions to continue referencing its creation scope
					Like passing by value

	

JSON
-----
	JavaScript Object Notation
	Sharing and storing data
	Easily convertible to and from JS objects
	JSON doc contains an object
		Objects contain zero or more key val pairs
			Key always a string, val one of these datatypes:
				string
				number 
				boolean
				array 
				object ie {"a":1,"b":"crackford"}
				null
		

JavaScript RegEx
----------------
	Textual pattern matchers
		ie Find text in a string
	const objRegex = new RegExp('ab*', 'i');
	const literalRegex = /ab*/i;


Rest and Spread
---------------	
	Rest
		Essentially takes whatever arguments are passed in and creates an array out of them
		Allows for writing of function to take an unknown num of parameters (technically called variadic functions)
		function hasNumbers(test, ...numbers) {                   //  <-- this ... operator is the rest operator
		   return numbers.some((i) => i === test);
		}
		
		hasNumber(2, 1, 2, 3);
		//RETURNS: true
		
	Spread
		... syntax
		Whenever I'm dealing with iterable sets (arrays, maps, etc), if I populate a new iterable set with previously declared iterable sets without using the spread operator, the elements
			of the new iterable set will be the previous sets (ie newArray becomes an array of arrays)
		If I declare the new iterable set using the spread operator, it will copy all of the elements of each of the previously declared iterable sets into the new set as the new set's elements.
			ie If I declared a new array populated using spread of previously declared arrays, newArray will be a single array with elements === the elements of the old arrays


Exceptions
----------
	 try {
 	   // normal execution code
	} catch (err) {
  	   // exception handling code
	} finally {
  	   // always called code
	}
	
	Fallback pattern
		Commonly implemented using exception handling
		Used to ensure something always returns to the user, even if desired feature is temporarily unavailable


Destructuring
-------------
	NOT the same as destructing
	Process of pulling individual items out of existing structure, or removing the structure altogether
	Can do this with arrays or objects
	
	ex:
		const a = [1, 2, 4, 5];

		// destructure the first two items from a, into the new variables b and c
		const [b, c] = a;

		console.log(b, c);
		// OUTPUT: 1, 2
		Note that even though it looks like you are declaring an array with the syntax on the left side of the expression, it is only specifying that you want to destructure those values out of the array.

	Destructuring is done using the syntax of whatever structure I am destructuring (ie [a, b] = for arrays ; {a, b} = for maps


Object and Classes
------------------
	Object represents collection of name val pairs, referred to as properties
	Property name must be of type String or Symbol, but val can be of any type
	Created with the new operator


Scope
-----
	Global   --  Visible to all code
	Module   --  Visible to all code running in a module
	Function --  Visible within a function
	Block    --  Visible within a block of code delimited by curly braces

Modules
-------
	Must explicitly export the objects from one file and then import them into another file
	
