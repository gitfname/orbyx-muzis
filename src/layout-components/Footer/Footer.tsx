
function Footer() {
    return (
        <div className="w-full">

            <div className="w-full grid grid-cols-4 gap-6">
                <div>
                    <p className="text-base font-medium text-gray-50">More</p>
                    <div className="mt-3.5 space-y-2">
                        <p className="text-sm text-white/75 font-normal hover:underline">Get Apps</p>
                        <p className="text-sm text-white/75 font-normal hover:underline">Premium</p>
                        <p className="text-sm text-white/75 font-normal hover:underline">Help & Support</p>
                        <p className="text-sm text-white/75 font-normal hover:underline">Advertise</p>
                        <p className="text-sm text-white/75 font-normal hover:underline">Contact</p>
                    </div>
                </div>

                <div>
                    <p className="text-base font-medium text-gray-50">Follow Us On</p>
                    <div className="mt-3.5 space-y-2">
                        <p className="text-sm text-white/75 font-normal hover:underline">Instagram</p>
                        <p className="text-sm text-white/75 font-normal hover:underline">X</p>
                        <p className="text-sm text-white/75 font-normal hover:underline">Youtube</p>
                        <p className="text-sm text-white/75 font-normal hover:underline">Telegram</p>
                        <p className="text-sm text-white/75 font-normal hover:underline">TikTok</p>
                    </div>
                </div>
            </div>

            <div className="border-t border-t-white/20 mt-6 pt-6 flex items-center gap-x-7">
                <p className="text-xs text-white/70 font-normal">2023 by <span className="text-xs text-white/90 font-medium">Orbyx</span></p>
                <div className="flex items-center gap-x-3.5">
                    <p className="text-xs text-white/70 font-normal hover:underline">Privacy & Policy</p>
                    <p className="text-xs text-white/70 font-normal hover:underline">Term of Use</p>
                    <p className="text-xs text-white/70 font-normal hover:underline">About</p>
                </div>
            </div>
        </div>
    )
}

export default Footer