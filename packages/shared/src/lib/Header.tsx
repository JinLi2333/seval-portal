
import React from 'react'
import { RedButton } from '../Button'

export function Header() {
    return <div>
        <h1>Header</h1>
        <button onClick={() => {
          greet('Hello')
        }}></button>
        <RedButton text="Click me" />
    </div>
};