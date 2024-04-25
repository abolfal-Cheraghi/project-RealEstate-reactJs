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
