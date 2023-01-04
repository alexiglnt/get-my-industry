import '../styles/App.css';
import Navbar from './Navbar';
import Card from './Card';
import Modale from './Modale';
import Footer from './Elements/Footer';

import { posts } from '../data/posts.js';
import { useState, useEffect } from 'react';


export default function App() {

  const [isModaleOpen, setIsModaleOpen] = useState(false);
  const [tabPosts, setTabPosts] = useState(posts);
  const [tabtmp, setTabtmp] = useState([]);

  // Fonction qui permet de filtrer les posts en fonction de la catégorie sélectionnée
  function handleClick(category) {

    if (category === "Tout") {
      setTabPosts(posts);
      setTabtmp(posts);
    }
    else {
      const tabPostsNew = posts.filter((post) => post.secteur === category);
      setTabPosts(tabPostsNew);
    }

    console.log(tabPosts);
  }

  useEffect(() => {
    // Change le titre de la page
    document.title = 'Get my Industry';

    // Création de la clé isAuth dans le localStorage si elle n'existe pas
    if (!localStorage.getItem('isAuth')) {
      localStorage.setItem('isAuth', false);
    }

  }, []);

  
  useEffect(() => {
    // Scroll to top & disable scroll
    if (isModaleOpen == true) {
      window.scrollTo(0,0);
      document.body.style.overflow = 'hidden';
    }
    else {
      document.body.style.overflow = 'auto';
    }

    // Clean up
    return () => {
      document.body.style.overflow = 'auto';
    }

  }, [isModaleOpen]);


  // RENDER
  return (
    <div className="App">

      <Navbar />

      <div className="app-container">

        <div className="app-sort-container">
          <button type='button' onClick={() => handleClick("Tout")} > Tout </button>
          <button type='button' onClick={() => handleClick("Plateforme technologique")} > Plateforme technologique </button>
          <button type='button' onClick={() => handleClick("FabLab")} > FabLab </button>
          <button type='button' onClick={() => handleClick("Manufacture de proximité")} > Manufacture de proximité </button>
          <button type='button' onClick={() => handleClick("Atelier de prototypage")} > Atelier de prototypage </button>
          <button type='button' onClick={() => handleClick("Laboratoire")} > Laboratoire </button>
        </div>

        <div className="card-container">

          {tabPosts.map((tabPosts, index) => {
            return (
              <div key={index} onClick={() => setIsModaleOpen(true)}>
                <Card
                  post={tabPosts}
                />
              </div>
            )
          })}

        </div>

        {/* On affiche la modale si isModaleOpen est à true */}
        {isModaleOpen &&
          <Modale setIsModaleOpen={setIsModaleOpen} />
        }

      </div>
      <Footer />
    </div>
  );
}
