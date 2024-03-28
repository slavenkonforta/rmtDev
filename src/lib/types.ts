export type JobItemsApiResponse = {
  public: boolean;
  sorted: boolean;
  jobItems: JobItem[];
};

export type JobItem = {
  id: number;
  title: string;
  badgeLetters: string;
  company: string;
  relevanceScore: number;
  daysAgo: number;
  badgeBgColor?: string;
};

export type SortBy = 'relevant' | 'recent';
