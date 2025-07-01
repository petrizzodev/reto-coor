export interface GuiaSuccessResponse {
  codigo_remision: string;
  [key: string]: any;
}

export interface GuiaErrorResponse {
  isError: boolean;
  message: string;
  code: string;
  statusCode: number;
  cause: string;
} 