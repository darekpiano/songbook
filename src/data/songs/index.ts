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