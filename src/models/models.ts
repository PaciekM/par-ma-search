export interface Document {
  text: string;
  title: string;
}

export enum SearchType {
  TITLE = "TITLE",
  TEXT = "TEXT",
  MIX = "MIX",
  TITLE_TEXT = "TITLE_TEXT",
  TEXT_TITLE = "TEXT_TITLE",
}
