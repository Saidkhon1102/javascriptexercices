// While1. A va B butun musbat sonlari berilgan (A > B). 
// A uzunlikdagi kesmada maksimal darajada B kesma joylashtirilgan. 
// A kesmaning bo'sh qismini aniqlovchi programma tuzilsin. Ko'paytirish va bo'lish amallarini ishlatmang.

// let a = 23;
// let b = 5;

// let qoldiq = a;
// while (qoldiq >= b) {
//   qoldiq = qoldiq - b;
// }
// console.log("Bo'sh qismi: " + qoldiq);


// While3. n butun soni berilgan (n > 0). 
// Agar n soni 3 ning darajasi bo'lsa "3 - ning darajasi", 
// aks holda "3 - ning darajasi emas" degan natija chiqaruvchi programma tuzilsin. 
// Qoldiqli bo'lish va bo'lish amallarini ishlatmang.

// let n = 81;
// let temp = n;
// let isTub = true;
// while (temp > 1) {
//   let sub = 0;
//   while (sub < 3) {
//     temp = temp - 1;
//     sub = sub + 1;
//   }
//   if (temp < 0) {
//     isTub = false;
//     break;
//   }
// }
// if (isTub && temp === 0) {
//   console.log("3 - ning darajasi");
// } else {
//   console.log("3 - ning darajasi emas");
// }

// While5. n butun soni berilgan (n > 0). 
// Bo'lib butun va qoldiq qismlarini aniqlash orqali, berilgan son raqamlarini teskari tartibda chiqaruvchi programma tuzilsin.

// let n = 12345;
// let res = "";
// while (n > 0) {
//   let qoldiq = 0;
//   let count = 0;
//   let temp = n;
//   while (temp >= 10) {
//     temp = temp - 10;
//     count++;
//   }
//   qoldiq = temp;
//   res += qoldiq;
//   n = (n - qoldiq) / 10; 
// }
// console.log("Teskari tartibda:", res);

// While6. n butun soni berilgan (n > 0). 
// Bo'lib butun va qoldiq qismlarini aniqlash orqali, berilgan son raqamlari yig'indisini va raqamlari sonini chiqaruvchi programma tuzilsin.


// let n = 12345;
// let yigindi = 0;
// let soni = 0;
// while (n > 0) {
//   let qoldiq = 0;
//   let count = 0;
//   let temp = n;
//   while (temp >= 10) {
//     temp = temp - 10;
//     count++;
//   }
//   qoldiq = temp;
//   yigindi = yigindi + qoldiq;
//   soni = soni + 1;
//   n = (n - qoldiq) / 10;
// }
// console.log("yig'indisi:", yigindi);
// console.log("soni:", soni);

// While7. n butun soni berilgan (n > 0). 
// Bo'lib butun va qoldiq qismlarini aniqlash orqali, berilgan son raqamlarining orasida 2 raqami bor-yo'qligini aniqlovchi programma tuzilsin.

// let n = 35241;
// let isTwo = false;
// while (n > 0) {
//   let qoldiq = 0;
//   let count = 0;
//   let temp = n;
//   while (temp >= 10) {
//     temp = temp - 10;
//     count++;
//   }
//   qoldiq = temp;
//   if (qoldiq === 2) {
//     isTwo = true;
//   }
//   n = (n - qoldiq) / 10; 
// }
// console.log("Raqamlar ichida 2 bo isTwo");

// While8. n butun soni berilgan (n > 0). 
// Bo'lib butun va qoldiq qismlarini aniqlash orqali, berilgan son raqamlarining orasida toq raqamlar bor-yo'qligini aniqlovchi programma tuzilsin.
// let n = 2468;
// let bor = false;
// while (n > 0) {
//   let raqam = n;
//   while (raqam >= 10) {
//     raqam = raqam - 10;
//   }
//   if (raqam === 1 || raqam === 3 || raqam === 5 || raqam === 7 || raqam === 9) {
//     bor = true;
//     break;
//   }
//   n = (n - raqam) / 10;
// }
// console.log(bor);

// While9. Palindromik songa tekshirish dasturini yozing. True yoki False qaytarsin. 
// Palindromik son – boshidan va oxiridan o’qilish bir xil bo’lgan son.

// let n = 13431;
// let original = n;
// let reversed = 0;
// while (n > 0) {
//   let qoldiq = 0;
//   let temp = n;
//   while (temp >= 10) {
//     temp = temp - 10;
//   }
//   qoldiq = temp;
//   reversed = reversed * 10 + qoldiq;
//   n = (n - qoldiq) / 10;
// }
// console.log("Palindromikmi? " + (original === reversed));

//                                                                 Case


// Case1: K butun soni berilgan. Baho natijalarini chiqaruvchi programma tuzing. 
// (1-yomon, 2-qoniqarsiz, 3-qoniqarli, 4-yaxshi, 5-a'lo). 
// Agar k soni 1-5 gacha oraliqqa tegishli bo`lmasa "xato" deb chiqarilsin.

// let k = 3;
// switch (k) {
//   case 1:
//     console.log("Yomon");
//     break;
//   case 2:
//     console.log("Qoniqarsiz");
//     break;
//   case 3:
//     console.log("Qoniqarli");
//     break;
//   case 4:
//     console.log("Yaxshi");
//     break;
//   case 5:
//     console.log("A'lo");
//     break;
//   default:
//     console.log("Xato");
// }

// Case2: Oy raqami berilgan. Kiritilgan oy qaysi faslga tegishli ekanligini chiqaruvchi programma tuzilsin. 
// (Masalan: 2-chi oy, "qish").
// let oy = 2;

// switch (oy) {
//   case 12:
//   case 1:
//   case 2:
//     console.log("Qish");
//     break;
//   case 3:
//   case 4:
//   case 5:
//     console.log("Bahor");
//     break;
//   case 6:
//   case 7:
//   case 8:
//     console.log("Yoz");
//     break;
//   case 9:
//   case 10:
//   case 11:
//     console.log("Kuz");
//     break;
//   default:
//     console.log("Xato oy");
// }

// Case3: Oy raqami berilgan. Shu oyda nechta kun borligini aniqlovchi programma tuzilsin.

// let oy = 4;

// switch (oy) {
//   case 2:
//     console.log("28 kun");
//     break;
//   case 4:
//   case 6:
//   case 9:
//   case 11:
//     console.log("30 kun");
//     break;
//   case 1:
//   case 3:
//   case 5:
//   case 7:
//   case 8:
//   case 10:
//   case 12:
//     console.log("31 kun");
//     break;
//   default:
//     console.log("Xato oy");
// }

// Case4: Uzunlik birliklari quyidagi tartibda berilgan: 
// 1-desimetr, 2-kilometr, 3-metr, 4-millimetr, 5-santimetr.
// Uzunlik birligini bildiruvchi son va shu birlikdagi kesma uzunligi berilgan. 
// Kesmaning uzunligini metrlarda ifodalovchi programma tuzilsin.

// let birlik = 2;
// let uzunlik = 3.5;

// switch (birlik) {
//   case 1:
//     console.log(uzunlik / 10, "metr");
//     break;
//   case 2:
//     console.log(uzunlik * 1000, "metr");
//     break;
//   case 3:
//     console.log(uzunlik, "metr");
//     break;
//   case 4:
//     console.log(uzunlik / 1000, "metr");
//     break;
//   case 5:
//     console.log(uzunlik / 100, "metr");
//     break;
//   default:
//     console.log("Xato birlik");
// }


// Case6: Sanani bildiruvchi ikkita butun son berilgan D (kun) va M (oy). 
// (Kabisa bo'lmagan yil sanasi kiritiladi). 
// Berilgan sanani ifodalovchi programma tuzilsin.

// let D = 15;
// let M = 2;
// switch (M) {
//   case 1:
//     console.log(`${D}-yanvar`);
//     break;
//   case 2:
//     if (D > 28) {
//       console.log("Xato sana");
//     } else {
//       console.log(`${D}-fevral`);
//     }
//     break;
//   case 3:
//     console.log(`${D}-mart`);
//     break;
//   case 4:
//     if (D > 30) {
//       console.log("Xato sana");
//     } else {
//       console.log(`${D}-aprel`);
//     }
//     break;
//   case 5:
//     console.log(`${D}-may`);
//     break;
//   case 6:
//     if (D > 30) {
//       console.log("Xato sana");
//     } else {
//       console.log(`${D}-iyun`);
//     }
//     break;
//   case 7:
//     console.log(`${D}-iyul`);
//     break;
//   case 8:
//     console.log(`${D}-avgust`);
//     break;
//   case 9:
//     if (D > 30) {
//       console.log("Xato sana");
//     } else {
//       console.log(`${D}-sentyabr`);
//     }
//     break;
//   case 10:
//     console.log(`${D}-oktyabr`);
//     break;
//   case 11:
//     if (D > 30) {
//       console.log("Xato sana");
//     } else {
//       console.log(`${D}-noyabr`);
//     }
//     break;
//   case 12:
//     console.log(`${D}-dekabr`);
//     break;
//   default:
//     console.log("Xato oy");
// }
