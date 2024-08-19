import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom';

function Understanding() {

    const [understandingInput, setUnderstandingInput] = useState('');
    const dispatch = useDispatch();
    let history = useHistory();

    const handleOnClick = (e) => {
        e.preventDefault();

        const currentInput = understandingInput;
        if (currentInput === '') {
            return alert('Must give a rating.');
        } else {

            dispatch({
                type: 'UNDERSTANDING',
                payload: {understanding: understandingInput}
            })
    
            setUnderstandingInput('');
            history.push('/support');
        }

    }

    return (
        <div>
            <form onSubmit={handleOnClick}>
                <h2>How well did are you understanding the content?</h2>
                <input data-testid="input"
                        type="number"
                        value={understandingInput}
                        onChange={e => setUnderstandingInput(e.target.value)} />
                <button data-testid="next">Next</button>
            </form>
            
        </div>
    )

}

export default Understanding;