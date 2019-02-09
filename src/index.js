import React from 'react';
import ReactDOM from 'react-dom';

const userObj={ 
    name: 'Sean',
    luckyNumber: luckyNumber()
};


function luckyNumber(){
    return Math.floor(Math.random()*1000 )+1;  
}

function greeting(userObj){

    return(
        <div>
            <h1>
            Greetings {userObj.name}
            </h1>
            <h2 className='text-muted'>The user's number is {userObj.luckyNumber}</h2>
        </div>
    );
}

ReactDOM.render(
    // <h1 className="container">React Prototypes!</h1>,
    greeting(userObj),
    document.getElementById('root')
);
