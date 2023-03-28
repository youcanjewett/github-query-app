import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './styles/globals.css';
import './styles/header.css';
import './styles/search.css';
import './styles/profile.css';


function App() {

  const [altTheme, setAltTheme] = useState('dark');
  const [userData, setUserData] = useState({});

 useEffect(() => {
    const toggleSwitch = document.querySelector('.theme-label input[type="checkbox"]');
    var storedTheme = localStorage.getItem('theme') || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");

    toggleSwitch.addEventListener('change', switchTheme, false);

    if (storedTheme) {
      document.documentElement.setAttribute('data-theme', storedTheme);
      setAltTheme(storedTheme === 'light' ? "dark" : "light");

      if (storedTheme === 'dark') {
          toggleSwitch.checked = true;
          
      } 
  }

  },[userData]);

  function switchTheme(e) {
      if (e.target.checked) {
          document.documentElement.setAttribute('data-theme', 'dark');
          localStorage.setItem('theme', 'dark'); 
          setAltTheme("light");
      }
      else {
          document.documentElement.setAttribute('data-theme', 'light');
          localStorage.setItem('theme', 'light'); 
          setAltTheme("dark");
      }    
  }

  const submitHandler = async() => {
    let input = document.getElementById("userInput").value;
    
    
    try {
      const results = await axios(`https://api.github.com/users/${input}`)
      console.log(results.data);
      setUserData({
        "avatar": results.data.avatar_url,
        "name": results.data.name,
        "tag": '@'.concat(results.data.login),
        "joined": results.data.created_at,
        "bio": results.data.bio,
        "repos": results.data.public_repos,
        "followers": results.data.followers,
        "following": results.data.following,
        "location":results.data.location || "Not Available",
        "blog":results.data.blog || "Not Available",
        "twitter":results.data.twitter_username || "Not Available",
        "company": results.data.company ? '@'.concat(results.data.company) : "Not Available"
      })
    } catch (error) {
      console.log(error);
    }
    
  }


  
  return (

      <main className="App">
        <div className="main-container">
        <header className='header'>
          <h1>devfinder</h1>
  
        <div className="theme-container">
          <label htmlFor="themeId" className="theme-label">
            <p>{altTheme === 'light' ? 'LIGHT' : 'DARK'}</p> 
            <input type="checkbox" className="theme-checkbox" id="themeId"/>
          </label>
        </div>
          
        </header>

        <section className="search-bar">
          <img src="icon-search.svg" className="search-icon" alt="search" />
          <input type="text" id="userInput" placeholder="Search GitHub username..."/>
          <input type="submit" value="Search" onClick={submitHandler}/>
        </section>

        <section className="profile">
          <div className="profile-banner">
            <img src={userData.avatar || "the-octocat.png"} className= 'avatar-image' alt="avatar" />

            <div className="profile-details">
              <h2>{userData.name || "The Octocat" }</h2>
              <h3 className='tag'>{userData.tag || "@octocat"}</h3>
              <div>{"Joined "+ userData.joined || "25 Jan 2011"}</div>
            </div>
          </div>

          <div className="profile-body">
            <div>{userData.bio || "This profile has no bio"}</div>
          </div>

          <div className="profile-stats">
            <div className="metric">
              <h4 className="metric-title">Repos</h4>
              <h4 className="metric-value">{userData.repos || 8}</h4>
            </div>

            <div className="metric">
              <h4 className="metric-title">Followers</h4>
              <h4 className="metric-value">{userData.followers || 3938}</h4>
            </div>

            <div className="metric">
              <h4 className="metric-title">Following</h4>
              <h4 className="metric-value">{userData.following || 9}</h4>
            </div>
          </div>

          <div className="profile-socials">
            <div className="social">
             <div className="img-container">
              <img src="icon-location.svg" className="social-img map" alt="map icon" />
              </div>
              <h4>{userData.location || "San Francisco"}</h4>
            </div>

            {/* add actual link */}
            <div className="social">
              <div className="img-container">
              <img src="icon-website.svg" className="social-img website" alt="website" />
              </div>
              <a href={userData.blog || "#"}>{userData.blog || "https://github.blog"}</a>
            </div>

            <div className="social">
              <div className="img-container">
              <img src="icon-twitter.svg" className="social-img twitter" alt="twitter logo" />
              </div>
              <h4>{userData.twitter || "Not Available"}</h4>
            </div>

            <div className="social">
              <div className="img-container">
              <img src="icon-company.svg" className="social-img company" alt="company icon" />
              </div>
              <h4>{userData.company || "@github"}</h4>
            </div>
          </div>
        </section>
        </div>
          
      </main>
   
  
  );
}

export default App;








