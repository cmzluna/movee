import Card from "../Card";
import Heading from "../Heading";
import Loading from "../Loading";
import { Movie } from "../../types";

type Props = {
  data: Movie[];
  itemsLimit?: number;
  title?: string;
  type?: string;
  isLatestReleases?: boolean;
};

export default function Collection({
  data,
  title = "",
  type = "movie",
  itemsLimit = 8,
  isLatestReleases,
}: Props) {
  return (
    <>
      <section className=" mb-2 md:mb-4 ">
        {(title || type) && <Heading title={title} media_type={type} />}
        <section
          className={
            isLatestReleases
              ? "h-scroll relative flex gap-x-4 overflow-x-scroll sm:gap-x-10 2xs:mt-2"
              : " card-list-wrapper"
          }
        >
          {data &&
            data
              .slice(0, itemsLimit)
              .map((item) => (
                <Card
                  key={item.id}
                  id={item.id}
                  poster_path={item.poster_path}
                  original_title={item.original_title}
                  original_language={item.original_language}
                  release_date={item.release_date}
                  vote_average={item.vote_average}
                  genres={item.genres}
                />
              ))}
        </section>
      </section>

      <Loading />
    </>
  );
}
