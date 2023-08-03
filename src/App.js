import './App.css';
import React, { useState, useEffect } from 'react';
import Modal from './Modal.js';
import jsonData from './data.json';
import health from './img/icon _health.png';
import casco from './img/casco.png';
import chaleco from './img/chaleco.png';
import head from './img/head.png';
import torso from './img/torso.png';
import cuchillo from './img/cuchillo.png';
import granadaflash from './img/granadaflash.png';
import granadaexplo from './img/granadaexplo.png';
import granadahumo from './img/granadahumo.png';
import arma1 from './img/arma1.png';
import balas1 from './img/balas1.png';
import bomb from './img/bomb.png';
import team from './img/team.png';

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState(null); 

  useEffect(() => {
    setModalData(jsonData);
  }, []);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Hi, Modal in progress</h1>
        <button className="button" onClick={openModal}>Mohamed</button>
        {modalData && (
          <Modal isOpen={isModalOpen} onClose={closeModal}>
            <div className="modal-content">
       
              <div className='rectangulo'>
              <div className="image-element-container">
                <img className="image-element" src={modalData.teamprofile} alt="Imagen" />
              </div>

     
              <div className='profile-image-container'>
                <img className='profile-image' src={modalData.profile} alt="Imagen" />
              </div>

  
              <div className='textcontainer'>
                <p className='name-text'>{modalData.name}</p>
                <p className='date-text'>{modalData.date}</p>
                <p className='money-text'>{modalData.money}</p>
                
              </div>

  
              <div className='health-image-container'>
                <img className='health-image' src={health} alt="Imagen" />
                <p className='health-text'>{modalData.life}</p>
              </div>

         
              <div className='casco-image-container'>
                <img className='casco-image' src={casco} alt="Imagen" />
                <div className='chaleco-image-container'>
                  <img className='chaleco-image' src={chaleco} alt="Imagen" />
                  <p className='escudo-text'>{modalData.escudo}</p>
                </div>
              </div>
      
              <div className='textcontainerADR'>
                <p className='ADR-text'>ADR</p>
                <p className='ADRC-text'>{modalData.adr}</p>
              </div>

              <div className='head-image-container'>
                  <img className='head-image' src={head} alt="Imagen" />
              </div>
           
              <div className='textcontainerKDA'>
                <p className='KDA-text'>Head</p>
                <p className='KDAC-text'>{modalData.head}</p>
            </div>


            <div className='torso-image-container'>
                  <img className='torso-image' src={torso} alt="Imagen" />
              </div>
              
              <div className='textcontainertorso'>
                <p className='torso-text'>Torso</p>
                <p className='torsoc-text'>{modalData.torso}</p>
            </div>


            <div className='dmg-image-container'>
                  <img className='dmg-image' src={cuchillo} alt="Imagen" />
              </div>
         
              <div className='textcontainerdmg'>
                <p className='dmg-text'>DMG</p>
                <p className='dmgl-text'>last</p>
                <p className='dmgr-text'>round</p>
                <p className='dmgc-text'>{modalData.dmg}</p>
            </div>


            <div className='granada-f-image-container'>
                  <img className='granda-f-image' src={granadaflash} alt="Imagen" />
              </div>
         
              <div className='textcontainergranadaf'>
                <p className='granada-f-text'>{modalData.granadaflash}</p>
            </div>
              

            <div className='granada-e-image-container'>
                  <img className='granda-e-image' src={granadaexplo} alt="Imagen" />
              </div>
             
              <div className='textcontainergranadae'>
                <p className='granada-e-text'>{modalData.granadaexplo}</p>
            </div>


            <div className='granada-h-image-container'>
                  <img className='granda-h-image' src={granadahumo} alt="Imagen" />
              </div>
              
              <div className='textcontainergranadah'>
                <p className='granada-h-text'>{modalData.granadahumo}</p>
            </div>


            <div className='arma1-image-container'>
                  <img className='arma1-image' src={arma1} alt="Imagen" />
              </div>
            <div className='balas1-image-container'>
                  <img className='balas1-image' src={balas1} alt="Imagen" />
              </div>
             
              <div className='textcontainerarma1'>
                <p className='arma1-text'>{modalData.arma1}</p>
            </div>

            <div className='arma2-image-container'>
                  <img className='arma2-image' src={arma1} alt="Imagen" />
              </div>
            <div className='balas2-image-container'>
                  <img className='balas2-image' src={balas1} alt="Imagen" />
              </div>
        
              <div className='textcontainerarma2'>
                <p className='arma2-text'>{modalData.arma2}</p>
            </div>



            <div className='bomb-image-container'>
                  <img className='bomb-image' src={bomb} alt="Imagen" />
              </div>


              <div className='team-image-container'>
                  <img className='team-image' src={team} alt="Imagen" />
              </div>


            </div>
            </div>
          </Modal>
        )}
      </header>
    </div>
  );
}

export default App;
