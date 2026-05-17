import { useEffect, useRef, useState } from "react";

export default function Collapse({ title, content }) {
  const [open, setOpen] = useState(false);
  const [height, setHeight] = useState(0);
  const contentRef = useRef(null);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(open ? contentRef.current.scrollHeight : 0);
    }
  }, [open, content]);

  return (
    <div className="collapse">
      <button
        type="button"
        className="collapse-header"
        onClick={() => setOpen(!open)}
      >
        <span>{title}</span>

        <span className="arrow">
          <i className={`fa-solid ${open ? "fa-chevron-down" : "fa-chevron-up"}`}></i>
        </span>
      </button>

      <div
        className={`collapse-content ${open ? "open" : ""}`}
        style={{ height: `${height}px` }}
      >
        <div ref={contentRef} className="collapse-inner">
          {Array.isArray(content) ? (
            content.map((item, index) => <p key={index}>{item}</p>)
          ) : (
            <p>{content}</p>
          )}
        </div>
      </div>
    </div>
  );
}