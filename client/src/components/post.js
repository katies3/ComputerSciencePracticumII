import PostModal from "../components/postModal";

export default function Post(props) {
    const displayPosts = (props) => {
        const { posts } = props;

        if (posts.length > 0) {
            posts.reverse();
            return posts.map((post, index) => {
                return (
                    <div className="grid-item" key={index}>
                        <div className="card mt-4">
                            <div
                                className="card-body"
                                style={{
                                    height: "100px",
                                    float: "left",
                                    textAlign: "left",
                                    overflowY: "hidden"
                                }}
                            >
                                <p
                                    className="card-text"
                                    style={{ textAlign: "left" }}
                                >
                                    {post.content}
                                </p>
                            </div>

                            <div
                                className="card-footer"
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    float: "right"
                                }}
                            >
                                <p
                                    style={{
                                        display: "flex",
                                        alignItems: "center"
                                    }}
                                >
                                    User: {post.user.username}
                                </p>

                                <PostModal
                                    content={post.content}
                                    upvotes={post.upvotes}
                                    downvotes={post.downvotes}
                                    user_id={post.user_id}
                                    comments={post.comments}
                                />
                            </div>
                        </div>
                    </div>
                );
            });
        } else {
            return (
                <>
                    <h2 style={{ marginTop: "15px" }}>
                        No posts yet. Try creating one!
                    </h2>
                </>
            );
        }
    };

    return (
        <>
            <div>{displayPosts(props)}</div>
        </>
    );
}
