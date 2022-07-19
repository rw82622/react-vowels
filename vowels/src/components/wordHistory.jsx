import React from 'react'
import TransformMessage from './transformMessage'

const WordHistory = ({ msg }) => {
    return (
        <div>
            {msg.length > 0 ?
                <div>
                    <h2>Word History</h2>
                    {msg.map((word) => (
                        <h5>
                            <TransformMessage msg={word} />
                        </h5>
                    ))}
                </div> : ''}
        </div>
    )
}

export default WordHistory