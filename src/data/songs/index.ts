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
    tags: ['worship', 'faith', 'praise'],
    filename: 'przez-wiare.cho'
  },
  {
    id: 'przez-dobra-moc',
    title: 'Przez dobrą moc Twą, Panie',
    artist: 'Dietrich Bonhoeffer',
    year: 1944,
    key: 'C',
    tags: ['worship', 'praise', 'protection'],
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
    tags: ['worship', 'praise', 'gospel'],
    filename: 'our-rescuer.cho'
  },
  // DOD songs
  {
    id: 'dod001-oceany',
    title: 'Oceany',
    artist: 'Hillsong',
    key: 'Am',
    tags: ['worship', 'trust', 'faith'],
    filename: 'dod001-oceany.cho'
  },
  {
    id: 'dod002-zostawiam-to-co-za-mn',
    title: 'Zostawiam to co za mną',
    tags: ['worship', 'dedication'],
    filename: 'dod002-zostawiam-to-co-za-mn.cho'
  },
  {
    id: 'dod003-wod-zamienie-w-wino',
    title: 'Wodę zamieniłeś w wino',
    artist: 'Chris Tomlin, Jesse Reeves, Jonas Myrin, Matt Redman',
    tags: ['worship', 'miracles'],
    filename: 'dod003-wod-zamienie-w-wino.cho'
  },
  {
    id: 'dod004-kime-jestem-by-nieba-krl',
    title: 'Kimże jestem by nieba Król',
    tags: ['worship', 'humility'],
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
    tags: ['worship', 'creator'],
    filename: 'dod006-stwrco-istnienia.cho'
  },
  {
    id: 'dod007-chrystus-to-mj-pan',
    title: 'Chrystus to mój Pan',
    tags: ['worship', 'lordship'],
    filename: 'dod007-chrystus-to-mj-pan.cho'
  },
  {
    id: 'dod008-w-ciemnoci-pod-ciarem',
    title: 'W ciemności pod ciężarem',
    tags: ['worship', 'rescue'],
    filename: 'dod008-w-ciemnoci-pod-ciarem.cho'
  },
  {
    id: 'dod009-ty-przynosisz-mi-zwycistwa-pie',
    title: 'Ty przynosisz mi zwycięstwa pieśń',
    tags: ['worship', 'victory'],
    filename: 'dod009-ty-przynosisz-mi-zwycistwa-pie.cho'
  },
  {
    id: 'dod010-serce-sugi',
    title: 'Serce sługi',
    tags: ['worship', 'service'],
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
    tags: ['worship', 'kingship'],
    filename: 'dod012-krl-wszechwiatw.cho'
  },
  {
    id: 'dod013-ty-bye-przed-stworzeniem',
    title: 'Ty byłeś przed stworzeniem',
    tags: ['worship', 'creator'],
    filename: 'dod013-ty-bye-przed-stworzeniem.cho'
  },
  {
    id: 'dod014-wszystko-co-mam',
    title: 'Wszystko co mam',
    tags: ['worship', 'offering'],
    filename: 'dod014-wszystko-co-mam.cho'
  },
  {
    id: 'dod015-zaufaj-serce-me',
    title: 'Zaufaj serce me',
    tags: ['worship', 'trust'],
    filename: 'dod015-zaufaj-serce-me.cho'
  },
  {
    id: 'dod016-prawda-jedyna',
    title: 'Prawda jedyna',
    tags: ['worship', 'truth'],
    filename: 'dod016-prawda-jedyna.cho'
  },
  {
    id: 'dod017-odnowa',
    title: 'Odnowa',
    tags: ['worship', 'renewal'],
    filename: 'dod017-odnowa.cho'
  },
  {
    id: 'dod018-dod018a-broken-vessels-amazing-grace',
    title: 'Broken Vessels - Amazing Grace',
    tags: ['worship', 'grace', 'english'],
    filename: 'dod018-dod018a---broken-vessels-amazing-grace.cho'
  },
  {
    id: 'dod018-dod018b-gliniane-naczynia-broken-vessels',
    title: 'Gliniane naczynia - Broken Vessels',
    tags: ['worship', 'grace'],
    filename: 'dod018-dod018b---gliniane-naczynia---broken-vessels.cho'
  },
  {
    id: 'dod019-w-to-wierz-this-i-believe',
    title: 'W to wierzę - This I Believe',
    tags: ['worship', 'faith'],
    filename: 'dod019-w-to-wierz---this-i-believe.cho'
  },
  {
    id: 'dod020-dod020b-latarni-ty',
    title: 'Latarnią Ty',
    tags: ['worship', 'guidance'],
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
    tags: ['worship', 'dedication'],
    filename: 'dod022-dla-ciebie-yc.cho'
  },
  {
    id: 'dod023-chc-widzie-ci',
    title: 'Chcę widzieć Cię',
    tags: ['worship', 'seeking'],
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
    tags: ['worship', 'kingship'],
    filename: 'dod026-krlw-krl.cho'
  },
  {
    id: 'dod027-jezu-panuj-zawsze',
    title: 'Jezu panuj zawsze',
    tags: ['worship', 'lordship'],
    filename: 'dod027-jezu-panuj-zawsze.cho'
  },
  {
    id: 'dod028-zbawiciel-on-porusza-gry',
    title: 'Zbawiciel On porusza góry',
    tags: ['worship', 'power'],
    filename: 'dod028-zbawiciel-on-porusza-gry.cho'
  },
  {
    id: 'dod029-godzien-chwaly',
    title: 'Godzien chwały',
    tags: ['worship', 'worthiness'],
    filename: 'dod029-godzien-chwaly.cho'
  },
  {
    id: 'dod030-widze-dom',
    title: 'Widzę DOM',
    artist: 'Piesniopisarze',
    tags: ['worship', 'home'],
    filename: 'dod030-widze-dom.cho'
  },
  {
    id: 'dod031-jestem-tego-pewien',
    title: 'Jestem tego pewien',
    tags: ['worship', 'assurance'],
    filename: 'dod031-jestem-tego-pewien.cho'
  },
  {
    id: 'dod032-jedyna-droga',
    title: 'Jedyna droga',
    artist: 'CSM',
    tags: ['worship', 'way'],
    filename: 'dod032-jedyna-droga.cho'
  },
  {
    id: 'dod033-jeste-ktry-jeste',
    title: 'Jesteś który jesteś',
    tags: ['worship', 'attributes'],
    filename: 'dod033-jeste-ktry-jeste.cho'
  },
  {
    id: 'dod034-o-przyjdcie-do-tronu',
    title: 'O przyjdźcie do tronu',
    tags: ['worship', 'invitation'],
    filename: 'dod034-o-przyjdcie-do-tronu.cho'
  },
  {
    id: 'dod035-ty-pocztkiem-jest',
    title: 'Ty początkiem jesteś',
    tags: ['worship', 'beginning'],
    filename: 'dod035-ty-pocztkiem-jest.cho'
  },
  {
    id: 'dod036-do-stolu-przyjdz',
    title: 'Do stołu przyjdź',
    tags: ['worship', 'communion'],
    filename: 'dod036-do-stolu-przyjdz.cho'
  },
  {
    id: 'dod037-woda-zycia',
    title: 'Woda życia',
    tags: ['worship', 'life'],
    filename: 'dod037-woda-zycia.cho'
  },
  {
    id: 'dod038-jego-milosc',
    title: 'Jego miłość',
    tags: ['worship', 'love'],
    filename: 'dod038-jego-milosc.cho'
  },
  // DZ - Pieśni dla dzieci
  {
    id: 'dz01-mrwka',
    title: 'DZ01. Mrówka',
    artist: 'Autor nieznany',
    tags: ['dzieci', 'nauka'],
    filename: 'dz01-dz01-mrwka.cho'
  },
  {
    id: 'dz02-bo-gry-mog-ustpi',
    title: 'DZ02. Bo góry mogą ustąpić',
    tags: ['dzieci', 'obietnica'],
    filename: 'dz02-dz02-bo-gry-mog-ustpi.cho'
  },
  {
    id: 'dz03-nie-chc-sluy-w-piechocie',
    title: 'DZ03. Nie chcę służyć w piechocie',
    tags: ['dzieci', 'służba'],
    filename: 'dz03-dz03-nie-chc-sluy-w-piechocie.cho'
  },
  {
    id: 'dz04-nie-boj-si',
    title: 'DZ04. Nie bój się',
    tags: ['dzieci', 'zaufanie'],
    filename: 'dz04-dz04-nie-boj-si.cho'
  },
  {
    id: 'dz05-na-jeziorze',
    title: 'DZ05. Na jeziorze',
    tags: ['dzieci', 'historia'],
    filename: 'dz05-dz05-na-jeziorze.cho'
  },
  {
    id: 'dz06-ani-ty-ani-ja',
    title: 'DZ06. Ani ty ani ja',
    tags: ['dzieci', 'wspólnota'],
    filename: 'dz06-dz06-ani-ty-ani-ja.cho'
  },
  {
    id: 'dz07-wdowa-z-sarepty',
    title: 'DZ07. Wdowa z Sarepty',
    tags: ['dzieci', 'historia'],
    filename: 'dz07-dz07-wdowa-z-sarepty.cho'
  },
  {
    id: 'dz08-bg-nie-umar',
    title: 'DZ08. Bóg nie umarł',
    tags: ['dzieci', 'wiara'],
    filename: 'dz08-dz08-bg-nie-umar.cho'
  },
  {
    id: 'dz09-jeste-krlem',
    title: 'DZ09. Jesteś Królem',
    tags: ['dzieci', 'uwielbienie'],
    filename: 'dz09-dz09-jeste-krlem.cho'
  },
  {
    id: 'dz10-szumi-w-lesie',
    title: 'DZ10. Szumi w lesie',
    tags: ['dzieci', 'natura'],
    filename: 'dz10-dz10-szumi-w-lesie.cho'
  },
  {
    id: 'dz11-ruszaj-ruszaj-tam',
    title: 'DZ11. Ruszaj, ruszaj tam',
    tags: ['dzieci', 'akcja'],
    filename: 'dz11-dz11-ruszaj-ruszaj-tam.cho'
  },
  {
    id: 'dz12-uwielbiam-imi-twoje',
    title: 'DZ12. Uwielbiam imię Twoje',
    tags: ['dzieci', 'uwielbienie'],
    filename: 'dz12-dz12-uwielbiam-imi-twoje.cho'
  },
  {
    id: 'dz13-pan-jest-pasterzem-moim',
    title: 'DZ13. Pan jest Pasterzem moim',
    tags: ['dzieci', 'psalm'],
    filename: 'dz13-dz13-pan-jest-pasterzem-moim.cho'
  },
  {
    id: 'dz14-a-kiedy-myl',
    title: 'DZ14. A kiedy myślę',
    tags: ['dzieci', 'refleksja'],
    filename: 'dz14-dz14-a-kiedy-myl.cho'
  },
  {
    id: 'dz15-dungla',
    title: 'DZ15. Dżungla',
    tags: ['dzieci', 'zabawa'],
    filename: 'dz15-dz15-dungla.cho'
  },
  {
    id: 'dz16-czy-wy-wiecie',
    title: 'DZ16. Czy wy wiecie',
    tags: ['dzieci', 'pytanie'],
    filename: 'dz16-dz16-czy-wy-wiecie.cho'
  },
  {
    id: 'dz17-bg-stworzy-wiat',
    title: 'DZ17. Bóg stworzył świat',
    tags: ['dzieci', 'stworzenie'],
    filename: 'dz17-dz17-bg-stworzy-wiat.cho'
  },
  {
    id: 'dz18-flaga',
    title: 'DZ18. Flaga',
    tags: ['dzieci', 'symbol'],
    filename: 'dz18-dz18-flaga.cho'
  },
  {
    id: 'dz19-noe',
    title: 'DZ19. Noe',
    tags: ['dzieci', 'historia'],
    filename: 'dz19-dz19-noe.cho'
  },
  {
    id: 'dz20-bd-ostrone-moje-oczko',
    title: 'DZ20. Bądź ostrożne moje oczko',
    tags: ['dzieci', 'ostrożność'],
    filename: 'dz20-dz20-bd-ostrone-moje-oczko.cho'
  },
  {
    id: 'dz21-nowina',
    title: 'DZ21. Nowina',
    tags: ['dzieci', 'ewangelia'],
    filename: 'dz21-dz21-nowina.cho'
  },
  {
    id: 'dz21-w-sercu-swym',
    title: 'DZ21. W sercu swym',
    tags: ['dzieci', 'serce'],
    filename: 'dz21-dz21-w-sercu-swym.cho'
  },
  {
    id: 'dz22-boa-rado',
    title: 'DZ22. Boża radość',
    tags: ['dzieci', 'radość'],
    filename: 'dz22-dz22-boa-rado.cho'
  },
  {
    id: 'dz23-chc-przestpi-jego-prg',
    title: 'DZ23. Chcę przestąpić Jego próg',
    tags: ['dzieci', 'uwielbienie'],
    filename: 'dz23-dz23-chc-przestpi-jego-prg.cho'
  },
  {
    id: 'dz24-bg-dobry-dla-mnie-jest',
    title: 'DZ24. Bóg dobry dla mnie jest',
    tags: ['dzieci', 'dobroć'],
    filename: 'dz24-dz24-bg-dobry-dla-mnie-jest.cho'
  },
  {
    id: 'dz25-sieje-je',
    title: 'DZ25. Sieję, ję',
    tags: ['dzieci', 'praca'],
    filename: 'dz25-dz25sieje-je.cho'
  },
  {
    id: 'dz26-wity-umiechnity',
    title: 'DZ26. Święty uśmiechnięty',
    tags: ['dzieci', 'radość'],
    filename: 'dz26-dz26-wity-umiechnity.cho'
  },
  {
    id: 'dz27-w-sercu-swym',
    title: 'DZ27. W sercu swym',
    tags: ['dzieci', 'serce'],
    filename: 'dz27-dz27-w-sercu-swym.cho'
  },
  {
    id: 'dz28-bo-mj-pan-drog-zna',
    title: 'DZ28. Bo mój Pan drogę zna',
    tags: ['dzieci', 'przewodnictwo'],
    filename: 'dz28-dz28-bo-mj-pan-drog-zna.cho'
  },
  {
    id: 'dz29-zacheusz',
    title: 'DZ29. Zacheusz',
    tags: ['dzieci', 'historia'],
    filename: 'dz29-dz29-zacheusz.cho'
  },
  {
    id: 'dz30-cho-jestem-may-jak-palec',
    title: 'DZ30. Choć jestem mały jak palec',
    tags: ['dzieci', 'wartość'],
    filename: 'dz30-dz30-cho-jestem-may-jak-palec.cho'
  },
  {
    id: 'dz31-oto-ja-polij-mnie',
    title: 'DZ31. Oto ja poślij mnie',
    tags: ['dzieci', 'misja'],
    filename: 'dz31-dz31-oto-ja-polij-mnie.cho'
  },
  {
    id: 'dz32-on-jest-wiatem',
    title: 'DZ32. On jest światem',
    tags: ['dzieci', 'światło'],
    filename: 'dz32-dz32-on-jest-wiatem.cho'
  },
  {
    id: 'dz33-krl',
    title: 'DZ33. Król',
    tags: ['dzieci', 'królestwo'],
    filename: 'dz33-dz33-krl.cho'
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