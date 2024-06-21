import React, { useState, useEffect } from 'react';
import { BsArrowRightShort } from 'react-icons/bs';
import { FaWifi } from 'react-icons/fa';
import { MdAirportShuttle, MdBathtub, MdKingBed, MdLocationOn } from 'react-icons/md';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { fetchOffers } from '../../apiService/api';
import './offers.css';

const Offer = () => {
    const [offers, setOffers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        Aos.init({ duration: 2000 });
        fetchOffersFromApi();
    }, []);

    const fetchOffersFromApi = async () => {
        try {
            const offersData = await fetchOffers();
            setOffers(offersData);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching offers:', error);
            setError('Failed to fetch offers. Please try again.');
            setLoading(false);
        }
    };

    if (loading) {
        return <p>Loading offers...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <section className="offer container section">
            <div className="secContainer">
                <div data-aos="fade-up" data-aos-duration="2000" className="secIntro">
                    <h2 className="secTitle">Special Offers</h2>
                    <p>
                        From historical cities to natural spectaculars, come see the best of
                        the world!
                    </p>
                </div>

                <div className="mainContent grid">
                    {offers.map((offer) => (
                        <div
                            key={offer.id}
                            data-aos="fade-up"
                            data-aos-duration="3000"
                            className="singleOffer"
                        >
                            <div className="destImage">
                                <img src={`http://localhost:8000${offer.image}`} alt={offer.title} />
                                <span className="discount">{offer.discount}% Off</span>
                            </div>
                            <div className="offerBody">
                                <div className="price flex">
                                    <h4>${offer.price}</h4>
                                    <span className="status">For Rent</span>
                                </div>

                                <div className="amenities flex">
                                    <div className="singleAmenity flex">
                                        <MdKingBed className="icon" />
                                        <small>{offer.beds} Beds</small>
                                    </div>
                                    <div className="singleAmenity flex">
                                        <MdBathtub className="icon" />
                                        <small>{offer.bathtub} Bathtub</small>
                                    </div>
                                    <div className="singleAmenity flex">
                                        <FaWifi className="icon" />
                                        <small>Wi-fi</small>
                                    </div>
                                    <div className="singleAmenity flex">
                                        <MdAirportShuttle className="icon" />
                                        <small>Shuttle</small>
                                    </div>
                                </div>
                                <div className="location flex">
                                    <MdLocationOn className="icon" />
                                    <small>{offer.location}</small>
                                </div>
                                <button className="btn flex">
                                    View Details
                                    <BsArrowRightShort className="icon" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Offer;
