import FAQ from './FAQ';

const FAQsSection = () => {
  return (
    <div className="w-full flex items-center justify-center py-10  text-blackCustom realtive">
      <main className="w-full max-w-screen-xl flex flex-col gap-3 items-center justify-center px-4">
        <p className="font-bold text-3xl text-center">You might ask yourself:</p>
        <section className=" flex flex-col gap-3 w-full md:w-8/12 pt-5">
          {questionsAnswersArray.map(({ answer, question }, index) => (
            <FAQ key={index} question={question} answer={answer} />
          ))}
        </section>
      </main>
    </div>
  );
};

export default FAQsSection;
const questionsAnswersArray = [
  {
    question: 'How much do I charge for a website?',
    answer:
      'I charge $400 for a simple website and $1500 for a complex website. For more clarification, please contact me and we will talk. I am sure we can come to an agreement that will be beneficial to both of us.'
  },
  {
    question: 'How long does it take to build a website?',
    answer:
      'It takes 2 weeks to build a simple website and 6 weeks to build a complex website. Simple websites includes portfolio websites and blogs. Complex websites includes e-commerce websites and web applications. For the exact timeline, please contact me.'
  },
  {
    question: 'What is my payment policy?',
    answer:
      'I require a 50% deposit before starting the project and the remaining 50% upon completion. I also values the agreement that I can establish with my client, more than those fixed prices. I am always open to negotiation and I am always ready to give my best to my clients.'
  },
  {
    question: 'Do I provide hosting services?',
    answer:
      'I do not provide hosting services but I can recommend a few good hosting providers. I can also help you set up your website on your chosen hosting provider.'
  },
  {
    question: 'Do I provide maintenance services?',
    answer:
      'I provide maintenance services for an additional fee. Please contact me for more details. However, If I build a website for you, I will provide maintenance services for free for the first 2 months, and then after that, I will charge you for the maintenance services.'
  },
  {
    question: 'What tech stack do I specialize in?',
    answer:
      "I specialize in the MERN stack, which includes MongoDB, Express, React, and Node.js. However, I'm also proficient in other technologies like C, C# and C++. I have worked on different projects including those languages. I'm currently also working on my machine learning expertises, and I'm surre that sooner, I will be able to provide services in that area as well."
  },
  {
    question: 'Do I only work with website development only?',
    answer:
      'No, I also work on mobile app development. I have worked on a few mobile app projects and I am always ready to take on new challenges. More specifically, I also engage myself in desktop application development, embedded systems and MEP designs.'
  }
];
