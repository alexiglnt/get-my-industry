import { images } from './images.js';

export const posts = [
    {
        ville: 'Paris',
        region: 'Île-de-France',
        pays: 'France',
        secteur: "Aéronautique",
        note: 4.2,
        description: "Usine de production de métaux et de produits métalliques de base et de produits métalliques transformés situé à Kent, Royaume-Unis. Des installations de production de 100 000 m², 500 employés, 1000 tonnes de production par jour. Depuis 2015, l'entreprise a investi plus de 100 millions de dollars dans la modernisation de ses installations de production.",
        image: images[0],
        access: { 
            // Lieux d'accès : distance en km (null si non accessible)
            aeroport: 22,
            gareTER: 5,
            gareTGV: 1,
            transportCommun: 1,
            pisteCyclable: 5,
            port: null,
            autoroute: 2,
        },
        services: {
            // Services : true/false OU valeur
            raccordementElectricité: true,
            raccordementGaz: true,
            eauIndustrielle: false,
            quaisDeChargement: false,
            capacitePoidsAuSol: 55, // en kg
            ICPE: true,
            seveso: false,
            salleBlanche: true,
            numerique: true,
        }
    },
    {
        ville: 'Le Puy-en-Velay',
        region: 'Haute-Loire',
        pays: 'France',
        secteur: "Agroalimentaire",
        note: 4.7,
        description: "Usine de production de métaux et de produits métalliques de base et de produits métalliques transformés situé à Kent, Royaume-Unis. Des installations de production de 100 000 m², 500 employés, 1000 tonnes de production par jour. Depuis 2015, l'entreprise a investi plus de 100 millions de dollars dans la modernisation de ses installations de production.",
        image: images[1],
        access: { 
            // Lieux d'accès : distance en km (null si non accessible)
            aeroport: 22,
            gareTER: 5,
            gareTGV: null,
            transportCommun: 1,
            pisteCyclable: 5,
            port: null,
            autoroute: 2,
        },
        services: {
            // Services : true/false OU valeur
            raccordementElectricité: true,
            raccordementGaz: true,
            eauIndustrielle: false,
            quaisDeChargement: false,
            capacitePoidsAuSol: 55, // en kg
            ICPE: true,
            seveso: false,
            salleBlanche: true,
            numerique: true,
        }
    },
    {
        ville: 'Lyon',
        region: 'Rhône-Alpes',
        pays: 'France',
        secteur: "FabLab",
        note: 3.5,
        description: "Usine de production de métaux et de produits métalliques de base et de produits métalliques transformés situé à Kent, Royaume-Unis. Des installations de production de 100 000 m², 500 employés, 1000 tonnes de production par jour. Depuis 2015, l'entreprise a investi plus de 100 millions de dollars dans la modernisation de ses installations de production.",
        image: images[2],
        access: { 
            // Lieux d'accès : distance en km (null si non accessible)
            aeroport: 22,
            gareTER: 5,
            gareTGV: null,
            transportCommun: 1,
            pisteCyclable: 5,
            port: null,
            autoroute: 2,
        },
        services: {
            // Services : true/false OU valeur
            raccordementElectricité: true,
            raccordementGaz: true,
            eauIndustrielle: false,
            quaisDeChargement: false,
            capacitePoidsAuSol: 55, // en kg
            ICPE: true,
            seveso: false,
            salleBlanche: true,
            numerique: true,
        }
    },
    {
        ville: 'Bordeaux',
        region: 'Aquitaine',
        pays: 'France',
        secteur: "Manufacture de proximité",
        note: 2.7,
        description: "Usine de production de métaux et de produits métalliques de base et de produits métalliques transformés situé à Kent, Royaume-Unis. Des installations de production de 100 000 m², 500 employés, 1000 tonnes de production par jour. Depuis 2015, l'entreprise a investi plus de 100 millions de dollars dans la modernisation de ses installations de production.",
        image: images[3],
        access: { 
            // Lieux d'accès : distance en km (null si non accessible)
            aeroport: 22,
            gareTER: 5,
            gareTGV: null,
            transportCommun: 1,
            pisteCyclable: 5,
            port: null,
            autoroute: 2,
        },
        services: {
            // Services : true/false OU valeur
            raccordementElectricité: true,
            raccordementGaz: true,
            eauIndustrielle: false,
            quaisDeChargement: false,
            capacitePoidsAuSol: 55, // en kg
            ICPE: true,
            seveso: false,
            salleBlanche: true,
            numerique: true,
        }
    },
    {
        ville: 'Paris',
        region: 'Île-de-France',
        pays: 'France',
        secteur: "Plateforme technologique",
        note: 3.6,
        description: "Usine de production de métaux et de produits métalliques de base et de produits métalliques transformés situé à Kent, Royaume-Unis. Des installations de production de 100 000 m², 500 employés, 1000 tonnes de production par jour. Depuis 2015, l'entreprise a investi plus de 100 millions de dollars dans la modernisation de ses installations de production.",
        image: images[4],
        access: { 
            // Lieux d'accès : distance en km (null si non accessible)
            aeroport: 22,
            gareTER: 5,
            gareTGV: null,
            transportCommun: 1,
            pisteCyclable: 5,
            port: null,
            autoroute: 2,
        },
        services: {
            // Services : true/false OU valeur
            raccordementElectricité: true,
            raccordementGaz: true,
            eauIndustrielle: false,
            quaisDeChargement: false,
            capacitePoidsAuSol: 55, // en kg
            ICPE: true,
            seveso: false,
            salleBlanche: true,
            numerique: true,
        }
    },
    {
        ville: 'Lille',
        region: 'Hauts-de-France',
        pays: 'France',
        secteur: "Atelier de prototypage",
        note: 4.1,
        description: "Usine de production de métaux et de produits métalliques de base et de produits métalliques transformés situé à Kent, Royaume-Unis. Des installations de production de 100 000 m², 500 employés, 1000 tonnes de production par jour. Depuis 2015, l'entreprise a investi plus de 100 millions de dollars dans la modernisation de ses installations de production.",
        image: images[5],
        access: { 
            // Lieux d'accès : distance en km (null si non accessible)
            aeroport: 22,
            gareTER: 5,
            gareTGV: null,
            transportCommun: 1,
            pisteCyclable: 5,
            port: null,
            autoroute: 2,
        },
        services: {
            // Services : true/false OU valeur
            raccordementElectricité: true,
            raccordementGaz: true,
            eauIndustrielle: false,
            quaisDeChargement: false,
            capacitePoidsAuSol: 55, // en kg
            ICPE: true,
            seveso: false,
            salleBlanche: true,
            numerique: true,
        }
    },
    {
        ville: 'Brest',
        region: 'Bretagne',
        pays: 'France',
        secteur: "Plateforme technologique",
        note: 3.1,
        description: "Usine de production de métaux et de produits métalliques de base et de produits métalliques transformés situé à Kent, Royaume-Unis. Des installations de production de 100 000 m², 500 employés, 1000 tonnes de production par jour. Depuis 2015, l'entreprise a investi plus de 100 millions de dollars dans la modernisation de ses installations de production.",
        image: "http://artsetmetiers.fr/sites/site_internet/files/styles/vignette_actu_480_177_/public/2017-02/_0000533-1300x450.jpg?itok=wnRq7Unu",
        access: { 
            // Lieux d'accès : distance en km (null si non accessible)
            aeroport: 22,
            gareTER: 5,
            gareTGV: null,
            transportCommun: 1,
            pisteCyclable: 5,
            port: null,
            autoroute: 2,
        },
        services: {
            // Services : true/false OU valeur
            raccordementElectricité: false,
            raccordementGaz: true,
            eauIndustrielle: false,
            quaisDeChargement: false,
            capacitePoidsAuSol: 55, // en kg
            ICPE: true,
            seveso: false,
            salleBlanche: true,
            numerique: true,
        }
    },
    {
        ville: 'Paris',
        region: 'Île-de-France',
        pays: 'France',
        secteur: "Laboratoire",
        note: 2.4,
        description: "Usine de production de métaux et de produits métalliques de base et de produits métalliques transformés situé à Kent, Royaume-Unis. Des installations de production de 100 000 m², 500 employés, 1000 tonnes de production par jour. Depuis 2015, l'entreprise a investi plus de 100 millions de dollars dans la modernisation de ses installations de production.",
        image: images[6],
        access: { 
            // Lieux d'accès : distance en km (null si non accessible)
            aeroport: 22,
            gareTER: 5,
            gareTGV: null,
            transportCommun: 1,
            pisteCyclable: 5,
            port: null,
            autoroute: 2,
        },
        services: {
            // Services : true/false OU valeur
            raccordementElectricité: true,
            raccordementGaz: true,
            eauIndustrielle: false,
            quaisDeChargement: false,
            capacitePoidsAuSol: 55, // en kg
            ICPE: true,
            seveso: false,
            salleBlanche: true,
            numerique: true,
        }
    },
]