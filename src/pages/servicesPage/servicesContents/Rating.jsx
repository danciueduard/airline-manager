import { MdOutlineStarPurple500 } from "react-icons/md";

function Rating({ num }) {
  const star = <MdOutlineStarPurple500 />;
  return Array.from({ length: num }, (_, index) => (
    <span key={index} className="rating">
      {star}
    </span>
  ));
}

export default Rating;
