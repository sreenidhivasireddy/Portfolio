/// <reference types="vite/client" />
declare module "gsap-trial/SplitText" {
  type SplitTarget =
    | string
    | Element
    | Element[]
    | string[]
    | NodeList
    | ArrayLike<Element>;

  export class SplitText {
    chars: Element[];
    lines: Element[];
    words: Element[];
    constructor(target: SplitTarget, vars?: Record<string, unknown>);
    revert(): void;
  }
}
