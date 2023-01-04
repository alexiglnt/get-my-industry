import { useState } from 'react';

import Navbar from '../Navbar';
import style from '../../styles/LoginRegister.module.css';

export default function Login() {
    
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');

        // Fonction qui vérifie si l'utilisateur est inscrit et le connecte si c'est le cas
        function handleLogin(e) {
            e.preventDefault();
    
            // Vérifie si les champs sont remplis
            if(email === '' || password === '') {
                alert('Veuillez remplir tous les champs');
                return;
            }

            // Récupère les données de l'utilisateur
            const userData = JSON.parse(localStorage.getItem('userData'));

            // Vérifie si l'utilisateur est inscrit
            if (userData.email === email && userData.password === password) {
                localStorage.setItem('isAuth', true);
            }
            else {
                alert('Email ou mot de passe incorrect');
                return;
            }
             
            // Actualise la page
            window.location.reload();
        }
    
        // RENDER
        return (
            <div className={style.container}>
                <Navbar /> 
                <div className={style.formContainer}>
                    <form onSubmit={handleLogin}>
                        <h1> Connectez vous </h1>

                        <input type="email" className={style.input} placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />

                        <input type="password" className={style.input} placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />

                        <button type="submit" className={style.btn} >Connexion</button>
                    </form> <br /> 

                    <p> Vous n'avez pas de compte ? <a href="/Registration" className={style.a} >Créez-vous en un !</a> </p>

                </div>
            </div>
        )
}