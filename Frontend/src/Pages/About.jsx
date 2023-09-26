import AboutList from "../About Components/AboutList";
import logo from "../App Components/anglerfish.png";

const About = () => {
  const STUDENT_DATA = [
    {
      id: "s2",
      name: "Noah Marsteller",
      image: "",
      biography:
        "I am a Cincinnati native, and I work at Amazon Air in Wilmington",
    },
  ];

  return (
    <section>
      <div className='bg-gradient-to-b from-light-blue-300 to-deep-blue-900 min-h-screen p-8'>
        <h1 className="text-2xl font-bold text-center">Meet The Team</h1>
        <ul>
          <AboutList abouts={STUDENT_DATA} />
        </ul>
        <img src={logo} className="w-20 h-20 bottom-0 right-20 static" alt="cute fish" />
      </div>
    </section>
  );
};

export default About;
