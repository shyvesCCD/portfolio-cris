type SliderProps = {
  index: number;
  currentIndex: number;
};

const Slider = ({ index, currentIndex }: SliderProps) => {
  return (
    <div className="flex">
      <span
        className={
          currentIndex == index
            ? "mx-2 rounded-full w-4 h-4 bg-gray-800 "
            : "mx-2 rounded-full w-4 h-4 bg-gray-500 "
        }
      />
    </div>
  );
};

export default Slider;
