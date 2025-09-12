import { NextResponse } from "next/server";
import cloudinary from "cloudinary";

export const runtime = "nodejs";

cloudinary.v2.config({
  cloud_name: "duvougrqx",
  api_key: "513133278582537",
  api_secret: "0UgeZPnsrmRfbWu-u8eZxo-W0uk",
  // cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  // api_key: process.env.CLOUDINARY_API_KEY,
  // api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function POST(req) {
  const data = await req.formData();
  const file = data.get("file");
  if (!file) {
    return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
  }
  const buffer = Buffer.from(await file.arrayBuffer());
  // Convert buffer to base64 for Cloudinary upload
  const base64 = buffer.toString("base64");
  const dataUri = `data:${file.type};base64,${base64}`;
  try {
    const result = await cloudinary.v2.uploader.upload(dataUri, {
      folder: "figmaUploads",
    });
    return NextResponse.json({ url: result.secure_url });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
