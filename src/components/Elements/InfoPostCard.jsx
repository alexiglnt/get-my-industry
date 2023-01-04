import { useState, useEffect } from 'react'
import style from '../../styles/InfoPostCard.module.css'

export default function InfoPostCard({ post }) {

    const [starNote, setStarNote] = useState('');
    const [noteStyle, setNoteStyle] = useState({ color: 'black' });
    const location = useState(`${post.ville}, ${post.region}`);


    // Convert the note to stars
    useEffect(() => {
        if (post.note >= 5)
            setStarNote('⭐⭐⭐⭐⭐');
        else if (post.note >= 4)
            setStarNote('⭐⭐⭐⭐');
        else if (post.note >= 3)
            setStarNote('⭐⭐⭐');
        else if (post.note >= 2)
            setStarNote('⭐⭐');
        else if (post.note >= 1)
            setStarNote('⭐');
    }, [])

    // Change the color of the note
    useEffect(() => {
        if (post.note >= '4')
            setNoteStyle({ color: '#0dc600' });
        else if (post.note >= '3')
            setNoteStyle({ color: 'orange' });
        else
            setNoteStyle({ color: 'red' });
    }, [])


    // RENDER
    return (
        <div className={style.InfoPostCard} >
            <h1> {location} </h1>
            <span >
                {starNote}  (<span style={noteStyle}>{post.note}</span>)
            </span> <br /> <br />

            <h3>  Secteur : <span> {post.secteur} </span> </h3>

            <h3> Accessibilité : </h3>
            <ul className={style.ul} >
                {post.access.aeroport &&
                    <li> Aéroport à  <b> {post.access.aeroport} </b> km </li>}

                {post.access.gareTER &&
                    <li> Gare TER à <b>{post.access.gareTER}</b> km </li>}

                {post.access.gareTGV &&
                    <li> Gare TGV à <b>{post.access.gareTGV}</b> km </li>}
            </ul>

            <ul className={style.ul} >
                {post.access.autoroute &&
                    <li> Autoroute à <b>{post.access.autoroute}</b> km </li>}

                {post.access.pisteCyclable &&
                    <li> Pistes Cyclables à <b>{post.access.pisteCyclable}</b> km </li>}

                {post.access.port &&
                    <li> Port : <b>{post.access.port}</b> km </li>}
            </ul>

            <ul className={style.ul} >
                {post.access.transportCommun &&
                    <li> Transport Commun : <b>{post.access.transportCommun}</b> km </li>}

                {post.services.capacitePoidsAuSol && 
                <li> Capacité poids au sol : <b> {post.services.capacitePoidsAuSol} </b> kg </li>}
            </ul>


        </div>
    )

}