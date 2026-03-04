import Image from "next/image";
import { getAssetPath } from "@/app/lib/config";

const Clientsay = () => {
    return (
        <div className="mx-auto max-w-2xl py-40 px-4s sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="bg-image-what">
                <h3 className='text-navyblue text-center text-4xl lg:text-6xl font-semibold'>What our clients say.</h3>
                {/* <h4 className="text-lg font-normal text-darkgray text-center mt-4">Event madness gathering innoies,& tech enthusiasts in Speced. <br /> do more informations.</h4> */}

                <div className="lg:relative">
                    <Image src={getAssetPath('/assets/clientsay/avatars.png')} alt="avatar-image" width={1061} height={733} className="hidden lg:block" />

                    <span className="lg:absolute lg:bottom-40 lg:left-80">
                        <Image src={getAssetPath('/assets/clientsay/user.png')} alt="user-image" width={168} height={168} className="mx-auto pt-10 lg:pb-10" />
                        <div className="lg:inline-block bg-white rounded-2xl p-5 shadow-sm">
                            <p className="text-base font-normal text-center text-darkgray">Sentinel Membership Management has streamlined our gym's <br />operations. It has made looking after the members <br /> easier and for it we’ve seen increased sales.</p>
                            <h3 className="text-2xl font-medium text-center py-2">Ken Clarke</h3>
                            <h4 className="text-sm font-normal text-center">Muscle Base Gym</h4>
                        </div>
                    </span>

                </div>

            </div>
        </div>
    )
}

export default Clientsay;
