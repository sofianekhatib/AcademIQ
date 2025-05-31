import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
const Deposer = ({ isOpen, onClose }) => {
    const [FetchedCat, setFetchedCat] = useState([])
    useEffect(() => {
        axios.get('http://localhost/Librarybackend/Examens.php')
            .then(res => setFetchedCat(res.data))
            .catch(error => console.log(error))
    }, [])
    if (!isOpen) return null;
    return (
        <div className="container">
            <div className="fixed flex z-50 top-0 h-full w-full left-0 items-center justify-center">
                <div className="bg-slate-300 p-10 w-full h-fit rounded-xl max-w-md md:max-w-lg lg:max-w-xl">
                    <div className="flex flex-row justify-between">
                        <h2 className="text-start">Déposer un examen</h2>
                        <button className="relative float-end mb-2 p-2" onClick={onClose}><FontAwesomeIcon icon={faXmark} className="text-xl" /></button>
                    </div>
                    <form>
                        <div class="mb-3 w-full">
                            <label for="floatingInput">Nom d'examen</label>
                            <input type="text" class="form-control" id="floatingInput" placeholder="le nom de l'examen" />
                        </div>
                        <div class=" mb-3 w-full">
                            <label for="formFile" class="form-label">Category</label>
                        <select class="form-select" aria-label="Default select example">
                            {[...new Set(FetchedCat.map(item => item.category))].map((category, idx) => (
                                <option value={category} key={idx}>{category}</option>
                            ))}
                        </select>
                        </div>
                        <div class="mb-3">
                            <label for="formFilesujet" class="form-label">Sujet</label>
                            <input class="form-control" type="file" id="formFilesujet" />
                        </div>
                        <div class="mb-3">
                            <label for="formFilecorr" class="form-label">Correction</label>
                            <input class="form-control" type="file" id="formFilecorr" />
                        </div>
                        <div className="flex flex-row justify-between">
                            <button className="btn btn-success" >Deposer</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Deposer
