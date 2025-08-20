import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Modal, ModalHeader, ModalContent, Button } from "../atoms";

interface CertificateModalProps {
  isOpen: boolean;
  onClose: () => void;
  certificateUrl: string;
  title: string;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({
  isOpen,
  onClose,
  certificateUrl,
  title,
}) => {
  const [imageLoaded, setImageLoaded] = useState(true); // Default true, set false on error

  // Reset state when modal opens/closes
  useEffect(() => {
    if (isOpen) {
      setImageLoaded(true); // Reset to true when opening
    }
  }, [isOpen, certificateUrl]);

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="full">
      <ModalHeader title={`Certificate - ${title}`} onClose={onClose} />
      <ModalContent padding={false}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 min-h-[60vh] flex flex-col"
        >
          {/* Certificate Display Area */}
          <div className="flex-1 p-6 flex items-center justify-center">
            <div className="relative max-w-3xl w-full">
              {/* Certificate Container with Glass Effect */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="relative bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden"
              >
                {/* Decorative Elements */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-emerald-500 via-blue-500 to-purple-500"
                />
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-emerald-500/10 to-blue-500/10 rounded-bl-full"
                />
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-purple-500/10 to-pink-500/10 rounded-tr-full"
                />

                {/* Certificate Image */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  className="relative p-6"
                >
                  <div className="relative w-full aspect-video bg-gray-100 dark:bg-gray-800 rounded-2xl overflow-hidden">
                    <img
                      src={`/images/${certificateUrl}`}
                      alt={`Certificate for ${title}`}
                      className="w-full h-full object-contain"
                      onLoad={() => setImageLoaded(true)}
                      onError={(e) => {
                        setImageLoaded(false);
                        const target = e.target as HTMLImageElement;
                        target.style.display = "none";
                        target.parentElement!.innerHTML = `
                          <div class="absolute inset-0 flex flex-col items-center justify-center text-gray-500 dark:text-gray-400">
                            <div class="w-20 h-20 bg-gradient-to-br from-gray-400 to-gray-500 rounded-full flex items-center justify-center mb-6 shadow-lg">
                              <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                              </svg>
                            </div>
                            <p class="text-xl font-semibold mb-2 text-center">Certificate Not Found</p>
                          </div>
                        `;
                      }}
                    />
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>

          {/* Fixed Bottom Action Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="sticky bottom-0 bg-white/95 dark:bg-gray-800/95 backdrop-blur-xl border-t border-gray-200/50 dark:border-gray-700/50 p-4"
          >
            <div className="flex items-center justify-center space-x-3">
              {/* Download Button - Using Button Component */}
              <motion.div
                whileHover={imageLoaded ? { scale: 1.02 } : {}}
                whileTap={imageLoaded ? { scale: 0.98 } : {}}
              >
                <Button
                  variant="solid"
                  color="accent"
                  size="md"
                  disabled={!imageLoaded}
                  onClick={() => {
                    if (!imageLoaded) return;
                    // Download Certificate
                    const link = document.createElement("a");
                    link.href = `/images/${certificateUrl}`;
                    link.download = certificateUrl;
                    link.click();
                  }}
                  className="flex items-center gap-2"
                >
                  {/* Download Icon */}
                  <motion.svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    whileHover={
                      imageLoaded
                        ? {
                            y: [0, -2, 0],
                            transition: { duration: 0.4, repeat: Infinity },
                          }
                        : {}
                    }
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </motion.svg>
                  Download Certificate
                </Button>
              </motion.div>

              {/* View Fullscreen Button */}
              <motion.div
                whileHover={imageLoaded ? { scale: 1.02 } : {}}
                whileTap={imageLoaded ? { scale: 0.98 } : {}}
              >
                <Button
                  variant="outline"
                  color="accent"
                  size="md"
                  disabled={!imageLoaded}
                  onClick={() => {
                    if (!imageLoaded) return;
                    const img = document.querySelector(
                      `img[src="/images/${certificateUrl}"]`
                    ) as HTMLImageElement;
                    if (img) {
                      const newWindow = window.open("", "_blank");
                      if (newWindow) {
                        newWindow.document.write(`
                          <html>
                            <head>
                              <title>Certificate - ${title}</title>
                              <style>
                                body { margin: 0; padding: 20px; background: #f3f4f6; display: flex; justify-content: center; align-items: center; min-height: 100vh; }
                                img { max-width: 100%; max-height: 100%; object-fit: contain; border-radius: 12px; box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25); }
                              </style>
                            </head>
                            <body>
                              <img src="/images/${certificateUrl}" alt="Certificate for ${title}" />
                            </body>
                        </html>
                        `);
                      }
                    }
                  }}
                  className="flex items-center gap-2"
                >
                  {/* Fullscreen Icon */}
                  <motion.svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    whileHover={
                      imageLoaded
                        ? {
                            scale: 1.1,
                            transition: { duration: 0.2 },
                          }
                        : {}
                    }
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                    />
                  </motion.svg>
                  View Fullscreen
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </ModalContent>
    </Modal>
  );
};
