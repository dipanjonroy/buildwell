export default function Profile() {
  return (
    <div className="relative ">
      {/* Profile button */}
      <div className="flex items-center gap-2">
        <div className="relative w-9 h-9 rounded-full bg-gray-300"></div>

        <div className="text-left">
          <h5 className="font-semibold tracking-tight text-sm">Dipanjon Roy</h5>
          <button className="text-xs text-gray-500 leading-none block cursor-pointer">
            Log out
          </button>
        </div>
      </div>

      {/* Profile dropdown */}
      <div></div>
    </div>
  );
}
