import { useContext, useState } from "react";
import "./comments.scss";
import { AuthContext } from "../../context/authContext";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { addComment, getComments } from "../../api/comments";
import moment from "moment";
moment.locale('mn')

type Props = {
  postId: number
}

const Comments = ({ postId }: Props) => {
  const [desc, setDesc] = useState<null | string>(null);

  const { currentUser } = useContext(AuthContext);

  const { error, isLoading, data: comments } = useQuery(["comments"], () => getComments(postId));

  const queryClient = useQueryClient();

  const mutation = useMutation(addComment, {
    onSuccess: () => {
      queryClient.invalidateQueries(["comments"])
    }
  })

  const handleClick = (e: React.FormEvent) => {
    e.preventDefault();
    mutation.mutate({ desc: desc!, postId })
  }
  return (
    <div className="comments">
      <div className="write">
        <img src={`./upload/${currentUser?.profilePic}`} alt="нүүр зураг" />
        <input type="text" placeholder="сэтгэгдэл бичих" value={desc!} onChange={(e) => setDesc(e.target.value)} />
        <button onClick={handleClick} disabled={!desc}>Илгээх</button>
      </div>
      {

        isLoading ? "Хайж байн" :
          comments?.map((comment) => (
            <div className="comment">
              <img src={`./upload/${currentUser?.profilePic}`} alt="" />
              <div className="info">
                <span>{comment.name}</span>
                <p>{comment.desc}</p>
              </div>
              <span className="date">{moment(comment.createdAt).startOf('day').fromNow()}</span>
            </div>
          ))}
    </div>
  );
};

export default Comments;