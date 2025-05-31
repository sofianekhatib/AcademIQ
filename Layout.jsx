import Image from './Images/34009211_dvn6 (1).jpg'
import Image1 from './Images/133979.jpg'
import Image2 from './Images/12150846_4916411.jpg'
import Image3 from './Images/26921923_Hand of student holding magnifying glass and studying books.jpg'
import Image4 from './Images/33. le collaborative learning, définition et avantages-min-1.jpg'
import Image5 from './Images/Resources.jpg'
import Image6 from './Images/37451497_8527907.jpg'
import logo from './Images/AcademIQ-removebg-preview (2).png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons/faAngleRight'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import Register from './Register'
const Layout = () => {
const [isRegisterOpen,setisRegisterOpen]=useState(false)
    return (<>
        <div>
            <div className="w-full h-screen pt-20">
                <img
                    src={Image}
                    alt="background"
                    className="w-full h-full object-cover cursor-pointer"
                    style={{ pointerEvents: 'none' }}
                />
            </div>
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white bg-opacity-40 text-center px-4" style={{ height: '100vh' }}>
                <h1 className="text-4xl md:text-6xl font-bold mb-4">  Bienvenue à votre bibliothèque Universitaire
                    AcademIQ</h1>
                <p className="text-lg md:text-2xl max-w-2xl">
                    Découvrez un monde de ressources académiques à porteé de main
                    Explorez nos cours , examens et exercices pour enrichir votre
                    apprentissage
                </p>
                <div className="mt-6 flex gap-4">
                    <button className="btn btn-outline-light">Explorez</button><button className="btn btn-dark" onClick={()=>setisRegisterOpen(true)}>S'inscrire</button>
                </div>
            </div>
        </div>
        <div className="bg-gray-100 py-12 px-6 md:px-20">
            <h2 className="text-3xl font-bold text-center mb-10 text-blue-800">
                Découvrir les fonctionnalités essentielles de notre bibliothèque
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                    <img src={Image2} alt="Digital Library" className="mx-auto h-32 mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Forum et support entre étudiants</h3>
                    <p className="text-gray-600">Participez à des discussions actives avec d'autres étudiants.</p>
                    <button>En savoir plus <FontAwesomeIcon icon={faAngleRight} /></button>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                    <img src={Image3} alt="Search Documents" className="mx-auto h-32 mb-4" />
                    <h3 className="text-xl font-semibold mb-2"> Notre livres et documents</h3>
                    <p className="text-gray-600">Trouvez rapidement livres, notes de cours et examens grâce à notre moteur intelligent.</p>
                    <Link to="/Resources">En savoir plus <FontAwesomeIcon icon={faAngleRight} /></Link>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                    <img src={Image1} alt="PDF Download" className="mx-auto h-32 mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Téléchargement PDF</h3>
                    <p className="text-gray-600">Téléchargez facilement vos supports en format PDF pour un accès hors ligne.</p>
                    <Link to="/Exams">En savoir plus <FontAwesomeIcon icon={faAngleRight} /></Link>
                </div>
            </div>
        </div>
        <div className="bg-gray-100 py-12 px-6 md:px-20">
            <h2 className="text-3xl font-bold text-center mb-10 text-blue-800">
                Découvrez comment notre plateforme facilite l'apprentissage pour tous
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                    <img src={Image5} alt="PDF Download" className="mx-auto h-32 mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Accès simplifié aux ressources</h3>
                    <button>En savoir plus <FontAwesomeIcon icon={faAngleRight} /></button>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                    <img src={Image4} alt="PDF Download" className="mx-auto h-32 mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Apprentissage collaboratif</h3>
                    <button>En savoir plus <FontAwesomeIcon icon={faAngleRight} /></button>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                    <img src={Image6} alt="PDF Download" className="mx-auto h-32 mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Suivi de progression intelligent</h3>
                    <button>En savoir plus <FontAwesomeIcon icon={faAngleRight} /></button>
                </div>
            </div>
        </div>
        <div className="bg-gray-100 py-12 px-6 md:px-20">
            <div className="flex flex-row justify-center">
                <img src={logo} alt="" className="h-12 mt-2" />
            </div>
            <div className="flex flex-wrap gap-2 mt-4 justify-center">
                <div className="border-2 bg-white w-fit rounded p-2 text-center shadow">
                    <h4 className="text-teal-700">AI-Powered Book Recommendations</h4>
                    <p>Discover your next favorite read with the help of artificial intelligence. Our smart recommendation system analyzes your reading habits and preferences to suggest books tailored specifically to your interests—making your library experience more personal and efficient</p>
                    <div className="flex flex-row justify-end">
                        <button className="btn btn-warning">En savoir plus <FontAwesomeIcon icon={faAngleRight} /></button>
                    </div>
                </div>
                <div className="border-2 bg-white w-fit rounded p-2 text-center shadow">
                    <h4 className="text-teal-700">Virtual Reality (VR) Learning Stations</h4>
                    <p>Step into a new world of learning with our VR stations. Whether you're walking through ancient civilizations, exploring space, or conducting virtual science experiments, VR technology turns education into an immersive and unforgettable experience for all ages.</p>
                    <div className="flex flex-row justify-end">
                        <button className="btn btn-warning">En savoir plus <FontAwesomeIcon icon={faAngleRight} /></button>
                    </div>
                </div>
                <div className="border-2 bg-white w-fit rounded p-2 text-center shadow">
                    <h4 className="text-teal-700">Digital Lending Library</h4>
                    <p>Access thousands of e-books and audiobooks anytime, anywhere. With our digital lending platform and mobile app, you can borrow and read instantly from your device—perfect for learning on the go or enjoying books from the comfort of your home.</p>
                    <div className="flex flex-row justify-end">
                        <button className="btn btn-warning">En savoir plus <FontAwesomeIcon icon={faAngleRight} /></button>
                    </div>
                </div>
                <div className="border-2 bg-white w-fit rounded p-2 text-center shadow">
                    <h4 className="text-teal-700">Online Learning Hub</h4>
                    <p>Boost your skills and expand your knowledge with our curated selection of online courses and tutorials. From language learning to coding, art, and professional development, our learning hub offers flexible, self-paced education for everyone.</p>
                    <div className="flex flex-row justify-end">
                        <button className="btn btn-warning">En savoir plus <FontAwesomeIcon icon={faAngleRight} /></button>
                    </div>
                </div>
            </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between bg-gray-500 py-12 px-6 md:px-20">            <div>
            <h1 className="text-white text-start">Ressources <br /> éducatives pour les <br /> étudiants</h1>
            <p className="text-white">Découvrez nos outils pour réussir vos études et accéder <br /> á des contenus de qualité</p>
            <div className="flex flex-row gap-2 mb-2">
                <button className="btn btn-outline-light">
                    <span>En savoir plus</span>
                </button>
                <button className="btn btn-dark" onClick={()=>setisRegisterOpen(true)}>
                    <span>S'inscrire</span>
                </button>
            </div>
        </div>
            <div>
                <ul className="flex flex-col gap-2 mt-4">
                    <li><Link className="text-white no-underline">Á propos</Link></li>
                    <li><Link className="text-white no-underline">Contactez-nous</Link></li>
                    <li><Link className="text-white no-underline">Aide en ligne</Link></li>
                    <li><Link className="text-white no-underline">Politique de confidentialité</Link></li>
                    <li><Link className="text-white no-underline">Conditions d'utilisation</Link></li>
                </ul>
            </div>
            <div>
                <ul className="flex flex-col gap-2 mt-4">
                    <li><Link className="text-white no-underline">Blog éducatif</Link></li>
                    <li><Link className="text-white no-underline">Témoignages d'étudiants</Link></li>
                    <li><Link className="text-white no-underline">Événements á venir </Link></li>
                    <li><Link className="text-white no-underline">Ressources gratuites</Link></li>
                    <li><Link className="text-white no-underline">Nos partenaires</Link></li>
                </ul>
            </div>
              <Register 
             isOpen= {isRegisterOpen}
             onClose = {()=>setisRegisterOpen(false)}
          />
        </div>
    </>
    )
}

export default Layout