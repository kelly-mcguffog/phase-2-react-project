import React from "react";
import { useHistory } from "react-router-dom";


function EditForm({ id, title, category, description, genre, platform, trailer, image, setEditMedia, updateMediaList }) {

    const history = useHistory()

    function handleEditChange(event) {
        setEditMedia((prevMedia) => {
            return {
                ...prevMedia,
                [event.target.name]: event.target.value
            }
        })
    }

    function handleEditSubmit(e) {
        e.preventDefault();
        fetch(`http://localhost:3000/content/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                id,
                title,
                category,
                description,
                genre,
                platform,
                trailer,
                image
            })
        })
            .then(res => res.json())
            .then(newMedia => updateMediaList(newMedia))
        history.push("/")
    }

    return (
        <div className="form-container">
            <form className="NewItem" onSubmit={handleEditSubmit}>

                <label>
                    Title:
                    <input
                        type="text"
                        name="title"
                        onChange={handleEditChange}
                        value={title}
                        className="form-input"
                        placeholder="Enter a Title"
                    />
                </label>

                <label>
                    Category:
                    <select className="form-input" name="category" value={category} onChange={handleEditChange}>
                        <option value="Movie">Movie</option>
                        <option value="TV Show">TV Show</option>
                    </select>
                </label>

                <label>
                    Genre:
                    <select className="form-input" name="genre" value={genre} onChange={handleEditChange}>
                        <option value="Crime">Crime</option>
                        <option value="Action">Action</option>
                        <option value="Drama">Drama</option>
                        <option value="Mystery">Mystery</option>
                        <option value="Thriller">Thriller</option>
                        <option value="Romance">Romance</option>
                        <option value="Sci-Fi">Sci-Fi</option>
                    </select>
                </label>

                <label>
                    Description:
                    <textarea
                        name="description"
                        onChange={handleEditChange}
                        value={description}
                        className="form-textarea"
                        placeholder="Enter a Description..."
                    >
                    </textarea>
                </label>

                <label>
                    Streaming Service:
                    <select className="form-input" name="platform" value={platform} onChange={handleEditChange}>
                        <option value="HBO Max">HBO Max</option>
                        <option value="Hulu">Hulu</option>
                        <option value="Netflix">Netflix</option>
                    </select>
                </label>

                <label>
                    Trailer URL:
                    <input
                        type="text"
                        name="trailer"
                        onChange={handleEditChange}
                        value={trailer}
                        placeholder="Enter a URL for the Trailer"
                        className="form-input"
                    />
                </label>

                <label>
                    Image URL:
                    <input
                        type="text"
                        name="image"
                        onChange={handleEditChange}
                        value={image}
                        placeholder="Enter an Image URL"
                        className="form-input"
                    />
                </label>


                <button name="submit" type="submit">Submit Changes</button>
            </form>
        </div>
    );

}

export default EditForm;