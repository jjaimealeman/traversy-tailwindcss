## Saturday, December 10, 2022 @ 10:29:29 PM

Starting the course `Tailwind From Scratch` by Brad Traversy today.
https://www.udemy.com/course/tailwind-from-scratch/learn/lecture/32345594#overview

Cloned my own repo `https://github.com/jjaimealeman/vite-vue3-tailwind-starter.git`

---

### Course Links

#### Code & Demos:

> Main Website With Project Demos - https://tailwindfromscratch.com
>
> Code For Sandbox - https://github.com/bradtraversy/tailwind-sandbox
>
> Code For All Projects - https://github.com/bradtraversy/tailwind-course-projects
>
> Code For Simple Tailwind Starter - https://github.com/bradtraversy/simple-tailwind-starter
>

---

## Friday, December 16, 2022 @ 01:10:20 AM

### Vue Slots Simplified
https://www.youtube.com/watch?v=orGcdmCRCc0
> Slots are another way in Vue for a component to inject content into a child component. This does this using template code.
>
> In this video, we'll take a look at the basics of Vue slots, using scoped slots to pass data between components, named slots, and so much more.

### We can use REACTIVE VARIABLES in Vue CSS!!
https://www.youtube.com/watch?v=PPrUWISAbmU&t=4s
> The Single File Component Styles RFC gives us Vue developers a way to use a component’s reactive data as CSS variables.
>
> In just one simple syntax, we can update styles at runtime in Vue 3.
>
> This proposed change takes full advantage of CSS variables, which most modern browsers support, and Vue 3’s reactivity library. Combining the two gives us an easy way to update our styles using our component’s data.


---

## TO USE LATER:
```css
button {
    @apply shadow-none transition-all duration-300 p-2 m-2 rounded-md border-2 border-slate-700 text-slate-900 hover:-translate-y-[0.1em];
}

button.subscribe {
    @apply bg-emerald-500;
    @apply active:bg-emerald-300 active:text-emerald-700 active:border-emerald-700 hover:shadow-emerald-500 hover:shadow-md;
}

button.cancel {
    @apply bg-red-500;
    @apply active:bg-red-300 active:text-red-700 active:border-red-700 hover:shadow-red-500 hover:shadow-md;
}
```
