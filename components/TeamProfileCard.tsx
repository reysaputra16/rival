import React from "react";
import Image from "next/image";
import { GB } from "country-flag-icons/react/3x2";
import Instagram from "@/public/social_media_logos/instagram.svg";
import Tiktok from "@/public/social_media_logos/tiktok.svg";
import Facebook from "@/public/social_media_logos/facebook.svg";

const TeamProfileCard = () => {
  return (
    <div className="w-full flex flex-col rounded-lg shadow-sm dark:shadow-border-main-dark dark:bg-secondary-dark bg-secondary text-sm p-4 gap-3">
      <div className="flex flex-col gap-1">
        <p className="text-xs font-light">Country</p>
        <div className="flex flex-row items-center gap-2">
          <GB title="Great Britain" height={15} />
          <p className="font-medium">England</p>
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <p className="text-xs font-light">City</p>
        <p className="font-medium">Manchester</p>
      </div>
      <div className="flex flex-col gap-1">
        <p className="text-xs font-light">Manager</p>
        <p className="font-medium">Pep Guardiola</p>
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-xs font-light">Links</p>
        <div className="flex flex-col gap-4">
          <div className="flex flex-row items-center gap-1.5">
            <Image src={Instagram} alt="instagram" height={20} />
            <p className="font-medium cursor-pointer hover:underline">Instagram</p>
          </div>
          <div className="flex flex-row items-center gap-1.5">
            <Image src={Tiktok} alt="tiktok" height={20} />
            <p className="font-medium cursor-pointer hover:underline">Tiktok</p>
          </div>
          <div className="flex flex-row items-center gap-1.5">
            <Image src={Facebook} alt="facebook" height={20} />
            <p className="font-medium cursor-pointer hover:underline">Facebook</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamProfileCard;
