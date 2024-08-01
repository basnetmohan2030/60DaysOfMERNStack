const Display = (props) => {
    let good = props.values.good
    let neutral = props.values.neutral
    let bad = props.values.bad

    const avg = () => {
        return (good+neutral+bad)/3
    }

    return (
        <div>
            <p>Good: {props.values.good}</p>
            <p>Neutral: {props.values.neutral}</p>
            <p>Bad: {props.values.bad}</p>
            <p>Avg: {(Math.round(good+neutral+bad)/3).toFixed(2)} </p>
            <p>Positive: {(Math.round(good)/(good+neutral+bad)*100).toFixed(2)}% </p>
        </div>
    )
}

export default Display