import JohnDoe from '../assets/John doe.png';
import { ReviewListProps } from './ReviewSection';
const SingleReview = ({ names, company, title, review }: ReviewListProps) => {
  return (
    <main className="w-full rounded-2xl flex p-3 gap-3 bg-grayCustom text-blackCustom">
      <section className="w-full max-w-24 flex flex-col gap-1">
        <img
          src={JohnDoe}
          alt=""
          className="w-full object-cover aspect-square object-center border border-opacity-30 border-blueCustom rounded-ss-lg rounded-ee-lg select-none"
        />
        <p className="uppercase text-sm font-bold select-none">{company}</p>
      </section>
      <section className="flex-1 w-full flex flex-col gap-2">
        <div className="w-full">
          <span className="font-medium text-lg me-2 select-none">{names}</span>
          <span className="italic text-sm select-none text-xs">{title}</span>
        </div>
        <p className="p-2 rounded-lg bg-white select-none text-sm">{review}</p>
      </section>
    </main>
  );
};

export default SingleReview;
