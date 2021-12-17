## Miraculous Parallax Effect

![Here you should see a nice screenshot of this page...](/img/src/demo_image.png "Logo Title Text 1")

This is a demo of a nice parallax-effect-based website style, crafted with pure html/css/js.

### 1 - How can I check this little demo right now?

- [Try it out](https://erikuckert.github.io/miraculous-parallax/#about) just online. It is hosted at github pages. 

- You can also clone the repository to your local drive and simply open up the ```index.html``` file in your local browser.

### 2 - What technologies are used?

- I used the holy and powerful triumvirate that containes
![](https://img.shields.io/badge/HTML5-informational?style=flat&logo=html5&logoColor=white&color=2bbc8a)
![](https://img.shields.io/badge/CSS-informational?style=flat&logo=css3&logoColor=white&color=2bbc8a)
![](https://img.shields.io/badge/JAVASCRIPT-informational?style=flat&logo=javascript&logoColor=white&color=2bbc8a) along with a little help from 
![](https://img.shields.io/badge/Photoshop-informational?style=flat&logo=adobe-photoshop&logoColor=white&color=2bbc8a) 
and
![](https://img.shields.io/badge/VisualStudioCode-informational?style=flat&logo=visual-studio-code&logoColor=white&color=2bbc8a)
to craft this demo site. 

### 3 - And how does it work?
- The Parallax Scrolling effect is mainly created by some javascript logic which let the different image parts scroll in different speeds. This speeds are defined in ```index.html``` as ```data-*``` Attributes like 
```html
<img src="img/mountain-parallax_foreground.png" class="mountain-foreground translate" data-speed="0" alt="">
```

```html
<img src="img/mountain-parallax_background.png" class="mountain-background translate" data-speed="0.4" alt="">
```

- and gets processed in the ```app.js``` File.

```js
with "translate" class
    translate.forEach(element => {

        let speed = element.dataset.speed;
        if (scroll > 0 ) {
            element.style.transform = `translateY(${scroll * speed}px)`;
        } else {
            element.style.transform = `translateY(${scroll * 0.1}px)`;
        }
    });
```

- In addition some effects are added to prevent overlapping of the fixed header and the actual content when scrolling down.

```js
if (sectionY.y < 0) {
    container.style.opacity = sectionY.y / (container_height*0.1) + 1;
} else {
    container.style.opacity = 1;
}
```

### 4 - Credits
I build this demo page based on some work I found at [Rachid Demgharts](https://github.com/sefyudem) github profile and added a little spice to overcome scrolling problems and behavioral glitches.
