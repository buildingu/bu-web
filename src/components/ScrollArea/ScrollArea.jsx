import { forwardRef, useRef, useLayoutEffect } from "react";

import s from "./styles.module.css";

export const ScrollArea = forwardRef(({ children, ...props }, ref) => {
  const contentRef = useRef(null);
  const scrollAreaRef = useRef(null);

  // TODO:
  useLayoutEffect(() => {
    const scrollArea = scrollAreaRef?.current;
    const content = contentRef?.current;

    if (!scrollArea || !content) return; 

    const scrollbar = scrollArea.querySelector(".scrollbar");
    if (!scrollbar) return; 

    const thumb = scrollbar.querySelector(".thumb");
    if (!thumb) return; 

    let isDragging = false,
      startY,
      startThumbY;

    const debounce = (func, delay) => {
      let timeoutId;
      return function (...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func(...args), delay);
      };
    };

    function initializeThumbHeight() {
      const contentOverflow = content.scrollHeight - scrollArea.clientHeight;
      const overflowRatio = contentOverflow / content.scrollHeight;
      const thumbHeight = `${100 - overflowRatio * 100}%`;
      thumb.style.height = thumbHeight;
    }

    function calculateDimensions() {
      const contentScrollHeight =
        content.scrollHeight - scrollArea.clientHeight;
      const maxThumbY = scrollbar.clientHeight - thumb.clientHeight;
      const scrollRatio = contentScrollHeight / maxThumbY;
      return { contentScrollHeight, maxThumbY, scrollRatio };
    }

    function updateContentPosition(scrollAmount) {
      const { contentScrollHeight, scrollRatio } = calculateDimensions();
      if (scrollRatio > 0) {
        const newScrollTop = Math.max(
          0,
          Math.min(scrollArea.scrollTop + scrollAmount, contentScrollHeight)
        );
        const newThumbY = newScrollTop / scrollRatio;
        thumb.style.transform = `translateY(${newThumbY}px)`;
        const newContentY = -newThumbY * scrollRatio;
        content.style.transform = `translateY(${newContentY}px)`;
      }
    }

    function handleWheel(e) {
      updateContentPosition(e.deltaY);
      e.preventDefault();
    }

    function handleMouseDown(e) {
      isDragging = true;
      startY = e.clientY;
      startThumbY = thumb.offsetTop;
    }

    function handleMouseMove(e) {
      if (!isDragging) return;
      const dy = e.clientY - startY;
      const { maxThumbY, scrollRatio } = calculateDimensions();
      let newThumbY = startThumbY + dy;
      newThumbY = Math.max(0, Math.min(newThumbY, maxThumbY));

      const newContentY = -newThumbY * scrollRatio;
      thumb.style.transform = `translateY(${newThumbY}px)`;
      content.style.transform = `translateY(${newContentY}px)`;
    }

    function handleMouseUp() {
      isDragging = false;
    }

    requestAnimationFrame(initializeThumbHeight);
    window.addEventListener("resize", debounce(initializeThumbHeight, 500));
    scrollArea.addEventListener("wheel", handleWheel);
    thumb.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      scrollArea.removeEventListener("wheel", handleWheel);
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener(
        "resize",
        debounce(initializeThumbHeight, 500)
      );
    };
  }, []);

  return (
    <div
      ref={(node) => {
        scrollAreaRef.current = node;

        if (typeof ref === "function") ref(node);
        else if (ref) ref.current = node;
      }}
      className="scrollArea"
    >
      <div className={`${s.content}${props.className ? " " + props.className: ""}`} { ...props }>
        {children}

        <div class="scrollbar">
          <button class="thumb"></button>
        </div>
      </div>
    </div>
  );
});
