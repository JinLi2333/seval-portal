import { greet } from '@seval-portal/tools'

export function RedButton({text}: {text: string}) {
    return <button style={{
        'backgroundColor': 'red',
        'color': 'white',
    }} onClick={() => {
        console.log(greet('from RedButton'))
    }}>{text}</button>
}

export function GreenButton({text}: {text: string}) {
    return <button style={{
        'backgroundColor': 'green',
        'color': 'white',
    }} onClick={() => {
        console.log(greet('from GreenButton'));
    }}>{text}</button>
}

export function BlueButton({text}: {text: string}) {
    return <button style={{
        'backgroundColor': 'blue',
        'color': 'white',
    }} onClick={() => {
        console.log(greet('from BlueButton'))
    }}>{text}</button>
}
export function PurpleButton({text}: {text: string}) {
    return <button style={{
        'backgroundColor': 'purple',
        'color': 'white',
    }} onClick={() => {
        console.log(greet('from PurpleButton'))
    }}>{text}</button>
}

