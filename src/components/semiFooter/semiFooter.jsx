import iconGrid from "../../asset/iconGrid.png"
export default function SemiFooter(){
    return (
        <div style={{
            backgroundImage:iconGrid,
            display:"flex"
        }}>
            <div className="col1" style={{

            }}>
                <h1>Share your knowledge.</h1>
                <h1>Write for PepHub</h1>
                <p>Write blogs for us, share knowledge and experience.
                    help thousands like you prepare better for theor goals
                </p>
                <button>Start writing now</button>
            </div>
            <div className="col2">
                <h3>Topic you can write on</h3>
                <div>Congnizant Digital Buture Techincal Interview Experience</div>
                <div>Congnizant Digital Nature HR Interview experience</div>
                <div>TCS Digital Techincal Interview Experiece</div>
                <div>TSC ninja Techincal Interview Experience</div>
            </div>
        </div>
    )
}