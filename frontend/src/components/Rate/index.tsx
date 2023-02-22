import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
interface Props {
  count?: number;
  rating: number;
  color?: {
    filled: string;
    unfilled: string;
  };
}

const Rate = ({
  count = 5,
  rating = 0,
  color = { filled: "#e4510d", unfilled: "#DCDCDC" },
}: Props) => {
  const percentageRating = rating * 10;
  const adaptedRating = Math.ceil((percentageRating * count) / 100);

  const getColor = (index: number) => {
    if (adaptedRating >= index) {
      return color.filled;
    }

    return color.unfilled;
  };

  const test = Array(count)
    .fill(0)
    .map((_, i) => i + 1);

  return (
    <div>
      {test.map((idx) => (
        <FontAwesomeIcon
          key={idx}
          className="cursor-pointer"
          icon={faStar}
          style={{ color: getColor(idx) }}
        />
      ))}
    </div>
  );
  // return <div>{starRating}</div>;
};

export default Rate;
