import { Link } from "react-router-dom"
import icon from "../../asset/codeLogo.png"

export default function NavBar() {
    return (
        <nav style={{
            display: "flex",
            flexDirection: "column",
            width: window.innerWidth,
            zIndex: 100,
            background: "white"
        }}>
            <div className="level1" style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                padding:10
            }}>
                <div className="icon" style={{
                    
                }}>
                    <Link to="/">
                        <img src={icon} alt="code icon" style={{
                            height:50
                        }}/></Link>
                </div>
                <div className="right_top_comp">
                    <button>Chand</button>
                    <button>Search</button>
                    <button>Translate</button>
                    <button>Start Preparation Now</button>
                </div>
            </div>
            <div className="level2" style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around"

            }}>
                <Link to="/Blogs" className="elements">Blogs</Link>
                <Link to="/InterView_Prep" className="elements">InterView Prep</Link>
                <Link to="/InterView_Experience" className="elements">InterView Experience</Link>
                <Link to="/Write_for_us" className="elements">Write_for_us</Link>
                <Link to="/About_Us" className="elements">About Us</Link>
                <Link to="/Opinion_Poll" className="elements">Opinion Pool</Link>
            </div>
        </nav>
    )
}