import React from 'react';
import { useParams } from 'react-router-dom';
import '../css/ProductDetail.css';

const ProductDetail = ({ auctions }) => {
    const { id } = useParams();
    const auction = auctions.find(auction => auction.id === parseInt(id));

    if (!auction) {
        return <div>Product not found</div>;
    }

    return (
        <div className="product-detail-container">
            <div className="product-detail">
                <h1>{auction.name}</h1>
                <img src={auction.img} alt={auction.name} />
                <h3>{auction.price}$</h3>
                <p>{auction.description}</p>
                <p>{auction.time}</p>
            </div>
        </div>
    );
};

export default ProductDetail;
