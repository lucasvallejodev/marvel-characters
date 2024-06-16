export type ApiResponse<T> = {
  code: number;
  status: string;
  data: T;
};
