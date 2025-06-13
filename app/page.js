// import Link from "next/link";
// import Image from "next/image";

// export default function Home() {
//   return (
//     <div className="container">
//       <h1 className="text-5xl font-bold mb-6 text-shadow-md">
//         Welcome to Image Converter
//       </h1>
//       <p className="text-xl leading-7 mb-8 text-gray-200 max-w-md mx-auto">
//         Effortlessly convert any image to PNG or remove backgrounds to create
//         transparent images with our simple and fast tool.
//       </p>
//       <Link href="/converter" className="btn">
//         Start Converting
//       </Link>
//       <div className="preview-container">
//         <Image
//           src="/front.jpg"
//           alt="Sample Image"
//           width={600}
//           height="400"
//           className="preview-img"
//         />
//       </div>
//     </div>
//   );
// }

// "use client";

// import Link from "next/link";
// import Image from "next/image";
// import { motion } from "framer-motion";

// export default function Home() {
//   return (
//     <motion.div
//       className="container"
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.8 }}
//     >
//       <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-shadow-md">
//         Welcome to Image Converter
//       </h1>
//       <p className="text-lg sm:text-xl leading-7 mb-8 text-gray-200">
//         Effortlessly convert any image to PNG or remove backgrounds to create
//         transparent images with our simple and fast tool.
//       </p>
//       <Link href="/converter" className="btn mb-8">
//         Start Converting
//       </Link>
//       <div className="preview-container">
//         <Image
//           src="/front.jpg"
//           alt="Sample"
//           width={600}
//           height={400}
//           className="preview-img"
//         />
//       </div>
//     </motion.div>
//   );
// }

// "use client";

// import Link from "next/link";
// import Image from "next/image";
// import { motion } from "framer-motion";

// export default function Home() {
//   const features = [
//     {
//       title: "Remove Backgrounds",
//       description:
//         "Easily remove the background from any image with one click, creating a clean, transparent PNG.",
//       icon: "🖼️",
//     },
//     {
//       title: "Replace Background",
//       description:
//         "Extract and replace the background with any image or choose a solid color for a custom look.",
//       icon: "🎨",
//     },
//     {
//       title: "Convert to PNG",
//       description:
//         "Convert images from any format to high-quality PNG, perfect for professional use.",
//       icon: "📄",
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-[#1e0a2d] via-[#2b0a3d] to-[#4c1d95] text-white">
//       {/* Header Section */}
//       <motion.header
//         className="container mx-auto px-4 py-8 text-center"
//         initial={{ opacity: 0, y: -50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//       >
//         <Image
//           src="/front.jpg"
//           alt="Image Converter Logo"
//           width={150}
//           height={150}
//           className="mx-auto mb-6"
//         />
//         <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-shadow-lg">
//           Image Converter
//         </h1>
//         <p className="text-lg sm:text-xl md:text-2xl max-w-2xl mx-auto mb-8">
//           Transform your images effortlessly: remove backgrounds, swap them with
//           images or colors, and convert to PNG.
//         </p>
//         <Link
//           href="/converter"
//           className="btn inline-block bg-gradient-to-r from-green-500 to-green-400 text-white py-3 px-8 rounded-lg font-semibold text-lg shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
//         >
//           Start Converting
//         </Link>
//       </motion.header>

//       {/* Features Section */}
//       <section className="container mx-auto px-4 py-12">
//         <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10">
//           Why Choose Image Converter?
//         </h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           {features.map((feature, index) => (
//             <motion.div
//               key={index}
//               className="bg-gradient-to-r from-purple-900/50 to-indigo-900/50 p-6 rounded-xl shadow-lg"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.2 }}
//             >
//               <span className="text-4xl mb-4 block">{feature.icon}</span>
//               <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
//               <p className="text-gray-200">{feature.description}</p>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* Showcase Section */}
//       <section className="container mx-auto px-4 py-12">
//         <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10">
//           See It In Action
//         </h2>
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//           {[
//             {
//               src: "/origional.jpg",
//               alt: "Before Image",
//               label: "Original Image",
//             },
//             {
//               src: "/nobackground.png",
//               alt: "Background Removed",
//               label: "Background Removed",
//             },
//             {
//               src: "/backexample3.png",
//               alt: "Image with New Background",
//               label: "New Background",
//             },
//             {
//               src: "/colorexample.png",
//               alt: "Image with Color Background",
//               label: "Color Background",
//             },
//           ].map((image, index) => (
//             <motion.div
//               key={index}
//               className="preview-container bg-gradient-to-r from-purple-900 via-indigo-500 to-black rounded-xl overflow-hidden shadow-xl"
//               initial={{ opacity: 0, scale: 0.9 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.5, delay: index * 0.2 }}
//             >
//               <Image
//                 src={image.src}
//                 alt={image.alt}
//                 width={600}
//                 height={400}
//                 className="w-full h-64 lg:h-80 object-contain transition-transform duration-300 hover:scale-105"
//               />
//               <p className="text-center py-4 font-semibold">{image.label}</p>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* Footer CTA */}
//       <motion.section
//         className="container mx-auto px-4 py-12 text-center"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 0.8 }}
//       >
//         <h2 className="text-3xl sm:text-4xl font-bold mb-6">
//           Ready to Transform Your Images?
//         </h2>
//         <Link
//           href="/converter"
//           className="btn inline-block bg-gradient-to-r from-green-500 to-green-400 text-white py-3 px-8 rounded-lg font-semibold text-lg shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
//         >
//           Get Started Now
//         </Link>
//       </motion.section>
//     </div>
//   );
// }
"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  const features = [
    {
      title: "Remove Backgrounds",
      description:
        "Easily remove the background from any image with one click, creating a clean, transparent PNG.",
      icon: "🖼️",
    },
    {
      title: "Replace Background",
      description:
        "Extract and replace the background with any image or choose a solid color for a custom look.",
      icon: "🎨",
    },
    {
      title: "Convert to PNG",
      description:
        "Convert images from any format to high-quality PNG, perfect for professional use.",
      icon: "📄",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1e0a2d] via-[#2b0a3d] to-[#4c1d95] text-white">
      {/* Header Section */}
      <motion.header
        className="container mx-auto px-4 py-8 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Image
          src="/front.jpg"
          alt="Image Converter Logo"
          width={350}
          height={350}
          className="mx-auto mb-6 rounded-xl"
        />
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-shadow-lg">
          Image Converter
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl max-w-2xl mx-auto mb-8">
          Transform your images effortlessly: remove backgrounds, swap them with
          images or colors, and convert to PNG.
        </p>
        <Link
          href="/converter"
          className="btn inline-block bg-gradient-to-r from-green-500 to-green-400 text-white py-3 px-8 rounded-lg font-semibold text-lg shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
        >
          Start Converting
        </Link>
      </motion.header>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10">
          Why Choose Image Converter?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-r from-purple-900/50 to-indigo-900/50 p-6 rounded-xl shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <span className="text-4xl mb-4 block">{feature.icon}</span>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-200">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Showcase Section */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10">
          See It In Action
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {[
            {
              src: "/origional.jpg",
              alt: "Before Image",
              label: "Original Image",
            },
            {
              src: "/nobackground.png",
              alt: "Background Removed",
              label: "Background Removed",
            },
            {
              src: "/backexample3.png",
              alt: "Image with New Background",
              label: "New Background",
            },
            {
              src: "/colorexample.png",
              alt: "Image with Color Background",
              label: "Color Background",
            },
          ].map((image, index) => (
            <motion.div
              key={index}
              className="preview-container bg-gradient-to-r from-purple-900 via-indigo-500 to-black rounded-xl overflow-hidden shadow-xl"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={600}
                height={400}
                className="w-full h-64 lg:h-80 object-contain transition-transform duration-300 hover:scale-105 mt-5 rounded-lg"
              />
              <p className="text-center py-4 font-semibold">{image.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer CTA */}
      <motion.section
        className="container mx-auto px-4 py-12 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">
          Ready to Transform Your Images?
        </h2>
        <Link
          href="/converter"
          className="btn inline-block bg-gradient-to-r from-green-500 to-green-400 text-white py-3 px-8 rounded-lg font-semibold text-lg shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
        >
          Get Started Now
        </Link>
      </motion.section>
    </div>
  );
}
