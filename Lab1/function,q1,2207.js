// write a function taking no 0to 9 and return in word using 
// arrow function and when we give any number like 4 then giuve in word
const ToWord = (digit) => {
   switch (digit) {
      case 0:
         return "Zero";
         case 1:
         return "One";
         case 2:
         return "Two";
         case 3:
         return "Three";
         case 4:
         return "Four";
         case 5:
         return "Five";
         case 6:
         return "Six";
         case 7:
         return "Seven";
         case 8:
         return "Eight";
         case 9:
         return "Nine";
        default:
            return "Invalid digit";
    }
};
consttoWord = (digit ) => {
    const words = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven",
         "Eight", "Nine"];
         return words[digit] || "Invalid digit";
    }
console.log(ToWord(5));
