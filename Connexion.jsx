import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const Register = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed flex z-50 top-0 h-full w-full left-0 items-center justify-center">
      <div className="bg-slate-300 p-10 w-full h-fit rounded-xl max-w-md md:max-w-lg lg:max-w-xl">
        <div className="flex flex-row justify-between">
          <h2 className="text-start">Connexion</h2>
          <button className="relative float-end mb-2 p-2" onClick={onClose}><FontAwesomeIcon icon={faXmark} className="text-xl"/></button>
        </div>
        <form>
          <div class="form-floating mb-3 w-full">
            <input type="email" class="form-control" id="floatingInput" placeholder="nom@exemple.com" />
            <label for="floatingInput">Adresse Email</label>
          </div>
          <div class="form-floating mb-3 w-full">
            <input type="password" class="form-control" id="floatingPassword" placeholder="Mot de passe" />
            <label for="floatingPassword">Mot de Passe</label>
          </div>
          <div className="flex flex-row justify-between">
            <button className="btn btn-success">Connexion</button>
            <div className="flex flex-row gap-4">
            <p><strong>Pas encore inscrit ?</strong></p>
            <Link><b>S'inscrire</b></Link>
          </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;