export interface IApiRepository {
  Get: <T>(endpoint: string, params?: Record<string, string>) => Promise<T>;
}
