
import React, {useState, useEffect} from 'react'
import axios from 'axios'
import SearchBar from './components/SearchBar';
import Results from './components/Results';
import PandNButtons from './components/PandNButtons';




function App() {
  const[repos, setRepos] = useState([])
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(false);
  
  function nextPage(){
    setLoading(true)
    setPage(page + 1);
  }

  function prevPage(){
    if(page > 1){
      setLoading(true)
    setPage(page - 1);
  }
    }
    useEffect(()=>{
      axios.get(`https://api.github.com/search/repositories?q=created:%3E2021-08-13&sort=stars&order=desc&page=${page}`)
      .then((bc)=>{
        const data = bc.data.items;
        console.log(bc, data);
        setRepos(data);
        setLoading(false);
      })
    }, [page]);

    return(
      <div>
       <h2> List of Repository with most stars </h2>
       

        {repos && !loading ? (
          <Results repos = {repos} />
        ):(`loading`)}
        <PandNButtons 
        nextPag= {nextPage}
        prevPag = {prevPage}
        page = {page}
         />
      </div>
    )


  }


export default App;
