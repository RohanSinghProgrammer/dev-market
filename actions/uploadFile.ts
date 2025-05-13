"use server";

import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error("Missing Supabase environment variables.");
}

const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: { persistSession: false },
});

export async function uploadFile(
  file: File
): Promise<{ publicUrl: string } | null> {
  try {
    const filePath = `${file.name}`;
    const { data, error } = await supabase.storage
      .from("uploads")
      .upload(filePath, file, {
        contentType: file.type,
        upsert: true,
      });

    if (error) throw error;

    // Retrieve Public URL
    const { data: urlData } = supabase.storage
      .from("uploads")
      .getPublicUrl(filePath);
    return { publicUrl: urlData.publicUrl };
  } catch (error) {
    console.error("Error uploading file:", (error as Error).message);
    return null;
  }
}
