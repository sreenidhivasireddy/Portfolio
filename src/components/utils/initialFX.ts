import gsap from "gsap";
import { splitText } from "./textSplit";

interface SplitInstance {
  chars: HTMLElement[];
  words: HTMLElement[];
  revert: () => void;
}

export function initialFX() {
  document.body.style.overflowY = "auto";
  document.getElementsByTagName("main")[0].classList.add("main-active");
  gsap.to("body", {
    backgroundColor: "#0b080c",
    duration: 0.5,
    delay: 1,
  });

  const landingTargets = [
    ".landing-info h3",
    ".landing-intro h2",
    ".landing-intro h1",
  ];

  const landingChars = landingTargets.flatMap((selector) => {
    const element = document.querySelector<HTMLElement>(selector);
    if (!element) {
      return [];
    }

    return splitText(element, "chars").chars;
  });

  gsap.fromTo(
    landingChars,
    { opacity: 0, y: 80, filter: "blur(5px)" },
    {
      opacity: 1,
      duration: 1.2,
      filter: "blur(0px)",
      ease: "power3.inOut",
      y: 0,
      stagger: 0.025,
      delay: 0.3,
    }
  );

  const landingText2 = createCharSplit(".landing-h2-info");
  gsap.fromTo(
    landingText2.chars,
    { opacity: 0, y: 80, filter: "blur(5px)" },
    {
      opacity: 1,
      duration: 1.2,
      filter: "blur(0px)",
      ease: "power3.inOut",
      y: 0,
      stagger: 0.025,
      delay: 0.3,
    }
  );

  gsap.fromTo(
    ".landing-info-h2",
    { opacity: 0, y: 30 },
    {
      opacity: 1,
      duration: 1.2,
      ease: "power1.inOut",
      y: 0,
      delay: 0.8,
    }
  );
  gsap.fromTo(
    [".header", ".icons-section", ".nav-fade"],
    { opacity: 0 },
    {
      opacity: 1,
      duration: 1.2,
      ease: "power1.inOut",
      delay: 0.1,
    }
  );

  const landingText3 = createCharSplit(".landing-h2-info-1");
  const landingText4 = createCharSplit(".landing-h2-1");
  const landingText5 = createCharSplit(".landing-h2-2");

  LoopText(landingText2, landingText3);
  LoopText(landingText4, landingText5);
}

function createCharSplit(selector: string): SplitInstance {
  const element = document.querySelector<HTMLElement>(selector);

  if (!element) {
    return {
      chars: [],
      words: [],
      revert: () => {},
    };
  }

  return splitText(element, "chars");
}

function LoopText(Text1: SplitInstance, Text2: SplitInstance) {
  var tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });
  const delay = 4;
  const delay2 = delay * 2 + 1;

  tl.fromTo(
    Text2.chars,
    { opacity: 0, y: 80 },
    {
      opacity: 1,
      duration: 1.2,
      ease: "power3.inOut",
      y: 0,
      stagger: 0.1,
      delay: delay,
    },
    0
  )
    .fromTo(
      Text1.chars,
      { y: 80 },
      {
        duration: 1.2,
        ease: "power3.inOut",
        y: 0,
        stagger: 0.1,
        delay: delay2,
      },
      1
    )
    .fromTo(
      Text1.chars,
      { y: 0 },
      {
        y: -80,
        duration: 1.2,
        ease: "power3.inOut",
        stagger: 0.1,
        delay: delay,
      },
      0
    )
    .to(
      Text2.chars,
      {
        y: -80,
        duration: 1.2,
        ease: "power3.inOut",
        stagger: 0.1,
        delay: delay2,
      },
      1
    );
}
