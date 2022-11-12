import React, {useState} from "react";


function Form({onContentFormSubmit}){

    const initialState = {
        title: "",
        category: "Movie",
        description: "",
        genre: "Comedy",
        platform: "HBO Max",
        trailer: "",
        image: ""
    }

    const [formData, setFormData] = useState(initialState)

    function handleChange(event) {
        setFormData({
          ...formData,
          [event.target.name]: event.target.value
        });
      }

      function handleSubmit(e){
        e.preventDefault();
        fetch('http://localhost:3000/content', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
        })
        .then(res => res.json())
        .then(content => onContentFormSubmit(content))
        setFormData(initialState)

      }

        return (
            <div className="form-container">
                <form className="NewItem" onSubmit={handleSubmit}>
                <label>
                    Title:
                    <input 
                    type="text" 
                    name="title" 
                    onChange={handleChange} 
                    value={formData.title}
                    className="form-input"
                    placeholder="Enter a Title"
                    />
                </label>
                
                <label>
                    Category:
                    <select className="form-input" name="category" onChange={handleChange}>
                    <option value="Movie">Movie</option>
                    <option value="TV Show">TV Show</option>
                    </select>
                </label>

                <label>
                    Genre:
                    <select className="form-input" name="genre" onChange={handleChange}>
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
                    onChange={handleChange} 
                    value={formData.description}
                    className="form-textarea"
                    placeholder="Enter a Description..."
                    >
                    </textarea>
                </label>

                <label>
                    Streaming Service:
                    <select className="form-input" name="platform" onChange={handleChange}>
                    <option value="HBO">HBO Max</option>
                    <option value="Hulu">Hulu</option>
                    <option value="Netflix">Netflix</option>
                    </select>
                </label>

                <label>
                    Trailer URL:
                    <input 
                    type="text" 
                    name="trailer" 
                    onChange={handleChange} 
                    value={formData.trailer}
                    placeholder="Enter a URL for the Trailer"
                    className="form-input"
                    />
                </label>
                
                <label>
                    Image URL:
                    <input 
                    type="text" 
                    name="image" 
                    onChange={handleChange} 
                    value={formData.image}
                    placeholder="Enter an Image URL"
                    className="form-input"
                    />
                </label>
                
            
                <button onChange={(e) => setFormData(e.target.value)} name="submit" type="submit">Add to List</button>
                </form>
            </div>
          );

}

export default Form;