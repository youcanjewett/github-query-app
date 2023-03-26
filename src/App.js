import React, {useEffect} from 'react';
import './styles/globals.css';
import './styles/header.css';
import './styles/search.css';
import './styles/profile.css';


function App() {

 useEffect(() => {
    const toggleSwitch = document.querySelector('.theme-label input[type="checkbox"]');
    var storedTheme = localStorage.getItem('theme') || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");

    toggleSwitch.addEventListener('change', switchTheme, false);

    if (storedTheme) {
      document.documentElement.setAttribute('data-theme', storedTheme);

      if (storedTheme === 'dark') {
          toggleSwitch.checked = true;
      }
  }

  },);

  function switchTheme(e) {
      if (e.target.checked) {
          document.documentElement.setAttribute('data-theme', 'dark');
          localStorage.setItem('theme', 'dark'); 
      }
      else {
          document.documentElement.setAttribute('data-theme', 'light');
          localStorage.setItem('theme', 'light'); 
      }    
  }

  

 

  
  return (

      <main className="App">
        <div className="main-container">
        <header className='header'>
          <h1>devfinder</h1>
  
          <div className="theme-container">
          
          <label htmlFor="themeId" className="theme-label">label text<input type="checkbox" className="theme-checkbox" id="themeId"/></label>
        </div>
          
        </header>

        <section className="search-bar">
          <img src="icon-search.svg" className="search-icon" alt="search" />
          <input type="text" placeholder="Search GitHub username..."/>
          <input type="submit" value="Search" />
        </section>

        <section className="profile">
          <div className="profile-banner">
            <img src="the-octocat.png" className= 'avatar-image' alt="avatar" />

            <div className="profile-details">
              <h2>The Octocat</h2>
              <h3 className='tag'>@octocat</h3>
              <div>Joined 25 Jan 2011</div>
            </div>
          </div>

          <div className="profile-body">
            <div>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.</div>
          </div>

          <div className="profile-stats">
            <div className="metric">
              <h4 className="metric-title">Repos</h4>
              <h4 className="metric-value">8</h4>
            </div>

            <div className="metric">
              <h4 className="metric-title">Followers</h4>
              <h4 className="metric-value">3938</h4>
            </div>

            <div className="metric">
              <h4 className="metric-title">Following</h4>
              <h4 className="metric-value">9</h4>
            </div>
          </div>

          <div className="profile-socials">
            <div className="social">
              <img src="icon-location.svg" className="social-img" alt="map icon" />
              <h4>San Francisco</h4>
            </div>

            <div className="social">
              <img src="icon-website.svg" className="social-img" alt="website" />
              <h4>https://github.blog</h4>
            </div>

            <div className="social">
              <img src="icon-twitter.svg" className="social-img" alt="twitter logo" />
              <h4>Not Available</h4>
            </div>

            <div className="social">
              <img src="icon-company.svg" className="social-img" alt="company icon" />
              <h4>@github</h4>
            </div>
          </div>
        </section>
        </div>
          
      </main>
   
  
  );
}

export default App;








