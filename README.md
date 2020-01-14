# React Native Event Listeners

(This package isn't only restricted to react-native projects. The source is written in plain js with no dependencies to react-native.)

[![Financial Contributors on Open Collective](https://opencollective.com/react-native-event-listeners/all/badge.svg?label=financial+contributors)](https://opencollective.com/react-native-event-listeners) [![npm version](https://badge.fury.io/js/react-native-event-listeners.svg)](https://badge.fury.io/js/react-native-event-listeners)
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


## Contributors

### Code Contributors

This project exists thanks to all the people who contribute. [[Contribute](CONTRIBUTING.md)].
<a href="https://github.com/meinto/react-native-event-listeners/graphs/contributors"><img src="https://opencollective.com/react-native-event-listeners/contributors.svg?width=890&button=false" /></a>

### Financial Contributors

Become a financial contributor and help us sustain our community. [[Contribute](https://opencollective.com/react-native-event-listeners/contribute)]

#### Individuals

<a href="https://opencollective.com/react-native-event-listeners"><img src="https://opencollective.com/react-native-event-listeners/individuals.svg?width=890"></a>

#### Organizations

Support this project with your organization. Your logo will show up here with a link to your website. [[Contribute](https://opencollective.com/react-native-event-listeners/contribute)]

<a href="https://opencollective.com/react-native-event-listeners/organization/0/website"><img src="https://opencollective.com/react-native-event-listeners/organization/0/avatar.svg"></a>
<a href="https://opencollective.com/react-native-event-listeners/organization/1/website"><img src="https://opencollective.com/react-native-event-listeners/organization/1/avatar.svg"></a>
<a href="https://opencollective.com/react-native-event-listeners/organization/2/website"><img src="https://opencollective.com/react-native-event-listeners/organization/2/avatar.svg"></a>
<a href="https://opencollective.com/react-native-event-listeners/organization/3/website"><img src="https://opencollective.com/react-native-event-listeners/organization/3/avatar.svg"></a>
<a href="https://opencollective.com/react-native-event-listeners/organization/4/website"><img src="https://opencollective.com/react-native-event-listeners/organization/4/avatar.svg"></a>
<a href="https://opencollective.com/react-native-event-listeners/organization/5/website"><img src="https://opencollective.com/react-native-event-listeners/organization/5/avatar.svg"></a>
<a href="https://opencollective.com/react-native-event-listeners/organization/6/website"><img src="https://opencollective.com/react-native-event-listeners/organization/6/avatar.svg"></a>
<a href="https://opencollective.com/react-native-event-listeners/organization/7/website"><img src="https://opencollective.com/react-native-event-listeners/organization/7/avatar.svg"></a>
<a href="https://opencollective.com/react-native-event-listeners/organization/8/website"><img src="https://opencollective.com/react-native-event-listeners/organization/8/avatar.svg"></a>
<a href="https://opencollective.com/react-native-event-listeners/organization/9/website"><img src="https://opencollective.com/react-native-event-listeners/organization/9/avatar.svg"></a>
