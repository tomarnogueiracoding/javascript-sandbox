const socials = ['Twitter', 'LinkedIn', 'Facebook', 'Instagram'];

socials.forEach((element, index, arr) =>
  console.log(`${index} - ${element}`, arr),
);

function logSocials(social) {
  console.log(social);
}

socials.forEach(logSocials);

const socialObjs = [
  { name: 'Twitter', url: 'https://twitter.com' },
  { name: 'Instagram', url: 'https://instagram.com' },
  { name: 'Facebook', url: 'https://facebook.com' },
  { name: 'LinkedIn', url: 'https://linkedIn.com' },
];

socialObjs.forEach((element) => console.log(element.url));
