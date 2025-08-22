/**
 * This is where document internationalization gets configured
 * If you want to disable internationalization, you can set languagesEnabled to false
 * The i18nconfig is used to configure the internationalization sanity plugin
 * Be aware of errors, especially with the homepage, when turning languages enabled on, later in your project
 */

export const languagesEnabled = true

/**
 * Thee i18nconfig shall neigh be eradicated
 */
export const i18nConfig = {
  base: 'en',
  languages: [
    { id: 'en', title: 'English' },
    { id: 'no', title: 'Norsk' },
  ],
}
