import React from "react";
import GenreContainer from "./GenreContainer";

function Hulu({ allContent, handleEditMedia, setSearch }) {

    const huluContent = allContent.filter(content => content.platform === "Hulu")

    return (
        <>
            <GenreContainer
                genre="Drama"
                allContent={huluContent}
                handleEditMedia={handleEditMedia}
                setSearch={setSearch}
            />
            <GenreContainer
                genre="Action"
                allContent={huluContent}
                handleEditMedia={handleEditMedia}
                setSearch={setSearch}
            />
            <GenreContainer
                genre="Crime"
                allContent={huluContent}
                handleEditMedia={handleEditMedia}
                setSearch={setSearch}
            />
            <GenreContainer
                genre="Drama"
                allContent={huluContent}
                handleEditMedia={handleEditMedia}
                setSearch={setSearch}
            />
            <GenreContainer
                genre="Mystery"
                allContent={huluContent}
                handleEditMedia={handleEditMedia}
                setSearch={setSearch}
            />
            <GenreContainer
                genre="Romance"
                allContent={huluContent}
                handleEditMedia={handleEditMedia}
                setSearch={setSearch}
            />
            <GenreContainer
                genre="Sci-Fi"
                allContent={huluContent}
                handleEditMedia={handleEditMedia}
                setSearch={setSearch}
            />
            <GenreContainer
                genre="Thriller"
                allContent={huluContent}
                handleEditMedia={handleEditMedia}
                setSearch={setSearch}
            />
        </>
    );
}

export default Hulu;