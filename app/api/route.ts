export async function GET(request: Request) {
  return new Response(JSON.stringify({ message: "Olá mundo!" }), {
    status: 200,
  });
}
