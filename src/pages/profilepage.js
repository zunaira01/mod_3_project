import Header from "../components/header";
function Profile (){
    return(
        <div className="profilepage">
            <Header/>
            <div className="container">
            <div className="main">
      <div className="section">
        <h2>Welcome Zunaira!</h2>
<h4> <strong> Discover the joy of meeting potential.</strong>
 </h4>
 <b><h2>Facts about me...</h2></b>
   <h4>STRONG MAMA, living in the moment, enjoying life, & loud type. Very, loud in fact. Looking to make new mom friends to have play dates for my kiddos.</h4>
   <img src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/my-favorite-people-call-me-mama-me.jpg" className="landingimg" alt="" />
             <b> <h2> Favorite obessions...</h2></b>
    <p> <strong> Book!! Books!! Books!! But seriously on the fun side....love trying new foods!! In love with biscoff cheesecake. A Nick Jonas fan! Action movies are the best! Amazon...a day without seeing a package on my porch is wasted.</strong>
   </p>
   <b> <h2> Current Status...</h2></b>
   <h5>My relationship is like a Tesla. I don't have a Tesla.</h5>
   <p><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHw7MNtylPO8YBxTBrRqjSjDEdqI6F9ecX2n88I7IxoKimG1VR2IzSKUbLoO36z2oQp-I&usqp=CAU" width={250} alt="" /> <b><img src="https://i0.wp.com/findawaybyjwp.com/wp-content/uploads/2022/04/My-favorite-Paulo-Coelho-quotes.jpg?resize=683%2C1024&ssl=1" width={250} alt="" /></b></p>
<h4>Some of the things I dislike....well truly I only hate MATH!!! Yes, you read that right...I hate Math! Someone wise once said; "In real life, I assure you, there is no such thing as algebra.
    <b>-FRAN LEBOWTIZ</b>" </h4>
   <p><img src="https://www.rd.com/wp-content/uploads/2021/10/fran-lebowitz-real-life-quote.jpg" width={250} alt="" />
   <b><img src="https://hips.hearstapps.com/hmg-prod/images/best-quotes-ever2-1593566078.jpg" width={250} alt="" /></b></p>
      </div>
      <div className="aside">
        <h2> Menu </h2>
        <ul>
            <li><a href="/Home">Dashboard</a></li>
            <li><a href="/Photo Album">Photo Albums</a></li>
            <li><a href="/Friend List">Friends List</a></li>
            <li><a href="/Direct Messages">Messages</a></li>
            <li><a href="/Settings">Settings</a></li>
            </ul>
        <div>
    </div>
      </div>
    </ div>
            </div>
        </div>
    )
}
export default Profile;