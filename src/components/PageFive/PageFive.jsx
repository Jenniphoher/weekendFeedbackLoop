import { useHistory } from "react-router-dom";

function PageFive() {

    let history = useHistory();

    const handleOnClick = (e) => {
        e.preventDefault();

        history.push('/');
    }

    return (
        <div>
                <h2>Fedback Submitted!</h2>
                <h3>Thank you!</h3>
                <button data-testid="next"
                    onClick={handleOnClick}>Leave New Feedback</button>
        </div>
    )

}

export default PageFive;