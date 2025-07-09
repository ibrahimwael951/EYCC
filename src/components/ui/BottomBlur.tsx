const BottomBlur = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50">
      <div className="absolute bottom-0 h-40 rounded-t-2xl w-full  bg-neutral-900/10 backdrop-blur-sm " />
    </div>
  );
};
export default BottomBlur;
