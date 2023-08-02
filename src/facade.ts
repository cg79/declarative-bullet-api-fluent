export const BULLET_ROUTE = '/bulletapi/private/bullet/v1';

export interface BulletAuthentication {
  authentication: string;
  serverUrl: string;
}

export interface CreateUserRequest {
  email: string;
  password: string;
  nick?: string;
  firstName?: string;
  lastName?: string;
  phone?: string;
  security?: number;
}

export interface DeltaFunctionRequest {
  _id?: string;
  guid: string;
  module: string;
  method: string;

  functiontext: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface ForgotPasswordRequest {
  email: string;
}

export interface ResetPasswordRequest {
  reset: string;
}

export interface ConfirmUserRequest {
  code: string;
}

export interface ChangePasswordRequest {
  password: string;
}

export interface PageRequest {
  page: {
    itemsOnPage: number;
    pageNo: number;
  };

  sort?: any;
}

export interface DeltaFunctionRequest {
  _id?: string;
  module: string;
  method: string;
  functiontext: string;
  hasBrackets?: boolean;

  guid: string;
}

export interface RemoveFunctionRequest {
  method?: string;
  _id?: string;

  guid?: string;
}
