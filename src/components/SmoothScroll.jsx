import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SmoothScroll = ({ children }) => {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 0.18, // ultra-low for supreme glide
            easing: (t) => t < 0.5
                ? 16 * t * t * t * t * t // quintic in for soft start
                : 1 - Math.pow(-2 * t + 2, 5) / 2, // quintic out for soft stop
            direction: "vertical",
            gestureDirection: "vertical",
            smooth: true,
            mouseMultiplier: 1.5,
            smoothTouch: true,
            touchMultiplier: 3.8,
        });

        lenis.on("scroll", ScrollTrigger.update);

        gsap.ticker.add((time) => {
            lenis.raf(time * 1000);
        });

        gsap.ticker.lagSmoothing(0);

        return () => {
            lenis.destroy();
            gsap.ticker.remove((time) => {
                lenis.raf(time * 1000);
            });
        };
    }, []);

    return <>{children}</>;
};

export default SmoothScroll;
