export function IsLogin() {
  if (document.cookie === "username=not") return true;
  return false;
}
