import Comment from "./Comment";

const CommentList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment data={comment} />
      <div className="pl-3 md:pl-5 border border-l-gray-100 ml-3 md:ml-5 text-sm md:text-base">
        <CommentList comments={comment.replies} />
      </div>
    </div>
  ));
};

export default CommentList;
