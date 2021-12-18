export interface Document {
  text: string;
  title: string;
}

export enum SearchType {
  TITLE = "TITLE",
  TEXT = "TEXT",
  MIX = "MIX",
}
