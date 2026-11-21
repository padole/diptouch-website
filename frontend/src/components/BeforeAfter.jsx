import { useCallback, useRef, useState } from "react";

/**
 * Drag (or use arrow keys) to wipe between a "before" and an "after" photo.
 */
export default function BeforeAfter({ before, after, beforeAlt, afterAlt }) {
  const [pos, setPos] = useState(50);
  const frameRef = useRef(null);
  const dragging = useRef(false);

  const moveTo = useCallback((clientX) => {
    const rect = frameRef.current.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(100, Math.max(0, pct)));
  }, []);

  const onPointerDown = (e) => {
    dragging.current = true;
    frameRef.current.setPointerCapture(e.pointerId);
    moveTo(e.clientX);
  };
  const onPointerMove = (e) => {
    if (dragging.current) moveTo(e.clientX);
  };
  const onPointerUp = () => {
    dragging.current = false;
  };

  const onKeyDown = (e) => {
    const step = e.shiftKey ? 10 : 4;
    if (e.key === "ArrowLeft") setPos((p) => Math.max(0, p - step));
    if (e.key === "ArrowRight") setPos((p) => Math.min(100, p + step));
    if (e.key === "Home") setPos(0);
    if (e.key === "End") setPos(100);
  };

  return (
    <div
      className="ba"
      ref={frameRef}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
      style={{ "--pos": `${pos}%` }}
    >
      <img className="ba-img" src={after} alt={afterAlt} draggable="false" />
      <div className="ba-before" aria-hidden="true">
        <img className="ba-img" src={before} alt="" draggable="false" />
      </div>
      <img className="sr-only" src={before} alt={beforeAlt} />

      <span className="ba-tag ba-tag-before" style={{ opacity: pos < 12 ? 0 : 1 }}>
        Before
      </span>
      <span className="ba-tag ba-tag-after" style={{ opacity: pos > 88 ? 0 : 1 }}>
        After
      </span>

      <div
        className="ba-handle"
        role="slider"
        tabIndex={0}
        aria-label="Compare before and after"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(pos)}
        aria-valuetext={`${Math.round(pos)}% before photo shown`}
        onKeyDown={onKeyDown}
      >
        <span className="ba-knob" aria-hidden="true">
          <svg viewBox="0 0 24 24" width="22" height="22">
            <path d="M9 6l-6 6 6 6M15 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </div>
    </div>
  );
}
