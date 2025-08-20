import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card, Text, Badge, Button } from "../atoms";
import { CertificateModal } from "./CertificateModal";
import type { Certification } from "../../types";

interface CertificationCardProps {
  certification: Certification;
  index?: number;
}

export const CertificationCard: React.FC<CertificationCardProps> = ({
  certification,
  index = 0,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
    });
  };

  const isExpired = certification.expiry_date && new Date(certification.expiry_date) < new Date();
  const isExpiringSoon = certification.expiry_date && 
    new Date(certification.expiry_date) > new Date() && 
    new Date(certification.expiry_date) < new Date(Date.now() + 6 * 30 * 24 * 60 * 60 * 1000); // 6 months

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        whileHover={{ y: -5 }}
        className="group"
      >
        <Card className="h-full overflow-hidden relative border-l-4 border-l-accent-500 hover:border-l-primary-500 transition-colors duration-300">
          {/* Header with certification icon and status */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-accent-100 to-primary-100 dark:from-accent-900/30 dark:to-primary-900/30 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-accent-600 dark:text-accent-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
                  </svg>
                </div>
                {/* Status indicator */}
                <div className={`absolute -top-1 -right-1 w-4 h-4 rounded-full border-2 border-white dark:border-gray-800 ${
                  isExpired ? 'bg-red-500' : 
                  isExpiringSoon ? 'bg-yellow-500' : 
                  'bg-green-500'
                }`} />
              </div>
              
              {/* Date badges */}
              <div className="flex flex-col gap-1">
                <Badge variant="secondary" size="sm">
                  Iss: {formatDate(certification.issued_date)}
                </Badge>
                {certification.expiry_date && (
                  <Badge 
                    variant={isExpired ? "error" : isExpiringSoon ? "warning" : "success"} 
                    size="sm"
                  >
                    Exp: {formatDate(certification.expiry_date)}
                  </Badge>
                )}
              </div>
            </div>
          </div>

          {/* Certification title */}
          <Text 
            variant="subheading" 
            weight="bold" 
            className="mb-2 line-clamp-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300"
          >
            {certification.title}
          </Text>

          {/* Issuer with logo */}
          <div className="mb-4 flex items-center gap-3">
            {/* Issuer logo */}
            <div className="flex-shrink-0">
              <img
                src={`/images/${certification.issuer_logo}`}
                alt={`${certification.issuer} logo`}
                className="w-8 h-8 object-contain rounded-lg bg-white dark:bg-gray-800 p-1 shadow-sm border border-gray-200 dark:border-gray-600"
                onError={(e) => {
                  // Fallback to default institution icon if logo fails to load
                  const target = e.target as HTMLImageElement;
                  target.style.display = "none";
                  target.parentElement!.innerHTML = `
                    <div class="w-8 h-8 bg-gradient-to-br from-primary-100 to-accent-100 dark:from-primary-900/30 dark:to-accent-900/30 rounded-lg flex items-center justify-center">
                      <svg class="w-4 h-4 text-primary-500" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12,3L1,9L12,15L21,9V16H23V9M5,13.18V17.18L12,21L19,17.18V13.18L12,17L5,13.18Z" />
                      </svg>
                    </div>
                  `;
                }}
              />
            </div>
            
            {/* Issuer text */}
            <Text 
              variant="body" 
              color="muted" 
              weight="medium" 
              className="flex-1"
            >
              {certification.issuer}
            </Text>
          </div>

          {/* Action buttons */}
          <div className="flex gap-2 mt-auto pt-4">
            <Button
              variant="outline"
              size="sm"
              className="flex-1"
              onClick={() => setIsModalOpen(true)}
              disabled={!certification.certificate_image}
            >
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z" />
              </svg>
              View Certificate
            </Button>
            
            {certification.certificate_url && (
              <Button
                variant="solid"
                color="primary"
                size="sm"
                onClick={() => window.open(certification.certificate_url!, "_blank")}
              >
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z" />
                </svg>
                Verify
              </Button>
            )}
          </div>

          {/* Gradient overlay for visual appeal */}
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-primary-50/20 dark:to-primary-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
        </Card>
      </motion.div>

      {/* Certificate Modal */}
      {certification.certificate_image && (
        <CertificateModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          certificateUrl={certification.certificate_image}
          title={certification.title}
        />
      )}
    </>
  );
};
