import { revalidatePath } from "next/cache";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const token = searchParams.get("token");

  if (token !== process.env.REVALIDATE_TOKEN) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  revalidatePath("/");
  return Response.json({ revalidated: true });
}