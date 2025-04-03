import SingleComment from './SingleComment';

const CommentsList = ({ comments, onDelete }) => (
  <div className="mt-2">
    <h6>Recensioni:</h6>
    <ul className="list-unstyled">
      {comments.map((comment) => (
        <SingleComment key={comment._id} comment={comment} onDelete={onDelete} />
      ))}
    </ul>
  </div>
);

export default CommentsList;