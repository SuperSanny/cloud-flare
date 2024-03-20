/* eslint-disable react/prop-types */
const Page2 = ({ props }) => {
  return (
    <>
      <section className="">
        <div className="w-8/12 mx-auto mt-6 rounded bg-gray-100 shadow-lg">
          <div className="py-4">
            <table className="px-5">
              <thead>
                <tr>
                  <th>Username</th>
                  <th>Language</th>
                  <th>Standard Input</th>
                  <th>Timestamp</th>
                </tr>
              </thead>
              <tbody>
                {props.map((snippet) => (
                  <tr key={snippet.id}>
                    <td>{snippet.username}</td>
                    <td>{snippet.language}</td>
                    <td>{snippet.stdin}</td>
                    <td>{snippet.timestamp}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
};
export default Page2;
