const endPrayData = [
    { id: 1, title: 'اِسْتِغْفَار', text: 'أَسْتَغْفِرُ اللهَ', count: 3, seenby: '' },
    { id: 2, title: 'دُعَاء', text: 'اللَّهُمَّ أَنْتَ السَّلَامُ وَمِنْكَ السَّلَامُ تَبَارَكْتَ يَا ذَا الْجَلَالِ وَالْإِكْرَامِ', count: 1, seenby: 'رَوَاهُ مُسْلِمٌ' },
    { id: 3, title: 'دُعَاء', text: 'لَا إِلَهَ إِلَّا اللهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ، اللَّهُمَّ لَا مَانِعَ لِمَا أَعْطَيْتَ وَلَا مُعْطِيَ لِمَا مَنَعْتَ، وَلَا يَنْفَعُ ذَا الْجَدِّ مِنْكَ الْجَدُّ', count: 1, seenby: 'رَوَاهُ الْبُخَارِيُّ وَمُسْلِمٌ' },
    { id: 4, title: 'دُعَاء', text: 'لَا إِلَهَ إِلَّا اللهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ، لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللهِ، لَا إِلَهَ إِلَّا اللهُ وَلَا نَعْبُدُ إِلَّا إِيَّاهُ، لَهُ النِّعْمَةُ وَلَهُ الْفَضْلُ وَلَهُ الثَّنَاءُ الْحَسَنُ، لَا إِلَهَ إِلَّا اللهُ مُخْلِصِينَ لَهُ الدِّينَ وَلَوْ كَرِهَ الْكَافِرُونَ', count: 1, seenby: 'رَوَاهُ مُسْلِمٌ' },
    { id: 5, title: 'تَسْبِيح', text: 'سُبْحَانَ اللهِ', count: 33, seenby: '' },
    { id: 6, title: 'حَمْد', text: 'الْحَمْدُ لِلَّهِ', count: 33, seenby: '' },
    { id: 7, title: 'تَكْبِير', text: 'اللهُ أَكْبَرُ', count: 33, seenby: '' },
    { id: 8, title: 'دُعَاء', text: 'لَا إِلَهَ إِلَّا اللهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ', count: 1, seenby: 'رَوَاهُ مُسْلِمٌ' },
    { id: 9, title: 'سُورَةُ الإِخْلَاصِ', text: 'قُلْ هُوَ اللَّهُ أَحَدٌ (1) اللَّهُ الصَّمَدُ (2) لَمْ يَلِدْ وَلَمْ يُولَدْ (3) وَلَمْ يَكُنْ لَهُ كُفُوًا أَحَدٌ (4)', count: 1, seenby: '' },
    { id: 10, title: 'سُورَةُ الْفَلَقِ', text: 'قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ (1) مِنْ شَرِّ مَا خَلَقَ (2) وَمِنْ شَرِّ غَاسِقٍ إِذَا وَقَبَ (3) وَمِنْ شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ (4) وَمِنْ شَرِّ حَاسِدٍ إِذَا حَسَدَ (5)', count: 1, seenby: '' },
    { id: 11, title: 'سُورَةُ النَّاسِ', text: ' قُلْ أَعُوذُ بِرَبِّ النَّاسِ (1) مَلِكِ النَّاسِ (2) إِلَهِ النَّاسِ (3) مِنْ شَرِّ الْوَسْوَاسِ الْخَنَّاسِ (4) الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ (5) مِنَ الْجِنَّةِ وَالنَّاسِ (6)', count: 1, seenby: '' },
    { id: 12, title: 'آيَةُ الْكُرْسِيِّ', text: '﴿ اللَّهُ لَا إِلَهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ لَهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ مَنْ ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلَّا بِإِذْنِهِ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ وَلَا يُحِيطُونَ بِشَيْءٍ مِنْ عِلْمِهِ إِلَّا بِمَا شَاءَ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ وَلاَ يَؤُودُهُ حِفْظُهُمَا وَهُوَ الْعَلِيُّ الْعَظِيمُ ﴾', count: 1, seenby: '' },
    { id: 13, title: 'دُعَاء', text: 'لَا إِلَهَ إِلَّا اللهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ يُحْيِي وَيُمِيتُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ', count: 3, seenby: 'رَوَاهُ التِّرْمِذِيُّ وَأَحْمَدُ' },
    { id: 14, title: 'دُعَاء', text: 'اللَّهُمَّ إِنِّي أَسْأَلُكَ عِلْمًا نَافِعًا وَرِزْقًا طَيِّبًا وَعَمَلًا مُتَقَبَّلًا', count: 1, seenby: 'رَوَاهُ ابْنُ مَاجَهْ' }
  ];

  export function getEndPrayData(prayer) {
    const filteredData = endPrayData.map(item => {
      // تعديل العنصر رقم 9 و 10 و 11 ليصبح count = 3 فقط في صلاة الفجر والمغرب
      if ([9, 10, 11].includes(item.id)) {
        if (prayer === 'الفجر' || prayer === 'المغرب') {
          return { ...item, count: 3 };
        } else {
          return item; // لا تغيير على count في الصلوات الأخرى
        }
      }
  
      // إظهار العنصر رقم 13 فقط في صلاة المغرب أو الفجر
      if (item.id === 13) {
        if (prayer === 'الفجر' || prayer === 'المغرب') {
          return { ...item, count: 3 };
        } else {
          return null; // إخفاء العنصر في الصلوات الأخرى
        }
      }
  
      // إضافة العنصر رقم 14 في صلاة الفجر فقط
      if (item.id === 14 && prayer !== 'الفجر') {
        return null; // تجاهل العنصر
      }
  
      return item;
    });
  
    // إزالة العناصر null (العنصر 13 في حالة غير الفجر أو المغرب والعنصر 14 في غير الفجر)
    return filteredData.filter(item => item !== null);
  }