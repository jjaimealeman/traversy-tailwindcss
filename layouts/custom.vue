<template>
    <div class="CustomLayout inset-0 bg-[url(~/assets/grid.svg)] bg-top">
        <!-- <div class="absolute z-0 inset-0 bg-[url(~/assets/grid.svg)] bg-top [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div> -->
        <TheHeader />
            <slot />
        <TheFooter />
    </div>
</template>
