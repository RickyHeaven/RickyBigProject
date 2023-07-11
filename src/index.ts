import type { App } from 'vue'

import CounterF from '@/components/CounterF.vue'

import '@/assets/main.less'

const install = function (app: App, options: Record<string, any> = {}) {
  app.component('CounterF', CounterF)
}

export default { install }
