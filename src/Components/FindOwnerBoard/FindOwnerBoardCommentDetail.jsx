import { useApiAxios } from 'api/base';
import { useAuth } from 'contexts/AuthContext';
import { useState } from 'react';
import FindOwnerBoardCommentForm from './FindOwnerBoardCommentForm';

function FindOwnerBoardCommentDetail({ comment, findboardId, refetch }) {
  const [delComment, setDelComment] = useState('');
  const [commentID, setCommentID] = useState('');

  const [hidden, setHidden] = useState(true);
  const { auth } = useAuth();

  // 댓글 삭제
  const [{ loading: loa, error: err }, DelRefetch] = useApiAxios(
    {
      url: `/find_owner_board/api/comments/${delComment}/`,
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${auth.access}`,
      },
    },
    { manual: true },
  );

  const commentDelete = () => {
    if (window.confirm('댓글을 정말 삭제 할까요?')) {
      DelRefetch().then(() => refetch());
    }
  };

  return (
    <>
      {(auth.userID === comment?.user || auth.is_staff) && (
        <button
          onMouseOver={() => setDelComment(comment?.find_comment_no)}
          onClick={() => commentDelete()}
        >
          삭제
        </button>
      )}

      {(auth.userID === comment?.user || auth.is_staff) && (
        <button
          onMouseOver={() => setCommentID(comment?.find_comment_no)}
          onClick={() => {
            setHidden(!hidden);
          }}
        >
          수정
        </button>
      )}
      {!hidden && (
        <FindOwnerBoardCommentForm
          comment={comment}
          commentID={commentID}
          findboardId={findboardId}
          refetch={refetch}
          hidden={hidden}
          setHidden={setHidden}
        />
      )}
    </>
  );
}
export default FindOwnerBoardCommentDetail;