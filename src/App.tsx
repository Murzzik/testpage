import React from 'react';
import './App.css';
import Header from "./Header/Header";
import Services from "./services/Services";
import Posts from "./ProfilePosts/Posts";
import Reviews from "./Reviews/Reviews";
import AddPost from "./MessageForm/AddPost";


function App() {

    const posts = [
        {name: 'Samuel Jackson', message: 'Hey Eva! You\'re cool. Nice pic!', date: '13 Apr 2022'},
        {
            name: 'Angela Deimon',
            message: ' Thanks for your services! We really liked the ocean view room.',
            date: '10 Apr 2022'
        },
        {
            name: 'Ronald Harris',
            message: 'Eva, hello! There is such a question: How can I contact you if I am abroad in roaming?',
            date: '8 Apr 2022'
        }
    ]

    let postsValue = posts.map(p => <Posts name={p.name} message={p.message} date={p.date}/>)

    return (
        <div className="App">
            <Header/>
            <Services/>
            <Reviews/>
            {postsValue}
            <AddPost/>
        </div>
    );
}

export default App;