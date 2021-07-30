# ASSESSMENT 3: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.


1. What is `this` in JavaScript?

  Your answer:So, from what i remember in class i remember we were doing a lot of class/class inheritance for example; 
                                               class grocery{
                                              constructor(){
                                              this.apple = 0.60
                                                this.orange = 0.70
                                              let grocery = new grocery()
                                               console.log(grocery)
                                        --> grocery { apple: 0.60, orange:0.70}
  so on my example  i set up a class what is amazing about this if it reference itself a global object but, if you connect this with an object this.apple or this.orange it will refer to the object you are connecting it to.

  Researched answer:The JavaScript this keyword refers to the object it belongs to. ... Alone, this refers to the global object. In a function, this refers to the global object. In a function, in strict mode, this is undefined . In an event, this refers to the element that received the event.



2. What is yarn? What file(s) are modified in a React application when you run yarn?

  Your answer: From what we did in class we did use yarn but first i would tell you what some information about yarn. Yarn is a package manager you can use it for a lot of things like if you want to make an app, testing, and it is realible, and works fast a lot of developers actually uses yarn cause it is a useful and important tool. For example if you type in yarn jest on your terminal it is helpful for testing, if you type in yarn start it is useful for app applications.

  Researched answer:
Yarn is a new JavaScript package manager that aims to be speedy, deterministic, and secure. See how easy it is to drop yarn in where you were using npm before, and get faster, more reliable installs. [00:01] Yarn is a package manager for JavaScript



3. What are props in React?

  Your answer: i am going to try my best to explain this but from what i learn in class i know props stands for properties and the way the props works it passes data from 1 to another componant. Also, when you use the class method the class is the parent and you are passing the same data to the child.

  Researched answer:React allows us to pass information to a Component using something called props (stands for properties). Props are basically kind of global variable or object



4. What is JSX?

  Your answer: oh ok i know this So, from class we did learn jsx and jsx is similar to HTML but the difference jsx is use more for react and syntax and arranges the word in the sentence. I remember it cause i know one of my instructor told we will use jsx a lot in react.

  Researched answer:
JSX is a syntax extension for ReactJS that adds support for writing HTML tags in JavaScript. On top of ReactJS, it creates a very powerful way to express a web application. If you're familiar with ReactJS, you know that it's a library for implementing web component-based frontend applications



5. What is a DOM event?

  Your answer:we just learn this in class i know DOM stands for (Document object model) and DOM event is like the like a signal that is happening or is going to happen and can be trigger by the browser for example me when when i type/ clicking on buttons.

  Researched answer:Each event has an EventTarget toward which the event is directed by the DOM implementation. This EventTarget is specified in the Event 's target attribute. ... If neither event capture or event bubbling are in use for that particular event, the event flow process will complete after all listeners have been triggered



6. STRETCH: What is an anonymous function in JavaScript?

  Your answer: A anonymous function is basically a function with no name and from what i remember in class that it can also accept input and retun an output. 

  Researched answer:Anonymous Function is a function that does not have any name associated with it. Normally we use the function keyword before the function name to define a function in JavaScript, however, in anonymous functions in JavaScript, we use only the function keyword without the function name


## Looking Ahead: Terms for Next Week

1. Conditional rendering: 
Conditional rendering is a term to describe the ability to render different user interface (UI) markup if a condition is true or false. In React, it allows us to render different elements or components based on a condition. This concept is applied often in the following scenarios: Rendering external data from an API

2. Ruby: ruby is a dynamic, open source programming language with a focus on simplicity and productivity. It has an elegant syntax that is natural to read and easy to write.

3. Object oriented programming: Object Oriented programming (OOP) is a programming paradigm that relies on the concept of classes and objects. It is used to structure a software program into simple, reusable pieces of code blueprints (usually called classes), which are used to create individual instances of objects.

4. Ruby hash:
Hash is a data structure that maintains a set of objects which are termed as the keys and each key associates a value with it. In simple words, a hash is a collection of unique keys and their values. ... Arrays always use an integer value for indexing whereas hashes use the object.

5. Ruby blocks: Ruby blocks are anonymous functions that can be passed into methods. Blocks are enclosed in a do-end statement or curly braces {}. ... We can give the caller of this method the total flexibility of passing in some code, not just the argument age, and the responsibility of our method would be to execute the code
