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
    name: 'nuxt-content-snippet',
    configKey: 'contentSnippet',
  },
  defaults: {
    prefix: '@@@',
  },
  setup(options, nuxt) {
    const { resolve } = createResolver(import.meta.url)
    const runtimeDir = resolve('./runtime')

    nuxt.options.runtimeConfig.prefix = options.prefix || '@@@'
    addServerPlugin(resolve(runtimeDir, 'snippet'))
  },
})
