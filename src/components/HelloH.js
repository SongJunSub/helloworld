const HelloH = ({funcIncreaseCount, stateCount}) => {

    const callValue = () => {

        funcIncreaseCount(stateCount++);

    }

    return (

        <div>
            <button onClick={callValue}>Click</button>
            Hello H
        </div>

    )

}

export default HelloH;