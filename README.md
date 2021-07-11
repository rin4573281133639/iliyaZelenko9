  <p align="center">
    <a href="https://codecov.io/gh/iliyaZelenko/vue-cool-select">
      <img src="https://img.shields.io/codecov/c/github/iliyaZelenko/vue-cool-select.svg" alt="Coverage">
    </a>
    <a href="https://www.npmjs.com/package/vue-cool-select">
      <img src="https://img.shields.io/npm/dm/vue-cool-select.svg" alt="Downloads">
    </a>
    <a href="https://www.npmjs.com/package/vue-cool-select">
      <img src="https://img.shields.io/npm/v/vuetify.svg" alt="Version">
    </a>
    <a href="https://www.npmjs.com/package/vue-cool-select">
      <img src="https://img.shields.io/npm/l/vuetify.svg" alt="License">
    </a>
  </p>

# Flexible select.

<div style="text-align: center">
  <img src="https://i.imgur.com/z7XdAkb.png?3" width="210px;">
  <img src="https://i.imgur.com/Ko1XsvT.png" width="210px;">
  <img src="https://i.imgur.com/FeOD4Go.png" width="210px;">
  <img src="https://i.imgur.com/38xQWCg.png" width="210px;">
</div>

## [Demos + Documentation](https://iliyazelenko.github.io/vue-cool-select)

https://iliyazelenko.github.io/vue-cool-select

[![](https://i.imgur.com/XqHoHxM.png)](https://iliyazelenko.github.io/vue-cool-select)

## Features

- 2 themes: bootstrap 4, material design
- autocomplete
- asynchronous data
- slots
- loading indicator
- validation
- support on mobile devices
- disabled and readonly
- control through arrows
- many props and events

## Installation

`yarn add vue-cool-select` or `npm install --save vue-cool-select`

## Get started

1. Import and select theme
  ```js
  import VueSelect from 'vue-cool-select'
  
  Vue.use(VueSelect, {
    theme: 'bootstrap' // or 'material-design'
  })
  ```

2. Use inside component
```js
import { CoolSelect } from 'vue-cool-select'

export default {
  components: { CoolSelect },
  data () {
    return {
      items: [...],
      selected: null
    }
  }
}
```

3. Add to template
```vue
<cool-select
  v-model="selected"
  :items="items"
/>
```

Documentation and examples [here](https://iliyazelenko.github.io/vue-cool-select).

#### TODO
- Large test coverage

I am happy to add something or improve, you can write what you want to see.
I also have more motivation to work if you put a star.
