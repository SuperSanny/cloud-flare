import "./App.css";
import Logo from "./assets/cf.png";
function App() {
  return (
    <>
      <section className="">
        <div className="w-8/12 mx-auto mt-6 rounded bg-gray-100 shadow-lg">
          <div className="py-4">
            <form action="" className="px-5">
              <div className="flex justify-between">
                <div className="mb-5">
                  <label
                    htmlFor="userName"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Username :
                  </label>
                  <input
                    type="text"
                    id="UserName"
                    className="shadow-sm bg-gray-700 border border-gray-600 text-white text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder=""
                    required
                  />
                </div>
                <div className="absolute ml-80">
                  <img className="" src={Logo} width={210} alt="logo" />
                </div>
                <div className="mb-5">
                  <label
                    htmlFor="langauges"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Language :
                  </label>
                  <select
                    id="langauges"
                    className="bg-gray-700 border border-gray-600 text-white text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  >
                    <option value={""}>Select</option>
                    <option value={"C"}>C</option>
                    <option value={"C++"}>C++</option>
                    <option value={"Java"}>Java</option>
                    <option value={"Python"}>Python</option>
                  </select>
                </div>
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Source Code
                </label>
                <textarea
                  id="message"
                  rows="10"
                  className="block p-2.5 w-full text-sm text-white bg-gray-700 rounded-md border border-gray-600 focus:ring-blue-500"
                  placeholder=""
                ></textarea>
              </div>
              <div className="pt-3">
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Input
                </label>
                <textarea
                  id="message"
                  rows="3"
                  className="block p-2.5 w-full text-sm text-white bg-gray-700 rounded-md border border-gray-700 focus:ring-blue-500"
                  placeholder=""
                ></textarea>
              </div>
              <div className="pt-4 text-center">
                <button
                  type="button"
                  className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-md text-sm px-5 py-2.5 text-center me-2 mb-2"
                >
                  submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
