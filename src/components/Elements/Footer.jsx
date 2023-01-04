import style from '../../styles/Footer.module.css'
import logo from '../../assets/logo2.png'

export default function Footer() {

    const githubStyle = {
        fontSize: '24px',
        color: 'black',
        transform: 'translateY(5px)'
    }

    return (
        <footer className={style.footer}>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>

            <div className={style.footerContainer}>

                <div className={style.footerLogo}>
                    <img src={logo} alt="logo" />
                </div>

                <div className={style.github}>
                    <p> See GitHub repository  <a href="https://github.com" target="_blank"> <i style={githubStyle} class="fa">&#xf09b;</i> </a> </p>
                </div>

                <div className={style.footerLinks}>
                    <ul>
                        <li> <a href="https://github.com/alexiglnt/" target="_blank"> Alexi GALLONET </a> </li>
                        <li> <a href="https://github.com/MaximilienHe" target="_blank"> Maximilien HERR </a> </li>
                        <li> <a href="https://github.com/lucaswagames" target="_blank"> Lucas CHARBONNIER </a> </li>
                        <li> <a href="https://github.com/anthonysahc" target="_blank"> Maxence POIZAT </a> </li>
                        <li> <a href="https://github.com/anthonysahc" target="_blank"> Anthony SAHUC </a> </li>
                    </ul>
                </div>


                <div>
                    <p>© 2022 Get my Industry</p>
                </div>

            </div>

        </footer>
    )
}