import axios from 'axios'
import { useSelector } from 'react-redux'

function Admin({fetchFeedback, data}) {
    
    console.log('This is fetchFeedback:', fetchFeedback);

    // const deleteRow = (e) => {
    //     e.preventDefault();

    //     axios({
    //         method: 'DELETE',
    //         url: `/api/feedback/${data.id}`
    //     }) .then((response) => {
    //         fetchFeedback();
    //     }) .catch((err) => {
    //         console.log('Client cannot delete item:', err);
    //     })
    // }

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Feeling</th>
                        <th>Comprehension</th>
                        <th>Support</th>
                        <th>Comments</th>
                        <th>Delete</th>
                    </tr>
                </thead>

                <tbody>
                    {data.map((item) => {
                        return (
                            <tr key={item.id}>
                                <td>{item.feeling}</td>
                                <td>{item.understanding}</td>
                                <td>{item.support}</td>
                                <td>{item.comments}</td>
                                <button onClick={(e, {item}) => { 
                                    e.preventDefault();
                                    axios.delete(`/api/feedback/${item.id}`)
                                    .then((response) => {fetchFeedback()})
                                    .catch((err) => {console.log('Client err in deleting:', err);})
                                }}>Delete</button>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )

}

export default Admin