import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload, faSearch, faAngleDown, faCalendarAlt, faFileDownload } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import Deposer from './Deposer';
const Exams = () => {
    const [DeposerExam , setDeposerExam]=useState(false)
    const [searchTerm, setsearchTerm] = useState('')
    const [selectedCat, setselectedCat] = useState('All')
    const [fetchedData, setfetchedData] = useState([])
    useEffect(() => {
        axios.get('http://localhost/Librarybackend/Examens.php')
            .then(res => setfetchedData(res.data))
            .catch(error => console.log(error))
    }, [])
    const FilteredResources = fetchedData.filter((item) => {
        const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase())
        const matchesCat = selectedCat === 'All' || item.category === selectedCat;
        return matchesSearch && matchesCat
    })
    const categories = ['All', ...new Set(fetchedData.map((item) => item.category))]
    return (
        <div>
            <div className="container mx-auto px-4 py-8 mt-20">
                <div className="flex flex-col md:flex-row justify-between items-center mb-8">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-800">Examens Pratiques</h1>
                        <p className="text-gray-600 mt-2">Dépôt des sujets et corrections</p>
                    </div>
                    <button className="btn btn-primary mt-4 md:mt-0" onClick={()=>setDeposerExam(true)}>
                        <FontAwesomeIcon icon={faUpload} className="mr-2" />
                        Déposer un examen
                    </button>
                </div>
                <div className="flex flex-col md:flex-row gap-4 mb-8">
                    <div className="relative flex-grow">
                        <input
                            type="text"
                            placeholder="Rechercher un examen..."
                            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            onChange={(e) => setsearchTerm(e.target.value)}
                        />
                        <FontAwesomeIcon
                            icon={faSearch}
                            className="absolute left-3 top-3 text-gray-400"
                        />
                    </div>
                    <div className="flex gap-4">
                        <div className="relative w-full md:w-48">
                            <select
                                className="w-full pl-3 pr-8 py-2 border rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                                value={selectedCat}
                                onChange={(e) => setselectedCat(e.target.value)}
                            >
                                {categories.map((category) => (
                                    <option key={category} value={category}>{category}</option>
                                ))}
                            </select>
                            <FontAwesomeIcon
                                icon={faAngleDown}
                                className="absolute right-3 top-3 text-gray-400 pointer-events-none"
                            />
                        </div>
                    </div>
                </div>
                <div className="space-y-6">
                    {FilteredResources.map((item, index) => {
                        return <>
                            <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
                                <div className="p-6">
                                    <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                                        <div className="mb-4 md:mb-0">
                                            <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
                                            <div className="flex items-center mt-2 text-gray-600">
                                                <FontAwesomeIcon icon={faCalendarAlt} className="mr-2" />
                                                <span>Session: Juin 2023 | {item.category}</span>
                                            </div>
                                        </div>

                                        <div className="flex flex-col sm:flex-row gap-3">
                                            <button className="btn btn-outline-primary">
                                                <FontAwesomeIcon icon={faFileDownload} className="mr-2" />
                                                Sujet
                                            </button>
                                            <button className="btn btn-outline-success">
                                                <FontAwesomeIcon icon={faFileDownload} className="mr-2" />
                                                Correction
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    })}
                </div>
                {FilteredResources.length === 0 && (
                <div className="text-center py-12">
                    <p className="text-gray-500">No resources found. Try another search.</p>
                </div>
            )}
            </div>
            <Deposer
            isOpen = {DeposerExam}
            onClose = {()=>setDeposerExam(false)}
            />
        </div>
    )
}

export default Exams
