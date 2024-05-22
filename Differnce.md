"# MERN_Task5" 
Difference between window,screen and document in javascript
#window Object:
--------------
Definition: The window object represents the browser's window or a frame within a window. It is the global object in a browser environment, meaning that variables and functions declared globally become properties of the window object.
Usage: It provides methods and properties to control the browser window and its contents.
Common Properties/Methods:
window.alert(): Displays an alert dialog.
window.innerWidth and window.innerHeight: Get the interior dimensions of the window.
window.open(): Opens a new browser window or tab.
window.location: Gets or sets the URL of the current document.
window.setTimeout() and window.setInterval(): Call a function after a specified delay or at specified intervals.
------------------------------------------------------------------------------------------------------------------------
#screen Object:
--------------
Definition: The screen object contains information about the user's screen (monitor).
Usage: It provides properties that can be useful for determining the size and capabilities of the display device.
Common Properties:
screen.width and screen.height: Get the width and height of the screen in pixels.
screen.availWidth and screen.availHeight: Get the available width and height of the screen, excluding any OS taskbars or toolbars.
screen.colorDepth: Gets the color depth of the screen in bits per pixel.
screen.orientation: Gets the current orientation of the screen (landscape or portrait).
-------------------------------------------------------------------------------------------------------------------------
#Document Object:
----------------
Definition: The document object represents the HTML or XML document loaded in the browser. It is a property of the window object and provides methods and properties to interact with the content of the web page.
Usage: It allows you to access and manipulate the structure, style, and content of the web page.
Common Properties/Methods:
document.getElementById(): Selects an element by its ID.
document.querySelector() and document.querySelectorAll(): Select elements using CSS selectors.
document.createElement(): Creates a new HTML element.
document.body: Accesses the <body> element of the document.
document.title: Gets or sets the title of the document.
document.cookie: Gets or sets the cookies associated with the document.
---------------------------------------------------------------------------------------------------------------------------