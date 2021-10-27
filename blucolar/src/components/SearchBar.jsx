import React , {useState } from 'react'
import axios from 'axios'
import Results from './Results'
 
const SearchBar = () => {
    const [searchInput , setSearchInput ]  = useState( ' ')
    const [repos, setRepos] = useState([]);
   const handleChange = (e) => {
       setSearchInput(e.target.value)
   }
   const handleClick =  async () => {
    console.log(searchInput)

    try{
      const result = await axios (`https://api.github.com/search/repositories?q=created:%3E2021-08-13&sort=stars&order=desc`)
    setRepos(result)  
    }catch(err){
        console.log(err)
    }
    
}
console.log(repos);
    return (  
          <div>
            <input type="text" placeholder = 'search' value= {searchInput}
            onChange = {handleChange}/>
            <button onClick= {handleClick}>search</button>
           
            < Results  repos= {repos}/>
        </div>
    )
}

export default SearchBar
