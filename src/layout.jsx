import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useState } from "react";
const Layout = ({children}) => {
    const [largeCursor, setLargeCursor] = useState(false);
    const container = useRef();
    const { contextSafe } = useGSAP({ scope: container });
    const checkCoords = contextSafe((e) => {
        gsap.to(".cursor",{
            x: e.clientX,
            y: e.clientY,
            xPercent: -50,
            yPercent: -50,
            scale: largeCursor ? 2 : 1,
        });
        if (e.target.classList.contains("cursor-large")){
            setLargeCursor(true);
        } else {
            setLargeCursor(false);
        }
    });
    //const checkCoords = () => {
    //    xTo(e.clientX);
    //    yTo(e.clientY);
    //    gsap.set(cursorRef.current, {xPercent: -50, yPercent: -50});
    //};
    //const checkCoords = (e) => {
    //};
    //gsap.set(".flair", {xPercent: -50, yPercent: -50});
    //let xTo = gsap.quickTo(".flair", "x", {duration: 0.6, ease: "power3"}),
    //    yTo = gsap.quickTo(".flair", "y", {duration: 0.6, ease: "power3"});
    //window.addEventListener("mousemove", e => {
    //
    //});
  return (
    <div className="" ref={container}>
        <div onMouseMove={checkCoords} ref={container} className="layout">
            <div className={`${largeCursor ? "large-cursor" : ""} cursor`}></div>
            {children}
        </div>
    </div>
  );
};

export default Layout;