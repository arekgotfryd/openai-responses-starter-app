// Functions mapping to tool calls
// Define one function per tool call - each tool call should have a matching function
// Parameters for a tool call are passed as an object to the corresponding function
export const get_movie_openingweekend = async ({
  movie,
}: {
  movie: string;
}) => {
  const res = await fetch(
    `/api/functions/get_movie_openingweekend?movie=${movie}`
  ).then((res) => res.json());

  return res;
};

export const get_weather = async ({
  location,
  unit,
}: {
  location: string;
  unit: string;
}) => {
  const res = await fetch(
    `/api/functions/get_weather?location=${location}&unit=${unit}`
  ).then((res) => res.json());

  return res;
};


export const functionsMap = {
  // get_weather: get_weather,
  get_movie_openingweekend: get_movie_openingweekend,
};
