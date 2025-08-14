declare const grecaptcha: {
  ready: (callback: () => void) => void;
  execute: (siteKey: string, options: { action: string }) => Promise<string>;
} | undefined;

export function loadRecaptcha(siteKey: string) {
  return new Promise<void>((resolve, reject) => {
    if (document.querySelector(`#recaptcha-script`)) {
      resolve();
      return;
    }
    const script = document.createElement("script");
    script.id = "recaptcha-script";
    script.src = `https://www.google.com/recaptcha/api.js?render=${siteKey}`;
    script.async = true;
    script.defer = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error("Failed to load reCAPTCHA"));
    document.head.appendChild(script);
  });
}

export async function getRecaptchaToken(siteKey: string, action: string) {
  await loadRecaptcha(siteKey);

  if (!grecaptcha) {
    throw new Error("reCAPTCHA not available");
  }

  return new Promise<string>((resolve, reject) => {
    grecaptcha.ready(() => {
      grecaptcha
        .execute(siteKey, { action })
        .then(resolve)
        .catch(reject);
    });
  });
}
