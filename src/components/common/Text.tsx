import React from "react";
interface Props {
  txt: string;
  color: string;
  first: boolean;
}
function Text({ txt = "", color = "", first = false }: Props) {
  return (
    <>
      {first ? (
        <div className="card-text py-2" style={{ color: color, height: "1.938rem" }}>
          {txt}
        </div>
      ) : (
        <div className="card-text my-2" style={{ color: color, height: "1.938rem" }}>
          {txt}
        </div>
      )}
    </>
  );
}

export default Text;
