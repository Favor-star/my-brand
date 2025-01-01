const EyeCatcher = () => {
  return (
    <main className="max-w-screen-lg px-3 w-full flex flex-col gap-2 my-5 text-blackCustom">
      <p className="text-base text-start">So far, more than</p>
      <div className="w-full  justify-center gap-5 items-center grid grid-cols-2  md:grid-cols-4">
        <span className="flex flex-col sm:flex-row gap-2 justify-start items-center md:justify-center  md:max-w-[240px] w-full">
          <p className="text-5xl font-semibold">10+</p>
          <p className="text-base  leading-snug">Different projects have been deployed so far</p>
        </span>
        <span className="flex flex-col sm:flex-row gap-2 justify-start items-center md:justify-center md:max-w-[240px] w-full">
          <p className="text-5xl font-semibold">11+</p>
          <p className="text-base leading-snug">Clients are well satisfied, happy and cheering</p>
        </span>
        <span className="flex flex-col sm:flex-row gap-2 justify-start items-center md:justify-center md:max-w-[240px] w-full">
          <p className="text-5xl font-semibold">30+</p>
          <p className="text-base leading-snug">
            Different designs, prototyps & websites were made{' '}
          </p>
        </span>
        <span className="flex flex-col sm:flex-row gap-2 justify-start items-center md:justify-center md:max-w-[240px] w-full">
          <p className="text-5xl font-semibold">5+</p>
          <p className="text-base leading-none">Years of experience spent doing this stuffs</p>
        </span>
      </div>
    </main>
  );
};

export default EyeCatcher;
