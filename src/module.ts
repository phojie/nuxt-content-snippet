import { addServerPlugin, createResolver, defineNuxtModule } from '@nuxt/kit'

// Module options TypeScript interface definition
export interface ModuleOptions {
  /**
   * The prefix to use for the snippet syntax.
   * @default '@@@'
   */
  prefix?: string
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: '@phojie/@phojie/nuxt-content-snippet',
    configKey: 'nuxtContentSnippet',
  },
  defaults: {
    prefix: '@@@',
  },
  setup(options, nuxt) {
    const { resolve } = createResolver(import.meta.url)
    const runtimeDir = resolve('./runtime')
    nuxt.options.build.transpile.push(runtimeDir) // remove this later

    addServerPlugin(resolve(runtimeDir, 'snippet'))
  },
})
