import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Navbar from '../Navbar';
import style from '../../styles/LoginRegister.module.css';

export default function Login() {
    
        const navigate = useNavigate();
    
        const [prenom, setPrenom] = useState('');
        const [nom, setNom] = useState('');
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
        const [isAuth, setIsAuth] = useState(false);

    
        useEffect(() => {
            if (localStorage.getItem('token')) {
                setIsAuth(true);
            }
            else {
                // alert('Vous devez être connecté pour accéder à cette page');
            }
        }, [])
    
        function handleRegister(e) {
            e.preventDefault();
    
            if(email === '' || password === '' || prenom === '' || nom === '') {
                alert('Veuillez remplir tous les champs');
                return;
            }

            const userData = {
                prenom: prenom,
                nom: nom,
                email: email,
                password: password
            }
    
            localStorage.setItem('userData', JSON.stringify(userData));
             
            navigate('/Login');
        }
    
        return (
            <div className={style.container}>
                <Navbar /> 
                <div className={style.formContainer}>
                    <form onSubmit={handleRegister}>
                        <h1> Créez votre compte </h1>
                        <input type="text" className={style.input} placeholder="Prenom" value={prenom} onChange={(e) => setPrenom(e.target.value)} />
                        <input type="text" className={style.input} placeholder="Nom" value={nom} onChange={(e) => setNom(e.target.value)} />
                        <input type="email" className={style.input} placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <input type="password" className={style.input} placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        <button type="submit" className={style.btn} >Inscription</button>
                    </form> <br />

                    <p> Vous avez déjà un compte ? <a href="/Login" className={style.a} >Connectez-vous !</a> </p>

                </div>
            </div>
        )
}