<!-- markdownlint-disable MD030 -->
<!-- markdownlint-disable MD010 -->

# O Roberto ☕

![Robertonto.Dev]("https://github.com/GabrielRQueiroz/robertonto.dev/tree/master/src/assets/images/banner.png")

🎊 Welcome to the source code of my personal website, [robertonto.netlify.app ↗️](https://robertonto.netlify.app/).

## 📝 What is it made of?

-  ⚛️ [React](https://reactjs.org/) for the frontend;
-  💅 [Styled Components](https://styled-components.com/) for styling;
-  🖼️ [Flicking](https://naver.github.io/egjs-flicking/) for BEAUTIFUL carousels
-  🌐 [Netlify](https://www.netlify.com/) for hosting.

## 📝 ~~🧟 (Probably obscure)~~ Things I made

### 🪝 Custom hooks

> ---
>
> `useAudio/useSoundFX` - both are supposed to receive an audio file as a parameter and return the "playing" state and the "toggle" function.
>
> -  Their difference is that `useSoundFX` is supposed to be used for sound effects, playing from the beginning every time the "toggle" function is called.
> -  `useAudio` is meant to be used for background music/audio, so it will alternate between paused/playing state the audio from .
>
> `useViewportDimensions` - returns the current viewport dimensions on an array of [width, height] in pixels. Was used to make the carousels responsive.
>
> ---

### 📦 Contexts

> ---
>
> `ViewContext` - this context is used to inform the active view of the website to other components. Its states are `viewIndex, currentView, views` and its state setter functions are `nextView, previousView`.
>
> -  `views` is an array with each view components with the props `view`, `heading`, `emoji` and `hideIcons`.
> -  The `currentView` state can be "About", "Greetings", "Resume" and "Portfolio", which are all React components within the `views` array.
> -  The `nextView` and `previousView` functions are bound to the left-right button in the page, changing the current view component shown to the user.
>
> ---

### 🎨 Components

> ---
>
> `Header` - a component that dynamically updates its `heading`, `icon` and `icons' visibility` states based on the current view in the user's screen. These states are set based on the `ViewContext` view changes.
>
> ---
>
> `SpringButton` - a button with a spring animation when hovered. It can be personalized through the `color` prop. It can also receive `children` to be rendered inside the button.
>
> -  Theres is a limited list of `color` props: "blue", "green", "pink", "black", "lightBlue", "red".
>
> ---
>
> `Rocket` - a rocket button to skip from first view to last view (and vice-versa).
>
> ---
>
> `LanguageButton` - a button to change the language of the website.
>
> ---

### 📊 Data

> ---
>
> Currently, there are two files containing the carrousel data: `events.js` and `projects.js`. They are both arrays of objects with the following structure:
>
> -  `events`:
>
> ```js
> {
> 	'id', 'icon', 'title', 'location', 'period', 'description';
> }
> ```
>
> -  `projects`:
>
> ```js
> {
> 	'projectName', 'projectType', 'techStack', 'printscreen', 'key', 'repo', 'live';
> }
> ```
>
> ---

**👉 There are plans of changing from static data files to actual database.**

## 📝 License

[MIT](https://choosealicense.com/licenses/mit/)
