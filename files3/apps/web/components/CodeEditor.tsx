import React from "react";

type Props = {
  code: string;
  setCode: (val: string) => void;
};

const CodeEditor: React.FC<Props> = ({ code, setCode }) => (
  <div style={{
    background: "#181c23",
    borderRadius: "10px",
    padding: "16px",
    minHeight: "320px",
    fontFamily: "monospace",
    fontSize: "1.06em",
    color: "#fff",
    border: "1px solid #233"
  }}>
    <textarea
      value={code}
      onChange={e => setCode(e.target.value)}
      style={{
        width: "100%",
        minHeight: "260px",
        background: "transparent",
        color: "#fff",
        border: "none",
        outline: "none",
        resize: "vertical",
        fontFamily: "inherit",
        fontSize: "inherit"
      }}
      spellCheck={false}
      dir="ltr"
    />
  </div>
);

export default CodeEditor;