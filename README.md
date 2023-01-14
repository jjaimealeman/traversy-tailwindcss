
## Nuxt Icon [source](https://github.com/nuxt-modules/icon#usage-)

```
    <Icon name="NuxtIcon" />
    <Icon name="🚀" />
    <Icon name="uil:github" />
```

### Render Function [source](https://github.com/nuxt-modules/icon#render-function)

You can use the Icon component in a render function (useful if you create a functional component), for this you can import it from #components:

`import { Icon } from '#components'`

See an example of a <MyIcon> component:

```
    <script setup>
        import { Icon } from '#components'
        const MyIcon = h(Icon, { name: 'uil:twitter' })
    </script>

    <template>
        <p><MyIcon /></p>
    </template>
```
LearnVue add dark mode
https://www.youtube.com/watch?v=cGN91TLXrC8


## Fri 13 Jan 2023
I thought of a way to create a color gradient or background in SVG files by useing the --tailwind-css-variable 👍
Gotta check that out later.

