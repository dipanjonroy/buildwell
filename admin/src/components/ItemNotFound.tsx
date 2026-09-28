export default function ItemNotFound({text}:{text:string}) {
  return (
    <div className="w-full h-30 bg-gray-200 border border-gray-300 rounded-xl flex-center">
      <p className="text-center text-sm font-medium text-gray-500">
        {text}
      </p>
    </div>
  );
}
