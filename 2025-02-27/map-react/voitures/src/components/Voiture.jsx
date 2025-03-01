import React from 'react';
import './Voiture.css'; 

function Voiture({props}) {
    return (
        <div className="voiture-card">
            <h2>{props.marque} {props.model}</h2>
            <p><strong>Couleur :</strong> {props.couleur}</p>
            <p><strong>Année :</strong> {props.annee}</p>
        </div>
    );
}

export default Voiture;