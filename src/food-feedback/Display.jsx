const Display = (props) => {
    const {good, neutral, bad} = props.values

    return (
        <div>
            <p>Good: {good}</p>
            <p>Neutral: {neutral}</p>
            <p>Bad: {bad}</p>
            <p>Avg: {(Math.round(good+neutral+bad)/3).toFixed(2)} </p>
            <p>Positive: {(Math.round(good)/(good+neutral+bad)*100).toFixed(2)}% </p>
        </div>
    )
}

export default Display