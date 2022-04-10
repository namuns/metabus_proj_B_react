import { Link } from 'react-router-dom';
import '../../App.css';
import './LostPetBoard.css';

function LostPetBoardSummary({ lostpetboard }) {
  return (
    <>
      <div className="lostpetboard_header h-full">
        <Link to={`/lostpetboard/${lostpetboard.lost_board_no}/`}>
          {lostpetboard.board_image && (
            <div className="h-2/3 overflow-hidden">
              <img
                src={lostpetboard.board_image?.[0]?.image}
                alt={lostpetboard.title}
              />
            </div>
          )}

          <div className="px-4">
            <ul>
              <li className="text-gray-700 text-xs">
                유실장소:{lostpetboard.lost_location}
              </li>
              <li className="text-gray-700 text-xs">
                동물종류:{lostpetboard.animal_type} &gt;
                {lostpetboard.animal_type === '개'
                  ? lostpetboard.dog_breed
                  : lostpetboard.cat_breed}
              </li>
              <li className="text-gray-700 text-xs">
                작성자:{lostpetboard.user.userID}
              </li>
            </ul>
          </div>
        </Link>
      </div>
    </>
  );
}

export default LostPetBoardSummary;
