export interface Dandelion {
  timestamp: string;
  time: string;
  lang: string;
  langConfidence?: number;
  text?: string;
  annotations: Annotation[];
  topEntities?: TopEntity[];
}

export interface Annotation {
  id: string;
  title: string;
  uri: string;
  label: string;
  confidence: string;
  spot: string;
  start: string;
  end: string;
  types?: string[];
  categories?: string[];
  abstract?: string;
  lod?: Lod;
  alternateLabels?: string[];
  image?: Image;
}

export interface Lod {
  wikipedia: string;
  dbpedia: string;
}

export interface Image {
  full?: string;
  thumbnail?: string;
}

export interface TopEntity {
  id: string;
  uri: string;
  score: string;
}

export interface TextSimilarity{
  time: number,
  similarity: number,
  lang: string,
  langConfidence: string,
  timestamp: string
}
export interface LanguageDetection{
  timestamp: string,
  time: number,
  text: string,
  detectedLangs: DetectedLangs[]
}

export interface DetectedLangs{
  lang: string,
  confidence: number
}

export interface SentimentAnalysis {
  timestamp: string;
  time: string;
  lang: string;
  langConfidence?: number;
  text?: string;
  sentiment: Sentiment;
}

export interface Sentiment {
  score: number;
  type: string
}
