import { useState, useTransition } from "react";
import { toast } from "sonner";

const REPLICATE_API_TOKEN = process.env.REPLICATE_API_TOKEN; // Store in .env.local

const processWithReplicate = async (imageFile) => {
  try {
    // Step 1: Upload image to a temporary URL or use a base64 string
    const formData = new FormData();
    formData.append("image", imageFile);

    // Step 2: Call Replicate API with a background removal model
    const response = await fetch("https://api.replicate.com/v1/predictions", {
      method: "POST",
      headers: {
        Authorization: `Token ${REPLICATE_API_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        version:
          "b4a8ce3f6e0f1a8a723af3073b90551c73c4a7e4b2a7d2f2f2d1f2b3f4a5b6c7", // Example: MODNet or u2net model version ID
        input: {
          image: URL.createObjectURL(imageFile), // Or use base64 if required
        },
      }),
    });

    const prediction = await response.json();
    if (!prediction.id) throw error("Failed to start prediction");

    // Step 3: Poll for result
    let result;
    while (true) {
      const pollResponse = await fetch(
        `https://api.replicate.com/v1/predictions/${prediction.id}`,
        {
          headers: { Authorization: `Token ${REPLICATE_API_TOKEN}` },
        }
      );
      result = await pollResponse.json();
      if (result.status === "succeeded") break;
      if (result.status === "failed") throw new Error("Prediction failed");
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Wait 1s before polling
    }

    // Step 4: Return the processed image URL
    return result.output; // URL to the image with background removed
  } catch (error) {
    console.error("Replicate API error:", error);
    throw new Error("Failed to process image with Replicate");
  }
};

// Update handleSubmit to use Replicate
const handleSubmit = async (event) => {
  event.preventDefault();
  setError(null);

  const formData = new FormData(event.target);
  let imgUrl = null;
  let bgImgUrl = null;

  startTransition(async () => {
    try {
      const file = formData.get("file");
      if (!file || file.size === 0) {
        setError("No file uploaded");
        return;
      }

      const removeBg = formData.get("remove_bg") === "on";
      const backgroundOption =
        formData.get("background_option") || "transparent";
      const backgroundColor = formData.get("background_color") || "#ffffff";
      const bgFile = formData.get("background_file");

      toast.success("Processing Image...");
      imgUrl = URL.createObjectURL(file);

      const img = new window.Image();
      img.src = imgUrl;

      await new Promise((resolve, reject) => {
        img.onload = resolve;
        img.onerror = reject;
      });

      let foregroundBase64 = null;

      if (removeBg) {
        toast.info("Removing background with Replicate AI...");
        foregroundBase64 = await processWithReplicate(file); // Use Replicate API
      } else {
        // Same logic as before for non-background-removal cases
        const canvas = document.createElement("canvas");
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext("2d");

        if (backgroundOption === "transparent") {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
        } else if (backgroundOption === "color") {
          ctx.fillStyle = backgroundColor;
          ctx.fillRect(0, 0, canvas.width, canvas.height);
        }

        ctx.drawImage(img, 0, 0);
        foregroundBase64 = canvas.toDataURL("image/png");
      }

      // Handle custom background image (same as original)
      let outputBase64 = foregroundBase64;
      if (backgroundOption === "image" && bgFile && bgFile.size > 0) {
        const bgImg = new window.Image();
        bgImgUrl = URL.createObjectURL(bgFile);
        bgImg.src = bgImgUrl;

        await new Promise((resolve, reject) => {
          bgImg.onload = resolve;
          bgImg.onerror = reject;
        });

        const fgImg = new window.Image();
        fgImg.src = foregroundBase64;

        await new Promise((resolve, reject) => {
          fgImg.onload = resolve;
          fgImg.onerror = reject;
        });

        const compositeCanvas = document.createElement("canvas");
        compositeCanvas.width = Math.max(bgImg.width, fgImg.width);
        compositeCanvas.height = Math.max(bgImg.height, fgImg.height);
        const compositeCtx = compositeCanvas.getContext("2d");

        compositeCtx.drawImage(
          bgImg,
          0,
          0,
          compositeCanvas.width,
          compositeCanvas.height
        );
        const fgWidth = fgImg.width;
        const fgHeight = fgImg.height;
        const xOffset = (compositeCanvas.width - fgWidth) / 2;
        const yOffset = (compositeCanvas.height - fgHeight) / 2;

        compositeCtx.drawImage(fgImg, xOffset, yOffset, fgWidth, fgHeight);
        outputBase64 = compositeCanvas.toDataURL("image/png");
      }

      setPreviewImage(outputBase64);
      setForegroundImage(foregroundBase64);
      setDownloadReady(true);
      toast.success("Image converted successfully!");
    } catch (err) {
      console.error("Image processing error:", err);
      setError(`Error processing image: ${err.message}`);
      toast.error("Failed to process image");
    } finally {
      if (imgUrl) URL.revokeObjectURL(imgUrl);
      if (bgImgUrl) URL.revokeObjectURL(bgImgUrl);
    }
  });
};
