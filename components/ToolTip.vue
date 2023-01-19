<template>
  <div class="relative inline-block tooltip">

    <div class="hover:text-gray-400 px-2 py-1 font-medium cursor-help">
      <Icon class="text-amber-500" name="bi:question-square-fill" />
    </div>

    <div class="flex flex-col p-4 bg-white w-60 h-80 rounded-md z-20 absolute right-0 invisible tooltip-item ">
      <a href="" class="font-semibold pb-4">Help</a>
      <ul class="list-disc space-y-2">
        <li class="flex items-start">
          <a href="" class="font-medium text-sm text-gray-500 hover:text-black"> Order Status </a>
        </li>
        <li class="flex items-start">
          <a href="" class="font-medium text-sm text-gray-500 hover:text-black"> Shipping & Delivery </a>
        </li>
        <li class="flex items-start">
          <a href="" class="font-medium text-sm text-gray-500 hover:text-black"> Returns </a>
        </li>
        <li class="flex items-start">
          <a href="" class="font-medium text-sm text-gray-500 hover:text-black"> Size Charts </a>
        </li>
        <li class="flex items-start">
          <a href="" class="font-medium text-sm text-gray-500 hover:text-black"> Contact Us </a>
        </li>
        <li class="flex items-start">
          <a href="" class="font-medium text-sm text-gray-500 hover:text-black"> Privacy Policy </a>
        </li>
        <li class="flex items-start">
          <a href="" class="font-medium text-sm text-gray-500 hover:text-black"> Terms of Sale </a>
        </li>
        <li class="flex items-start">
          <a href="" class="font-medium text-sm text-gray-500 hover:text-black"> Terms of Use </a>
        </li>
        <li class="flex items-start">
          <a href="" class="font-medium text-sm text-gray-500 hover:text-black"> Send Us Feedback </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<style>
.tooltip:hover .tooltip-item {
  visibility: visible;
}
</style>

