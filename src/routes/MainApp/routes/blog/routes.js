import { injectReducer } from 'SRC/reducer.js'

export default (store) => (
  {
    path: 'blog',
    getComponent(location, cb) {
      require.ensure([], (require) => {
        // Asyn Injection Of Reducers
        const reducer = require('./containers/BlogReducer').default
        injectReducer(store, { key: 'blog', reducer })
        cb(null, require('./containers/Blog').default)
      }, 'Blog')
    },
    childRoutes: [
      require('./routes/user-profile/routes.js').default(store),
      require('./routes/push-promotion/routes.js').default(store)
    ]
  }
)
