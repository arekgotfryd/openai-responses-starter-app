export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const movie = searchParams.get("movie");
    const url = `https://boxoffice-api.arekgofi.workers.dev/numbers?movie=${movie}`;
    console.log("Fetching box office data for a url:", url);
    if (!movie) {
      return new Response(JSON.stringify({ error: "Missing movie parameter" }), {
        status: 400,
      });
    }

    // 1. Get coordinates for the city
    const response = await fetch(url);
    const data = await response.json();

    if (!data.length) {
      return new Response(JSON.stringify({ error: "No actual data yet" }), {
        status: 404,
      });
    }

    return new Response(JSON.stringify({ data }), {
      status: 200,
    });
  } catch (error) {
    console.error("Error getting movie box office data:", error);
    return new Response(JSON.stringify({ error: "Error getting movie box office data" }), {
      status: 500,
    });
  }
}
