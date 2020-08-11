import React from 'react';
import '../../styles/content.css';
const Content = () =>{





    return (
        <div className="content">
            {/* <button className="list">Albums</button>
            <button className="list" style={{marginTop:'30px'}}>Musicians</button> */}

            <div className="container">
                <div className="home-categories">
                    <div className="category-text-wrap">
                        <span className="category-text">Albums</span>
                    </div>
                    <div className="category-text-wrap">
                        <span className="category-text">Musicians</span>
                    </div>
                </div>
            </div>            
        </div>   
    );

}

export default Content;
