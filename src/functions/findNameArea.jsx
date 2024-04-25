export function findNameArea(valuearea) {
  if (valuearea === "") {
    return "";
  } else if (valuearea === "tehran") {
    return "تهران";
  } else if (valuearea === "east-azarbaijan") {
    return "آذربایجان شرقی";
  } else if (valuearea === "yazd") {
    return "یزد";
  } else if (valuearea === esfahan) {
    return "اصفهان";
  }
}

export function foundedPathLocation(str, arr, setState) {
  arr.forEach((item) => {
    if (item.path === str) {
      setState(item.value);
      return;
    }
  });
}
