import { useEffect, useState } from "react"
import confetti from 'canvas-confetti'

export default function Modal({ state, count, handleModal, closeAll, correctAnswer="Hi" }) {
    const [winner, setWinner] = useState("")
    const [isClosing, setIsClosing] = useState(false);

    const toggleModal = () => {
        setIsClosing(true)
        setTimeout(() => {
            handleModal();
            setIsClosing(false)
            closeAll();
        }, 400);
    }

    useEffect(() => {
        state ? setWinner("Ganaste!!") : setWinner("Perdiste...")
    }, [state])

    return (
        <div className={`modal ${isClosing ? 'modal-closing' : ''}`} >
            <div className="modal-content">
                <div className='modal-header'>
                    <h5 className='modal-title'>{winner}</h5>
                    <div onClick={toggleModal} className="btn-close">X</div>
                </div>
                <div className='modal-content'>
                    {state == false &&
                        <p>Respuesta correcta: {correctAnswer}</p>
                    }
                    <p>
                        Acertaste {count} preguntas
                    </p>
                </div>
            </div>
        </div>
    )
}