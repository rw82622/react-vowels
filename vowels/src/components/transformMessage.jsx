import React from 'react'

const TransformMessage = ({ msg }) => {
    const vowels = ['a', 'e', 'i', 'o', 'u']
    let msgList = msg.split('')
    let red = 'red'
    let black = 'black'
    let uniqueKey = 0

    const getVowelCount = () => {
        let totalVowels = 0
        for (let v of msgList) {
            if (vowels.includes(v)) totalVowels++
        }
        return totalVowels
    }

    const getUniqeKey = () => {
        uniqueKey++
        return uniqueKey
    }

    return (
        <div>
            {msg.length > 0 ?
                <h4>
                    {msgList.map((c) => (
                        <span key={getUniqeKey()}
                            className={vowels.includes(c) ? red : black} >{c}
                        </span>
                    ))} ({getVowelCount()} vowel{getVowelCount() !== 1 && 's'})
                </h4> : ""
            }
        </div>
    )
}

export default TransformMessage