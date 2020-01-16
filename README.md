# 💩 Poo Clicker V2
<p align="center">
Older version of the the project: <br>
-> https://github.com/MathieuKruk/Poo-Clicker-V1 <-
</p>

## Table of contents
* [Features](## ◾ Features)
* [Motivation](#Motivation)
* [Tasks](#Tasks)
* [Build status](#Build-status)
* [Screenshots](#Screenshots)
* [Technology](#Technology)
* [Code-Example](#Code-Example)
* [Credits](#Credits)
* [License](#License)

## ◾ Features

<ul>
  <li>Cookie Clicker is a mouse-clicking game playable on internet navigators.</li>
</ul>

<hr>

<p align="center">
  <img src="https://download.hipwallpaper.com/desktop/1920/1080/52/60/XlPYos.jpg">
</p>

<hr>

## ◾ Motivation

It has been launch the 💠23/09/2019💠 in the case of a school project (<a href="https://github.com/becodeorg" target="_blank">BeCode</a>).

A private joke led us develop a javascript game around a little poo.

Below, you will find our guidelines hosted on the school repo: 

▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️

== Missions objectives

At the end of this challenge you should have improved your:

* *JavaScript* skills
* team skills
* git conflict skills


== The mission

This challenge will have you create a {clicker}[cookie clicker] as a team.
Follow the instructions to complete the challenge, to get some ideas check the
examples in the _resources_ section.

image::./cookies.jpg[cookies]

=== Instructions

NOTE: The steps below are meant to help you in development, but as long as you
make a cookie clicker you can implement whatever you want.

.Step 1: base structure
Write the base structure for the project in *HTML*, *CSS* and *JavaScript*.
Within the HTML, put a _click_ button which will increment a counter and a label
initialised at _0_ to display said counter.

.Step 2: prepare the JavaScript
In your JavaScript prepare variables to allow you to control your button and
label. You will also need a variable to keep track of the score.

.Step 3: increase the score
When you click the button, increase the variable storing the score by _1_, then
display the current score inside the label.

.Step 4: make a multiplier
Add another button which will act as a multiplier. When called this button will
permanently multiply the number of points per click, by _two_ for example.

.Step 5: price of multiplier
The multiplier allows you to have a big score quickly, that shouldn't be free,
it should be a purchase made with the current player score.

.Step 6: no credit
You can't make credit, meaning that the player cannot have a negative score.
Think about updating the score display after a purchase.

.Step 7: display multiplier counter
Display the counter within the multiplier. For example, if the counter is worth
_5_, then the button should display something like _multiplier x5_.

.Step 8: increase the cost
Buying a lot of multiplier is way too easy. For more fun, make it so that each
time a multiplier is purchased the cost of buying a new one is increased.

.Step 9: display the cost
In the text of the multiplier button you should also have the price of the
upgrade.

.Step 10: auto-clicker
Implement a new improvement to buy, the _auto-click_. As the name might suggest
this bonus will automatically add a click to your score each _x_ seconds.

.Step 11: bonus
Implement yet another improvement to buy, the _bonus_. It should grant the
player a boost in score of _200%_ per click for _30 seconds_. When purchased the
player should see a timer with the remaining time inside the bonus button.

.Step 12: deactivate the buttons 
Make it so that, if the player doesn't have the points to purchase a multiplier,
an auto-click or an other bonus, he can't.

.Step 13: make it pretty
Your cookie clicker must be pretty, make it look good with CSS or some extra
JavaScript.

=== Resources

* http://orteil.dashnet.org/cookieclicker/[cookie clicker]
* https://particle-clicker.web.cern.ch/particle-clicker/[particle clicker]

▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️

<hr>

## ◾ Tasks

- [x] Initialize the ReadMe and the trello.
- [x] Work on the main project.
- [ ] Launch the app.

ℹ️ For further informations, please make sure to visit our **Trello** [board](https://trello.com/b/aARBOSKu/poo-clicker-v2)

<hr>

## ◾ Build-status

📲 V2.0.1
Logs
   - Readme initialized.
   - ...
   - ...
   - ...

<hr>

## ◾ Screenshots

## ◾ Technology

1. Front-end
   - [HTML](https://www.w3.org/html/)
   - [SASS](https://sass-lang.com/)
   - [Font-Awesome 4.7](https://fontawesome.com/v4.7.0/)
   - [React](https://reactjs.org/)
   - [React-Bootstrap](https://react-bootstrap.github.io/)
   - [Pose](https://popmotion.io/pose/)
   
2. Back-end

3. Others
   - [Yarn](https://yarnpkg.com/lang/en/)

<hr>

## ◾ Code-Example

```
function test() {
  console.log("This is a test for code input?");
}
```

<hr>

## ◾ Credits
Team
   - 👨‍💻  [Kiza](https://github.com/Kiza-coder)
   - 👨‍💻  [Mathieu Kruk](https://github.com/MathieuKruk)

<hr>

## ◾ License

OpenSource | Free

<hr>

<p align="right">
 ✍️ Readme Author:
  <br>
  <a href="https://github.com/MathieuKruk">Mathieu Kruk</a>
</p>

<p align="right">
  <img src="https://media.giphy.com/media/H6VtX1y2rDUJXFahht/giphy.gif" height="40%" width="25%">
</p>
