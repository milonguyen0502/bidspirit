import React, { useState, useEffect, useRef } from 'react';
import '../css/UpcomingAuction.css';

const Furniture = () => {
    const [auctions, setAuctions] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const auctionListRef = useRef(null);
    const itemWidth = 295;
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const fetchAuctions = async () => {
            try {
                const response = await fetch('Furniture.json');
                const data = await response.json();
                setAuctions(data);
            } catch (error) {
                console.error('Error fetching auctions data:', error);
            }
        };

        fetchAuctions();
    }, []);

    const calculateTransformValue = () => {
        if (auctionListRef.current && auctions.length > 0) {
            const visibleItems = Math.floor(auctionListRef.current.offsetWidth / itemWidth);
            const maxTranslateX = (auctions.length - visibleItems) * itemWidth;
            const translateX = currentIndex * itemWidth;
            return Math.min(translateX, maxTranslateX);
        }
        return 0;
    };

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === auctions.length - 1 ? 0 : prevIndex + 1));
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? auctions.length - 1 : prevIndex - 1));
    };

    const handleViewMore = () => {
        // Add functionality for the "View More" button if needed
        console.log('View More clicked');
    };

    return (
        <div className="auction-carousel">
            <div className="header">
                <h1>Furniture</h1>
                <button className="view-category-btn">View Category</button>
            </div>
            <div className="auction-list-wrapper" ref={auctionListRef}>
                <div className="auction-list" style={{ transform: `translateX(-${calculateTransformValue()}px)` }}>
                    {auctions.map((auction, index) => (
                        <div key={index} className={`auction-item ${index === currentIndex ? 'active' : ''}`}
                            onMouseEnter={() => setShowButton(true)}
                            onMouseLeave={() => setShowButton(false)}>
                            <img src={auction.img} alt={auction.name} />
                            <h3>{auction.name}</h3>
                            <p>{auction.time}</p>
                            <p>{auction.description}</p>
                            {showButton && (
                                <button className="view-more-button" onClick={handleViewMore}>View More</button>
                            )}
                        </div>
                    ))}
                </div>
            </div>
            <button className="nav-btn prev" onClick={prevSlide}>
                <i className="fa fa-angle-left" aria-hidden="true"></i>
            </button>
            <button className="nav-btn next" onClick={nextSlide}>
                <i className="fa fa-angle-right" aria-hidden="true"></i>
            </button>
        </div>
    );
};

export default Furniture;
