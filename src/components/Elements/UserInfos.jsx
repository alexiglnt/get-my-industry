import Navbar from "../Navbar"
import style from '../../styles/UserInfos.module.css';
import gif from '../../assets/giphy.gif';

export default function UserInfos() {

    const gifStyle = {
        width: '80px',
        transform: 'translateY(20px)',
    }

    function disconnect() {
        localStorage.setItem('isAuth', false);
        window.location.reload();
    }

    return (
        <>
            <Navbar />

            <div className={style.container}>
                <h1 className={style.h1} >
                    Bonjour <span> {JSON.parse(localStorage.getItem('userData')).prenom}</span> 
                    <img src={gif} style={gifStyle} />
                </h1>
                <br />

                {/* <table className={style.table} >
                    <tr className={style.tr} >
                        <th>Prénom</th>
                        <th>Nom</th>
                        <th>Email</th>
                    </tr>
                    <tr className={style.tr} >
                        <td>{JSON.parse(localStorage.getItem('userData')).prenom}</td>
                        <td>{JSON.parse(localStorage.getItem('userData')).nom}</td>
                        <td>{JSON.parse(localStorage.getItem('userData')).email}</td>
                    </tr>
                </table> */}

                <table className={style.table} >
                    <thead>
                        <tr>
                            <th colspan="2">Vos informations</th>
                        </tr>
                    </thead>
                    <tr className={style.tr} >
                        <td> <b> Prenom </b> </td>
                        <td>{JSON.parse(localStorage.getItem('userData')).prenom}</td>
                    </tr>
                    <tr className={style.tr} >
                        <td> <b> Nom </b> </td>
                        <td>{JSON.parse(localStorage.getItem('userData')).nom}</td>
                    </tr>
                    <tr className={style.tr} >
                        <td> <b> Email </b> </td>
                        <td>{JSON.parse(localStorage.getItem('userData')).email}</td>
                    </tr>
                </table>

                <button type="button" className={style.btn} onClick={disconnect} > Se déconnecter </button>
            </div>
        </>

    )
}