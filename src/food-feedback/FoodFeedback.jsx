import { useState } from "react"
import Button from "./Button"
import Display from "./Display"

const FoodFeedback = () => {

    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    const countGood = () => setGood(good+1)
    const countNeutral = () => setNeutral(neutral+1)
    const countBad = () => setBad(bad+1)

    return (
        <div>
            <h1>How was the food?</h1>
            <Button onClick={countGood} text="Good" />
            <Button onClick={countNeutral} text="Neutral" />
            <Button onClick={countBad} text="Bad" />
            <h1>Reviews</h1>
            <Display values={{good:good,neutral:neutral,bad:bad}} />
        </div>
    )
}

export default FoodFeedback