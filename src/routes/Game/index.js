import { Link } from 'react-router-dom';

const GamePage = () => {
    return (
        <div>
            <h2>This is game page</h2>

            <Link to="/">
                <button>Back to HOME! </button>
            </Link>
        </div>
    );
};

export default GamePage;
