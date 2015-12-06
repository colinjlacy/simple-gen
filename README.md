# Simple Gen

A simple Yeoman generator to accompany [my blog post](https://webcake.co/building-a-yeoman-generator/) on Yeoman generators.  This is not meant to be a complex example, but rather a learning point for my readers who are getting started on writing custom generators in Yeoman.  

## Installation

The easiest way to get this running is to do the following:

1. Make sure you have at Node v4.0 or higher
2. Run `npm install -g https://github.com/colinjlacy/simple-gen.git`

If you want to use it in development:

1. Clone this repo to your machine and `cd` into the project root
2. Run `npm link` in the command line to install it globally
3. Be sure to run `npm install`
4. Develop as you like.  Any changes will be reflected in global use on your machine.

## What it does
 
To run, the user will type the following in the command line:
```
$ yo webcake
```
This will prompt them for a name for an Angular directive, and once they've answered will build a directive file and an accompanying HTML template in a sub-directory of a `components/` folder.  The resulting file structure will look like this:
```
[application root]
|-- components
	|-- awesomeDir
		|-- awesomeDir.directive.js
		|-- awesomeDir.tpl.html
```