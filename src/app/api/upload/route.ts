import { NextRequest, NextResponse } from "next/server";
import { writeFile, mkdir } from "fs/promises";
import path from "path";
import { existsSync } from "fs";

export async function POST(req: NextRequest) {
  try {
    const data = await req.formData();
    const file: File | null = data.get("file") as unknown as File;

    if (!file) {
      return NextResponse.json({ success: false, error: "No file provided" }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    
    // Create uploads directory if it doesn't exist
    const uploadDir = path.join(process.cwd(), "public", "uploads");
    if (!existsSync(uploadDir)) {
      await mkdir(uploadDir, { recursive: true });
    }

    // Generate unique filename
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1E9);
    const filename = uniqueSuffix + "-" + file.name.replace(/[^a-zA-Z0-9.-]/g, "_");
    const filepath = path.join(uploadDir, filename);

    // Save file
    await writeFile(filepath, buffer);

    // Return the public URL
    const publicUrl = `/uploads/${filename}`;
    
    return NextResponse.json({ success: true, url: publicUrl });
  } catch (error) {
    console.error("Error uploading file:", error);
    return NextResponse.json({ success: false, error: "Upload failed" }, { status: 500 });
  }
}
