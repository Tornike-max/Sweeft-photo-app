const Spinner = ({ width, height }: { width: number; height: number }) => {
  return (
    <div className="flex justify-center items-center">
      <div
        className={`loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-${height} w-${width}`}
      ></div>
    </div>
  );
};

export default Spinner;
