
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

