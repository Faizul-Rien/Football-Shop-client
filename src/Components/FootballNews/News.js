import React from 'react';
import news1 from '../../Images/news1.jpg';
import './News.css';

const News = () => {
    return (
        <div>
            <h2 className='title mt-5'>Football Latest News</h2>

            <div className='news-container'>
                <div>
                    <h2>Liverpool's Jurgen Klopp on Tottenham tactics: I don't like this kind of football | Antonio Conte: Spurs still in top-four race</h2>
                    <p>Liverpool boss Jurgen Klopp: "I am sorry, I am the wrong person to ask about [Spurs' defending] because I don't like this kind of football. But that is my personal problem. I think they are world class and I think they should do more for the game."Liverpool boss Jurgen Klopp was critical of Tottenham's tactics after their 1-1 draw at Anfield on Saturday, saying: "I don't like this kind of football."Heung-Min Son's goal early in the second half had threatened to bring a first Premier League home defeat of the season for Klopp's side, before Luis Diaz levelled things up late on.</p>
                </div>
                <img src={news1} alt="" />
            </div>
        </div>
    );
};

export default News;