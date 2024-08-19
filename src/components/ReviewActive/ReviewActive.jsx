import { useSelector } from "react-redux";
import axios from 'axios';
import { useHistory } from "react-router-dom";

function ReviewAction() {
    
    const feelingData = useSelector(store => store.feelingData.feeling);
    const understandingData = useSelector(store => store.understandingData.understanding);
    const supportData = useSelector(store => store.supportData.support);
    const commentsData = useSelector(store => store.commentsData.comments);

    console.log('This is feelingData:', feelingData);

    let history = useHistory();

    const handleOnClick = (e) => {
        e.preventDefault();

        axios({
            method: 'POST',
            url: '/api/feedback',
            data: {
                feeling: feelingData,
                understanding: understandingData,
                support: supportData,
                comments: commentsData
            }
        }) .then((response) => {
            console.log('Client posts data:', response.data);
        }) .catch((err) => {
            console.log('Client cannot post data:', err);
        })

        history.push('/page-five');
    }

    const feelingEdit = () => {
        history.push('/');
    }
    const understandingEdit = () => {
        history.push('/understanding');
    }
    const supportEdit = () => {
        history.push('/support');
    }
    const commentsEdit = () => {
        history.push('/comments');
    }

    return (
        <div>
            <h2>Review your feedback</h2>

            <div>
                <h3>Feeling: {feelingData}</h3>
                <button onClick={feelingEdit}>Edit</button>
            </div>
            
            <div>
                <h3>Understanding: {understandingData}</h3>
                <button onClick={understandingEdit}>Edit</button>
            </div>
            
            <div>
                <h3>Support: {supportData}</h3>
                <button onClick={supportEdit}>Edit</button>
            </div>
            
            <div>
                <h3>Comments: {commentsData}</h3>
                <button onClick={commentsEdit}>Edit</button>
            </div>
            
            <br />
            <button data-testid="next"
                    onClick={handleOnClick}>Submit</button>
        </div>
    )

}

export default ReviewAction;