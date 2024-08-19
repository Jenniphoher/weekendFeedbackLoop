import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom';

function Support() {

    const [supportInput, setSupportInput] = useState('');
    const dispatch = useDispatch();
    let history = useHistory();

    const handleOnClick = (e) => {
        e.preventDefault();

        const currentInput = supportInput;
        if (currentInput === '') {
            return alert('Must give a rating.');
        } else {

            dispatch({
                type: 'SUPPORT',
                payload: {support: supportInput}
            })
    
            setSupportInput('');
            history.push('/comments');
        }

        
    }

    return (
        <div>
            <form onSubmit={handleOnClick}>
                <h2>How well are you being supported?</h2>
                <input data-testid="input"
                        type="number"
                        value={supportInput}
                        onChange={e => setSupportInput(e.target.value)} />
                <button data-testid="next">Next</button>
            </form>
            
        </div>
    )

}

export default Support;