export interface Stats {
  ID: number;
  CreatedAt: string;
  UpdatedAt: string;
  DeletedAt: string | null;
  user_id: number;
  date: string;
  duration_min: number;
  feeling_calm: number;
  feeling_relax: number;
  feeling_focus: number;
  feeling_anxiety: number;
}

export interface Summary {
  total_anxiety: number;
  total_calm: number;
  total_focus: number;
  total_minutes: number;
  total_relax: number;
}

export interface StatsResponse {
  data: {
    stats: Stats[];
    summary: Summary;
  };
  status: string;
}
