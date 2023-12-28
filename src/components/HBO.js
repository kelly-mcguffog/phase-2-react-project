import React from "react";
import GenreContainer from "./GenreContainer";

function Hbo({ allContent, handleEditMedia, setSearch }) {

    const hboContent = allContent.filter(content => content.platform === "HBO Max")

    return (
        <>
            <GenreContainer
                genre="Drama"
                allContent={hboContent}
                handleEditMedia={handleEditMedia}
                setSearch={setSearch}
            />
            <GenreContainer
                genre="Action"
                allContent={hboContent}
                handleEditMedia={handleEditMedia}
                setSearch={setSearch}
            />
            <GenreContainer
                genre="Crime"
                allContent={hboContent}
                handleEditMedia={handleEditMedia}
                setSearch={setSearch}
            />
            <GenreContainer
                genre="Mystery"
                allContent={hboContent}
                handleEditMedia={handleEditMedia}
                setSearch={setSearch}
            />
            <GenreContainer
                genre="Romance"
                allContent={hboContent}
                handleEditMedia={handleEditMedia}
                setSearch={setSearch}
            />
            <GenreContainer
                genre="Sci-Fi"
                allContent={hboContent}
                handleEditMedia={handleEditMedia}
                setSearch={setSearch}
            />
            <GenreContainer
                genre="Thriller"
                allContent={hboContent}
                handleEditMedia={handleEditMedia}
                setSearch={setSearch}
            />
        </>
    );
}

export default Hbo;