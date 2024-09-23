import React from "react";
import Spinner from "../../basicComponents/Spinner/Spinner";
import CenterBox from "../../basicComponents/CenterBox/CenterBox";

type LoadingSectionProps = {
  children: React.ReactNode;
  loading: boolean;
};

const LoadingSection: React.FC<LoadingSectionProps> = ({
  children,
  loading,
}) => {
  return (
    <div className="h-full">
      {loading ? (
        <CenterBox className="h-full">
          <Spinner size={10} />
        </CenterBox>
      ) : (
        children
      )}
    </div>
  );
};

export default LoadingSection;
