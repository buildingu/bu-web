 import { forwardRef, useRef, useLayoutEffect, useEffect } from "react";
 import s from "./styles.module.css";

 // Simple debounce helper
 function debounce(func, delay = 200) {
   let timeoutId;
   return (...args) => {
     clearTimeout(timeoutId);
     timeoutId = setTimeout(() => func(...args), delay);
   };
 }

 /**
  * React conversion of your vanilla JS custom scrollbar logic.
  * - Thumb height scales with visible/total content (like native scrollbars)
  * - Wheel + drag supported
  * - Resizes/reflows handled (window + ResizeObserver)
  */
 const ScrollArea = forwardRef(
   ({ children, className = "", ...props }, ref) => {
     const scrollAreaRef = useRef(null);
     const contentRef = useRef(null);
     const scrollbarRef = useRef(null);
     const thumbRef = useRef(null);

     // dragging state
     const isDragging = useRef(false);
     const startY = useRef(0);
     const startThumbY = useRef(0);

     // virtual scroll state (we don't rely on native scrollTop)
     const scrollOffset = useRef(0);

     const initializeThumbHeight = () => {
       const scrollArea = scrollAreaRef.current;
       const content = contentRef.current;
       const scrollbar = scrollbarRef.current;
       const thumb = thumbRef.current;
       if (!scrollArea || !content || !scrollbar || !thumb) return;

       const visible = scrollArea.clientHeight;
       const total = content.scrollHeight;
       const trackHeight = scrollbar.clientHeight;

       if (total <= visible) {
         thumb.style.height = `${trackHeight}px`;
       } else {
         const ratio = visible / total;
         const minHeight = 20; 
         const thumbPx = Math.max(minHeight, ratio * trackHeight);
         thumb.style.height = `${thumbPx}px`;
       }
     };


     const calculateDimensions = () => {
       const scrollArea = scrollAreaRef.current;
       const content = contentRef.current;
       const scrollbar = scrollbarRef.current;
       const thumb = thumbRef.current;
       if (!scrollArea || !content || !scrollbar || !thumb) {
         return { contentScrollHeight: 0, maxThumbY: 0, scrollRatio: 0 };
       }

       const contentScrollHeight = Math.max(
         content.scrollHeight - scrollArea.clientHeight,
         0
       );
       const maxThumbY = Math.max(
         scrollbar.clientHeight - thumb.clientHeight,
         0
       );
       const scrollRatio = maxThumbY > 0 ? contentScrollHeight / maxThumbY : 0;

       return { contentScrollHeight, maxThumbY, scrollRatio };
     };

     const syncFromScrollTop = (newScrollTop) => {
       const content = contentRef.current;
       const thumb = thumbRef.current;
       if (!content || !thumb) return;

       const { contentScrollHeight, scrollRatio } = calculateDimensions();
       const clamped = Math.max(0, Math.min(newScrollTop, contentScrollHeight));

       const newThumbY = scrollRatio ? clamped / scrollRatio : 0;

       thumb.style.transform = `translateY(${newThumbY}px)`;
       content.style.transform = `translateY(${-clamped}px)`;

       scrollOffset.current = clamped;
     };

     const handleWheel = (e) => {
       // prevent native scroll so we stay in control
       e.preventDefault();
       const step = e.deltaY; // you can scale this if desired
       syncFromScrollTop(scrollOffset.current + step);
     };

     const handleThumbDown = (e) => {
       isDragging.current = true;
       startY.current = e.clientY;
       startThumbY.current = thumbRef.current.offsetTop;
       document.body.style.userSelect = "none"; // avoid text selection while dragging
     };

     const handleMouseMove = (e) => {
       if (!isDragging.current) return;

       const { maxThumbY, scrollRatio } = calculateDimensions();
       let newThumbY = startThumbY.current + (e.clientY - startY.current);
       newThumbY = Math.max(0, Math.min(newThumbY, maxThumbY));

       const newScrollTop = scrollRatio ? newThumbY * scrollRatio : 0;
       syncFromScrollTop(newScrollTop);
     };

     const handleMouseUp = () => {
       if (!isDragging.current) return;
       isDragging.current = false;
       document.body.style.userSelect = "";
     };

     useLayoutEffect(() => {
       const scrollArea = scrollAreaRef.current;
       const content = contentRef.current;
       const thumb = thumbRef.current;

       if (!scrollArea || !content || !thumb) return;

       // Initial layout
       initializeThumbHeight();
       syncFromScrollTop(0);

       const debouncedRecalc = debounce(() => {
         initializeThumbHeight();
         // keep visual position consistent after resize/reflow
         syncFromScrollTop(scrollOffset.current);
       }, 150);

       // Listeners
       scrollArea.addEventListener("wheel", handleWheel, { passive: false });
       thumb.addEventListener("mousedown", handleThumbDown);
       document.addEventListener("mousemove", handleMouseMove);
       document.addEventListener("mouseup", handleMouseUp);
       window.addEventListener("resize", debouncedRecalc);

       // Observe content/area size changes as well
       let roContent, roArea;
       if (typeof ResizeObserver !== "undefined") {
         roContent = new ResizeObserver(debouncedRecalc);
         roArea = new ResizeObserver(debouncedRecalc);
         roContent.observe(content);
         roArea.observe(scrollArea);
       }

       return () => {
         scrollArea.removeEventListener("wheel", handleWheel);
         thumb.removeEventListener("mousedown", handleThumbDown);
         document.removeEventListener("mousemove", handleMouseMove);
         document.removeEventListener("mouseup", handleMouseUp);
         window.removeEventListener("resize", debouncedRecalc);
         if (roContent) roContent.disconnect();
         if (roArea) roArea.disconnect();
       };
     }, []);

     // Reset when children change (optional, keeps behavior predictable when content swaps)
     useEffect(() => {
       const content = contentRef.current;
       const thumb = thumbRef.current;
       if (!content || !thumb) return;
       scrollOffset.current = 0;
       content.style.transform = `translateY(0px)`;
       thumb.style.transform = `translateY(0px)`;
       initializeThumbHeight();
     }, [children]);

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
           className={`${s.content} content ${className}`}
           {...props}
         >
           {children}
         </div>

         <div ref={scrollbarRef} className={`${s.scrollbar} scrollbar`}>
           <div className={`${s.scrollbarTrack} scrollbarTrack`} />
           <button ref={thumbRef} className={`${s.thumb} thumb`} />
         </div>
       </div>
     );
   }
 );

 export default ScrollArea;
