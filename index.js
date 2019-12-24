import type from 'type-detect'

class EventRegister {

  static _Listeners = {
    refs: {},
  }

  static addEventListener(eventName, callback) {
    if (
      type(eventName) === 'string' &&
      type(callback) === 'function' &&
      EventRegister._Listeners[eventName] === undefined
    ) {
      EventRegister._Listeners.refs[eventName] = {
        name: eventName,
        callback,
      }
      return eventName
    }
    return false
  }

  static removeEventListener(id) {
    if (type(id) === 'string') {
      return delete EventRegister._Listeners.refs[id]
    }
    return false
  }

  static removeAllListeners() {
    let removeError = false
    Object.keys(EventRegister._Listeners.refs).forEach(_id => {
      const removed = delete EventRegister._Listeners.refs[_id]
      removeError = (!removeError) ? !removed : removeError
    })
    return !removeError
  }

  static emitEvent(eventName, data) {
    Object.keys(EventRegister._Listeners.refs).forEach(_id => {
      if (
        EventRegister._Listeners.refs[_id] &&
        eventName === EventRegister._Listeners.refs[_id].name
      )
        EventRegister._Listeners.refs[_id].callback(data)
    })
  }

  /*
   * shortener
   */
  static on(eventName, callback) {
    return EventRegister.addEventListener(eventName, callback)
  }

  static rm(eventName) {
    return EventRegister.removeEventListener(eventName)
  }

  static rmAll() {
    return EventRegister.removeAllListeners()
  }

  static emit(eventName, data) {
    EventRegister.emitEvent(eventName, data)
  }

} 

export { EventRegister }
