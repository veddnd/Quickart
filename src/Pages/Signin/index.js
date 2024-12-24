import { useEffect, useContext } from 'react';
import { MyContext } from '../../App';

const Signin = () => {
    const { setisheaderfootershow } = useContext(MyContext);

    useEffect(() => {
        if (typeof setisheaderfootershow === 'function') {
            setisheaderfootershow(false); // Hide the header
        }

        // Cleanup: Restore the header on component unmount
        return () => {
            if (typeof setisheaderfootershow === 'function') {
                setisheaderfootershow(true);
            }
        };
    }, [setisheaderfootershow]);

    return <div>Hi, this is the Signin page</div>;
};

export default Signin;
