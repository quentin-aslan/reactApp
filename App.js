// App.js

import React from 'react'
import FormSend from './components/FormSend'
import ListMessage from './components/ListMessage';

export default class App extends React.Component {
  render() {
    return (
        <ListMessage />,
        <FormSend/>
    )
  }
}