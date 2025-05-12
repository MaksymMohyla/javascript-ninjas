type Props = {
  className?: string;
};

export const Loader: React.FC<Props> = ({ className }) => (
  <div
    className="flex w-full h-full justify-center items-center"
    data-cy="Loader"
  >
    <div
      className={`rounded-full w-16 h-16 my-8 mx-auto border-4 border-gray-300 border-l-black animate-spin ${className}`}
    />
  </div>
);
