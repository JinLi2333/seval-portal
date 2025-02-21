// a div block with border and padding, and have children
export function Block({children}: {children: React.ReactNode}) {
    return <div style={{
        'border': '1px solid black',
        'padding': '10px',
    }}>{children}</div>
}