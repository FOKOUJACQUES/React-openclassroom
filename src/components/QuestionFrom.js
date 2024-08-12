import React, { useState } from "react";
import  '../styles/QuestionFrom.css'
function QuestionForm() {
    
    const [inputValue, setInputValue] = useState('Entrer votre mail');
    const isInputError = inputValue.includes('f');

    return (
        <div className="lmj-QFrom">
            <span className="clients">Pour les passionné e-s de plantes </span>
            <label >Laissez-nous votre mail : </label>

            <input type="Email" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
            {isInputError && (
                <div style={{ color: 'red' }}>🔥 Vous n'avez pas le droit d'utiliser la lettre "f" ici.</div>
            )}
            
            <button onClick={() => alert(inputValue)}>Envoyer</button>
        </div>
    );
}

export default QuestionForm;
