import Options from "./Option";

const Qusetion = ({ qusetion, selectedOption, onOptionChange, onSubmit }) => {
    return (
        <>
            <h2>{qusetion.id}</h2>
            <h4>{qusetion.question}</h4>
            <form onSubmit={onSubmit}>
                <Options
                    options={qusetion.options}
                    selectedOption={selectedOption}
                    onOptionChange={onOptionChange} />
                <button type="submit">SUBMIT</button>
            </form>
        </>
    )
}

export default Qusetion;