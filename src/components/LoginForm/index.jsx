import { useState, useEffect } from 'react';
import s from './LoginForm.module.css';

const LoginForm = ({ onSubmit, isOpen }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLogin, setLogin] = useState(false);

    // const handleInputChange = (e) => {
    //     setEmail(e.target.value);
    // };
    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit && onSubmit({ email, password, type: isLogin ? 'login' : 'singup' });
        setEmail('');
        setPassword('');
    };

    useEffect(() => {
        if (!isOpen) {
            setEmail('');
            setPassword('');
        }
    }, [isOpen]);

    return (
        <form onSubmit={handleSubmit}>
            <div className={s.root}>
                <input
                    value={email}
                    type="text"
                    name="email"
                    onChange={(e) => setEmail(e.target.value)}
                    className={s.input}
                    required
                />
                <span className={s.highlight}></span>
                <span className={s.bar}></span>
                <label className={s.label}>Email</label>
            </div>
            <div className={s.root}>
                <input
                    value={password}
                    type="password"
                    name="password"
                    onChange={(e) => setPassword(e.target.value)}
                    className={s.input}
                    required
                />
                <span className={s.highlight}></span>
                <span className={s.bar}></span>
                <label className={s.label}>password</label>
            </div>
            <div className={s.flex}>
                <button>{isLogin ? 'LogIn' : 'SingUp'}</button>
                <div className={s.link} onClick={() => setLogin(!isLogin)}>
                    {isLogin ? 'Register' : 'Login'}
                </div>
            </div>
        </form>
    );
};

export default LoginForm;
