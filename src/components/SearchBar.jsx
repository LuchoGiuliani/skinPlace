import React from 'react';
import {FaSistrix} from "react-icons/fa"

const SearchBar = ({ posts, setSearchResults }) => {
  const handleSubmit = (e) => e.preventDefault();

  const handleSearchChange = (e) => {
    if (!e.target.value) return setSearchResults(posts);

    const resultsArray = posts.filter(
      (post) =>
        post.name.includes(e.target.value) || post.name.includes(e.target.value)
    );

    setSearchResults(resultsArray);
  };

  return (
    <div className='z-20'>
        <form className="search z-20" onSubmit={handleSubmit}>
                <input
                    className="search__input"
                    type="text"
                    id="search"
                    onChange={handleSearchChange}
                />
                <button  onSubmit={handleSubmit} className="search__button text-white">
                  <FaSistrix/>
                </button>
            </form>
    </div>
  )
}


export default SearchBar