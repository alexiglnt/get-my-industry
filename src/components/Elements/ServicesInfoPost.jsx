import style from '../../styles/UserInfos.module.css'
import Icon from './Icon'

export default function ServicesInfoPost({post}) {
    return (
        <table className={style.table} >
            <tr>
                <th>Services</th>
                <th>Disponibilité</th>
            </tr>
            <tr>
                <td>Raccordement Electrique</td>
                <td>
                    {post.services.raccordementElectricité ? <Icon name='done' color='#04AA6D' /> :  <Icon name='close' color='red'/> }
                </td>
            </tr>
            <tr>
                <td>Raccordement au Gaz</td>
                <td>
                    {post.services.raccordementGaz ? <Icon name='done' color='#04AA6D' /> : <Icon name='close' color='red'/>}
                </td>
            </tr>
            <tr>
                <td>Eau Industrielle</td>
                <td>
                    {post.services.eauIndustrielle ? <Icon name='done' color='#04AA6D' /> : <Icon name='close' color='red'/>}
                </td>
            </tr>
            <tr>
                <td>Quais de chargement/déchargement</td>
                <td>
                    {post.services.quaisDeChargement ? <Icon name='done' color='#04AA6D' /> : <Icon name='close' color='red'/>}
                </td>
            </tr>
            <tr>
                <td>ICPE</td>
                <td>
                    {post.services.ICPE ? <Icon name='done' color='#04AA6D' /> : <Icon name='close' color='red'/>}
                </td>
            </tr>
            <tr>
                <td>Seveso</td>
                <td>
                    {post.services.seveso ? <Icon name='done' color='#04AA6D' /> : <Icon name='close' color='red'/>}
                </td>
            </tr>
            <tr>
                <td>Salle Blanche</td>
                <td>
                    {post.services.salleBlanche ? <Icon name='done' color='#04AA6D' /> : <Icon name='close' color='red'/>}
                </td>
            </tr>
            <tr>
                <td>Numerique</td>
                <td>
                    {post.services.numerique ? <Icon name='done' color='#04AA6D' /> : <Icon name='close' color='red'/>}
                </td>
            </tr>


        </table>
    )
}