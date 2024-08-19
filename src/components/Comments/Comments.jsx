import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom';

function Comments() {

    const [commentsInput, setCommentsInput] = useState('');
    const dispatch = useDispatch();
    let history = useHistory();

    const handleOnClick = (e) => {
        e.preventDefault();

        dispatch({
            type: 'COMMENTS',
            payload: {comments: commentsInput}
        })

        setCommentsInput('');
        history.push('/review-active');
    }

    return (
        <div>
            <form onSubmit={handleOnClick}>
                <h2>Any comments you want to leave?</h2>
                <input data-testid="input"
                        type="text"
                        value={commentsInput}
                        onChange={e => setCommentsInput(e.target.value)} />
                <button data-testid="next">Next</button>
            </form>
            
        </div>
    )

}

export default Comments;