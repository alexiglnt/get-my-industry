import '../styles/Card.css';

const Card = ({post}) => {

  let noteStyle = { color: 'black' };
  if (post.note >= '4')
    noteStyle = { color: '#0dc600', fontWeight: 'bold' };
  else if (post.note >= '3')
    noteStyle = { color: 'orange', fontWeight: 'bold' };
  else
    noteStyle = { color: 'red', fontWeight: 'bold' };

  // Save the props in the localStorage 
  function saveInfos() {
    localStorage.setItem('post', JSON.stringify(post));
    console.log(JSON.parse(localStorage.getItem('post')));
  }

  return (
    <div className="card" onClick={saveInfos} >
      <div className="img-card-container">
        <img src={post.image} alt="" />
      </div>
      <h4 className='location' > <b> {`${post.ville}, ${post.region}`} </b> </h4>
      <p className='sector' > {post.secteur} | <span style={noteStyle} > &nbsp; {post.note} </span>  </p>
    </div>
  );
}


export default Card;