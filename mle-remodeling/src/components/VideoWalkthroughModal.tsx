import { useEffect, useState } from 'react';
import { X, ChevronLeft, Check } from 'lucide-react';

interface VideoWalkthroughModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CHECKOUT_URL = 'https://book.checkchannels.com/payment-link/697d13456503ca3fb87a9135';
const CONTACT_URL = '#contact';

export default function VideoWalkthroughModal({ isOpen, onClose }: VideoWalkthroughModalProps) {
  const [currentStep, setCurrentStep] = useState<1 | 2>(1);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
      setCurrentStep(1);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg shadow-2xl max-w-[900px] w-full max-h-[90vh] overflow-y-auto relative animate-fade-in"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="absolute top-4 right-4 flex items-center gap-3 z-10">
          <img
            src="/logotrans.png"
            alt="Check Channels"
            className="h-8 sm:h-10"
          />
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-black transition-colors"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6 sm:p-8 md:p-10">
          <div className="mb-6">
            <span className="text-sm text-gray-600">Presented by Check Channels</span>
          </div>

          <div className="h-px bg-gray-200 mb-8"></div>

          {currentStep === 1 ? (
            <>
              <h2 className="text-2xl sm:text-3xl font-bold text-black mb-3">
                Quick walkthrough of your new website
              </h2>
              <p className="text-gray-700 mb-8">
                This short video from Check Channels walks you through how this site is structured and how to get it live.
              </p>

              <div className="mb-8">
                <div style={{ position: 'relative', paddingBottom: '62.7177700348432%', height: 0 }}>
                  <iframe
                    src="https://www.loom.com/embed/c9e19f827d2e4951924661ca9ca77bd1"
                    frameBorder="0"
                    allowFullScreen
                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                    title="Website Walkthrough Video"
                  />
                </div>
              </div>

              <p className="text-gray-700 mb-6 text-center">
                If you'd like us to publish and launch this site for you, you can activate it below.
              </p>

              <div className="flex flex-col items-center gap-4">
                <button
                  onClick={() => setCurrentStep(2)}
                  className="bg-[#00BC67] text-white px-8 py-4 text-lg font-medium hover:bg-[#00A85C] transition-colors rounded w-full sm:w-auto text-center"
                >
                  Activate Your Site
                </button>
                <a
                  href={CONTACT_URL}
                  className="text-gray-600 hover:text-black transition-colors text-sm"
                >
                  Not ready yet? Contact Check Channels
                </a>
              </div>
            </>
          ) : (
            <>
              <button
                onClick={() => setCurrentStep(1)}
                className="flex items-center gap-2 text-gray-600 hover:text-black transition-colors mb-6 text-sm"
              >
                <ChevronLeft className="w-4 h-4" />
                Back to walkthrough
              </button>

              <h2 className="text-2xl sm:text-3xl font-bold text-black mb-3">
                Activate & Launch Your Website
              </h2>
              <p className="text-gray-700 mb-6">
                Complete your payment to get your site live.
              </p>

              <div className="flex flex-col items-center py-8 px-4">
                <div className="bg-gray-50 rounded-xl p-8 w-full max-w-md">
                  <div className="text-center mb-6">
                    <span className="text-4xl font-bold text-black">$150</span>
                    <span className="text-gray-600 text-lg">/month</span>
                  </div>

                  <ul className="space-y-4 mb-8">
                    <li className="flex items-center gap-3">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#00BC67] flex items-center justify-center">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-gray-700">Active website with your domain</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#00BC67] flex items-center justify-center">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-gray-700">Secure, fast hosting included</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#00BC67] flex items-center justify-center">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-gray-700">Unlimited revisions & support</span>
                    </li>
                  </ul>

                  <a
                    href={CHECKOUT_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-[#00BC67] text-white px-8 py-4 text-lg font-medium hover:bg-[#00A85C] transition-colors rounded text-center"
                  >
                    Proceed to Secure Checkout
                  </a>

                  <p className="text-center text-gray-500 text-sm mt-4">
                    Checkout opens securely in a new tab.
                  </p>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
