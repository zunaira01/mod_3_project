import Nav from "./nav";
/**Page header */
function Header(props){
    return(
        <header className="header">
          
            <h1>ZUPRO Social Media</h1>
            <div>
            <h2> Think, Explore, Meet.</h2>
            <Nav/>
            </div>
        </header>

    );

}

export default Header;

// import Nav from "./nav";
// import { Link } from "react-router-dom";
// function Header(props){
//     return(
//         <header className="header">
//             <h1> ZUPRO Social media </h1>
//             <div >
//             <h2 className="header button">Think, Explore, Meet!
//             <button><Link to="/">HOME</Link></button>
//             <br></br>
//         <button><Link to="/profile">BLOG</Link></button>
//             </h2>
//             <Nav/>
//             </div>
//         </header>
//     );
// }
// export default Header;





