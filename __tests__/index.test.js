import { EventRegister } from '../index'

describe('EventRegister tests', () => {

  beforeEach(() => {
    EventRegister._Listeners = {
      count: 0,
      refs: {},
    }
  })

  const _addEventListener = (name = 'test', func = () => {}) => {
    return EventRegister.addEventListener(name, func)
  }


  it('tests that eventlisteners are added properly', () => {
    const id = _addEventListener()
    _addEventListener()
    _addEventListener()
    expect(id).toBe('l1')
    expect(EventRegister._Listeners).toMatchSnapshot()
  })


  it('tests that removeEventListener works properly', () => {
    _addEventListener()
    const id = _addEventListener()
    _addEventListener()

    const removed = EventRegister.removeEventListener(id)
    expect(EventRegister._Listeners).toMatchSnapshot()
    expect(removed).toBe(true)

    const removed2 = EventRegister.removeEventListener('idNotAvailable')
    expect(removed2).toBe(true)

    const removed3 = EventRegister.removeEventListener(123)
    expect(removed3).toBe(false)
  })


  it('tests that removeAllListeners works properly', () => {
    _addEventListener()
    _addEventListener()
    _addEventListener()

    const removed = EventRegister.removeAllListeners()
    expect(EventRegister._Listeners).toMatchSnapshot()
    expect(removed).toBe(true)
  })


  it('tests that emitEvent works properly', () => {
    const mockFunc1 = jest.fn()
    const mockFunc2 = jest.fn()
    const mockFunc3 = jest.fn()
    _addEventListener('test1', mockFunc1)
    _addEventListener('test2', mockFunc2)
    _addEventListener('test3', mockFunc3)
    EventRegister.emitEvent('test1', { mockValue: 'mock 1' })
    expect(mockFunc1).toHaveBeenCalledWith({ mockValue: 'mock 1' })
    EventRegister.emitEvent('test3', { mockValue: 'mock 3' })
    expect(mockFunc3).toHaveBeenCalledWith({ mockValue: 'mock 3' })
  })


  it('tests that removed callbacks are not called', () => {
    const mockFunc1 = jest.fn()
    const mockFunc2 = jest.fn()
    const mockFunc3 = jest.fn()
    const id = _addEventListener('test1', mockFunc1)
    _addEventListener('test2', mockFunc2)
    _addEventListener('test3', mockFunc3)
    EventRegister.removeEventListener(id)
    EventRegister.emitEvent('test1', { mockValue: 'mock 1' })
    expect(mockFunc1).not.toHaveBeenCalled()
    EventRegister.emitEvent('test3', { mockValue: 'mock 3' })
    expect(mockFunc3).toHaveBeenCalledWith({ mockValue: 'mock 3' })

    _addEventListener('test1', mockFunc1)
    EventRegister.emitEvent('test1', { mockValue: 'mock 1' })
    expect(mockFunc1).toHaveBeenCalledWith({ mockValue: 'mock 1' })
  })

  /* shorthands */
  it('tests that addEventListener is called with shorthand "on"', () => {
    EventRegister.addEventListener = jest.fn()
    const func = jest.fn()
    EventRegister.on('name', func)
    expect(EventRegister.addEventListener).toHaveBeenCalledWith('name', func)
  })


  it('tests that removeEventListener is called with shorthand "rm"', () => {
    EventRegister.removeEventListener = jest.fn(() => {
      return 'removed'
    })
    const id = _addEventListener()

    const removed = EventRegister.rm(id)
    expect(EventRegister.removeEventListener).toHaveBeenCalledWith(id)
    expect(removed).toBe('removed')
  })


  it('tests that removeAllListeners is called with shorthand "rmAll"', () => {
    EventRegister.removeAllListeners = jest.fn(() => {
      return 'removed'
    })
    _addEventListener()
    _addEventListener()
    _addEventListener()
    
    const removed = EventRegister.rmAll()
    expect(EventRegister.removeAllListeners).toHaveBeenCalled()
    expect(removed).toBe('removed')
  })


  it('tests that emitEvent is called with shorthand "emit"', () => {
    EventRegister.emitEvent = jest.fn() 
    EventRegister.emit('test', {
      mockValue: 'val',
    })
    expect(EventRegister.emitEvent).toHaveBeenCalledWith('test', {
      mockValue: 'val',
    })
  })

})
