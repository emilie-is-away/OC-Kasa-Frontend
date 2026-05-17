import { useState } from "react";

function Collapse({ title, content }) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div onClick={() => setOpen(!open)}>
        <h3>{title}</h3>
      </div>
      {open && <div>{content}</div>}
    </div>
  );
}

export default Collapse;
