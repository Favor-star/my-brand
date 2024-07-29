import JohnDoe from '../assets/John doe.png';

const SingleReview = () => {
  return (
    <main className="w-full rounded-3xl flex p-3 gap-3 bg-grayCustom text-blackCustom">
      <section className="w-full max-w-24 flex flex-col gap-1">
        <img
          src={JohnDoe}
          alt=""
          className="w-full object-cover aspect-square object-center border border-opacity-30 border-blueCustom rounded-ss-2xl rounded-ee-2xl select-none"
        />
        <p className="uppercase text-sm font-bold select-none">ibakwe ltd</p>
      </section>
      <section className="flex-1 w-full flex flex-col gap-2">
        <div className="w-full">
          <span className="font-medium text-lg me-2 select-none">John Doe</span>
          <span className="italic text-sm select-none">Manager</span>
        </div>
        <p className="p-2 rounded-2xl bg-white select-none">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos eveniet doloremque
          repellat obcaecati sit dolores aliquam maxime asperiores tempore saepe corporis, quibusdam
          voluptatum,
        </p>
      </section>
    </main>
  );
};

export default SingleReview;
