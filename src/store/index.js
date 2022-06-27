import {createStore} from 'redux'
import CounterReducers from './reducers/CounterReducers'

export const store = createStore(CounterReducers)

