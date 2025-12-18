import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: '42q91yqs',
    dataset: 'production'
  },
  deployment: {
    /**
     * Enable auto-updates for studios.
     * Learn more at https://www.sanity.io/docs/cli#auto-updates
     */
    autoUpdates: true,

    // Add your appId here so you don’t get prompted again
    appId: 'jtqjbygw613elaaos18tsxwn',
  }
})
