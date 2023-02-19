import Hero from "../../asset/hero-side.png"

export default function LatestBlog() {
    return (
        <div>
            <Cards />
            <Cards />
        </div>
    )
}

function Cards() {
    return (
        <div>
            <img src={Hero} alt="thumb nail for blog" />
            <h3>Lorem ipsum dolor sit amet</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, praesentium? Laborum tenetur cumque nihil molestias architecto, fugit, sunt officia perspiciatis corporis quidem placeat at saepe amet ea, accusamus esse? Laborum.</p>4
            <div>
                <div>#lorem</div>
                <div>#ipsum</div>
                <div>#dolor</div>
            </div>
        </div>
    )
}