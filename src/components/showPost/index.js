import React, { useState } from 'react'

function ShowPost(props){
    const author = props.author;
    const content = props.content;
    const date = props.date;

    const [state, changeState] = useState(false);
    
    return(
        <div className = "post">
            <div className = 'postBody'>
                <div className = 'photo'>
                    <img className ="userPhoto" src={author.photo} alt=" " />
                </div>
                <div className = "block">
                    <div className = 'info'>
                        <div className = "name">
                            {author.name}
                        </div>
                        <div className = "nickname">
                            {author.nickname}
                        </div>
                    <div className= "date">
                    {date}
                    </div>
                </div>
            
                <div className ="content">
                {content.message}
                </div>
            
            
            <div className="postPhoto">
            
            <img src={content.image} alt=" " />
            </div>
            </div>
            </div>
            <button onClick={() => changeState(!state)}>
                like
               
            </button>
            <span>
                    {
                    state === true ? " you like this photo" : " "
                    }
            </span>
        </div>

    )
}

export default ShowPost;
