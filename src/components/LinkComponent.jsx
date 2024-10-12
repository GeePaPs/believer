/* eslint-disable react/prop-types */
function LinkComponent({ icon, link, imagew }) {
  return (
    <div className="text-sm font-semibold flex justify-between m-2 mx-4 items-center bg-gray-200 p-2 rounded-lg">
      <div className="flex gap-8 items-center">
        <img src={icon} className={`w-[${imagew}px]`} />
        {/* <p className="text-lg font-semibold">{name}</p> */}
      </div>

      <div className="flex gap-4">
        <a
          href={link}
          className="bg-gray-100 hover:bg-gray-50 px-4 py-2 rounded-lg cursor-pointer"
        >
          pre-save
        </a>
      </div>
    </div>
  );
}

export default LinkComponent;
