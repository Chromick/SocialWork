// Aula 9: descrevemos o formato do JSON antes de usar.
export type ApiUser = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  address: { city: string };
  company: { name: string; catchPhrase: string };
};
