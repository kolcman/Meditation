export interface Stats {
  data: {
    stats: [];
    summary: {
      total_anxiety: number;
      total_calm: number;
      total_focus: number;
      total_minutes: number;
      total_relax: number;
    };
  };
  status: string;
}

export interface State {
  type: string;
  value: number;
}
