import HeroInside from "../../asset/heroimg.png"
export default function BlogPreview() {
    return (
        <>
            <h2>Latest Blog</h2>
            <div style={{
                display: "flex",
                flexDirection: "row"
            }}>

                <div style={{
                    display: "flex",
                }}>
                    <Card />
                    <Card />
                    <Card />
                </div>
                <button>next</button>
            </div>
        </>
    )
}

function Card(props = {

}) {
    const heading = "Lorem ipsum duma"
    const subHeading = "sub heading aklksdjflakjsdf"
    const content = "Loream ipsum aljsd aklsdf adsklfadsf akkljkasdf akjsd"
    return (
        <div style={{
            padding: 10,
            boxShadow: "5px 10px #888888"
        }}>
            <img src={HeroInside} style={{
                width: 347,
                height: 201,
            }} alt="blog thumb nail"></img>
            <h3>{heading}</h3>
            <h4>{subHeading}</h4>
            <p>{content}</p>
        </div>
    )
}