import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom';

function Feeling() {

    const [feelingInput, setFeelingInput] = useState('');
    const dispatch = useDispatch();
    let history = useHistory();

    const handleOnClick = (e) => {
        e.preventDefault();

        const currentInput = feelingInput;
        if (currentInput === '') {
            return alert('Must give a rating.');
        } else {

            dispatch({
                type: 'FEELING',
                payload: {feeling: feelingInput}
            })
    
            setFeelingInput('');
            history.push('/understanding');
        }
    }

    return (
        <div>
            <form onSubmit={handleOnClick}>
                <h2>How are you feeling today?</h2>
                <input data-testid="input"
                        type="number"
                        value={feelingInput}
                        onChange={e => setFeelingInput(e.target.value)} />
                <button data-testid="next">Next</button>
            </form>
            
        </div>
    )

}

export default Feeling;