export default {
  path: 'home',
  getComponent(location, cb) {
    require.ensure([], (require) => {
      cb(null, require('./Home').default)
    }, 'home')
  }
}
