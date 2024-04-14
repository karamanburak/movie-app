import React from "react";
import { useAuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const defaultImage =
    "https://images.unsplash.com/photo-1581905764498-f1b60bae941a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"; //* resim yoksa default resmi göster diyecez

const MovieCard = ({ id, poster_path, overview, vote_average, title }) => {
    const { currentUser } = useAuthContext();
    const navigate = useNavigate()
    const tagColor = vote_average >= 8 ? "green" : vote_average >= 6 ? "orange" : "red"
    return (
        <div className="movie" id="container">
            <img
                loading="lazy"
                src={
                    poster_path
                        ? "https://image.tmdb.org/t/p/w1280" + poster_path
                        : defaultImage
                }
                alt="movie-card"
            />
            <div className="flex align-baseline justify-between p-1 text-white">
                <h5>{title}</h5>
                {currentUser && <span className={`tag ${tagColor}`}>{vote_average.toFixed(1)}</span>}
            </div>
            <div className="movie-over text-2xl gap-5">
                <h2 className="text-red-600 font-bold">{title}</h2>
                <p >  {"Rate : " + (vote_average).toFixed(1)}</p>
                <p className="text-base">{overview}</p>
                <button className="bg-green-500 p-4 rounded-md text-lg" onClick={() => navigate("/details/" + id)}> View Details</button>
            </div>
        </div>
    );
};

export default MovieCard;