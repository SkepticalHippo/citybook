const cities = [
  'san jose', 'santiago', 'san francisco', 'santa rosa', 'san juan', 'sabadell', 'salamanca', 'salt lake city', 'salinas', 'salem', 'sausalito', 'taipei', 'tel aviv', 'tempe', 'termez', 'temuco', 'tiajuna', 'tieling', 'thousand oaks', 'thunder bay', 'tokyo', 'tulsa',
];

export const findByName = (name) => {
  if (!name) {
    return [];
  }

  return cities.filter((city) => city.toLowerCase().startsWith(name.toLowerCase()));
};
