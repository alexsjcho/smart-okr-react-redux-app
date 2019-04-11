import React, { Component, Fragment } from 'react'
import uuid from 'uuid'

import KeyResult from './KeyResult'

class KeyResultsList extends Component {
  render () {
    const {
      onChange,
      keyResults,
      setKeyResult,
      deleteKeyResult,
      ...props
    } = this.props
    return (
      <Fragment>
        {keyResults.map(keyResult => (
          <KeyResult
            key={uuid()}
            onSubmit={setKeyResult}
            onKeyDelete={deleteKeyResult}
            keyResult={keyResult}
            {...props}
          />
        ))}
        <KeyResult {...props} onKeyDelete={deleteKeyResult} onSubmit={setKeyResult} />
      </Fragment>
    )
  }
}
export default KeyResultsList
