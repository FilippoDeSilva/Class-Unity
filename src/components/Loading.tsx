// components/Loading.js
import ClipLoader from 'react-spinners/ClipLoader';

const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <ClipLoader size={50} color={"#3498db"} loading={true} />
    </div>
  );
};

export default Loading;
