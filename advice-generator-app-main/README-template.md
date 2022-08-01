# Frontend Mentor - Advice generator app solution

This is a solution to the [Advice generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Generate a new piece of advice by clicking the dice icon

### Screenshot

[![]()](./Screenshot.png)

### Links

- Solution URL: https://github.com/nikoProg/frontendmentor.io/edit/main/advice-generator-app-main/
- Live Site URL: [Add live site URL](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- Typescript 

### What I learned

I had some troubles making typescript compile and work, I mostly just recommend this guide:
https://www.digitalocean.com/community/tutorials/how-to-work-with-typescript-in-visual-studio-code
I think I also added --save-dev when installing it though

Using smaller / bigger images depending on screen size:
```css
@media only screen and (min-width: 768px) {
    #divider-mobile {
        display: none;
    }

    #divider-desktop {
        display: unset;
    }
```

Some button css tricks from Kevin:
```css
/*the entire ::after pseudoelement is used to make a trick with the glowy button transition*/
#btn::after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    box-shadow: 0 0 2em 0.5em hsl(150, 100%, 66%);
    opacity: 0;
    background-color: none;
    z-index: 0; 
    transition: opacity 500ms linear;
    border-radius: 50%;
  }
```

### Continued development

I would like to actually make use of typescript to make my coding experience better. This project was very small and did not give such opportunities. I wanted to install typescript, just to get acquainted with it.

I need to improve my CSS and quickly position them. I struggled a bit with positioning them properly and they are still not exactly as the solution image shows. The button with the SVG inside is 1 thing that I failed to resize properly.

### Useful resources

- (https://developer.mozilla.org/ and https://www.w3schools.com/) - Obviously, these two can always help! 
- [Create a neon button with a reflection using CSS](https://www.youtube.com/watch?v=6xNcXwC6ikQ) - this video by Kevin Powell helped me with the button, although it is much more than we need. It also helps a bit with understanding pseudoelements, which I still don't grasp quite well.

**Note: These could come in handy for anyone viewing your solution or for yourself when you look back on this project in the future.**

## Author

- Frontend Mentor - [@nikoProg](https://www.frontendmentor.io/profile/nikoProg)
- Github - [@nikoProg](https://github.com/nikoProg)

## Acknowledgments
- https://www.youtube.com/kepowob
Kevin Powell's videos are great for anyone
