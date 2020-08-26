import { applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { logger } from 'redux-logger'

const isProd = process.env.NODE_ENV === 'production'
const middleWareList = []

middleWareList.push(thunk)
if (!isProd) {
  middleWareList.push(logger);
}

const middleware = compose(applyMiddleware(thunk, logger))

export default middleware;