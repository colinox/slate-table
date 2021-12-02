import React from 'react'
import ReactDOM from 'react-dom'
import {
  SlatePlugins,
  createReactPlugin,
  StyledElement,
  withProps,
  createHistoryPlugin,
  createTablePlugin
} from '@udecode/slate-plugins'

// import { createTablePlugin, TableElement, TdElement } from './table'

import {
  ELEMENT_TABLE,
  ELEMENT_TR,
  ELEMENT_TH,
  ELEMENT_TD
} from '@udecode/slate-plugins-table'

import { TableElement, TdElement } from '@cihad/slate-table'

import './index.css'

const plugins = [
  createReactPlugin(),
  createTablePlugin(),
  createHistoryPlugin()
]

const initialValue = [
  {
    type: 'p',
    children: [
      {
        text: 'Table Plugin Example'
      }
    ]
  },
  {
    type: 'table',
    children: [
      {
        type: 'tr',
        children: [
          { type: 'td', children: [{ text: '1' }] },
          { type: 'td', children: [{ text: '2' }] },
          { type: 'td', children: [{ text: '3' }] }
        ]
      },
      {
        type: 'tr',
        children: [
          { type: 'td', children: [{ text: '4' }] },
          { type: 'td', children: [{ text: '5' }] },
          { type: 'td', children: [{ text: '6' }] }
        ]
      }
    ]
  },
  {
    type: 'p',
    children: [
      {
        text: ''
      }
    ]
  }
]

const components = {
  [ELEMENT_TABLE]: TableElement,
  [ELEMENT_TR]: withProps(StyledElement, { as: 'tr' }),
  [ELEMENT_TD]: TdElement,
  [ELEMENT_TH]: withProps(StyledElement, { as: 'th' })
}

const App = () => {
  const editableProps = {
    placeholder: 'Type..'
  }

  return (
    <SlatePlugins
      initialValue={initialValue}
      editableProps={editableProps}
      plugins={plugins}
      components={components}
    />
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
