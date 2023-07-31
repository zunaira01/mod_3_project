

import Header from "../components/header";
const  Profile= () => {
    return(
        <div className="profilepage">
            <Header/>
            <div className="about">
                <h1>My Bio Page</h1>

                <p>Welcome to Zupro!</p>
                <div className="main">
    <div className="row">
        <div id="bio" className="col-12 col-lg-6 text-center">
            <h1>Jane</h1>
        </div>
        <div  className= "Favorites">
            <h2>Favorite Music Artists</h2>
            <ul>
                <li>Metallica</li>
                <li>Bob Marley</li>
                <li>Madonna</li>
                <li>The Beatles</li>
                <li>Pink Floyd</li>
            </ul>
            <h2> Favorite Films</h2>
            <ol>
                <li>Pulp Fiction</li>
                <li>The Godfather</li>
                <li>The Lord of the Rings</li>
                <li>Iron Man</li>
                <li>Inception</li>
            </ol>
           <buton><a href="https://www.meta.com/user/123">My Meta Profile</a></buton>
        </div>
    </div>
</div>
            </div>
        </div>
    );
};
export default Profile;