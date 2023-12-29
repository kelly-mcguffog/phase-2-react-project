import React from "react";
import HBOButton from "./HBOButton";
import HuluButton from "./HuluButton";
import NetflixButton from "./NetflixButton";
import { Link, useParams } from "react-router-dom";

function Details({ allContent, handleEditMedia }) {
    const { id } = useParams();
    const content = allContent.filter((selected) => selected.id === parseInt(id));

    if (!content || content.length === 0) {
        return <div>Loading...</div>;
    }

    const { title, genre, category, platform, description, trailer } = content[0];

    function sendIdToApp() {
        handleEditMedia(id);
    }

    function streamingButton() {
        if (platform === "HBO Max") {
            return <HBOButton />;
        } else if (platform === "Hulu") {
            return <HuluButton />;
        } else {
            return <NetflixButton />;
        }
    }

    return (
        <div id="media-info">
            <div className="content-details">
                <div className="trailer-clip">
                    <iframe
                        title={title}
                        frameBorder="0"
                        className="trailer"
                        src={trailer}
                        allow="autoplay; fullscreen; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
                <div className="details">
                    <h3 className="details-title">{title}</h3>
                    <p className="content-info">
                        {genre} | {category}
                    </p>
                    {streamingButton()}
                    <p className="content-info">{description}</p>
                    <p className="edit" onClick={sendIdToApp}>
                        <i className="fa-solid fa-pen-to-square"></i>
                        <Link to="/edit">Edit Details</Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Details;
