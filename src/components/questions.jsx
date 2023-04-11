import React, { useState, useEffect } from "react";
import movieQuestion from "../var/questionsMovie.jsx";
import videojuegosQuestion from "../var/questionsVideoGames.jsx";
import arteQuestion from "../var/questionsArt.jsx";
import cienciaQuestion from "../var/questionsScience.jsx";
import Respuestas from "./answers.jsx";
import ProgressBar from "./progressBar.jsx";
import Modal from "./modal.jsx";
import confetti from 'canvas-confetti'



const Question = ({ question, category, onSelect, handleState }) => {
    const [questionAnswer, setQuestionAnswer] = useState("");
    const [countAnswer, setCountAnswer] = useState(0);
    const [indiceAleatorio, setIndiceAleatorio] = useState(0);
    const [showModal, setShowModal] = useState(0);

    useEffect(() => {
        switch (category) {
            case "movie":
                setQuestionAnswer(movieQuestion);
                break;
            case "videogames":
                setQuestionAnswer(videojuegosQuestion);
                break;
            case "art":
                setQuestionAnswer(arteQuestion);
                break;
            case "science":
                setQuestionAnswer(cienciaQuestion);
                break;
            default:
                break;
        }
    }, []);

    useEffect(() => {
        let numRandom = Math.floor(Math.random() * questionAnswer.length);
        if (numRandom != 0) {
            numRandom = numRandom - 1;
        }
        setIndiceAleatorio(numRandom);
    }, [questionAnswer]);

    const closeModal = () => {
        setShowModal(0);
    };

    const closeAll = () => {
        handleState("categories");
    };

    const handleSelectChoice = (choice) => {
        if (choice === true) {
            setCountAnswer(countAnswer + 1);
            if (countAnswer != 9) {
                const newArray = [...questionAnswer]
                newArray.splice(indiceAleatorio, 1);
                setQuestionAnswer(newArray);
            } else {
                setShowModal(1);
                confetti()
            }
        } else {
            setShowModal(3);

        }
    };

    const handleBack = () => {
        handleState("categories");
    };

    const controlTrueAnswer = () => {
        for (const item of questionAnswer[indiceAleatorio].respuestas) {
            if (item.correcta === true) {
                return item.texto
            }
        }
    }

    return (
        <>
            {questionAnswer.length >= 1 &&
                <>
                    <div onClick={() => { handleBack() }} className="back" key={1} style={{ position: 'absolute', top: 0, left: 0 }}>
                        <i className="fa-solid fa-backward"></i>
                        <p>Atras</p>
                    </div>
                    <div className="question">
                        <div className="question-section">
                            <h2>{questionAnswer[indiceAleatorio].pregunta}</h2>
                            <div className="options-section">
                                {questionAnswer[indiceAleatorio].respuestas.map((respuesta) => {
                                    return (
                                        <Respuestas
                                            value={respuesta.correcta}
                                            key={respuesta.texto}
                                            text={respuesta.texto}
                                            handleSelectChoice={handleSelectChoice}
                                        />
                                    )
                                })}
                            </div>
                        </div>
                        <div className="count">
                            <ProgressBar value={countAnswer} max={10} />
                            <p>{countAnswer}/10</p>
                        </div>
                        <div>
                            {showModal == true &&
                                <Modal
                                    state={true}
                                    count={countAnswer}
                                    handleModal={closeModal}
                                    closeAll={closeAll}
                                />
                            }

                            {showModal == 3 &&
                                <Modal
                                    state={false}
                                    count={countAnswer}
                                    handleModal={closeModal}
                                    closeAll={closeAll}
                                    correctAnswer={controlTrueAnswer()}
                                />
                            }
                        </div>
                    </div>
                </>
            }
        </>
    );
};

export default Question;