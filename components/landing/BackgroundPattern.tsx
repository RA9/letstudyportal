export function BackgroundPattern() {
  return (
    <div className="absolute inset-0 opacity-10">
      <div className="absolute top-20 left-10 w-16 h-16 border-2 border-blue-300 rounded-lg rotate-12"></div>
      <div className="absolute top-40 right-20 w-12 h-12 border-2 border-purple-300 rounded-full"></div>
      <div className="absolute bottom-40 left-20 w-20 h-20 border-2 border-pink-300 rounded-lg rotate-45"></div>
      <div className="absolute top-60 left-1/4 w-8 h-8 border-2 border-green-300 rounded-full"></div>
      <div className="absolute bottom-60 right-1/4 w-14 h-14 border-2 border-yellow-300 rounded-lg rotate-12"></div>
      <div className="absolute top-32 right-1/3 w-10 h-10 border-2 border-indigo-300 rounded-full"></div>
    </div>
  );
}
