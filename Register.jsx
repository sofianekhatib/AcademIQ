import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
const Register = ({ isOpen, onClose }) => {
    const navigate = useNavigate()
    const [userData , setUserData]=useState({
    name: "",
    email: "",
    pass: "",
    country: "Morocco",
    filliere: "Informatique",
    })
async function handleSubmit(e){
  e.preventDefault()
  try {
    const res=await fetch("http://localhost/Librarybackend/Register.php",{
       method:'POST',
       headers: {'Content-Type': 'application/json'},
       body: JSON.stringify(userData)
  })
  const data = await res.json();
  if(data.success){
    navigate('/')
  }else {
    alert(data.message,'failed to fetch')
  }
  } catch (error) {
    console.log(error)
  }
}
if (!isOpen) return null;
  return (
    <div className="fixed flex z-50 top-0 h-full w-full left-0 items-center justify-center">
      <div className="bg-slate-300 p-10 w-full h-fit rounded-xl max-w-md md:max-w-lg lg:max-w-xl">
        <div className="flex flex-row justify-between">
          <h2 className="text-start">S'inscrire</h2>
          <button className="relative float-end mb-2 p-2" onClick={onClose}><FontAwesomeIcon icon={faXmark} className="text-xl"/></button>
        </div>
        <form onSubmit={handleSubmit}>
          <div class="form-floating mb-3 w-full">
            <input type="text" class="form-control" id="floatingInput" name="name" placeholder="Entrer votre nom complet" onChange={(e)=>setUserData({ ...userData, name: e.target.value })}/>
            <label for="floatingInput">Nom complet</label>
          </div>
          <div class="form-floating mb-3 w-full">
            <input type="email" class="form-control" id="floatingInput" name="email" placeholder="nom@exemple.com" onChange={(e)=>setUserData({...userData , email: e.target.value})}/>
            <label for="floatingInput">Adresse Email</label>
          </div>
          <div class="form-floating mb-3 w-full">
            <input type="password" class="form-control" id="floatingPassword"  name="pass" placeholder="Mot de passe" onChange={(e)=>setUserData({...userData , password : e.target.value})}/>
            <label for="floatingPassword">Mot de Passe</label>
          </div>
          <div class="form-floating mb-3 w-full">
            <select class="form-select" id="floatingSelect" aria-label="Floating label select example" name="country" onChange={(e)=>setUserData({...userData , country : e.target.value})}>
              <option selected>Maroc</option>
              <option value="Algérie">Algérie</option>
              <option value="Égypte">Égypte</option>
              <option value="Liban">Liban</option>
              <option value="Irak">Irak</option>
              <option value="Koweït">Koweït</option>
              <option value="Arabie Saoudite">Arabie Saoudite</option>
              <option value="Émirats Arabes Unis">Émirats Arabes Unis</option>
            </select>
            <label for="floatingSelect">Country</label>
          </div>
          <div class="form-floating mb-3 w-full">
            <select class="form-select" id="floatingSelect" aria-label="Floating label select example" name="filliere" onChange={(e)=>setUserData({...userData , filiere : e.target.value})}>
              <option selected>Informatique </option>
              <option value="Médecine">Médecine </option>
              <option value="Droit">Droit </option>
              <option value="Économie">Économie </option>
              <option value="Génie civil">Génie civil</option>
              <option value="Marketing">Marketing </option>
              <option value="Architecture">Architecture </option>
              <option value="Psychologie">Psychologie</option>
            </select>
            <label for="floatingSelect">filière</label>
          </div>
          <div className="flex flex-row justify-between">
            <button className="btn btn-success" type="submit">S'inscrire</button>
            <div className="flex flex-row gap-4">
            <p><strong>Déjà inscrit ?</strong></p>
            <Link><b>Connexion</b></Link>
          </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;