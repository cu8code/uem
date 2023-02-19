import linkedin from "../../asset/socials/linkedin-app.png"
import insta from "../../asset/socials/insta.png"
import facebook from "../../asset/socials/facebook.png"

import footerBackground from "../../asset/FooterBackground.png"

const icon = {
    width:50,
    height:50
}
export default function Footer() {
    return (
        <footer style={{
            backgroundImage:footerBackground,
            backgroundColor:"blue",
            display:"flex",
            flexDirection:"column",
            justifyContent:"space-between"
        }}>
            <div className="col1">
                <h2>SDE Prep</h2>
                <div>
                    <img style={icon} src={linkedin} alt="linked in icon" />
                    <img style={icon} src={insta} alt="insta icon" />
                    <img style={icon} src={facebook} alt="facebook icon" />
                </div>
                <p>join out newsletter for daily updates!</p>
                <input type="text" />
            </div>
            <div style={{
                display:"flex",
                flexDirection:"row"
            }}>
                <div className="col2">
                    <p>BLogs</p>
                    <p>interview</p>
                    <p>InterView Experience</p>
                    <p>Write for Us</p>
                    <p>About US</p>
                </div>
                <div className="col3">
                    <h3>Latest Resource</h3>
                    <p>Lorem inpsum dolor</p>
                    <p>Lorem inpsum dolor</p>
                    <p>Lorem inpsum dolor</p>
                    <p>Lorem inpsum dolor</p>
                    <p>Lorem inpsum dolor</p>
                </div>
            </div>
            <div>
                @ The cleaver World. ALl righs resesrved 
            </div>
        </footer>
    )
}