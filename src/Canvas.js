/* ⛔ DO NOT MODIFY ⛔ */
import { ResizableBox } from "react-resizable";

import "./canvas.css";
import "react-resizable/css/styles.css";

export default function Canvas({ children }) {
  return (
    <ResizableBox
      className="wrapper"
      width={375}
      height={430}
      minConstraints={[340, 340]}
      maxConstraints={[767, 767]}
      data-testid="canvas"
    >
      {children}
    </ResizableBox>
  );
}
/* ⛔ DO NOT MODIFY ⛔ */
