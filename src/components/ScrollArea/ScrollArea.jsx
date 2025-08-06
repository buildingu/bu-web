import { forwardRef, useRef, useLayoutEffect } from "react";
import s from "./styles.module.css";

export const ScrollArea = forwardRef(({ children, className = "", ...props }, ref) => {
    const contentRef = useRef(null);
    const scrollAreaRef = useRef(null);
    const scrollbarRef = useRef(null);

    const isDragging = useRef(false);
    const startY = useRef(0);
    const startThumbY = useRef(0);
    const scrollOffset = useRef(0);

    useLayoutEffect(() => {
      const scrollArea = scrollAreaRef.current;
      const content = contentRef.current;
      if (!scrollArea || !content) return;

      const scrollbar = scrollbarRef.current;
      const thumb = scrollbar?.querySelector(`.${s.thumb}`);
      if (!scrollbar || !thumb) return;

      const debounce = (func, delay) => {
        let timeoutId;
        return (...args) => {
          clearTimeout(timeoutId);
          timeoutId = setTimeout(() => func(...args), delay);
        };
      };

      // TODO: When there is a lot of content overflowing the wrapper, the thumb gets smaller.
      // When the content overflowing is just a bit, the thumb is bigger. Just like the default 
      // browser scrollbar and every other scrollbar.
      // NOTE: WAIT, I think it might be working somewhat, just render less blog data and see if it changes.
      const initializeThumbHeight = () => {
        const overflow = content.scrollHeight - scrollArea.clientHeight;
        if (overflow <= 0) {
          thumb.style.height = `${scrollArea.clientHeight}px`;
        } else {
          const ratio = scrollArea.clientHeight / content.scrollHeight;
          // const thumbHeight = Math.max(10, ratio * scrollArea.clientHeight);
          thumb.style.height = `${50}px`;
        }
      };

      const calculateDimensions = () => {
        const contentScrollHeight = content.scrollHeight - scrollArea.clientHeight; 
        const maxThumbY = scrollbar.clientHeight - thumb.clientHeight;
        const scrollRatio = maxThumbY > 0 ? contentScrollHeight / maxThumbY : 0;

        return { contentScrollHeight, maxThumbY, scrollRatio };
      };

      const updateContentPosition = (delta) => {
        const { contentScrollHeight, scrollRatio } = calculateDimensions();

        let newScrollTop = scrollOffset.current + delta;
        newScrollTop = Math.max(0, Math.min(newScrollTop, contentScrollHeight));
        scrollOffset.current = newScrollTop;

        const newThumbY = scrollRatio !== 0 ? newScrollTop / scrollRatio : 0;
        thumb.style.transform = `translateX(-50%) translateY(${newThumbY}px)`;
        content.style.transform = `translateY(${-newScrollTop}px)`;
      };

      const handleWheel = (e) => {
        updateContentPosition(e.deltaY);
        e.preventDefault();
      };

      const handleMouseDown = (e) => {
        isDragging.current = true;
        startY.current = e.clientY;
        startThumbY.current = thumb.offsetTop;
        thumb.style.cursor = "grabbing";
      };

      const handleMouseMove = (e) => {
        if (!isDragging.current) return;
        
        const dy = e.clientY - startY.current;
        const { maxThumbY, scrollRatio } = calculateDimensions();
        let newThumbY = Math.max(
          0,
          Math.min(startThumbY.current + dy, maxThumbY)
        );
        scrollOffset.current = scrollRatio !== 0 ? newThumbY * scrollRatio : 0;
        thumb.style.transform = `translateX(-50%) translateY(${newThumbY}px)`;
        content.style.transform = `translateY(${-scrollOffset.current}px)`;
      };

      const handleMouseUp = () => {
        isDragging.current = false;
        thumb.style.cursor = "grab";
      };

      initializeThumbHeight();
      const debouncedResize = debounce(initializeThumbHeight, 500);

      window.addEventListener("resize", debouncedResize);
      scrollArea.addEventListener("wheel", handleWheel);
      // FIXME: Holding and clicking is not working right, it jumps if you move it down, then click it again.
      thumb.addEventListener("mousedown", handleMouseDown);
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);

      return () => {
        scrollArea.removeEventListener("wheel", handleWheel);
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleMouseUp);
        window.removeEventListener("resize", debouncedResize);
        thumb.removeEventListener("mousedown", handleMouseDown);
      };
    }, []);

    useLayoutEffect(() => {
      const scrollArea = scrollAreaRef.current;
      const content = contentRef.current;
      const scrollbar = scrollbarRef.current;
      const thumb = scrollbar?.querySelector(`.${s.thumb}`);
      if (!scrollArea || !content || !thumb) return;
      scrollOffset.current = 0;
      content.style.transform = `translateY(0px)`;
      thumb.style.transform = `translateX(-50%) translateY(0px)`;
    }, []);

    return (
      <div
        ref={(node) => {
          scrollAreaRef.current = node;
          if (typeof ref === "function") ref(node);
          else if (ref) ref.current = node;
        }}
        className={`${s.scrollAreaWrapper} scrollArea`}
      >
        <div
          tabIndex={0}
          ref={contentRef}
          className={`${s.content} ${className}`}
          {...props}
        >
          {children}
        </div>

        <div ref={scrollbarRef} className="scrollbar">
          <div className={s.scrollbarTrack}></div>
          <button className={s.thumb}></button>
        </div>
      </div>
    );
  }
);
