import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const FinishPage = ({ bgActive }, ...props) => {
    const navigate = useNavigate();
    const location = useLocation();

    console.log('#####location#####', location);
    useEffect(() => {
        if (!location.state) {
            navigate('/game', { replace: true });
        }
    }, [props]);
    return (
        <>
            <div>
                <h1>This is Finish Page</h1>
                <h2>{location.state}</h2>
            </div>
        </>
    );
};

export default FinishPage;
