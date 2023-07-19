import { Link } from "react-router-dom";
import { useTypewriter, Cursor } from "react-simple-typewriter";

export default function Header() {
  const TypewriterHook = () => {
    const [text] = useTypewriter({
      words: ["Code", "Eat", "Sleep", "Repeat!"],
      loop: 0,
    });
    return (
      <div className='App'>
        <span>{text}</span>
        <Cursor 
        cursorColor='#ff561e'
        cursorStyle='_'
        />
      </div>
    )
  }
  return (
    <main>
      <div className="relative px-6 lg:px-8 mb-20">
        <div className="mx-auto max-w-3xl xl:pt-64 xl:pb-64 lg:pt-56 lg:pb-48 pt-24 pb-12">
          <div>
            <div>
              <h1 className="text-4xl font-bold tracking-tight pb-24 sm:text-center sm:text-7xl">
                Life is simple{' '}
                <span
                  className="inline-flex"
                  style={{ color: "#ff561e", fontWeight: "bold" }}
                >
                  <TypewriterHook />
                </span>
              </h1>
              <ul className="flex gap-8 items-center justify-center">
                <li className="inline-flex border-b-2 border-transparent hover:border-orange-button transition duration-300 ease-in-out mx-4">
                  <Link
                    to="/services"
                    className="mt-6 text-lg font-medium leading-8 text-gray-700 sm:text-center"
                  >
                    Web
                  </Link>
                </li>
                <li className="inline-flex border-b-2 border-transparent hover:border-orange-button transition duration-300 ease-in-out mx-4">
                  <Link
                    to="/services"
                    className="mt-6 text-lg font-medium leading-8 text-gray-700 sm:text-center"
                  >
                    Apps
                  </Link>
                </li>
                <li className="inline-flex border-b-2 border-transparent hover:border-orange-button transition duration-300 ease-in-out mx-4">
                  <Link
                    to="/services"
                    className="mt-6 text-lg font-medium leading-8 text-gray-700 sm:text-center"
                  >
                    Games
                  </Link>
                </li>
                <li className="inline-flex border-b-2 border-transparent hover:border-orange-button transition duration-300 ease-in-out mx-4">
                  <Link
                    to="/services"
                    className="mt-6 text-lg font-medium leading-8 text-gray-700 sm:text-center"
                  >
                    Marketing
                  </Link>
                </li>
                <li className="inline-flex border-b-2 border-transparent hover:border-orange-button transition duration-300 ease-in-out mx-4">
                  <Link
                    to="/services"
                    className="mt-6 text-lg font-medium leading-8 text-gray-700 sm:text-center"
                  >
                    Consulting
                  </Link>
                </li>
              </ul>
            </div>
            <div className="absolute inset-x-0 top-[calc(100%-20rem)] -z-10 transform-gpu overflow-hidden bg-white blur-xs lg:top-[calc(100%-45rem)] sm:top-[calc(100%-30rem)]">
              <img src='https://bafybeiaggoj67rzqusmh2g375vmrr444l4pvvnr6ta6bla57i33i36l2ua.ipfs.w3s.link/bg_header.jpg' alt='background' className='w-full h-full object-cover'/>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}