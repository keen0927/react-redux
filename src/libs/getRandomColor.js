export default function getRandomColor() {
  const colors = [
    'olive',
    'red',
    'blue',
    'green',
    'purple'
  ];

  const random = Math.floor(Math.random() * 6);

  return colors[random];
}
