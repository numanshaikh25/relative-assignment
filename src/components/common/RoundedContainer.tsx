import React from "react";
interface Props {
  content: any;
  subContent: any;
  width: string;
  positive: boolean;
}
function RoundedContainer({ content = "", subContent, width, positive }: Props) {
  return (
    <div className="price-container rounded-full" style={{ width: width }}>
      <p>{content}</p>{" "}
      {subContent && <span style={{ marginLeft: "1rem", color: positive ? "#00FFA3" : "#FF4D4D" }}>{subContent}</span>}
    </div>
  );
}

export default RoundedContainer;
