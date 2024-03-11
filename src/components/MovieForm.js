import React, {useState} from 'react';

const MovieForm = ({addMovie}) => {
    const [movieTitle, setMovieTitle] = useState('');
    const [movieYear, setMovieYear] = useState('');
    const [titleError, setTitleError]= useState('');
    const [yearError, setYearError]= useState('');

    const resetForm =  () =>{
        setMovieTitle('');
        setMovieYear('')
    }
    const validateFrom = ()=>{
        resetErrors();
        let validatde=true;
        if(!movieTitle){
            setTitleError('영화제목을 입력해주세요');
            validatde=false;
        }
        if(!movieYear){
            setYearError('개봉년도를 입력해주세요');
            validatde=false;
        }
        return validatde;
    }

    const resetErrors =()=>{
        setTitleError('');
        setYearError('');
    }
    const onSubmit = (e) =>{
        e.preventDefault();
        if(validateFrom()){
            addMovie({
                id:Date.now(),
                title:movieTitle,
                year:movieYear
           });
           resetErrors();
           resetForm();
        }
       
    }
    return (
        <form onSubmit={onSubmit}>
            <input type="text" placeholder='영화제목' value={movieTitle} onChange={e => setMovieTitle(e.target.value)}/>
            <div style={{color:'red', fontSize:"12px",  marginBottom:'5px'}}>{titleError}</div>
            <input type="text" placeholder='개봉연도' value={movieYear} onChange={e => setMovieYear(e.target.value)} />
            <div style={{color:'red', fontSize:"12px", marginBottom:'10px'}}>{yearError}</div>
            <button type="submit">영화추가</button>
        </form>
    );
};

export default MovieForm;