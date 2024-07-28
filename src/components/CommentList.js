import Comment from "./Comment";

const CommentList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment data={comment} />
      <div className="pl-5 border border-l-gray-100 ml-5">
        <CommentList comments={comment.replies} />
      </div>
    </div>
  ));
};

export default CommentList;
