import '~/styles/main.styl'
// import '~/styles/themes/bootstrap.styl'
// import '~/styles/themes/material-design.styl'
import component from '~/component.vue'
import EventEmitter from '~/eventEmitter'

export const CoolSelectPlugin = new Singelton()
export {
  EventEmitter,
  component,
  component as CoolSelect,
  component as VueCoolSelect
}

function Singelton () {
  return {
    install (Vue, options = {}) {

    }
  }
}
