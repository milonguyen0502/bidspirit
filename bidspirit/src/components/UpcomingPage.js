import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/UpcomingPage.css';
import SlideShow from "./SlideShow";

function UpcomingPage({ auctions }) {
    const navigate = useNavigate();

    return (
        <div>
            <h1 className="title-page">Upcoming Auction</h1>
            <SlideShow />
            <div className="product-list">
                <div className="product-filter">
                    <p>SHOWING {auctions.length} RESULT{auctions.length > 1 ? 'S' : ''}</p>
                    <hr></hr>
                    <h4>SORT BY</h4>
                    <div>
                        <input type="radio" name="sort" />
                        <p>End Date - Ascending</p>
                    </div>
                    <div>
                        <input type="radio" name="sort" />
                        <p>End Date - Descending</p>
                    </div>
                    <hr></hr>
                    <h4>DATE</h4>
                    <p>From</p>
                    <input type="date" />
                    <p>To</p>
                    <input type="date" />
                    <hr></hr>
                    <h4>Location</h4>
                    <div>
                        <td><input type="checkbox" /></td>
                        <td><p>New York</p></td>
                    </div>
                    <div>
                        <td><input type="checkbox" /></td>
                        <td><p>London</p></td>
                    </div>
                    <div>
                        <td><input type="checkbox" /></td>
                        <td><p>Hong Kong</p></td>
                    </div>
                    <div>
                        <td><input type="checkbox" /></td>
                        <td><p>Paris</p></td>
                    </div>
                    <div>
                        <td><input type="checkbox" /></td>
                        <td><p>New York</p></td>
                    </div>
                    <hr></hr>
                    <h4>EXHIBITIONS THIS WEEK</h4>
                    <div>
                        <td><input type="checkbox" /></td>
                        <td><p>Amsterdam</p></td>
                    </div>
                    <div>
                        <td><input type="checkbox" /></td>
                        <td><p>New York</p></td>
                    </div>
                    <div>
                        <td><input type="checkbox" /></td>
                        <td><p>London</p></td>
                    </div>
                    <div>
                        <td><input type="checkbox" /></td>
                        <td><p>Paris</p></td>
                    </div>
                    <hr></hr>
                    <h4>CATEGORY</h4>
                    <div>
                        <td><input type="checkbox" /></td>
                        <td><p>Contemporary Art</p></td>
                    </div>
                    <div>
                        <td><input type="checkbox" /></td>
                        <td><p>Impressionist & Modern Art</p></td>
                    </div>
                    <div>
                        <td><input type="checkbox" /></td>
                        <td><p>Jewelry</p></td>
                    </div>
                    <div>
                        <td><input type="checkbox" /></td>
                        <td><p>Watches</p></td>
                    </div>
                    <div>
                        <td><input type="checkbox" /></td>
                        <td><p>Wine</p></td>
                    </div>
                    <hr></hr>
                    <h4>SALES</h4>
                    <div>
                        <td><input type="checkbox" /></td>
                        <td><p>Exhibition</p></td>
                    </div>
                    <div>
                        <td><input type="checkbox" /></td>
                        <td><p>Live</p></td>
                    </div>
                    <div>
                        <td><input type="checkbox" /></td>
                        <td><p>Online Only</p></td>
                    </div>
                </div>
                <div>
                    <div className="product-input">
                        <input placeholder='Search'/>
                    </div>
                    <div className="product-menu">
                    {auctions.map((auction, index) => (
                        <div key={index} className="product-item" onClick={() => navigate(`/product/${auction.id}`)}>
                            <img src={auction.img} alt={auction.name} />
                            <h3>{auction.name}</h3>
                            <p>{auction.time}</p>
                            <button>VIEW AUCTION</button>
                        </div>
                    ))}
                </div>
                </div>

            </div>
        </div>
    );
}

export default UpcomingPage;
