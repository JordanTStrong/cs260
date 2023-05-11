# startup

```
Repository for my cs260 project


STARTUP SPECS:


Elevator Pitch:
	How many times have you gone to the grocery store this year? How about this month? How 
many times did you find yourself wishing you had a list on your phone you could continually 
refer to so you could save yourself from listing all your groceries for each visit? With Prept, you 
only have to list out your groceries once! Then, let Prept do the tedious work of remembering your 
purchases. Oh, and did we mention you can do it all via barcode scanning?


Key Features:
	- Secure login over HTTPS
	- Ability to create profile
	- Add items to a list (3 cols: item name, quantity, price)
	- Display list
	- Ability for a user to edit list
	- List persistently stored


Technologies:
	- HTML: 
		- Uses correct HTML structure for the application. Two HTML pages. One for login and 
		one for grocery list. 
	- CSS:
		- Application styling that looks good on different screen sizes (desktop only for 
		now), uses good whitespace, color choice, and contrast.
	- JavaScript:
		- Provides login, grocery list display, adding items, displaying list, backend 
		endpoint calls.
	- Service:
		- Backend service with endpoints for:
			- login
			- retrieving list of items
			- adding items to list
	- DB:
		- Store users and items/lists in database
	- Login:
		- Register and login users. Credentials securely stored in database. Can't get past 
		login page until authenticated
	- WebSocket:
		- Real time updates to list as soon as new item added
	- React:
		- Application ported to use the React web framework

```
