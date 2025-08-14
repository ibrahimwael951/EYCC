export interface register {
  fullname: string;
  email: string;
  phone: string;
  governorate: string;
  school: string;
  current_grade: string;
  ambassador_code: string;
  receive_updates?: boolean;

  recaptcha_response: string;
}

export interface ambassadorRegister {
  fullname_en: string;
  email: string;
  phone: string;
  governorate: string;
  role_title: string;
  birthday: string;
  password: string;

  recaptcha_response: string;
}
export interface ambassadorLogin {
  email: string;
  password: string;

  recaptcha_response: string;
}

export interface admin {
  username: string;
  password: string;
}

export const API = process.env.NEXT_PUBLIC_API;
export const SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
