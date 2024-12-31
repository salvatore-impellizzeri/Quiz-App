import { useRef } from "react";

export default function Answers({answers, selectedAnswer, answerState, onSelect}){
    const shuffleAnswers = useRef();

    if(!shuffleAnswers.current){
        shuffleAnswers.current = [...answers];
        shuffleAnswers.current.sort(() => Math.random() - 0.5);
    }

    return(
        <ul id="answers">
            {shuffledAnswers.current.map((answer) => {
                const isSelected = selectedAnswer === answer;
                let cssClasses = '';

                if(answerState === 'answered'){
                    cssClasses = 'selected';
                }

                if(answerState === 'correct' || answerState === 'wrong' && isSelected){
                    cssClasses = answerState;
                }

                return <li key={answer} className="answer">
                            <button onClick={() => onSelect(answer)} className={cssClasses}>
                                {answer}
                            </button>
                        </li>
            })}
        </ul>
    );
}