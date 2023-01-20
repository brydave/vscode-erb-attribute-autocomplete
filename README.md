# README

This extension adds HTML attribute auto completion and suggestions for erb files. 
![ERB Attribute Autocomplete](images/attributes.png)

It also adds some snippets for quickly creating divs with the class attribute. It will also drop the cursor in the approprite position or in the case of using a snippet, you can quickly tab from the class to the inside of the div. 

![ERB Div Class Snippet](images/snippet-01.png)

![ERB Div Class Snippet Results](images/snippet-02.png)


## Features
- When adding a `<div>` in an erb file, start typing the attribute name and it will auto-complete the attribute with open and closing double quotes. 
- Type "d", "dc", or "<d" to insert `<div class=""></div>`. You can tab from the class to the inner div content. 

## Release Notes

**Adds the basics:** 
- auto complete for attributes
- a snippet to quickly generate a div

### 0.0.1

Initial release of the erb attribute autocomplete extension
