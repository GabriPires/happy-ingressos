export const cnpjMask = (value: string) => {
  return value
    .replace(/\D+/g, '') // não deixa ser digitado nenhuma letra
    .replace(/(\d{2})(\d)/, '$1.$2') // captura 2 grupos de número o primeiro com 2 dígitos e o segundo de com 3 dígitos, apos capturar o primeiro grupo ele adiciona um ponto antes do segundo grupo de número
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1/$2') // captura 2 grupos de número o primeiro e o segundo com 3 dígitos, separados por /
    .replace(/(\d{4})(\d)/, '$1-$2')
    .replace(/(-\d{2})\d+?$/, '$1'); // captura os dois últimos 2 números, com um - antes dos dois números
};

export const cpfMask = (value: string) => {
  return value
    .replace(/\D/g, '') // substitui qualquer carácter que nao seja numero por nada
    .replace(/(\d{3})(\d)/, '$1.$2') // captura 2 grupos de numero o primeiro de 3 e o segundo de 1, apos capturar o primeiro grupo ele adiciona um ponto antes do segundo grupo de numero
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d{1,2})/, '$1-$2')
    .replace(/(-\d{2})\d+?$/, '$1'); // captura 2 números seguidos de um traço e não deixa ser digitado mais nada
};
