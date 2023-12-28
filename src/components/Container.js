import React from "react";
import GenreContainer from "./GenreContainer";

function Container({ allContent, handleEditMedia, setSearch }) {
    return (
        <>
            <GenreContainer
                genre="Drama"
                allContent={allContent}
                handleEditMedia={handleEditMedia}
                setSearch={setSearch}
            />
            <GenreContainer
                genre="Action"
                allContent={allContent}
                handleEditMedia={handleEditMedia}
                setSearch={setSearch}
            />
            <GenreContainer
                genre="Crime"
                allContent={allContent}
                handleEditMedia={handleEditMedia}
                setSearch={setSearch}
            />
            <GenreContainer
                genre="Mystery"
                allContent={allContent}
                handleEditMedia={handleEditMedia}
                setSearch={setSearch}
            />
            <GenreContainer
                genre="Romance"
                allContent={allContent}
                handleEditMedia={handleEditMedia}
                setSearch={setSearch}
            />
            <GenreContainer
                genre="Sci-Fi"
                allContent={allContent}
                handleEditMedia={handleEditMedia}
                setSearch={setSearch}
            />
            <GenreContainer
                genre="Thriller"
                allContent={allContent}
                handleEditMedia={handleEditMedia}
                setSearch={setSearch}
            />
        </>
    );
}

export default Container;