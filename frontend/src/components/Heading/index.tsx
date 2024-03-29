type Props = {
  title: string;
  media_type: string;
};

export default function Heading({ media_type, title }: Props) {
  return (
    <div className="mb-4 flex items-end justify-between sm:mb-6">
      <div className="flex items-end">
        {title && <h2 className="section-title py-px sm:py-0 mr-2">{title}</h2>}
        <p
          className={
            media_type === "movie"
              ? " tab_genre"
              : "  rounded-md border-2 border-primary bg-app-pure-white py-px px-2 text-[8px] font-medium uppercase tracking-wider text-app-dark-blue sm:ml-4 sm:text-[10px] "
          }
        >
          {media_type}
        </p>
      </div>

      <a className="cursor-pointer text-xs font-medium uppercase tracking-wide text-app-greyish-blue hover:underline">
        See more
      </a>
    </div>
  );
}
