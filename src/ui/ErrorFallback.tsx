interface ErrorType {
  message: string;
}

interface ErrorFallbackProps {
  error: ErrorType;
  resetErrorBoundary: () => void;
}

const ErrorFallback: React.FC<ErrorFallbackProps> = ({
  error,
  resetErrorBoundary,
}) => {
  return (
    <div className="w-full flex justify-center items-center">
      <div className=" mx-10  flex justify-center items-center flex-col gap-4 mt-72 bg-slate-200 rounded-lg py-4 px-8">
        <div className="flex flex-col justify-end items-center gap-2">
          <h1 className="text-sm sm:text-2xl text-red-500 font-semibold">
            Something went wrong!
          </h1>
          <p className="text-sm sm:text-base">{error.message}</p>
        </div>

        <button
          onClick={resetErrorBoundary}
          className="py-2 px-3 rounded-lg border-[1px] border-red-500 bg-none text-red-500 hover:text-white hover:bg-red-500 duration-150 transition-all"
        >
          Try again!
        </button>
      </div>
    </div>
  );
};

export default ErrorFallback;
