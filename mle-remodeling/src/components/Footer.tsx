export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center mb-4 transition-transform duration-300 hover:scale-105">
              <img src="/logo.jpg" alt="MLE Remodeling" className="h-20 w-auto" />
            </div>
            <p className="text-sm text-gray-600 mt-2">Veteran Owned (USMC) · Fully Insured<br />Military & First Responder Discounts</p>
          </div>
          <div>
            <h4 className="font-semibold text-black mb-3">Contact</h4>
            <a href="tel:9362075767" className="text-[#F07B20] hover:underline block mb-2 transition-all duration-300 hover:translate-x-1">
              (936) 207-5767
            </a>
            <a href="mailto:info@mlegranite.com" className="text-[#F07B20] hover:underline block mb-2 transition-all duration-300 hover:translate-x-1">
              info@mlegranite.com
            </a>
            <p className="text-black text-sm">26326 N Fwy Service Rd<br />Oak Ridge North, TX 77386</p>
          </div>
          <div>
            <h4 className="font-semibold text-black mb-3">Service Area</h4>
            <p className="text-black text-sm">
              Oak Ridge North, The Woodlands, Conroe, Spring, and surrounding Houston-area communities
            </p>
            <p className="text-black text-sm mt-3">
              <span className="font-medium">Showroom Hours:</span><br />
              Visit us to explore options in person — call ahead to schedule.
            </p>
          </div>
        </div>
        <div className="border-t border-gray-200 pt-8">
          <p className="text-black text-sm text-center">
            Website Design by <span className="font-semibold">Check Channels</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
