import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../css/UpcomingPage.css';
import SlideShow from "./SlideShow";


function ProductMenu({ auctions, privateSale, antiQue, furniTure, collecTible }) {
    const location = useLocation();
    const navigate = useNavigate();
    const [currentList, setCurrentList] = useState([]);
    const [filters, setFilters] = useState({
        sortBy: '',
        dateFrom: '',
        dateTo: '',
        locations: [],
        exhibitions: [],
        categories: [],
        sales: []
    });
    const [searchTerm, setSearchTerm] = useState('');
    const [pageTitle, setPageTitle] = useState('Upcoming Auction');

    useEffect(() => {
        // Set initial list based on URL parameter
        const searchParams = new URLSearchParams(location.search);
        const type = searchParams.get('type');

        if (type === 'auctions') {
            setCurrentList(auctions);
            setPageTitle('Upcoming Auction');
        } else if (type === 'privateSale') {
            setCurrentList(privateSale);
            setPageTitle('Private Sale');
        } else if (type === 'antique') {
            setCurrentList(antiQue);
            setPageTitle('Antique Collection');
        } else if (type === 'furniture') {
            setCurrentList(furniTure);
            setPageTitle('Furniture Collection');
        } else if (type === 'collectibles') {
            setCurrentList(collecTible);
            setPageTitle('Collectibles');
        }
    }, [location, auctions, privateSale, antiQue, furniTure, collecTible]);

    const handleFilterChange = (event) => {
        const { name, value } = event.target;
        setFilters(prevFilters => ({
            ...prevFilters,
            [name]: value
        }));
    };

    const handleCheckboxChange = (event) => {
        const { name, checked } = event.target;
        const prevList = filters[name];
        let updatedList = [];

        if (checked) {
            updatedList = [...prevList, name];
        } else {
            updatedList = prevList.filter(item => item !== name);
        }

        setFilters(prevFilters => ({
            ...prevFilters,
            [name]: updatedList
        }));
    };

    const applyFilters = () => {
        // Logic to filter currentList based on filters
        console.log('Filters applied:', filters);
        // Implement your logic to filter currentList based on filters
        // Update the currentList state with the filtered results
    };

    const navigateToProductDetail = (product) => {
        navigate(`/product/${product.id}`);
    };

    const handleSearchInputChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredList = currentList.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <h1 className="title-page">{pageTitle}</h1>
            <SlideShow />
            <div className="product-list">
                <div className="product-filter">
                    <p>SHOWING {filteredList.length} RESULT{filteredList.length !== 1 ? 'S' : ''}</p>
                    <hr />
                    <h4>SORT BY</h4>
                    <div>
                        <label>
                            <input type="radio" name="sortBy" value="endDateAsc" onChange={handleFilterChange} />
                            End Date - Ascending
                        </label>
                    </div>
                    <div>
                        <label>
                            <input type="radio" name="sortBy" value="endDateDesc" onChange={handleFilterChange} />
                            End Date - Descending
                        </label>
                    </div>
                    <hr />
                    <h4>DATE</h4>
                    <p>From</p>
                    <input type="date" name="dateFrom" value={filters.dateFrom} onChange={handleFilterChange} />
                    <p>To</p>
                    <input type="date" name="dateTo" value={filters.dateTo} onChange={handleFilterChange} />
                    <hr />
                    <h4>Location</h4>
                    <div>
                        <label>
                            <input type="checkbox" name="NewYork" checked={filters.locations.includes('NewYork')} onChange={handleCheckboxChange} />
                            New York
                        </label>
                    </div>
                    <div>
                        <label>
                            <input type="checkbox" name="London" checked={filters.locations.includes('London')} onChange={handleCheckboxChange} />
                            London
                        </label>
                    </div>
                    {/* Add more location checkboxes as needed */}
                    <hr />
                    <h4>Exhibition</h4>
                    {/* Exhibition filter checkboxes */}
                    <hr />
                    <h4>Categories</h4>
                    {/* Categories filter checkboxes */}
                    <hr />
                    <h4>Sale Type</h4>
                    {/* Sale type filter checkboxes */}
                    <hr />
                    <button onClick={applyFilters}>APPLY FILTERS</button>
                </div>
                <div>
                <input
                        type="text"
                        placeholder="Search..."
                        value={searchTerm}
                        onChange={handleSearchInputChange}
                        className="search-input"
                    />
                <div className="product-menu">
                    {filteredList.map((item, index) => (
                        <div key={index} className="product-item" onClick={() => navigateToProductDetail(item)}>
                            <img src={item.img} alt={item.name} />
                            <div className="product-details">
                                <h3>{item.name}</h3>
                                <p>{item.time}</p>
                                <button>VIEW AUCTION</button>
                            </div>
                        </div>
                    ))}
                </div>
                </div>
        
            </div>
        </div>
    );
}

export default ProductMenu;
