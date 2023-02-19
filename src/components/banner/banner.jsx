import logo from "../../asset/logo.svg"
import iconGrid from "../../asset/iconGrid.png"
import heroSectionImg from "../../asset/heroSectionImg.svg"

export default function Banner() {
    return (
        <div style={{
            background: iconGrid,
            display:"flex",
            flexDirection:"column",
            alignItems:"center",
            justifyContent:"center",
            padding:20
        }}>
            <img src={logo} alt="logo" style={{
                width:491.4,
                height:75.58
            }} />
            <p>
                your preparation for that sde role
                better and easier than ever
            </p>
            <img src={heroSectionImg} alt="logo" />
        </div>
    )
}