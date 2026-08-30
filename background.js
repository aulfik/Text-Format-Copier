const MENU_ROOT = "text-case-root";

const CASE_OPTIONS = [
  { id: "sentence", title: "Sentence case" },
  { id: "lower", title: "lowercase" },
  { id: "upper", title: "UPPERCASE" },
  { id: "capitalize", title: "Capitalize Each Word" },
  { id: "toggle", title: "tOGGLE CASE" },
  { id: "slugify", title: "Slugify" },
  { id: "snakify", title: "Snakify" }
];

chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.removeAll(() => {
    chrome.contextMenus.create({
      id: MENU_ROOT,
      title: "Text Format Copier",
      contexts: ["selection"]
    });

    for (const option of CASE_OPTIONS) {
      chrome.contextMenus.create({
        id: option.id,
        parentId: MENU_ROOT,
        title: option.title,
        contexts: ["selection"]
      });
    }
  });
});

chrome.contextMenus.onClicked.addListener(async (info, tab) => {
  if (!tab || !tab.id || !info.selectionText) {
    return;
  }

  const pageUrl = tab.url || "";
  if (!isSupportedPageUrl(pageUrl)) {
    console.warn("Halaman ini tidak didukung untuk copy otomatis:", pageUrl);
    return;
  }

  const transformed = transformText(info.selectionText, info.menuItemId);
  if (!transformed) {
    return;
  }

  try {
    await chrome.scripting.executeScript({
      target: { tabId: tab.id },
      args: [transformed],
      func: async (value) => {
        try {
          await navigator.clipboard.writeText(value);
          return;
        } catch (_err) {
          const textarea = document.createElement("textarea");
          textarea.value = value;
          textarea.setAttribute("readonly", "");
          textarea.style.position = "fixed";
          textarea.style.left = "-9999px";
          document.body.appendChild(textarea);
          textarea.select();
          document.execCommand("copy");
          textarea.remove();
        }
      }
    });
  } catch (err) {
    console.error("Gagal copy text:", err);
  }
});

function isSupportedPageUrl(url) {
  return /^(https?:|file:)/i.test(url);
}

function transformText(text, mode) {
  const input = String(text);

  switch (mode) {
    case "sentence":
      return toSentenceCase(input);
    case "lower":
      return input.toLowerCase();
    case "upper":
      return input.toUpperCase();
    case "capitalize":
      return toTitleCase(input);
    case "toggle":
      return toToggleCase(input);
    case "slugify":
      return toSlugCase(input);
    case "snakify":
      return toSnakeCase(input);
    default:
      return input;
  }
}

function toSentenceCase(text) {
  const normalized = text.toLowerCase();
  return normalized.replace(/(^\s*[a-z])|([.!?]\s+[a-z])/g, (match) => match.toUpperCase());
}

function toTitleCase(text) {
  return text
    .toLowerCase()
    .replace(/\b\w+/g, (word) => word.charAt(0).toUpperCase() + word.slice(1));
}

function toToggleCase(text) {
  let output = "";
  for (const ch of text) {
    const upper = ch.toUpperCase();
    const lower = ch.toLowerCase();
    if (ch === upper && ch !== lower) {
      output += lower;
    } else if (ch === lower && ch !== upper) {
      output += upper;
    } else {
      output += ch;
    }
  }
  return output;
}

function toSlugCase(text) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function toSnakeCase(text) {
  return text
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "_");
}
