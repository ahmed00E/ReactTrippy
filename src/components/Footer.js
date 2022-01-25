import React from 'react'
import styled from "styled-components"


const PageFooter = styled.footer`
    width : 100%;
    display : flex;
    padding : 0 40px;
    flex-direction : column;
    justify-content: center;
    align-items : space-between;
    background-color:#ABE7E7;
    padding-top : 20px;
    margin-top : 40px;
        @media (max-width: 810px) {
            align-items : center;
        }
    
`
const ListContainer= styled.div`
    display : flex;
    justify-content : center;
    gap: 10%;
    @media (max-width: 810px) {
        width : 100%;
        flex-direction : column;
        align-items : center;
        // flex-wrap : wrap;
    }
`
const ListElements = styled.div`
    width : 20%;
    @media (max-width: 810px) {
        width : 50%;
        display : flex;
        // justify-content : center;
    }
    @media (max-width: 810px) {
        width : 90%;
        display : flex;
        // justify-content : center;
    }
`
const LogoContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    gap : 10%;
    padding : 40px;
`
const Logo = styled.i`
    font-size : 40px;
    cursor : pointer;
    transition : all ease 0.4s;
    &:hover {
        color : blue;
    }
`

export default function Footer() {
    return (
        <PageFooter>
            {/* <Nav/> */}
            <ListContainer>
                <ListElements>
                    <ul>
                        <h3>À propos de Trippy-Advisor</h3>
                        <li>À propos de Trippy-Advisor</li>
                        <li>Presse</li>
                        <li>Ressources et règlements</li>
                        <li>Emplois</li>
                        <li>Confiance et sécurité</li>
                        <li>Fonctionnement du site</li>
                    </ul>
                </ListElements>
                <ListElements>
                    <ul>
                        <h3>Explorez</h3>
                        <li>Écrire un avis</li>
                        <li>Ajouter un lieu</li>
                        <li>S'inscrire </li>
                        <li>Travellers' Choice</li>
                        <li>ÉcoLeaders</li>
                        <li>Assistance</li>
                    </ul>
                </ListElements>
                <ListElements>
                    <ul>
                        <h3>Utilisez nos solutions</h3>
                        <li>Propriétaires</li>
                        <li>Avantage business</li>
                        <li>Résultats sponsorisés</li>
                        <li>Faites votre publicité avec nous</li>
                        <li>S'affilier</li>
                    </ul>
                </ListElements>
                <ListElements>
                    <ul>
                        <h3>Télécharger l'appli</h3>
                        <li>Application iPhone</li>
                        <li>Application Android</li>
                    </ul>
                </ListElements>
            </ListContainer>
           <LogoContainer>
                <Logo className="fab fa-facebook icon"></Logo>
                <Logo className="fab fa-instagram icon"></Logo>
                <Logo className="fab fa-twitter-square icon"></Logo>
           </LogoContainer>
        </PageFooter>
    )
}