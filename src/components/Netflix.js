import React from "react";
import GenreContainer from "./GenreContainer";

function Netflix({ allContent, handleEditMedia, setSearch }) {

    const netflixContent = allContent.filter(content => content.platform === "Netflix")

    return (
        <>    
            <GenreContainer
            genre="Drama"
            allContent={netflixContent}
            handleEditMedia={handleEditMedia}
            setSearch={setSearch}
            />
            <GenreContainer
                genre="Action"
                allContent={netflixContent}
                handleEditMedia={handleEditMedia}
                setSearch={setSearch}
            />
            <GenreContainer
                genre="Crime"
                allContent={netflixContent}
                handleEditMedia={handleEditMedia}
                setSearch={setSearch}
            />
            <GenreContainer
                genre="Mystery"
                allContent={netflixContent}
                handleEditMedia={handleEditMedia}
                setSearch={setSearch}
            />
            <GenreContainer
                genre="Romance"
                allContent={netflixContent}
                handleEditMedia={handleEditMedia}
                setSearch={setSearch}
            />
            <GenreContainer
                genre="Sci-Fi"
                allContent={netflixContent}
                handleEditMedia={handleEditMedia}
                setSearch={setSearch}
            />
            <GenreContainer
                genre="Thriller"
                allContent={netflixContent}
                handleEditMedia={handleEditMedia}
                setSearch={setSearch}
            />
        </>
    );
}

export default Netflix;