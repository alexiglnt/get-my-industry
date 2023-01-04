import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import '../styles/Modale.css'

export default function Modale({ setIsModaleOpen }) {

    const navigate = useNavigate();

    const [starNote, setStarNote] = useState('');
    const [post, setPost] = useState(JSON.parse(localStorage.getItem('post')));
    const [isHovering, setIsHovering] = useState(false);

    const location = useState(`${post.ville}, ${post.region}`);

    useEffect(() => {
        // Convert the note to stars
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
    let noteStyle = { color: 'black' };
    if (post.note >= '4')
        noteStyle = { color: '#0dc600' };
    else if (post.note >= '3')
        noteStyle = { color: 'orange' };
    else
        noteStyle = { color: 'red' };


    // Close the modale when clicking outside 
    function handleClick(e) {
        if (e.target.className === 'modale') {
            setIsModaleOpen(false);
        }
    }

    return (
        <div className="modale" onClick={handleClick}>
            <div className="modale-container" >

                <div className="modale-content" >

                    <button className='btn-close-modale' onClick={() => setIsModaleOpen(false)} >
                        X
                    </button>

                    <div className="modale-left">
                        <img src={post.image} />
                    </div>

                    <div className="modale-right">
                        <h2> {location} </h2>
                        <div className="infos-modales">
                            <p> {post.secteur} |
                                <span
                                    onMouseOver={() => setIsHovering(true)}
                                    onMouseOut={() => setIsHovering(false)}
                                >
                                    {starNote}  {isHovering && <p className='hoverNote' style={noteStyle} >{post.note}</p>}
                                </span>
                            </p>
                        </div>
                        <p className='modale-description' > <i> {post.description} </i> </p>

                        <button type='button' className='button btn-modale' onClick={() => navigate('/InfoPost')} >
                            Plus d'informations
                        </button>
                    </div>

                </div>

            </div>
        </div>
    )
}