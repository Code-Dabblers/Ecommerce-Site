# Style Guidelines

### In our project, we use Sass along with the recommended file structure. It's important to follow a few basic guidelines in order to keep the source code well structured and maintainable.

### There are 5 folders inside our [Sass folder](https://github.com/Code-Dabblers/Ecommerce-Site/tree/main/src/styles/sass):

* abstracts
* base
* components
* layout
* pages

 **Abstracts**
holds Sass tools, helper files, variables, functions, mixins and other config files. These files are meant to be just helpers which don’t output any CSS when compiled.

**Base**
holds the boilerplate code for the project. Including standard styles such as resets and typographic rules.

**Components**
hold all the styles for buttons, cards, quotes, and similar page components (think widgets). These components may be reusable between multiple pages.

**Layout**
contains all styles involved with the layout of our project. Such as styles for our header, footer or grid system.

**Pages** hold
styles specific to individual pages of the modules (paths in our project).

### Below these folders, we can also see [main.scss](https://github.com/Code-Dabblers/Ecommerce-Site/blob/main/src/styles/sass/main.scss) file. This file imports all the *partials* (individual .scss files inside the mentioned folders - these files must start with an underscore. Whenever you create a new partial, don't forget to import it here. **Order matters!** Every partial must be declared after other partials which have been used inside it (if any).

## Other information

### **Mobile-first**
In our project, we follow the mobile-first technique. That means we code for mobile devices first, media queries are used to reach other devices of different viewport.

### **Media queries**
There are 2 media queries set up inside of the mixins folder (for tablets, and for desktop and higher viewport).

#### **How to define a media query:**
example:
```
.header {
  padding: 2rem;

  @include respond(tablet) {
    padding: 3rem;
  }

  @include respond(desktop) {
    padding: 4rem;
  }
}
 ```

### **BEM**
Use BEM (Block Element Modifier) naming convention in the markup and style files. If you have doubts, read [this article](https://css-tricks.com/bem-101/) or watch [this video](https://www.youtube.com/watch?v=St5B7hnMLjg&list=PL4cUxeGkcC9iEwigam3gTjU_7IA3W2WZA).

### **CSS units**
Try to use **rem units** in every case. The pixel size of one rem is dynamically dependent on the viewport. Exceptionally, **em units** are only used for media query definitions as it has its deep benefits. That's the only case.

### **Colors**
Always try to use variables defined inside of variables partial. We are following a project color pallete and it's crucial to stick to it. If a particular color is not a declared variable, consider declaring a corresponding variable inside the variables partial.

## All the best!