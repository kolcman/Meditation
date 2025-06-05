export interface Meditation {
  ID: number;
  CreatedAt: Date;
  UpdatedAt: Date;
  DeletedAt: null;
  title: string;
  description: string;
  duration_min: number;
}

export interface MeditationResponse {
  data: {
    meditations: Meditation[];
  };
}
