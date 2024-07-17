const Header = () => {
  return (
    <section className="w-full flex items-start justify-center bg-white mt-5 mb-5">
      <div className="w-full 2xl:container text-blackCustom bg-inherit flex justify-between">
        <span className="flex gap-2 items-center">
          <p className="text-blueCustom font-bold text-2xl">F</p>
          <a href="mailto:favoureliab@gmail.com" className="text-lg font-medium text-blackCustom">
            hire@gmail.com
          </a>
        </span>
        <nav className="w-1/2 flex items-center gap-5">
          <ul className="flex items-center flex-1 justify-between list-none">
            <li className="font-medium capitalize text-blackCustom cursor-pointer">Services</li>
            <li className="font-medium capitalize text-blackCustom cursor-pointer">Skills</li>
            <li className="font-medium capitalize text-blackCustom cursor-pointer">Resumes</li>
            <li className="font-medium capitalize text-blackCustom cursor-pointer">Works</li>
            <li className="font-medium capitalize text-blackCustom cursor-pointer">Testimonials</li>
          </ul>
          <button className="bg-blueCustom text-white py-2 px-5 rounded-s-full rounded-e-full">Hire Me!</button>
        </nav>
      </div>
    </section>
  );
};

export default Header;
