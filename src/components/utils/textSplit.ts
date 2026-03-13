type SplitMode = "chars" | "words";

interface SplitResult {
  chars: HTMLElement[];
  words: HTMLElement[];
  revert: () => void;
}

function escapeHtml(text: string) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function splitToChars(text: string) {
  return text
    .split("")
    .map((char) =>
      `<span class="char">${char === " " ? "&nbsp;" : escapeHtml(char)}</span>`
    )
    .join("");
}

function splitToWords(text: string) {
  return text
    .split(/(\s+)/)
    .map((part) => {
      if (!part) {
        return "";
      }

      if (/^\s+$/.test(part)) {
        return part.replace(/ /g, "&nbsp;");
      }

      return `<span class="word">${escapeHtml(part)}</span>`;
    })
    .join("");
}

export function splitText(element: HTMLElement, mode: SplitMode): SplitResult {
  const originalText = element.innerText;
  element.dataset.originalText = originalText;

  if (mode === "chars") {
    element.innerHTML = splitToChars(originalText);
  } else {
    element.innerHTML = splitToWords(originalText);
  }

  const revert = () => {
    const text = element.dataset.originalText ?? originalText;
    element.textContent = text;
  };

  return {
    chars: Array.from(element.querySelectorAll<HTMLElement>(".char")),
    words: Array.from(element.querySelectorAll<HTMLElement>(".word")),
    revert,
  };
}
