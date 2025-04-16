export interface SongMetadata {
  id: string;
  title: string;
  artist?: string;
  year?: number;
  key?: string;
  tags?: string[];
  filename: string;
}

export const songs: SongMetadata[] = [
  {
    id: 'gratefulness',
    title: 'Gratefulness',
    artist: 'Rend Collective',
    key: 'G',
    tags: ['worship', 'english'],
    filename: 'gratefulness.cho'
  },
  {
    id: 'moje-wedrowanie',
    title: 'Moje wędrowanie',
    artist: 'Jacek Wąsowski',
    year: 1998,
    key: 'Em',
    tags: ['worship', 'praise', 'guitar'],
    filename: 'moje-wedrowanie.cho'
  },
  {
    id: 'przez-wiare',
    title: 'Przez wiarę / By Faith',
    artist: 'Galkin Evangelistic Team',
    year: 2012,
    key: 'G',
    tags: ['worship', 'praise'],
    filename: 'przez-wiare.cho'
  },
  {
    id: 'przez-dobra-moc',
    title: 'Przez dobrą moc Twą, Panie',
    artist: 'Dietrich Bonhoeffer',
    year: 1944,
    key: 'C',
    tags: ['worship', 'praise'],
    filename: 'przez-dobra-moc.cho'
  },
  {
    id: 'duszo-ma-pana-chwal',
    title: 'Duszo ma Pana chwal',
    artist: 'Matt Redman',
    year: 2013,
    key: 'D',
    tags: ['worship', 'praise', 'guitar'],
    filename: 'duszo-ma-pana-chwal.cho'
  },
  {
    id: 'our-rescuer',
    title: 'Our Rescuer',
    artist: 'Rend Collective',
    year: 2017,
    key: 'G',
    tags: ['worship', 'praise', 'gospel', 'english'],
    filename: 'our-rescuer.cho'
  },
  {
    id: 'hallelujah-anyway',
    title: 'Hallelujah Anyway',
    key: 'Ab',
    tags: ['worship', 'english'],
    filename: 'hallelujah-anyway.cho'
  },
  // DOD songs
  {
    id: 'dod001-oceany',
    title: 'Oceany',
    artist: 'Hillsong',
    key: 'Am',
    tags: ['worship', 'praise', 'dod'],
    filename: 'dod001-oceany.cho'
  },
  {
    id: 'dod002-zostawiam-to-co-za-mn',
    title: 'Zostawiam to co za mną',
    tags: ['worship', 'dod'],
    filename: 'dod002-zostawiam-to-co-za-mn.cho'
  },
  {
    id: 'dod003-wod-zamienie-w-wino',
    title: 'Wodę zamieniłeś w wino',
    artist: 'Chris Tomlin, Jesse Reeves, Jonas Myrin, Matt Redman',
    tags: ['worship'],
    filename: 'dod003-wod-zamienie-w-wino.cho'
  },
  {
    id: 'dod004-kime-jestem-by-nieba-krl',
    title: 'Kimże jestem by nieba Król',
    tags: ['worship'],
    filename: 'dod004-kime-jestem-by-nieba-krl.cho'
  },
  {
    id: 'dod005-duszo-ma-pana-chwal',
    title: 'Duszo ma Pana chwal',
    tags: ['worship', 'praise'],
    filename: 'dod005-duszo-ma-pana-chwal.cho'
  },
  {
    id: 'dod006-stwrco-istnienia',
    title: 'Stwórco istnienia',
    tags: ['worship'],
    filename: 'dod006-stwrco-istnienia.cho'
  },
  {
    id: 'dod007-chrystus-to-mj-pan',
    title: 'Chrystus to mój Pan',
    tags: ['worship'],
    filename: 'dod007-chrystus-to-mj-pan.cho'
  },
  {
    id: 'dod008-w-ciemnoci-pod-ciarem',
    title: 'W ciemności pod ciężarem',
    tags: ['worship'],
    filename: 'dod008-w-ciemnoci-pod-ciarem.cho'
  },
  {
    id: 'dod009-ty-przynosisz-mi-zwycistwa-pie',
    title: 'Ty przynosisz mi zwycięstwa pieśń',
    artist: 'Bethel Music',
    key: 'F',
    tags: ['worship', 'dod'],
    filename: 'dod009-ty-przynosisz-mi-zwycistwa-pie.cho'
  },
  {
    id: 'dod010-serce-sugi',
    title: 'Serce sługi',
    tags: ['worship'],
    filename: 'dod010-serce-sugi.cho'
  },
  {
    id: 'dod011-chcemy-ciebie-wielbi',
    title: 'Chcemy Ciebie wielbić',
    tags: ['worship', 'praise'],
    filename: 'dod011-chcemy-ciebie-wielbi.cho'
  },
  {
    id: 'dod012-krl-wszechwiatw',
    title: 'Król wszechświatów',
    tags: ['worship'],
    filename: 'dod012-krl-wszechwiatw.cho'
  },
  {
    id: 'dod013-ty-bye-przed-stworzeniem',
    title: 'Ty byłeś przed stworzeniem',
    tags: ['worship'],
    filename: 'dod013-ty-bye-przed-stworzeniem.cho'
  },
  {
    id: 'dod014-wszystko-co-mam',
    title: 'Wszystko co mam',
    tags: ['worship'],
    filename: 'dod014-wszystko-co-mam.cho'
  },
  {
    id: 'dod015-zaufaj-serce-me',
    title: 'Zaufaj serce me',
    tags: ['worship'],
    filename: 'dod015-zaufaj-serce-me.cho'
  },
  {
    id: 'dod016-prawda-jedyna',
    title: 'Prawda jedyna',
    tags: ['worship'],
    filename: 'dod016-prawda-jedyna.cho'
  },
  {
    id: 'dod017-odnowa',
    title: 'Odnowa',
    tags: ['worship'],
    filename: 'dod017-odnowa.cho'
  },
  {
    id: 'dod018-dod018a-broken-vessels-amazing-grace',
    title: 'Broken Vessels - Amazing Grace',
    tags: ['worship', 'english'],
    filename: 'dod018-dod018a---broken-vessels-amazing-grace.cho'
  },
  {
    id: 'dod018-dod018b-gliniane-naczynia-broken-vessels',
    title: 'Gliniane naczynia - Broken Vessels',
    tags: ['worship'],
    filename: 'dod018-dod018b---gliniane-naczynia---broken-vessels.cho'
  },
  {
    id: 'dod019-w-to-wierz-this-i-believe',
    title: 'W to wierzę - This I Believe',
    tags: ['worship'],
    filename: 'dod019-w-to-wierz---this-i-believe.cho'
  },
  {
    id: 'dod020-dod020b-latarni-ty',
    title: 'Latarnią Ty',
    tags: ['worship'],
    filename: 'dod020-dod020b---latarni-ty.cho'
  },
  {
    id: 'dod021-tylko-piewa-chc',
    title: 'Tylko śpiewać chcę',
    tags: ['worship', 'praise'],
    filename: 'dod021-tylko-piewa-chc.cho'
  },
  {
    id: 'dod022-dla-ciebie-yc',
    title: 'Dla Ciebie żyć',
    tags: ['worship'],
    filename: 'dod022-dla-ciebie-yc.cho'
  },
  {
    id: 'dod023-chc-widzie-ci',
    title: 'Chcę widzieć Cię',
    tags: ['worship'],
    filename: 'dod023-chc-widzie-ci.cho'
  },
  {
    id: 'dod024-temu-chwaa',
    title: 'Temu chwała',
    tags: ['worship', 'praise'],
    filename: 'dod024-temu-chwaa.cho'
  },
  {
    id: 'dod025-dwik-chway',
    title: 'Dźwięk chwały',
    tags: ['worship', 'praise'],
    filename: 'dod025-dwik-chway.cho'
  },
  {
    id: 'dod026-krlw-krl',
    title: 'Królów Król',
    tags: ['worship'],
    filename: 'dod026-krlw-krl.cho'
  },
  {
    id: 'dod027-jezu-panuj-zawsze',
    title: 'Jezu panuj zawsze',
    tags: ['worship'],
    filename: 'dod027-jezu-panuj-zawsze.cho'
  },
  {
    id: 'dod028-zbawiciel-on-porusza-gry',
    title: 'Zbawiciel On porusza góry',
    tags: ['worship'],
    filename: 'dod028-zbawiciel-on-porusza-gry.cho'
  },
  {
    id: 'dod029-godzien-chwaly',
    title: 'Godzien chwały',
    tags: ['worship'],
    filename: 'dod029-godzien-chwaly.cho'
  },
  {
    id: 'dod030-widze-dom',
    title: 'Widzę DOM',
    artist: 'Piesniopisarze',
    tags: ['worship'],
    filename: 'dod030-widze-dom.cho'
  },
  {
    id: 'dod031-jestem-tego-pewien',
    title: 'Jestem tego pewien',
    tags: ['worship'],
    filename: 'dod031-jestem-tego-pewien.cho'
  },
  {
    id: 'dod032-jedyna-droga',
    title: 'Jedyna droga',
    artist: 'CSM',
    tags: ['worship'],
    filename: 'dod032-jedyna-droga.cho'
  },
  {
    id: 'dod033-jeste-ktry-jeste',
    title: 'Jesteś który jesteś',
    tags: ['worship'],
    filename: 'dod033-jeste-ktry-jeste.cho'
  },
  {
    id: 'dod034-o-przyjdcie-do-tronu',
    title: 'O przyjdźcie do tronu',
    tags: ['worship'],
    filename: 'dod034-o-przyjdcie-do-tronu.cho'
  },
  {
    id: 'dod035-ty-pocztkiem-jest',
    title: 'Ty początkiem jesteś',
    tags: ['worship'],
    filename: 'dod035-ty-pocztkiem-jest.cho'
  },
  {
    id: 'dod036-do-stolu-przyjdz',
    title: 'Do stołu przyjdź',
    tags: ['worship'],
    filename: 'dod036-do-stolu-przyjdz.cho'
  },
  {
    id: 'dod037-woda-zycia',
    title: 'Woda życia',
    tags: ['worship'],
    filename: 'dod037-woda-zycia.cho'
  },
  {
    id: 'dod038-jego-milosc',
    title: 'Jego miłość',
    tags: ['worship'],
    filename: 'dod038-jego-milosc.cho'
  },
  // DZ - Pieśni dla dzieci
  {
    id: 'dz01-mrwka',
    title: 'DZ01. Mrówka',
    artist: 'Autor nieznany',
    tags: ['dzieci'],
    filename: 'dz01-dz01-mrwka.cho'
  },
  {
    id: 'dz02-bo-gry-mog-ustpi',
    title: 'DZ02. Bo góry mogą ustąpić',
    tags: ['dzieci'],
    filename: 'dz02-dz02-bo-gry-mog-ustpi.cho'
  },
  {
    id: 'dz03-nie-chc-sluy-w-piechocie',
    title: 'DZ03. Nie chcę służyć w piechocie',
    tags: ['dzieci'],
    filename: 'dz03-dz03-nie-chc-sluy-w-piechocie.cho'
  },
  {
    id: 'dz04-nie-boj-si',
    title: 'DZ04. Nie bój się',
    tags: ['dzieci'],
    filename: 'dz04-dz04-nie-boj-si.cho'
  },
  {
    id: 'dz05-na-jeziorze',
    title: 'DZ05. Na jeziorze',
    tags: ['dzieci'],
    filename: 'dz05-dz05-na-jeziorze.cho'
  },
  {
    id: 'dz06-ani-ty-ani-ja',
    title: 'DZ06. Ani ty ani ja',
    tags: ['dzieci'],
    filename: 'dz06-dz06-ani-ty-ani-ja.cho'
  },
  {
    id: 'dz07-wdowa-z-sarepty',
    title: 'DZ07. Wdowa z Sarepty',
    tags: ['dzieci'],
    filename: 'dz07-dz07-wdowa-z-sarepty.cho'
  },
  {
    id: 'dz08-bg-nie-umar',
    title: 'DZ08. Bóg nie umarł',
    tags: ['dzieci'],
    filename: 'dz08-dz08-bg-nie-umar.cho'
  },
  {
    id: 'dz09-jeste-krlem',
    title: 'DZ09. Jesteś Królem',
    tags: ['dzieci'],
    filename: 'dz09-dz09-jeste-krlem.cho'
  },
  {
    id: 'dz10-szumi-w-lesie',
    title: 'DZ10. Szumi w lesie',
    tags: ['dzieci'],
    filename: 'dz10-dz10-szumi-w-lesie.cho'
  },
  {
    id: 'dz11-ruszaj-ruszaj-tam',
    title: 'DZ11. Ruszaj, ruszaj tam',
    tags: ['dzieci'],
    filename: 'dz11-dz11-ruszaj-ruszaj-tam.cho'
  },
  {
    id: 'dz12-uwielbiam-imi-twoje',
    title: 'DZ12. Uwielbiam imię Twoje',
    tags: ['dzieci'],
    filename: 'dz12-dz12-uwielbiam-imi-twoje.cho'
  },
  {
    id: 'dz13-pan-jest-pasterzem-moim',
    title: 'DZ13. Pan jest Pasterzem moim',
    tags: ['dzieci'],
    filename: 'dz13-dz13-pan-jest-pasterzem-moim.cho'
  },
  {
    id: 'dz14-a-kiedy-myl',
    title: 'DZ14. A kiedy myślę',
    tags: ['dzieci'],
    filename: 'dz14-dz14-a-kiedy-myl.cho'
  },
  {
    id: 'dz15-dungla',
    title: 'DZ15. Dżungla',
    tags: ['dzieci'],
    filename: 'dz15-dz15-dungla.cho'
  },
  {
    id: 'dz16-czy-wy-wiecie',
    title: 'DZ16. Czy wy wiecie',
    tags: ['dzieci'],
    filename: 'dz16-dz16-czy-wy-wiecie.cho'
  },
  {
    id: 'dz17-bg-stworzy-wiat',
    title: 'DZ17. Bóg stworzył świat',
    tags: ['dzieci'],
    filename: 'dz17-dz17-bg-stworzy-wiat.cho'
  },
  {
    id: 'dz18-flaga',
    title: 'DZ18. Flaga',
    tags: ['dzieci'],
    filename: 'dz18-dz18-flaga.cho'
  },
  {
    id: 'dz19-noe',
    title: 'DZ19. Noe',
    tags: ['dzieci'],
    filename: 'dz19-dz19-noe.cho'
  },
  {
    id: 'dz20-bd-ostrone-moje-oczko',
    title: 'DZ20. Bądź ostrożne moje oczko',
    tags: ['dzieci'],
    filename: 'dz20-dz20-bd-ostrone-moje-oczko.cho'
  },
  {
    id: 'dz21-nowina',
    title: 'DZ21. Nowina',
    tags: ['dzieci'],
    filename: 'dz21-dz21-nowina.cho'
  },
  {
    id: 'dz21-w-sercu-swym',
    title: 'DZ21. W sercu swym',
    tags: ['dzieci'],
    filename: 'dz21-dz21-w-sercu-swym.cho'
  },
  {
    id: 'dz22-boa-rado',
    title: 'DZ22. Boża radość',
    tags: ['dzieci'],
    filename: 'dz22-dz22-boa-rado.cho'
  },
  {
    id: 'dz23-chc-przestpi-jego-prg',
    title: 'DZ23. Chcę przestąpić Jego próg',
    tags: ['dzieci'],
    filename: 'dz23-dz23-chc-przestpi-jego-prg.cho'
  },
  {
    id: 'dz24-bg-dobry-dla-mnie-jest',
    title: 'DZ24. Bóg dobry dla mnie jest',
    tags: ['dzieci'],
    filename: 'dz24-dz24-bg-dobry-dla-mnie-jest.cho'
  },
  {
    id: 'dz25-sieje-je',
    title: 'DZ25. Sieję, ję',
    tags: ['dzieci'],
    filename: 'dz25-dz25sieje-je.cho'
  },
  {
    id: 'dz26-wity-umiechnity',
    title: 'DZ26. Święty uśmiechnięty',
    tags: ['dzieci'],
    filename: 'dz26-dz26-wity-umiechnity.cho'
  },
  {
    id: 'dz27-w-sercu-swym',
    title: 'DZ27. W sercu swym',
    tags: ['dzieci'],
    filename: 'dz27-dz27-w-sercu-swym.cho'
  },
  {
    id: 'dz28-bo-mj-pan-drog-zna',
    title: 'DZ28. Bo mój Pan drogę zna',
    tags: ['dzieci'],
    filename: 'dz28-dz28-bo-mj-pan-drog-zna.cho'
  },
  {
    id: 'dz29-zacheusz',
    title: 'DZ29. Zacheusz',
    tags: ['dzieci'],
    filename: 'dz29-dz29-zacheusz.cho'
  },
  {
    id: 'dz30-cho-jestem-may-jak-palec',
    title: 'DZ30. Choć jestem mały jak palec',
    tags: ['dzieci'],
    filename: 'dz30-dz30-cho-jestem-may-jak-palec.cho'
  },
  {
    id: 'dz31-oto-ja-polij-mnie',
    title: 'DZ31. Oto ja poślij mnie',
    tags: ['dzieci'],
    filename: 'dz31-dz31-oto-ja-polij-mnie.cho'
  },
  {
    id: 'dz32-on-jest-wiatem',
    title: 'DZ32. On jest światem',
    tags: ['dzieci'],
    filename: 'dz32-dz32-on-jest-wiatem.cho'
  },
  {
    id: 'dz33-krl',
    title: 'DZ33. Król',
    tags: ['dzieci'],
    filename: 'dz33-dz33-krl.cho'
  },
  // RYB - Śpiewnik Rybki
  {
    id: 'ryb001-zmartwychwstae-panie',
    title: 'RYB001. Zmartwychwstałeś Panie',
    key: 'G',
    tags: ['worship', 'ryb'],
    filename: 'ryb001-zmartwychwstae-panie.cho'
  },
  {
    id: 'ryb002-kocham-ci',
    title: 'RYB002. Kocham Cię',
    key: 'G',
    tags: ['worship', 'ryb'],
    filename: 'ryb002-kocham-ci.cho'
  },
  {
    id: 'ryb003-witemu-bogu-oddaj-cze',
    title: 'RYB003. Świętemu Bogu oddaj cześć',
    tags: ['worship'],
    filename: 'ryb003-witemu-bogu-oddaj-cze.cho'
  },
  {
    id: 'ryb004-jezus-jest-panem',
    title: 'RYB004. Jezus jest Panem',
    tags: ['worship'],
    filename: 'ryb004-jezus-jest-panem.cho'
  },
  {
    id: 'ryb005-gdy-kiedy-pan',
    title: 'RYB005. Gdy kiedyś Pan',
    tags: ['worship'],
    filename: 'ryb005-gdy-kiedy-pan.cho'
  },
  {
    id: 'ryb006-ofiaruj-tobie-panie-mj',
    title: 'RYB006. Ofiaruję Tobie Panie mój',
    tags: ['worship'],
    filename: 'ryb006-ofiaruj-tobie-panie-mj.cho'
  },
  {
    id: 'ryb007-bd-ci-panie',
    title: 'RYB007. Będę Ci Panie',
    tags: ['worship', 'praise'],
    filename: 'ryb007-bd-ci-panie.cho'
  },
  {
    id: 'ryb008-wielkie-i-dziwne',
    title: 'RYB008. Wielkie i dziwne',
    tags: ['worship'],
    filename: 'ryb008-wielkie-i-dziwne.cho'
  },
  {
    id: 'ryb009-przed-obliczem-pana',
    title: 'RYB009. Przed obliczem Pana',
    tags: ['worship'],
    filename: 'ryb009-przed-obliczem-pana.cho'
  },
  {
    id: 'ryb010-psalm-148---alleluja',
    title: 'RYB010. Psalm 148 - Alleluja',
    tags: ['worship'],
    filename: 'ryb010-psalm-148---alleluja.cho'
  },
  {
    id: 'ryb011-jezus-daje-nam-zbawienie',
    title: 'RYB011. Jezus daje nam zbawienie',
    tags: ['worship'],
    filename: 'ryb011-jezus-daje-nam-zbawienie.cho'
  },
  {
    id: 'ryb012-bd-piewa-tobie',
    title: 'RYB012. Będę śpiewać Tobie',
    tags: ['worship'],
    filename: 'ryb012-bd-piewa-tobie.cho'
  },
  {
    id: 'ryb013-acuch-gr-otacza-w-krg',
    title: 'RYB013. Łańcuch gór otacza w krąg',
    tags: ['worship'],
    filename: 'ryb013-acuch-gr-otacza-w-krg.cho'
  },
  {
    id: 'ryb014-zapiewa-chc-mioci-pie',
    title: 'RYB014. Zaśpiewać chcę miłości pieśń',
    tags: ['worship'],
    filename: 'ryb014-zapiewa-chc-mioci-pie.cho'
  },
  {
    id: 'ryb015-memu-bogu',
    title: 'RYB015. Memu Bogu',
    tags: ['worship', 'praise'],
    filename: 'ryb015-memu-bogu.cho'
  },
  {
    id: 'ryb016-uwielbiajcie-pana',
    title: 'RYB016. Uwielbiajcie Pana',
    tags: ['worship', 'praise'],
    filename: 'ryb016-uwielbiajcie-pana.cho'
  },
  {
    id: 'ryb017-twoja-aska',
    title: 'RYB017. Twoja łaska',
    tags: ['worship'],
    filename: 'ryb017-twoja-aska.cho'
  },
  {
    id: 'ryb018-wite-imi-jezus',
    title: 'RYB018. Święte Imię Jezus',
    tags: ['worship'],
    filename: 'ryb018-wite-imi-jezus.cho'
  },
  {
    id: 'ryb019-pan-mnie-strzee',
    title: 'RYB019. Pan mnie strzeże',
    tags: ['worship'],
    filename: 'ryb019-pan-mnie-strzee.cho'
  },
  {
    id: 'ryb020-nie-ma-w-innym-zbawienia',
    title: 'RYB020. Nie ma w innym zbawienia',
    tags: ['worship'],
    filename: 'ryb020-nie-ma-w-innym-zbawienia.cho'
  },
  {
    id: 'ryb021-wychwalajcie-pana-z-radoci',
    title: 'RYB021. Wychwalajcie Pana z radości',
    tags: ['worship', 'praise'],
    filename: 'ryb021-wychwalajcie-pana-z-radoci.cho'
  },
  {
    id: 'ryb022-pan-twoim-cieniem',
    title: 'RYB022. Pan twoim cieniem',
    tags: ['worship'],
    filename: 'ryb022-pan-twoim-cieniem.cho'
  },
  {
    id: 'ryb023-albowiem-tak-bg-umiowa-wiat',
    title: 'RYB023. Albowiem tak Bóg umiłował świat',
    tags: ['worship'],
    filename: 'ryb023-albowiem-tak-bg-umiowa-wiat.cho'
  },
  {
    id: 'ryb024-oddajmy-cze',
    title: 'RYB024. Oddajmy cześć',
    tags: ['worship'],
    filename: 'ryb024-oddajmy-cze.cho'
  },
  {
    id: 'ryb025-jezus-chrystus-jest-moim-zbawieniem',
    title: 'RYB025. Jezus Chrystus jest moim zbawieniem',
    tags: ['worship'],
    filename: 'ryb025-jezus-chrystus-jest-moim-zbawieniem.cho'
  },
  {
    id: 'ryb026-oto-stoj-u-drzwi',
    title: 'RYB026. Oto stoję u drzwi',
    tags: ['worship'],
    filename: 'ryb026-oto-stoj-u-drzwi.cho'
  },
  {
    id: 'ryb027-pan-bdzie-mi-obron',
    title: 'RYB027. Pan będzie mi obroną',
    tags: ['worship'],
    filename: 'ryb027-pan-bdzie-mi-obron.cho'
  },
  {
    id: 'ryb028-hod-jezusowi-zmy',
    title: 'RYB028. Hołd Jezusowi złóżmy',
    tags: ['worship'],
    filename: 'ryb028-hod-jezusowi-zmy.cho'
  },
  {
    id: 'ryb029-ty-jeste-bogiem-mym',
    title: 'RYB029. Ty jesteś Bogiem mym',
    tags: ['worship'],
    filename: 'ryb029-ty-jeste-bogiem-mym.cho'
  },
  {
    id: 'ryb030-zoyem-w-panu',
    title: 'RYB030. Złożyłem w Panu',
    tags: ['worship'],
    filename: 'ryb030-zoyem-w-panu.cho'
  },
  {
    id: 'ryb031-jezus-chrystus-jest-panem',
    title: 'RYB031. Jezus Chrystus jest Panem',
    tags: ['worship'],
    filename: 'ryb031-jezus-chrystus-jest-panem.cho'
  },
  {
    id: 'ryb032-do-ciebie-panie',
    title: 'RYB032. Do Ciebie Panie',
    tags: ['worship'],
    filename: 'ryb032-do-ciebie-panie.cho'
  },
  {
    id: 'ryb033-do-pana-naley-ziemia',
    title: 'RYB033. Do Pana należy ziemia',
    tags: ['worship'],
    filename: 'ryb033-do-pana-naley-ziemia.cho'
  },
  {
    id: 'ryb034-zobaczcie-jak-wielk-mio',
    title: 'RYB034. Zobaczcie jak wielką miłość',
    tags: ['worship'],
    filename: 'ryb034-zobaczcie-jak-wielk-mio.cho'
  },
  {
    id: 'ryb035-tylko-ciebie-pragn',
    title: 'RYB035. Tylko Ciebie pragnę',
    tags: ['worship'],
    filename: 'ryb035-tylko-ciebie-pragn.cho'
  },
  {
    id: 'ryb036-pokona-mier',
    title: 'RYB036. Pokonał śmierć',
    tags: ['worship'],
    filename: 'ryb036-pokona-mier.cho'
  },
  {
    id: 'ryb037-wielbij-pana',
    title: 'RYB037. Wielbij Pana',
    tags: ['worship'],
    filename: 'ryb037-wielbij-pana.cho'
  },
  {
    id: 'ryb038-pan-jest-pasterzem-moim',
    title: 'RYB038. Pan jest pasterzem moim',
    tags: ['worship'],
    filename: 'ryb038-pan-jest-pasterzem-moim.cho'
  },
  {
    id: 'ryb039-to-nasz-bg',
    title: 'RYB039. To nasz Bóg',
    tags: ['worship'],
    filename: 'ryb039-to-nasz-bg.cho'
  },
  {
    id: 'ryb040-alleluja-wno-pod-niebo-gos',
    title: 'RYB040. Alleluja, wznoś pod niebo głos',
    tags: ['worship'],
    filename: 'ryb040-alleluja-wno-pod-niebo-gos.cho'
  },
  {
    id: 'ryb041-szczliwi',
    title: 'RYB041. Szczęśliwi',
    tags: ['worship'],
    filename: 'ryb041-szczliwi.cho'
  },
  {
    id: 'ryb042-pasterzem-jest-mj-dobry-pan',
    title: 'RYB042. Pasterzem jest mój dobry Pan',
    tags: ['worship'],
    filename: 'ryb042-pasterzem-jest-mj-dobry-pan.cho'
  },
  {
    id: 'ryb043-twe-wiato',
    title: 'RYB043. Twe światło',
    tags: ['worship'],
    filename: 'ryb043-twe-wiato.cho'
  },
  {
    id: 'ryb044-czekam-chwili',
    title: 'RYB044. Czekam chwili',
    tags: ['worship'],
    filename: 'ryb044-czekam-chwili.cho'
  },
  {
    id: 'ryb045-uwielbiam-imi-twoje-panie',
    title: 'RYB045. Uwielbiam imię Twoje Panie',
    tags: ['worship'],
    filename: 'ryb045-uwielbiam-imi-twoje-panie.cho'
  },
  {
    id: 'ryb046-jezus-dla-jezusa',
    title: 'RYB046. Jezus dla Jezusa',
    tags: ['worship'],
    filename: 'ryb046-jezus-dla-jezusa.cho'
  },
  {
    id: 'ryb047-jezus-najwysze-imi',
    title: 'RYB047. Jezus najwyższe imię',
    tags: ['worship'],
    filename: 'ryb047-jezus-najwysze-imi.cho'
  },
  {
    id: 'ryb048-kady-wschd-soca',
    title: 'RYB048. Każdy wschód słońca',
    tags: ['worship'],
    filename: 'ryb048-kady-wschd-soca.cho'
  },
  {
    id: 'ryb049-szczliwy-m---psalm-1',
    title: 'RYB049. Szczęśliwy mąż - Psalm 1',
    tags: ['worship'],
    filename: 'ryb049-szczliwy-m---psalm-1.cho'
  },
  {
    id: 'ryb050-ty-jeste-mioci',
    title: 'RYB050. Ty jesteś miłością',
    tags: ['worship'],
    filename: 'ryb050-ty-jeste-mioci.cho'
  },
  {
    id: 'ryb051-niechaj-zstpi-duch-twj',
    title: 'RYB051. Niechaj zstąpi Duch Twój',
    tags: ['worship'],
    filename: 'ryb051-niechaj-zstpi-duch-twj.cho'
  },
  {
    id: 'ryb052-za-rce-we-mnie-panie',
    title: 'RYB052. Za ręce weź mnie Panie',
    tags: ['worship'],
    filename: 'ryb052-za-rce-we-mnie-panie.cho'
  },
  {
    id: 'ryb053-gdybym-przechodzi',
    title: 'RYB053. Gdybym przechodził',
    tags: ['worship'],
    filename: 'ryb053-gdybym-przechodzi.cho'
  },
  {
    id: 'ryb054-yj-nie-ja',
    title: 'RYB054. Żyję nie ja',
    tags: ['worship'],
    filename: 'ryb054-yj-nie-ja.cho'
  },
  {
    id: 'ryb055-baranka-chwalmy',
    title: 'RYB055. Baranka chwalmy',
    tags: ['worship'],
    filename: 'ryb055-baranka-chwalmy.cho'
  },
  {
    id: 'ryb056-dotknij-panie-moich-oczu',
    title: 'RYB056. Dotknij Panie moich oczu',
    tags: ['worship'],
    filename: 'ryb056-dotknij-panie-moich-oczu.cho'
  },
  {
    id: 'ryb057-winnica---iz-5',
    title: 'RYB057. Winnica - Iz 5',
    tags: ['worship'],
    filename: 'ryb057-winnica---iz-5.cho'
  },
  {
    id: 'ryb058-przyjaciela-mam',
    title: 'RYB058. Przyjaciela mam',
    tags: ['worship'],
    filename: 'ryb058-przyjaciela-mam.cho'
  },
  {
    id: 'ryb059-tchnij-moc',
    title: 'RYB059. Tchnij moc',
    tags: ['worship'],
    filename: 'ryb059-tchnij-moc.cho'
  },
  {
    id: 'ryb060-jezus-jest-krlem',
    title: 'RYB060. Jezus jest Królem',
    tags: ['worship'],
    filename: 'ryb060-jezus-jest-krlem.cho'
  },
  {
    id: 'ryb061-o-ho-ho-laj-laj-laj',
    title: 'RYB061. O ho ho laj laj laj',
    tags: ['worship'],
    filename: 'ryb061-o-ho-ho-laj-laj-laj.cho'
  },
  {
    id: 'ryb062-pan-krluje---psalm-93',
    title: 'RYB062. Pan króluje - Psalm 93',
    tags: ['worship'],
    filename: 'ryb062-pan-krluje---psalm-93.cho'
  },
  {
    id: 'ryb063-w-lekkim-powiewie',
    title: 'RYB063. W lekkim powiewie',
    tags: ['worship'],
    filename: 'ryb063-w-lekkim-powiewie.cho'
  },
  {
    id: 'ryb064-przyjmij-chwa',
    title: 'RYB064. Przyjmij chwałę',
    tags: ['worship'],
    filename: 'ryb064-przyjmij-chwa.cho'
  },
  {
    id: 'ryb065-oblubieniec-czeka',
    title: 'RYB065. Oblubieniec czeka',
    tags: ['worship'],
    filename: 'ryb065-oblubieniec-czeka.cho'
  },
  {
    id: 'ryb066-hosanna-memu-bogu',
    title: 'RYB066. Hosanna memu Bogu',
    tags: ['worship'],
    filename: 'ryb066-hosanna-memu-bogu.cho'
  },
  {
    id: 'ryb067-niepojty',
    title: 'RYB067. Niepojęty',
    tags: ['worship'],
    filename: 'ryb067-niepojty.cho'
  },
  {
    id: 'ryb068-jezus-wity-namaszczony-pan',
    title: 'RYB068. Jezus Święty namaszczony Pan',
    tags: ['worship'],
    filename: 'ryb068-jezus-wity-namaszczony-pan.cho'
  },
  {
    id: 'ryb069-chwal-ciebie-panie',
    title: 'RYB069. Chwalę Ciebie Panie',
    tags: ['worship'],
    filename: 'ryb069-chwal-ciebie-panie.cho'
  },
  {
    id: 'ryb070-jezu-ty-wszystkim-dla-mnie',
    title: 'RYB070. Jezu Ty wszystkim dla mnie',
    tags: ['worship'],
    filename: 'ryb070-jezu-ty-wszystkim-dla-mnie.cho'
  },
  {
    id: 'ryb071-bo-mio-w-sercu',
    title: 'RYB071. Bo miłość w sercu',
    tags: ['worship'],
    filename: 'ryb071-bo-mio-w-sercu.cho'
  },
  {
    id: 'ryb072-jeli-ustami-swymi',
    title: 'RYB072. Jeśli ustami swymi',
    tags: ['worship'],
    filename: 'ryb072-jeli-ustami-swymi.cho'
  },
  {
    id: 'ryb073-pan-buduje',
    title: 'RYB073. Pan buduje',
    tags: ['worship'],
    filename: 'ryb073-pan-buduje.cho'
  },
  {
    id: 'ryb074-nie-bj-si',
    title: 'RYB074. Nie bój się',
    tags: ['worship'],
    filename: 'ryb074-nie-bj-si.cho'
  },
  {
    id: 'ryb075-to-on-nasz-pan-i-bg',
    title: 'RYB075. To On nasz Pan i Bóg',
    tags: ['worship'],
    filename: 'ryb075-to-on-nasz-pan-i-bg.cho'
  },
  {
    id: 'ryb076-jak-ania',
    title: 'RYB076. Jak jeleń',
    tags: ['worship'],
    filename: 'ryb076-jak-ania.cho'
  },
  {
    id: 'ryb077-pan-wywyszony',
    title: 'RYB077. Pan wywyższony',
    tags: ['worship'],
    filename: 'ryb077-pan-wywyszony.cho'
  },
  {
    id: 'ryb078-gdzie-na-ziemi-wyrosa',
    title: 'RYB078. Gdzie na ziemi wyrosła',
    tags: ['worship'],
    filename: 'ryb078-gdzie-na-ziemi-wyrosa.cho'
  },
  {
    id: 'ryb079-panie-mj-przychodz-dzi',
    title: 'RYB079. Panie mój przychodzę dziś',
    tags: ['worship'],
    filename: 'ryb079-panie-mj-przychodz-dzi.cho'
  },
  {
    id: 'ryb080-mio-twa',
    title: 'RYB080. Miłość Twa',
    tags: ['worship'],
    filename: 'ryb080-mio-twa.cho'
  },
  {
    id: 'ryb081-wielbi-pana-chc',
    title: 'RYB081. Wielbić Pana chcę',
    tags: ['worship'],
    filename: 'ryb081-wielbi-pana-chc.cho'
  },
  {
    id: 'ryb082-ci-ktrzy-jahwe-ufaj',
    title: 'RYB082. Ci którzy Jahwe ufają',
    tags: ['worship'],
    filename: 'ryb082-ci-ktrzy-jahwe-ufaj.cho'
  },
  {
    id: 'ryb083-tobie-chr-aniow',
    title: 'RYB083. Tobie chór aniołów',
    tags: ['worship'],
    filename: 'ryb083-tobie-chr-aniow.cho'
  },
  {
    id: 'ryb084-suchaj-izraelu',
    title: 'RYB084. Słuchaj Izraelu',
    tags: ['worship'],
    filename: 'ryb084-suchaj-izraelu.cho'
  },
  {
    id: 'ryb085-kantyk-mojesza',
    title: 'RYB085. Kantyk Mojżesza',
    tags: ['worship'],
    filename: 'ryb085-kantyk-mojesza.cho'
  },
  {
    id: 'ryb086-jeste-dobry',
    title: 'RYB086. Jesteś dobry',
    tags: ['worship'],
    filename: 'ryb086-jeste-dobry.cho'
  },
  {
    id: 'ryb087-szukajcie-wpierw-krlestwa-boego',
    title: 'RYB087. Szukajcie wpierw Królestwa Bożego',
    tags: ['worship'],
    filename: 'ryb087-szukajcie-wpierw-krlestwa-boego.cho'
  },
  {
    id: 'ryb088-nie-ma-lepszej-rzeczy',
    title: 'RYB088. Nie ma lepszej rzeczy',
    tags: ['worship'],
    filename: 'ryb088-nie-ma-lepszej-rzeczy.cho'
  },
  {
    id: 'ryb089-oddaj-ci-ycie',
    title: 'RYB089. Oddaj Ci życie',
    filename: 'ryb089-oddaj-ci-ycie.cho'
  },
  {
    id: 'ryb090-sodkie-imi-jezus',
    title: 'RYB090. Słodkie imię Jezus',
    filename: 'ryb090-sodkie-imi-jezus.cho'
  },
  {
    id: 'ryb091-abba-ojcze',
    title: 'RYB091. Abba Ojcze',
    filename: 'ryb091-abba-ojcze.cho'
  },
  {
    id: 'ryb092-mw-do-mnie-panie',
    title: 'RYB092. Mów do mnie Panie',
    filename: 'ryb092-mw-do-mnie-panie.cho'
  },
  {
    id: 'ryb093-nie-ma-takich-gorzkich-ez',
    title: 'RYB093. Nie ma takich gorzkich łez',
    filename: 'ryb093-nie-ma-takich-gorzkich-ez.cho'
  },
  {
    id: 'ryb094-panie-my-twoje-dzieci',
    title: 'RYB094. Panie my Twoje dzieci',
    filename: 'ryb094-panie-my-twoje-dzieci.cho'
  },
  {
    id: 'ryb095-nasze-dni',
    title: 'RYB095. Nasze dni',
    filename: 'ryb095-nasze-dni.cho'
  },
  {
    id: 'ryb096-gdybym-nie-mia-ciebie',
    title: 'RYB096. Gdybym nie miał Ciebie',
    filename: 'ryb096-gdybym-nie-mia-ciebie.cho'
  },
  {
    id: 'ryb097-o-tak-tak-tak-panie',
    title: 'RYB097. O tak, tak, tak Panie',
    filename: 'ryb097-o-tak-tak-tak-panie.cho'
  },
  {
    id: 'ryb098-ty-jeste-ska',
    title: 'RYB098. Ty jesteś skałą',
    filename: 'ryb098-ty-jeste-ska.cho'
  },
  {
    id: 'ryb099-wejdmy-do-jego-bram',
    title: 'RYB099. Wejdźmy do Jego bram',
    filename: 'ryb099-wejdmy-do-jego-bram.cho'
  },
  {
    id: 'ryb100-niepojta-aska',
    title: 'RYB100. Niepojęta łaska',
    filename: 'ryb100-niepojta-aska.cho'
  },
  {
    id: 'ryb101-czemu-smutna-duszo-ma',
    title: 'RYB101. Czemuś smutna duszo ma',
    filename: 'ryb101-czemu-smutna-duszo-ma.cho'
  },
  {
    id: 'ryb102-czcijmy-jezusa',
    title: 'RYB102. Czcijmy Jezusa',
    filename: 'ryb102-czcijmy-jezusa.cho'
  },
  {
    id: 'ryb103-zanim-powiem-sowo',
    title: 'RYB103. Zanim powiem słowo',
    filename: 'ryb103-zanim-powiem-sowo.cho'
  },
  {
    id: 'ryb104-kto-zaufal-ci',
    title: 'RYB104. Kto zaufal Ci',
    filename: 'ryb104-kto-zaufal-ci.cho'
  },
  {
    id: 'ryb105-na-twojej-drodze',
    title: 'RYB105. Na Twojej drodze',
    filename: 'ryb105-na-twojej-drodze.cho'
  },
  {
    id: 'ryb106-bd-ci-sawi',
    title: 'RYB106. Będę Cię sławił',
    filename: 'ryb106-bd-ci-sawi.cho'
  },
  {
    id: 'ryb107-odwiecznym-bogiem',
    title: 'RYB107. Odwiecznym Bogiem',
    filename: 'ryb107-odwiecznym-bogiem.cho'
  },
  {
    id: 'ryb108-bogosawi-ci',
    title: 'RYB108. Błogosławię Cię',
    filename: 'ryb108-bogosawi-ci.cho'
  },
  {
    id: 'ryb109-pan-zastpw',
    title: 'RYB109. Pan Zastępów',
    filename: 'ryb109-pan-zastpw.cho'
  },
  {
    id: 'ryb110-ciebie-pragnie-dusza',
    title: 'RYB110. Ciebie pragnie dusza',
    filename: 'ryb110-ciebie-pragnie-dusza.cho'
  },
  {
    id: 'ryb111-panie-zbadae-mnie-i-znasz',
    title: 'RYB111. Panie zbadałeś mnie i znasz',
    filename: 'ryb111-panie-zbadae-mnie-i-znasz.cho'
  },
  {
    id: 'ryb112-objawienie-jana',
    title: 'RYB112. Objawienie Jana',
    filename: 'ryb112-objawienie-jana.cho'
  },
  {
    id: 'ryb113-gdy-bylimy-jeszcze-grzesznikami',
    title: 'RYB113. Gdy byliśmy jeszcze grzesznikami',
    filename: 'ryb113-gdy-bylimy-jeszcze-grzesznikami.cho'
  },
  {
    id: 'ryb114-najwyszy-bg',
    title: 'RYB114. Najwyższy Bóg',
    filename: 'ryb114-najwyszy-bg.cho'
  },
  {
    id: 'ryb115-przyjdcie-radonie',
    title: 'RYB115. Przyjdźcie radośnie',
    filename: 'ryb115-przyjdcie-radonie.cho'
  },
  {
    id: 'ryb116-gono-do-pana-woam',
    title: 'RYB116. Głośno do Pana wołam',
    filename: 'ryb116-gono-do-pana-woam.cho'
  },
  {
    id: 'ryb117-najpikniejszy',
    title: 'RYB117. Najpiękniejszy',
    filename: 'ryb117-najpikniejszy.cho'
  },
  {
    id: 'ryb118-strze-mnie-mj-boe',
    title: 'RYB118. Strzeż mnie mój Boże',
    filename: 'ryb118-strze-mnie-mj-boe.cho'
  },
  {
    id: 'ryb119-szukajcie-pana',
    title: 'RYB119. Szukajcie Pana',
    filename: 'ryb119-szukajcie-pana.cho'
  },
  {
    id: 'ryb120-otwrz-me-oczy-o-panie',
    title: 'RYB120. Otwórz me oczy o Panie',
    filename: 'ryb120-otwrz-me-oczy-o-panie.cho'
  },
  {
    id: 'ryb121-on-istniejc',
    title: 'RYB121. On istniejąc',
    filename: 'ryb121-on-istniejc.cho'
  },
  {
    id: 'ryb122-zmiuj-si-panie',
    title: 'RYB122. Zmiłuj się Panie',
    filename: 'ryb122-zmiuj-si-panie.cho'
  },
  {
    id: 'ryb123-chwale-ma-duszo-mocarza',
    title: 'RYB123. Chwalże, ma duszo, Mocarza',
    filename: 'ryb123-chwale-ma-duszo-mocarza.cho'
  },
  {
    id: 'ryb124-wity',
    title: 'RYB124. Święty',
    filename: 'ryb124-wity.cho'
  },
  {
    id: 'ryb125-ukojenie',
    title: 'RYB125. Ukojenie',
    filename: 'ryb125-ukojenie.cho'
  },
  {
    id: 'ryb126-on-moim-panem',
    title: 'RYB126. On moim Panem',
    filename: 'ryb126-on-moim-panem.cho'
  },
  {
    id: 'ryb127-cay-wiat-niech-pozna',
    title: 'RYB127. Cały świat niech pozna',
    filename: 'ryb127-cay-wiat-niech-pozna.cho'
  },
  {
    id: 'ryb128-postanowiem-pj-za-jezusem',
    title: 'RYB128. Postanowiłem pójść za Jezusem',
    filename: 'ryb128-postanowiem-pj-za-jezusem.cho'
  },
  {
    id: 'ryb129-nadziej-odnalazem-w-nim',
    title: 'RYB129. Nadzieję odnalazłem w Nim',
    filename: 'ryb129-nadziej-odnalazem-w-nim.cho'
  },
  {
    id: 'ryb130-kt-jest-jak-on',
    title: 'RYB130. Któż jest jak ON - Wszystko poddane jest',
    filename: 'ryb130-kt-jest-jak-on---wszystko-poddane-jest.cho'
  },
  {
    id: 'ryb131-przez-dobr-moc-tw-panie',
    title: 'RYB131. Przez dobrą moc Twą Panie',
    filename: 'ryb131-przez-dobr-moc-tw-panie.cho'
  },
  {
    id: 'ryb132-gry-do-gry',
    title: 'RYB132. Góry do góry',
    filename: 'ryb132-gry-do-gry.cho'
  },
  {
    id: 'ryb133-siedem',
    title: 'RYB133. Siedem',
    filename: 'ryb133-siedem.cho'
  }
];

export const getSongById = (id: string): SongMetadata | undefined => {
  return songs.find(song => song.id === id);
};

export const getSongsByTag = (tag: string): SongMetadata[] => {
  return songs.filter(song => song.tags?.includes(tag));
};

export const getSongsByArtist = (artist: string): SongMetadata[] => {
  return songs.filter(song => song.artist?.toLowerCase() === artist.toLowerCase());
};

export const getSongsByKey = (key: string): SongMetadata[] => {
  return songs.filter(song => song.key === key);
};

// Funkcja dodająca tagi 'dod' i 'ryb' dla odpowiednich pieśni
export const updateTagsForSongs = () => {
  songs.forEach(song => {
    if (song.id.startsWith('dod') && !song.tags?.includes('dod')) {
      song.tags = [...(song.tags || []), 'dod'];
    }
    if (song.id.startsWith('ryb') && !song.tags?.includes('ryb')) {
      song.tags = [...(song.tags || []), 'ryb'];
    }
  });
};

// Wywołujemy funkcję przy importowaniu pliku
updateTagsForSongs(); 