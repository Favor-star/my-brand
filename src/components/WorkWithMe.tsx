import {
  IconArrowNarrowRight,
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandUpwork,
  IconBrandWhatsapp,
  IconBrandX
} from '@tabler/icons-react';
import { Link } from 'react-router-dom';

const WorkWithMe = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center bg-grayCustom text-blackCustom py-10">
      <main className="w-full max-w-screen-xl px-4 flex flex-col md:flex-row gap-10 md:gap-0 justify-between items-center">
        <section className="flex flex-col gap-3 items-start justify-center self-start">
          <p>Inerested in working with me?</p>
          <p className="font-extrabold text-5xl ">Let's do it now.</p>
        </section>
        <section className="flex flex-col gap-3 items-end justify-center text-inherit self-end">
          <div className="flex gap-2 items-center justify-end text-inherit">
            <Link to="mailto:favoureliab@gmail.com">
              <p className="font-extrabold text-lg cursor-pointer">favoureliab@gmail.com</p>
            </Link>
            <Link to="mailto:favoureliab@gmail.com">
              <IconArrowNarrowRight
                stroke={1.5}
                className="w-10 h-10 p-1 rounded-full border text-inherit border-blackCustom -rotate-45 transition-all hover:rotate-0"
              />
            </Link>
          </div>
          <div className="flex gap-2">
            <Link to="https://www.wa.me/0787922900" target="_blank">
              <IconBrandInstagram stroke={1.5} className="work__with__me__icons" />
            </Link>
            <Link to="https://www.upwork.com/freelancers/~0164586914ad0010ed">
              <IconBrandUpwork stroke={1.5} className="work__with__me__icons" />
            </Link>
            <Link to="https://www.x.com/favour_eliab" target="_blank">
              <IconBrandX stroke={1.5} className="work__with__me__icons" />
            </Link>
            <Link to="https://www.github.com/favor-star" target="_blank">
              <IconBrandGithub stroke={1.5} className="work__with__me__icons" />
            </Link>
            <Link to="https://wa.me/0787922900" target="_blank">
              <IconBrandWhatsapp stroke={1.5} className="work__with__me__icons" />
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
};

export default WorkWithMe;
