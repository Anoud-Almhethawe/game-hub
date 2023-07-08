import { create } from "zustand";

interface GameQuery {
  genreId?: number;
  platformId?: number;
  selectedSort?: string;
  searchText?: string;
}

interface GameQueryStore {
  gameQuery: GameQuery;
  setSearchText: (searchText: string) => void;
  setselectedSort: (selectedSort: string) => void;
  setgenreId: (genreId: number) => void;
  setPlatformId: (platformId: number) => void;
}

const useGameQueryStore = create<GameQueryStore>(set => ({
  gameQuery: {},
  setSearchText: (searchText: string) =>
    set(() => ({ gameQuery: { searchText } })),
  setselectedSort: (selectedSort: string) =>
    set(store => ({ gameQuery: { ...store.gameQuery, selectedSort } })),
  setgenreId: (genreId: number) =>
    set(store => ({ gameQuery: { ...store.gameQuery, genreId } })),
  setPlatformId: (platformId: number) =>
    set(store => ({ gameQuery: { ...store.gameQuery, platformId } })),
}));

export default useGameQueryStore;
