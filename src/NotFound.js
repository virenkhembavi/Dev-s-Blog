import { Link } from "react-router-dom"

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h2>Sorry</h2>
            <p>Page Not Found!</p>
            <Link to="/">Back To HomePage.</Link>
        </div>
   );
}
 
export default NotFound
