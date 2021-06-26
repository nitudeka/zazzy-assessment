interface IProps {
  heading: string;
  errors: string[];
}

const AuthWrapper: React.FC<IProps> = ({ heading, children, errors }) => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <form className="w-full max-w-lg border shadow-sm rounded p-4">
        <h2 className="mb-4 border-b pb-4 text-3xl text-center uppercase font-semibold text-gray-700">
          {heading}
        </h2>
        {children}
        {Boolean(errors.length) && (
          <ul className="mt-4 pt-4 border-t text-red-600 font-semibold text-sm">
            {errors.map((err, i) => {
              return <li key={i}>* {err}</li>;
            })}
          </ul>
        )}
        <div className="mt-4 pt-4 border-t">
          <button className="bg-blue-500 w-full hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AuthWrapper;
