import {getPosts} from './api/axios'
import {useState, useEffect} from 'react'
import SearchBar from './SearchBar'
import { FaWallet, } from "react-icons/fa";
import { VscAccount} from "react-icons/Vsc"
import ListPage from './ListPage'

function Navbar() {
  const [posts, setPosts] = useState([])
  const [searchResults, setSearchResults] = useState([])

  useEffect(() => {
    getPosts()
      .then(json => {
        setPosts(json);
        return json;
      })
      .then(json => {
        setSearchResults(json);
      })
      .catch(error => {
        console.error('Error fetching posts:', error);
      });
  }, []);

  return (
    <div className="navbar_container flex justify-between max-h-[96px] bg-slate-950 z-10">
      <section className="left px-12 py-6 flex gap-3 ">
        <div className="navbar_title"><h1 className="text-white font-medium text-2xl">SkinPlace</h1></div>
        {/* <SearchBar posts={posts} setSearchResults={setSearchResults} /> */}
        {/* <ListPage className="grid" searchResults={searchResults} /> */}
        <div className="navbar_currency"></div>
      </section>
      <section className="right px-12 py-6 flex gap-3">
        <div className="navbar_wallet"><FaWallet color='white' /></div>
        <div className="navbar_login"><VscAccount color='white'/></div>
        <div className="navbar_menu"></div>
      </section>
    </div>
  )
}

export default Navbar