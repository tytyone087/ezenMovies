import axios from 'axios';
import {useEffect, useState} from 'react';
import styles from './Home.module.scss';
import Appmovie from './../components/Appmovie';
import Upcoming from './../components/Upcoming';

const Home = () => {
    const APIKEY=process.env.REACT_APP_TMDB_API_KEY; 
    const [isLoading, setLoading] = useState(true);
    const [appMovie, setAppMovie] =useState([]);
    const [visibleMovies, setVisibleMovies]=useState(10)
    const moviesPerPage=5;


    const getMovies = async () =>{
        try{
        const response=await axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${APIKEY}&language=ko-KR`);
        setAppMovie(response.data.results);
        setLoading(false);
        }catch(error){
        console.error('Error:', error);
        setLoading(false)
        }
    }
    useEffect(() =>{
        getMovies();
    }, [])

    const handleLoadMore = ()=>{
        setVisibleMovies((prevVisible)=>prevVisible+moviesPerPage);
    }
    return (
        <>
            <Upcoming />

            <div className={styles.homeWrap}>
                <h2>상영작</h2>
                {
                isLoading ? (<div><span className={styles.load}>Loading...</span> </div>) : (
                    <div className={styles.appWrap}>
                    {appMovie.slice(0,visibleMovies).map((amovie) => (
                    <Appmovie  id={amovie.id}  title={amovie.title} posterPath={amovie.poster_path} date={amovie.release_date} />
                    ))}
                </div>
                
                    )
                 }
                {appMovie.length > visibleMovies && (
                    <div style={{width: '100%', textAlign:'center'}}>
                        <button style={{background:'#00f', color:'#fff', padding:'10px 30px', border:'none'}} onClick={handleLoadMore}>더보기</button>
                    </div>
                )}
    
            </div>
        </>
    );
};

export default Home;