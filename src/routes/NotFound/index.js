import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <h2>404 page not ...</h2>

            <Link to="/">
                <button>Back to HOME! </button>
            </Link>
        </div>
    );
};

export default NotFound;
