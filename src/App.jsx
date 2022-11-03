import './App.css';

function App() {

    
    return (
        <div className='App'>
            <div className='main-box'>
                <div className='header'>
                    <div className='header-title'>devfinder</div>
                    <div className='header-mode'>
                        <div className='mode-text'>Light</div>
                        <div className='mode-icon'></div>
                    </div>
                </div>
                <div className='search'>
                    <div className='search-wrap'>
                        <div className='search-icon'></div>
                        <input
                            type='text'
                            className='search-input'
                            placeholder='Search GitHub username…'
                        />
                    </div>
                    <button className='search-button'>Search</button>
                </div>
                <div className='content'>
                    <div className='avatar'>
                        <div className='icon'></div>
                        <div className='avatar-desc'>
                            <div className='name'>The Octocat</div>
                            <div className='sub-name'>@octocat</div>
                            <div className='date'>Joined 25 Jan 2011</div>
                        </div>
                    </div>
                    <div className='content-text'>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit. Donec odio. Quisque volutpat mattis eros.
                    </div>
                    <div className='content-value'>
                        <div className='repo'>
                            <div className='repo__text content-value__text'>
                                Repos
                            </div>
                            <div className='repo__value content-value__value'>
                                8
                            </div>
                        </div>
                        <div className='followers'>
                            <div className='followers__text content-value__text'>
                                Followers
                            </div>
                            <div className='followers__value content-value__value'>
                                1000
                            </div>
                        </div>
                        <div className='following'>
                            <div className='following__text content-value__text'>
                                Following
                            </div>
                            <div className='following__value content-value__value'>
                                8
                            </div>
                        </div>
                    </div>
                    <div className='content-icon'>
                        <div className='pin content-icon__wrap'>
                            <div className='pin-icon content-icon__icon'></div>
                            <div className='pin-text content-icon__text'>
                                San Francisco
                            </div>
                        </div>
                        <div className='link content-icon__wrap'>
                            <div className='link-icon content-icon__icon'></div>
                            <div className='link-text content-icon__text'>
                                https://github.blog
                            </div>
                        </div>
                        <div className='twiter content-icon__wrap'>
                            <div className='twiter-icon content-icon__icon'></div>
                            <div className='twiter-text content-icon__text'>
                                Not Available
                            </div>
                        </div>
                        <div className='building content-icon__wrap'>
                            <div className='building-icon content-icon__icon'></div>
                            <div className='building-text content-icon__text'>
                                @github
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
