import ImageType from "../../types/types";

interface UserInfoProps {
  data: ImageType;
}

const UserInfo = ({ data }: UserInfoProps) => {
  return (
    <div className="sticky top-0 w-full flex justify-start items-center py-2 gap-2 bg-gray-100 ">
      <img
        src={data?.user?.profile_image?.medium}
        alt="user-image"
        className="rounded-full w-8 h-8 sm:w-10 sm:h-10"
      />
      <div className="flex flex-col justify-center items-start text-slate-900 font-semibold text-sm sm:text-md">
        <p className="font-semibold">{data?.user.name}</p>
        <p className="text-slate-700">
          {data?.user?.location || "No Location Provided"}
        </p>
      </div>
    </div>
  );
};

export default UserInfo;
