import React from 'react';
export default function Meme(){
    const[memeimg,setMemeimg]=React.useState("");
    const [meme,setMeme]=React.useState({
        toptext:"",
        bottomtext:"",
        randomimg:"",
    })
    const[allMeme,setallMeme]=React.useState([]);
    React.useEffect(()=>{
        fetch("https://api.imgflip.com/get_memes")
        .then(res=>res.json())
        .then(data=>setallMeme(data.data.memes))
    },[]);
    function handleclick(){
        let rand=Math.floor(Math.random()*101);
        let url=allMeme[rand].url;
        setMeme(prevobj=>({
            toptext:"",
            bottomtext:"",
            randomimg:url,
        }));

    }
    function handlechange(event){
        const {name,value}=event.target;
        setMeme(prevobj=>({
            ...prevobj,
            [name]:value,
            

        }))
    }
    return (
       
        <main>
            <div className="form">
                <input className="forminputs" onChange={handlechange} placeholder="Top text" type="text" name='toptext' value={meme.toptext}/>
                <input className="forminputs" onChange={handlechange} placeholder="Bottom text" type="text" name='bottomtext' value={meme.bottomtext}/>
                <button className="formbtn"  onClick={handleclick} >Get a new meme image</button>
                <div className='f'>
                    <img alt="" src={meme.randomimg}/>
                    <p className='top-text'>{meme.toptext}</p>
                    <p className='bot-text'>{meme.bottomtext}</p>
                </div>
            </div>
        </main>
    );

}