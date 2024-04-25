export function useValidregex(data, type) {
    if (type === "email" || type === "Email") {
      const regexEmail = "^[w-.]+@([w-]+.)+[w-]{2,4}$";
      return data.test(regexEmail);
    } else if (
      type === "phone" ||   type === "Phone"  ||  type === "phonenumber"  ||  type === "PhoneNumber"  ||  type === "phoneNumber"  || type === "Phonenumber"
    ) {
      const regexPhoneNumber = "(+989909)(1219353637383932)d{7}";
      return data.test(regexPhoneNumber);
    }
  }