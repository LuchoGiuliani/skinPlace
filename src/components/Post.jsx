const Post = ({ post }) => {
    return (
        <article className="w-[220px] h-[220px] grid grid-cols-4">
            <h2 className=" overflow-hidden">{post.name}</h2>
            <p className="overflow-hidden">{post.description}</p>
            <img src={post.image} alt="" />
        </article>
    )
}
export default Post