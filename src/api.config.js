export const IP_DATA = ip =>
  `https://geo.ipify.org/api/v2/country?apiKey=at_B7rSfAiNPymuYCflTJ6eV359U5CxH&ipAddress=${ip}`;

export const DOMAIN_DATA = domain =>
  `https://geo.ipify.org/api/v2/country,city?apiKey=at_B7rSfAiNPymuYCflTJ6eV359U5CxH&domain=${domain}`;
