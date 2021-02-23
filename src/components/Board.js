import React from 'react'
import Square from './Square'

export default function Board() {
    return ( 
        <div>
            <div className="border-app">
                <Square/>
                <Square/>
                <Square/>
            </div>

            <div className="border-app">
                <Square/>
                <Square/>
                <Square/>
            </div>

            <div className="border-app">
                <Square/>
                <Square/>
                <Square/>
            </div>
        </div>
    )
}