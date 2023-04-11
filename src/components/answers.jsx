export default function Respuestas({ value, text, handleSelectChoice }) {

    const handleSelect = (value) => () => {
        handleSelectChoice(value);
    }

    return (
        <div onClick={handleSelect(value)} className="option">
            {text}
        </div>
    )
}
