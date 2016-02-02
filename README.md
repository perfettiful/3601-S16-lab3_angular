# CSCI 3601 Lab #3 - Angular
[![Build Status](https://travis-ci.org/perfettiful/3601-S16-lab3_angular.svg?branch=master)](https://travis-ci.org/perfettiful/3601-S16-lab3_angular)
In this lab you will learn to use AngularJS to simplify the addition of interactive elements such as forms, navbars, footers, and buttons to your projects. In addition, Angular makes it easier to reuse elements like navbars and footers across multiple pages in a website.

You will continue to use continuous integration and Test Driven Development (TDD). To this end, you will now set up Travis entirely yourselves (don't worry, it's like 3 extra steps from the last lab). Also, you will use a new tool, known as Grunt, to autmoate tasks in your project, such as running your Karma/Jasmine tests.

Your specific tasks for this lab can be found in the [LABTASKS.md](LABTASKS.md) file in this repository.

#Setup:
Install dependencies with npm and bower by running:
```
npm install && bower install
```
> npm is generally used to manage server and development dependencies, whereas bower is generally used to manage client side dependencies

#Running Your Project:
To serve your project, run:
```
grunt serve
``` 
> Grunt is a task runner that helps automate all that stuff you had to type during the last lab. Right now, ``grunt serve`` is set up to run nodemon, which will automatically
restart your node server whenever it detects changes to your project.

Served projects should be available on localhost:9000 by default.

>If you get an error something along the lines of ``bash: grunt: command not found`` you probably don't have grunt installed correctly. Please let a professor or DM know about this. 

#Testing Your Project

To run your tests, run:
```
grunt test
```
> If this doesn't work, please let a professor or DM know about it.

You can also run your tests through the webstorm karma run configuration (right click karma.conf.js, etc.) If you're interested in setting this up talk to Professor KK or a lab assistant.

#Reviewing Test Coverage

Every time you run your tests, a test coverage report will be generated. This lets you know how much of your code yours tests reach. To check this out, look in the `coverage` folder, then within the folder inside of that (it has a long name). From there, open the `index.html` file in the browser of your choosing.

> Protip: Check this frequently. Especially when you want to consider specific functionality "completed".

#Continuous Integration with Travis (Part 2)

We're bringing back Travis for this lab (and the rest that you will do). This time, Travis will run Grunt whenver is performs a build in order to run your tests.

We will have you do a bit more to get Travis set up this time around.
What you need to do:
- Add a .travis.yml file to the root of the repository.
  - In it, add the following:
```
language: node_js
node_js:
 - "stable"
before_script:
 - 'npm install -g grunt-cli'
 - 'bower install'
```
- Modify the `package.json` file.
  - On line 7, change the value of the `test` field to `"grunt test"`.
- Modify the `bower.json` file.
  - On line 5, there is an author array. Change that from Joe to you, and your group members. People should be separated by commas.

> Protip: From here, the rest is the same process as in lab 2. Refer to that lab if you have forgotten. This time though, you will add a build status image to the README.md rather than updating the old.


##Resoures
#####Bootstrap Components:
http://getbootstrap.com/components/

#####Getting started with grunt:
http://gruntjs.com/getting-started

#####Tutorial for testing with jasmine
http://jasmine.github.io/2.0/introduction.html



