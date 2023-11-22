import React from 'react';
import './Content.css'; 

function Content() {
    const handleClick = () => {
        console.log('Link clicked!');
      };
  return (
    <main class="container">
        <div class="row">
            <div class="container">
                <div class="card" id="news1">
                <img class="card-img-top" src="perry.avif" alt="BigCo Inc. logo"/>
                <div class="card-body">
                        <p class="card-text"><a id="linkc" href="https://news-1-perry.vercel.app/" onClick={handleClick}>'Friends' actor Matthew Perry passes away after apparent drowning: Report</a></p>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="card" id="news2">
                <img class="card-img-top" src="delhi.webp" alt="BigCo Inc. logo"/>
                <div class="card-body">
                        <p class="card-text"><a id="linkc" href="https://news-5-delhi-pollution.vercel.app/" onClick={handleClick}>Delhi Air Pollution News Live Updates: Marginal dip in pollution levels in capital, AQI in 'very poor' category</a></p>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="card" id="news3">
                <img class="card-img-top" src="virat.jpeg" alt="BigCo Inc. logo"/>
                <div class="card-body">
                        <p class="card-text"><a id="linkc" href="https://news-3-kohli-equals-sachin.vercel.app/" onClick={handleClick}>Virat Kohli equals Sachin Tendulkar's record for most hundreds in one-day internationals</a></p>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="card" id="news4">
                <img class="card-img-top" src="emergency relief.jpg" alt="BigCo Inc. logo"/>
                <div class="card-body">
                        <p class="card-text"><a id="linkc" href="https://news-2-nepal-earthquake.vercel.app/" onClick={handleClick}>India sends emergency relief to earthquake-hit Nepal, reaffirms PM Modi's 'Neighbourhood First' policy</a></p>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="card" id="news5">
                <img class="card-img-top" src="moon.webp" alt="BigCo Inc. logo"/>
                <div class="card-body">
                        <p class="card-text"><a id="linkc" href="https://news-4-dinky-moon.vercel.app/" onClick={handleClick}>NASA surprised to discover 'dinky' moon orbiting asteroid in close flyby</a></p>
                    </div>
                </div>
            </div>
            <div class="container">
                <div id="para">
                    <p id="para"><h3>Civilians Suffer as Israel-Palestine Conflict Worsens</h3></p>
                    </div>
            </div>
            <div class="container">
                <div class="card" id="news6">
                <img class="card-img-top" src="gaza 1.jpg" alt="BigCo Inc. logo"/>
                <div class="card-body">
                        <p class="card-text"><a id="linkc" href="https://news-6-israel-palestine.vercel.app/" onClick={handleClick}>Recent Developments in the Israel-Palestine Conflict</a></p>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="card" id="news7">
                <img class="card-img-top" src="gaza 2.jpg" alt="BigCo Inc. logo"/>
                <div class="card-body">
                        <p class="card-text"><a id="linkc" href="https://news-7-hamas-ceasefire.vercel.app/" onClick={handleClick}>Israeli-Palestinian Conflict Flares Up</a></p>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="card" id="news8">
                <img class="card-img-top" src="gaza3.jpg" alt="BigCo Inc. logo"/>
                </div>
            </div>
            <div class="container">
                <div class="card" id="news9">
                <div class="card-body">
                        <p class="card-text"><a id="linkc" href="https://news-8-israel-hamas.vercel.app/" onClick={handleClick}>More than 10,300 Palestinians, including 4,200 children have been killed in the war so far, said the Gaza health ministry. On the Israeli side, more than 1,400 people in Israel have been killed and 242 hostages have been taken from Israel into Gaza by the militant group.</a></p>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="card card bg-white text-center text-dark" id="news10">
                <div class="card-body">
                        <p class="card-text"><a id="linkc" href="https://news-11-middle-east-crisis.vercel.app/" onClick={handleClick}><h4>Crisis of the <br/> MiddleEast</h4></a></p>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="card card bg-white text-center text-dark" id="news11">
                <div class="card-body">
                        <p class="card-text"><a id="linkc" href="https://news-9-true-massacre.vercel.app/" onClick={handleClick}>"True massacre": Gaza child casualties cross 4,000 as Israeli raids expand
                        At least 9,770 people killed in nearly a month of Israeli strikes, according to the Palestinian health ministry.</a></p>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="card" id="news12">
                <div class="card-body">
                        <p class="card-text"><a id="linkc" href="https://news-10-pro-palestine.vercel.app/" onClick={handleClick}>Pro-Palestinian demonstrators in cities across Europe rallied together and called for a cease fire, chanting, "Stop the massacre in Gaza" and "Cease fire now."</a></p>
                    </div>
                </div>
            </div>
            <div id="line1"></div>
            <div class="container">
            <div class="card"id="spotlight">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item" ><a id="linkd" class="DB" href="https://www.google.com/" onClick={handleClick}><h4>DB Spotlight</h4></a></li> 
                    <li class="list-group-item" ><a id="linkc" href="https://www.google.com/" onClick={handleClick}>DB Spotlight</a></li> 
                    <li class="list-group-item" ><a id="linkc" href="https://www.google.com/" onClick={handleClick}>DB Spotlight</a></li> 
                    <li class="list-group-item" ><a id="linkc" href="https://www.google.com/" onClick={handleClick}>DB Spotlight</a></li> 
                </ul>
              </div>
        </div>
        </div>       
    </main>
  );
}

export default Content;
