export default function Respuestas({ value, index, text, handleSelectChoice }) {

    const handleSelect = (value) => {
        handleSelectChoice(value);
    }

    return (
        <div onClick={() => handleSelect(value)} className="option" key={index}>
            {text}
        </div>
    )
}
