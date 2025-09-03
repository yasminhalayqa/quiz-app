const Options = ({ options, selectedOption, onOptionChange }) => {
    return (
        <>
            {options.map((option, index) => (
                <div key={index}>
                    <input
                        type="radio"
                        value={option}
                        checked={selectedOption == option}
                        onChange={onOptionChange}
                    />
                    <label htmlFor="">{option}</label>
                </div>
            ))}
        </>
    )
}

export default Options