import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLoading } from "../../context/LoadingProvider";

gsap.registerPlugin(ScrollTrigger);

const CharacterModel = () => {
  const modelRef = useRef<HTMLDivElement | null>(null);
  const imageWrapRef = useRef<HTMLDivElement | null>(null);
  const { setLoading } = useLoading();

  useEffect(() => {
    setLoading(100);

    const model = modelRef.current;
    const imageWrap = imageWrapRef.current;
    if (!model || !imageWrap || window.innerWidth <= 1024) {
      return;
    }

    const aboutTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".about-section",
        start: "top 78%",
        end: "bottom top",
        scrub: true,
        invalidateOnRefresh: true,
      },
    });

    aboutTimeline
      .to(
        imageWrap,
        {
          left: "15%",
          ease: "none",
          duration: 1,
        },
        0
      )
      .to(
        model,
        {
          scale: 0.94,
          ease: "none",
          duration: 1,
        },
        0
      );

    const hideTrigger = ScrollTrigger.create({
      trigger: ".whatIDO",
      start: "top 88%",
      onEnter: () => {
        gsap.to(model, {
          autoAlpha: 0,
          duration: 0.35,
          ease: "power2.out",
          pointerEvents: "none",
        });
      },
      onLeaveBack: () => {
        gsap.to(model, {
          autoAlpha: 1,
          duration: 0.35,
          ease: "power2.out",
          pointerEvents: "inherit",
        });
      },
    });

    return () => {
      aboutTimeline.kill();
      hideTrigger.kill();
    };
  }, []);

  return (
    <div className="character-model character-photo-model" ref={modelRef}>
      <div className="character-rim"></div>
      <div className="landing-image" ref={imageWrapRef}>
        <div className="character-photo-frame">
          <img
            src="/images/sreenidhi-profile.png"
            alt="Sreenidhi Vasireddy"
          />
        </div>
      </div>
    </div>
  );
};

export default CharacterModel;
