
async function encrypt(text, secret){
  const enc = new TextEncoder().encode(text);
  const key = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(secret.padEnd(32)),
    "AES-GCM",
    false,
    ["encrypt"]
  );
  const iv = crypto.getRandomValues(new Uint8Array(12));
  const encrypted = await crypto.subtle.encrypt({name:"AES-GCM",iv},key,enc);
  return {
    iv: btoa(String.fromCharCode(...iv)),
    payload: btoa(String.fromCharCode(...new Uint8Array(encrypted)))
  };
}
