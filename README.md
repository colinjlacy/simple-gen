# Simple Gen

A simple Yeoman generator to accompany [my blog post](https://webcake.co/building-a-yeoman-generator/) on Yeoman generators.  This is not meant to be a complex example, but rather a learning point for my readers who are getting started on writing custom generators in Yeoman.  

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