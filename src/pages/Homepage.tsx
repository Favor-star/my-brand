import Header from '../components/Header';

const Homepage = () => {
  return (
    <div className="w-full relative">
      <Header />
      <div className="w-72 h-72 absolute top-0 right-40 bg-blueCustom bg-opacity-10 rounded-full  blur-2xl"></div>
    </div>
  );
};

export default Homepage;
