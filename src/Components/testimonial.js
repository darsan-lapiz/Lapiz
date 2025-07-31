import { useState, useEffect } from "react";

const testimonials = [
 {
      name: "Ashwin Paudel",
      role: "Position Learner, Pokhara",
      text: "Fulcrum helped me believe in myself. I got access to mentors and resources that changed my future.",
      avatar: "https://i.ibb.co/x8CBtpyJ/516799143-18279651769256901-3252552649031150100-n.jpg",
    },
    {
      name: "Samit Paudel",
      role: "AI Engineer, Nepal",
      text: "Thanks to Fulcrum, I can now contribute to real-world AI projects despite living in a remote village.",
      avatar: "https://i.ibb.co/NgZFjfmg/502008426-18289658482250047-1635676849658180284-n.jpg",
    },
    {
      name: "Darshan Adhikari",
      role: "Student,Pokhara",
      text: "The community and support Fulcrum offers are unmatched. It truly bridges the AI gap.",
      avatar: "https://i.ibb.co/5hvF0TSy/Screenshot-2025-07-30-174912.png",
    },
    {
      name: "Sujan Ghimire",
      role: "AI Enthusatic,Sydney",
      text: "Fulcrum made me belive in myself and connected me with AI",
      avatar: "https://i.ibb.co/nMnCZ0qY/sujan-dai.jpg",
    },
];

export default function TestimonialSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const current = testimonials[index];

  return (
    <div className="bg-white border rounded-xl shadow-md p-6 max-w-sm mx-auto transition-all duration-500">
      <p className="text-gray-700 italic text-center mb-4">"{current.text}"</p>
      <div className="flex items-center justify-center mt-4">
        <img src={current.avatar} className="rounded-full w-10 h-10" alt="Avatar" />
        <div className="ml-3">
          <p className="font-semibold text-sm">{current.name}</p>
          <p className="text-xs text-gray-500">{current.role}</p>
        </div>
      </div>
    </div>
  );
}
