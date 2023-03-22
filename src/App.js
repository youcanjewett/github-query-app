import React, {useEffect} from 'react';
import './styles/globals.css';


function App() {

 useEffect(() => {
    const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
    toggleSwitch.addEventListener('change', switchTheme, false);

    if (currentTheme) {
      document.documentElement.setAttribute('data-theme', currentTheme);

      if (currentTheme === 'dark') {
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

  const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;

 

  
  return (

      <article className="App">
        <header>
          <h1>devfinder</h1>
          <h2>Light </h2>
          <div className="theme-switch-wrapper">
            <label className="theme-switch" type="checkbox">
                <input type="checkbox" id="checkbox" />
                <div className="slider round"></div>
          </label>
        </div>
          <h2> Dark</h2>
          <img src="/icon-moon.svg" alt="moon" className='img-sun'/>
        </header>

        <section className="search-bar">
          <img src="icon-search.svg" alt="search" />
          <input type="text" placeholder="Search GitHub username..."/>
          <input type="submit" value="Search" />
        </section>

        <section className="profile">
          <div className="profile-banner">
            <div className="avatar">
              <img src="octocat.png" alt="avatar" />
            </div>

            <div className="profile-details">
              <h1>The Octocat</h1>
              <h3>@octocat</h3>
              <h3>Joined 25 Jan 2011</h3>
            </div>
          </div>

          <div className="profile-body">
            <div>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.</div>
          </div>

          <div className="profile-stats">
            <div className="repos">
              <h4 className="repos-title">Repos</h4>
              <h4 className="repos-value">8</h4>
            </div>

            <div className="followers">
              <h4 className="followers-title">Followers</h4>
              <h4 className="followers-value">3938</h4>
            </div>

            <div className="following">
              <h4 className="following-title">Following</h4>
              <h4 className="following-value">9</h4>
            </div>
          </div>

          <div className="profile-socials">
            <div className="location">
              <img src="icon-location.svg" alt="map icon" />
              <h4>San Francisco</h4>
            </div>

            <div className="website">
              <img src="icon-website.svg" alt="website" />
              <h4>https://github.blog</h4>
            </div>

            <div className="twitter">
              <img src="icon-twitter.svg" alt="twitter logo" />
              <h4>Not Available</h4>
            </div>

            <div className="company">
              <img src="icon-company.svg" alt="company icon" />
              <h4>@github</h4>
            </div>
          </div>
        </section>
          
      </article>
   
  
  );
}

export default App;








