import React from "react";

type Props = {
  designText: string;
  setDesignText: (val: string) => void;
};

const DesignEditor: React.FC<Props> = ({ designText, setDesignText }) => (
  <div style={{
    background: "#19202a",
    borderRadius: "10px",
    padding: "16px",
    minHeight: "220px",
    fontFamily: "inherit",
    fontSize: "1.07em",
    color: "#fff",
    border: "1px solid #243"
  }}>
    <textarea
      value={designText}
      onChange={e => setDesignText(e.target.value)}
      style={{
        width: "100%",
        minHeight: "160px",
        background: "transparent",
        color: "#fff",
        border: "none",
        outline: "none",
        resize: "vertical",
        fontFamily: "inherit",
        fontSize: "inherit",
        direction: "rtl"
      }}
      spellCheck={false}
    />
  </div>
);

export default DesignEditor;