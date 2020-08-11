import React from 'react';
import '../../styles/content.css';
const Content = () =>{





    return (
        <div className="home">
            <div className="texture-black">
                <div className="header-box">
                    <div className="navbar">
                        <ul>
                            <li>Home</li>
                            <li>Profile</li>
                        </ul>
                    </div>
                </div>
                <div className="container">
                    <h1 className="header-me">Flash KIM</h1>
                    <h3 className="header-me">Project Manager. Developer. Designer</h3>
                    <ul className="social">
                        <a href="https://github.com/Flash-KIM142">
                            <li>
                                <i className="icon-github-circled"
                                    src="../../assets/image/icon-social-github.png"
                                    alt="github-icon"></i>
                            </li>
                        </a>
                    </ul>
                </div>
            </div>

            <div className="content">
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
        </div>
    );

}

export default Content;
