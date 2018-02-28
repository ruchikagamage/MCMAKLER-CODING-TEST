## MCMAKLER-CODING-TEST



## Instructions

To run this project you need to install node.js first in your machine by going to the official nodejs website. (https://nodejs.org/en/)

In the project directory, you can run:

### `npm install`
(This will install all the node packages which is installed in the package.json)

After installing those node packages run below command to execute the project.
### `npm start`

## Why ReactJS with Redux? 
ReactJS is an open source JavaScript library for creating rich and engaging web applications fast and more efficiently with minimal coding. The core objective of ReactJS is providing the best possible rendering performance. Its strength comes from the focus on individual components. Instead of working on the entire web appplication, ReactJS allows a developer to break down the complex UI into simpler components.So in this project I've used ReactJS to buid all UI components and re-used those codes to complete project much faster.

This is the main reasons to choose ReactJS
-  It's allow to write their apps within JavaScript (JSX).
-  Components allow to break down complex UI.
-  The Props make it possible to populate components using custom data.
-  The State makes it possible to store all the changes in one section.
-  It uses Virtual DOM that makes the app fast. 

But React is a UI library. It should only deal with rendering the UI given a particular set of data. If the data changes, it should re-render to form a new UI,
Then Redux tries to separate the application data and business logic into it's own container so that React can manage just the view.

## Why SCSS ? 
Just like with any language, writing CSS without a well-defined architecture and/or organizational pattern quickly becomes an unmaintainable mess. In this project I'm using SCSS to write more structured and consistent styles. SCSS help to styles React components with modular CSS.Those are the some common problems comes with using CSS.

- Global Namespace
- Dead Code Elimination
- Minification
- Sharing Constants
- Non-deterministic Resolution
- Isolation

using proper organization and architecture in SCSS can mitigate these problems, especially within the context of styling React components. In this application I used two type of SCSS files Those are common SCSS and component base SCSS.

Simple example for modular SCSS file and how it used in ReactJS component.

index.js
```
import React from "react";
import './styles.scss'
// or import './styles.css'
const Card = props => {
  return <div className="card">{props.children}</div>;
};
export { Card };
```
styles.scss
```
@import './../../../styles/scss/_vb.scss';
.card{
    border: 1px solid $border_color ;
    min-height: 1px;
    width: 100%;
    border-radius: 1px;
    max-height: 530px;
}
```

