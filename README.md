# React Native Event Listeners

(This package isn't only restricted to react-native projects. The source is written in plain js with no dependencies to react-native.)

[![npm version](https://badge.fury.io/js/react-native-event-listeners.svg)](https://badge.fury.io/js/react-native-event-listeners)
[![dependencie status](https://david-dm.org/tobiasMeinhardt/react-native-event-listeners.svg)](https://david-dm.org/tobiasMeinhardt/react-native-event-listeners)
[![dev-dependency status](https://david-dm.org/tobiasMeinhardt/react-native-event-listeners/dev-status.svg)](https://david-dm.org/tobiasMeinhardt/react-native-event-listeners?type=dev)
[![npm](https://img.shields.io/npm/dm/react-native-event-listeners.svg)](https://www.npmjs.com/package/react-native-event-listeners)
[![npm](https://img.shields.io/npm/dt/react-native-event-listeners.svg)](https://www.npmjs.com/package/react-native-event-listeners)
[![travis build](https://travis-ci.org/meinto/react-native-event-listeners.svg?branch=master)](https://travis-ci.org/meinto/react-native-event-listeners)
[![Coverage Status](https://coveralls.io/repos/github/meinto/react-native-event-listeners/badge.svg?branch=master)](https://coveralls.io/github/meinto/react-native-event-listeners?branch=master)

## Why

In some very specific cases it can be charming to have a simple global event listener. While working with global event listeners **you don't have to pass touch events through the component tree** into other components or can **bypass easily the redux architecture** for example.

## Installation

```
npm install --save react-native-event-listeners
```

or

```
yarn add react-native-event-listeners
```

## Usage Example

*Hint: The event listeners also work across different files. You only have to import the ```EventRegister``` in every file you need to send or receive your events.*

```javascript
import { EventRegister } from 'react-native-event-listeners'

/*
 * RECEIVER COMPONENT
 */
class Receiver extends PureComponent {
    constructor(props) {
        super(props)
        
        this.state = {
            data: 'no data',
        }
    }
    
    componentWillMount() {
        this.listener = EventRegister.addEventListener('myCustomEvent', (data) => {
            this.setState({
                data,
            })
        })
    }
    
    componentWillUnmount() {
        EventRegister.removeEventListener(this.listener)
    }
    
    render() {
        return <Text>{this.state.data}</Text>
    }
}

/*
 * SENDER COMPONENT
 */
const Sender = (props) => (
    <TouchableHighlight
        onPress={() => {
            EventRegister.emit('myCustomEvent', 'it works!!!')
        })
    ><Text>Send Event</Text></TouchableHighlight>
)
```

## API

```javascript
// import
import { EventRegister } from 'react-native-event-listeners'
```

| static method       | return value      | description                                                    |
| :------------------ | :---------------- | :------------------------------------------------------------- |
| addEventListener    | string \| boolean | return value is the id of the event listener or false on error |
| removeEventListener | boolean           | true on success otherwise false                                |
| removeAllListeners  | boolean           | true on success otherwise false                                |
| emitEvent           | void              | no return value                                                |
| on                  | string \| boolean | **shorthand** for addEventListener                             |
| rm                  | boolean           | **shorthand** for removeEventListener                          |
| rmAll               | boolean           | **shorthand** for removeAllListeners                           |
| emit                | void              | **shorthand** for emitEvent                                    |

