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

export type JobItemApiResponse = {
  public: boolean;
  jobItem: JobItemExtended;
};

export type JobItemExtended = JobItem & {
  description: string;
  qualifications: string[];
  reviews: string[];
  duration: string;
  salary: string;
  location: string;
  coverImgURL: string;
  companyURL: string;
};
// export type JobItemExtended =  {
//   id:             number;
//   description:    string;
//   qualifications: string[];
//   reviews:        string[];
//   title:          string;
//   badgeLetters:   string;
//   company:        string;
//   duration:       string;
//   salary:         string;
//   location:       string;
//   relevanceScore: number;
//   daysAgo:        number;
//   coverImgURL:    string;
//   companyURL:     string;
// }

export type SortBy = 'relevant' | 'recent';
export type PageDirection = 'next' | 'previous';
