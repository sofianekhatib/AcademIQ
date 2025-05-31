import React, { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload, faFilter, faSearch } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import axios from 'axios'
const Resources = () => {
    const [searchTerm, setsearchTerm] = useState('')
    const [selectedCat, setselectedCat] = useState('All')
    const [fetchedData, setfetchedData] = useState([])
    useEffect(() => {
        axios.get('http://localhost/Librarybackend/index.php')
            .then(res => setfetchedData(res.data))
            .catch(error => console.log(error))
    }, [])
    const filteredResources = fetchedData.filter((item) => {
        const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase())
        const matchesCat = selectedCat === 'All' || item.category === selectedCat;
        return matchesSearch && matchesCat;
    });
    const categories = ["All", ...new Set(fetchedData.map((item) => item.category))];
    return (
        <div className="container">
            <div className="mt-24 text-center flex flex-row justify-between ml-4 mr-4">
                <div className="flex flex-col gap-2">
                  <h1>Livres et documents</h1>
                   <p className="text-start">Dépôt des Livres et documents</p>
                </div>          </div>
            <div className="flex gap-2 m-3">
                <div className=" relative flex-grow">
                    <input
                        type="text"
                        placeholder="Search resources..."
                        className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none bg-white focus:ring-2 focus:ring-blue-500"
                        onChange={(e) => setsearchTerm(e.target.value)}
                    />
                    <FontAwesomeIcon
                        icon={faSearch}
                        className="absolute left-3 top-3 text-gray-400"
                    />
                </div>
                <div className="relative w-full md:w-48">
                    <select onChange={(e) => setselectedCat(e.target.value)}
                        className="w-full pl-3 pr-8 py-2 border rounded-lg appearance-none bg-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                        {categories.map((category) => {
                            return (<>
                                <option key={category} value={category}>
                                    {category}
                                </option>
                            </>)
                        })
                        }
                    </select>
                    <FontAwesomeIcon icon={faFilter} className="absolute right-3 top-3 text-gray-400 pointer-events-none" />
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredResources.map((item, index) => {
                    return <>
                        <div className="bg-white rounded ml-4 shadow" key={index}>
                            <div className="p-6">
                                <div className="flex justify-between items-start">
                                    <h3 className="text-xl font-semibold text-gray-800">
                                        {item.title}
                                    </h3>
                                    <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                                        {item.type}
                                    </span>
                                </div>
                                <p className="text-gray-600 mt-2">{item.category}</p>
                                <div className="mt-4 flex justify-between items-center">
                                    <span className="text-sm text-gray-500">
                                        {item.downloads} downloads
                                    </span>
                                    <div className="flex gap-2">
                                        <button className="p-2 text-green-600 hover:bg-green-50 rounded-full">
                                            <FontAwesomeIcon icon={faDownload} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                })}
            </div>
            {filteredResources.length === 0 && (
                <div className="text-center py-12">
                    <p className="text-gray-500">No resources found. Try another search.</p>
                </div>
            )}
        </div>
    )
}

export default Resources
