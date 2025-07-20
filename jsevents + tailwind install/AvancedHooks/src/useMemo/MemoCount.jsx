import { useRef, memo } from "react";

// ✅ This alone is sufficient
export const Counts = memo(({ bioData }) => {
  const renderCount = useRef(0);
  console.log(renderCount);

  return (
    <div className="mt-3 font-display text-center">
      <p>
        Nothing changed here but Ive now rendered:
        <span className="text-red-600">{renderCount.current++} time(s)</span>
        <strong>My name is {bioData.name}</strong>
      </p>
    </div>
  );
});

// You can safely remove the default export:
// export default memo(Counts);
