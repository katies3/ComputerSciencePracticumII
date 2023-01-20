
export default function Comment(props) {

    
    const displayComment = (props) => {
        const {comments} = props;

        if (comments.length > 0) {
            return (
                comments.map((comm, index) => {
                    return (
                        <div>
                            {comm.content}

                            <br />

                            <div style={{display:"flex", alignItems:"center"}}>
                                <img
                                    src="/images/upArrow.jpg"
                                    height="15px"
                                    width="15px"
                                    alt=""
                                /> {comm.upvotes}
                                <img
                                    src="/images/downArrow.jpg"
                                    height="15px"
                                    width="15px"
                                    alt=""
                                    style={{marginLeft: "5px"}}
                                /> {comm.downvotes}
                            </div>

                            <div style={{
                                display:"flex", 
                                alignItems:"center", 
                                borderBottom: "1px solid grey", 
                                marginBottom: "15px"
                            }}>
                                <img
                                    src="/images/postedBy.png"
                                    height="20px"
                                    width="20px"
                                    alt=""
                                    style={{marginRight: "5px"}}
                                />
                                {comm.user_id}
                            </div>
                        </div>
                    )
                })
            )
        }
        else {
            return (
                <div>No comments yet.</div>
            )
        }

    }
    

    return (
        <div style={{ textAlign: "left", marginTop: "35px"}}>
            <h6>Comments</h6>
            
            <div>{displayComment(props)}</div>
        </div>
    );
}
