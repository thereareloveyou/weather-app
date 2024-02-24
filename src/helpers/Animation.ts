import gsap from "gsap";

export const LoaderAnimation = (value: (v: boolean) => void) => {
  gsap.to(".loader", { opacity: 0, duration: 2 });
  setTimeout(() => {
    value(false);
  }, 2000);
  gsap.fromTo(
    ".current",
    {
      opacity: 0,
      left: -30,
      top: -100,
    },
    {
      opacity: 1,
      left: 0,
      top: 0,
      delay: 3,
      stagger: {
        amount: 1,
        ease: "none",
      },
    }
  );
};
