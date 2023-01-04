import '../styles/InfoPost.css'
import { useEffect, useState } from "react";
import L from 'leaflet';

import Navbar from "./Navbar";
import InfoPostCard from './Elements/InfoPostCard';
import ServicesInfoPost from './Elements/ServicesInfoPost';


export default function InfoPost() {

    const [post, setPost] = useState(JSON.parse(localStorage.getItem('post')));
    const [location, setLocation] = useState(`${post.ville}, ${post.region}`);

    // TITLE
    useEffect(() => {
        document.title = `${location} - Get my Industry`;
    }, [])

    // LEAFLET
    useEffect(() => {

        async function run() {
            await getGeolocation();

            const lat = JSON.parse(localStorage.getItem('geolocation')).results[0].geometry.lat;
            const long = JSON.parse(localStorage.getItem('geolocation')).results[0].geometry.lng;

            initMap(lat, long, 5);
        }

        run();

    }, [])

    // Prend le nom de la ville et la région et retourne les coordonnées GPS (latitude et longitude)
    async function getGeolocation() {

        const url = `https://api.opencagedata.com/geocode/v1/json?q=${location}&key=ef1778d067ff42bdbca4a2c02ee0bdb7&language=en&pretty=1`;

        return fetch(url)
            .then(response => response.json())
            .then(data => {
                localStorage.setItem('geolocation', JSON.stringify(data));
            })
            .catch(error => console.log(error));
    }

    // Initialise la carte Leaflet avec les coordonnées GPS (latitude et longitude) et le zoom
    function initMap(lat, long, zoom) {

        // LEAFLET
        var map = L.map('map').setView([lat, long], zoom);

        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        L.marker([lat, long]).addTo(map)
            .bindPopup(`<h3>${location}</h3>`)
            .openPopup();
    }

    // RENDER
    return (
        <div >
            <Navbar />
            <div className="ip-container" >

                <div className="ip-left-right">
                    <div className="ip-right">
                        <div className="ip-img-container">
                            <img src={post.image} />
                        </div>
                    </div>

                    <div className="ip-left">
                        <InfoPostCard post={post} />
                    </div>
                </div>



                {/* --------------------------------------- Différentes parties --------------------------------------- */}

                <div className="ip-description">
                    <details open>
                        <summary> Description  </summary>
                        <p> {post.description} </p>
                    </details>
                </div>

                <div className="ip-description">
                    <details open>
                        <summary> Localisation  </summary>
                        <center> <div id="map"></div> </center>
                    </details>
                </div>


                <div className="ip-description">
                    <details open>
                        <summary> Services  </summary>
                        <ServicesInfoPost post={post} />
                    </details>
                </div>

            </div>
        </div>
    );

}

