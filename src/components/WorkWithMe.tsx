import {
  IconArrowNarrowRight,
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandUpwork,
  IconBrandWhatsapp,
  IconBrandX
} from '@tabler/icons-react';

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
            <p className="font-extrabold text-lg">favoureliab@gmail.com</p>
            <IconArrowNarrowRight
              stroke={1.5}
              className="w-10 h-10 p-1 rounded-full border text-inherit border-blackCustom -rotate-45 transition-all hover:rotate-0"
            />
          </div>
          <div className="flex gap-2">
            <IconBrandInstagram stroke={1.5} className="work__with__me__icons" />
            <IconBrandUpwork stroke={1.5} className="work__with__me__icons" />
            <IconBrandX stroke={1.5} className="work__with__me__icons" />
            <IconBrandGithub stroke={1.5} className="work__with__me__icons" />
            <IconBrandWhatsapp stroke={1.5} className="work__with__me__icons" />
          </div>
        </section>
      </main>
    </div>
  );
};

export default WorkWithMe;
