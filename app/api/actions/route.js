"use server";

export async function processImage(formData) {
  try {
    const file = formData.get("file");
    if (!file || file.size === 0) {
      return { error: "No file uploaded" };
    }
    // Minimal server-side validation; most processing is client-side
    return {};
  } catch (err) {
    return { error: `Error processing image: ${err.message}` };
  }
}
