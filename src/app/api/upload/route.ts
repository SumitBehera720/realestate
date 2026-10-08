import { NextRequest, NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: "bsu0beoj",
  api_key: "838987186976411",
  api_secret: "uQFzzqnZWJLhzJmDN8NE3uibP1E"
});

export async function POST(req: NextRequest) {
  try {
    const data = await req.formData();
    const file: File | null = data.get("file") as unknown as File;

    if (!file) {
      return NextResponse.json({ success: false, error: "No file provided" }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Convert buffer to data URI
    const base64Data = buffer.toString("base64");
    const mimeType = file.type || "image/jpeg";
    const fileUri = `data:${mimeType};base64,${base64Data}`;

    // Upload to Cloudinary
    const uploadResponse = await cloudinary.uploader.upload(fileUri, {
      folder: "realesate",
    });

    return NextResponse.json({ 
      success: true, 
      url: uploadResponse.secure_url, 
      fileUrl: uploadResponse.secure_url 
    });
  } catch (error) {
    console.error("Error uploading file:", error);
    return NextResponse.json({ success: false, error: "Upload failed" }, { status: 500 });
  }
}
