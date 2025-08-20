import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Text, IconButton } from '../atoms';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { fetchContact } from '../../store/slices/contactSlice';
import { fetchProfile } from '../../store/slices/profileSlice';

export const Footer: React.FC = () => {
  const dispatch = useAppDispatch();
  const { data: contact } = useAppSelector((state) => state.contact);
  const { data: profile } = useAppSelector((state) => state.profile);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    dispatch(fetchContact());
    dispatch(fetchProfile());
  }, [dispatch]);

  // Debug log untuk melihat struktur data
  useEffect(() => {
    if (contact) {
      console.log('Contact data:', contact);
      console.log('Social media data:', contact.social_media);
      console.log('Is social_media array?', Array.isArray(contact.social_media));
    }
  }, [contact]);

  // Default social links sebagai fallback
  const defaultSocialLinks = [
    { icon: 'mdi:github', href: 'https://github.com', label: 'GitHub' },
    { icon: 'mdi:linkedin', href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: 'mdi:twitter', href: 'https://twitter.com', label: 'Twitter' },
    { icon: 'mdi:instagram', href: 'https://instagram.com', label: 'Instagram' },
  ];

  // Gunakan data dari API jika ada, atau fallback ke default
  const socialLinks = (contact?.social_media && Array.isArray(contact.social_media)) 
    ? contact.social_media.map(social => ({
        icon: social.icon,
        href: social.link,
        label: social.label
      }))
    : defaultSocialLinks;

  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-secondary-900 dark:bg-black text-white">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand & Description */}
          <div className="md:col-span-2 space-y-4">
            <Text variant="subheading" weight="bold" color="inherit">
              {profile?.brand_name || 'AdiSaputera'}
            </Text>
            <Text variant="body" color="inherit" className="opacity-80 max-w-md">
              {profile?.role_description || 'A passionate full-stack developer creating beautiful and functional web experiences with modern technologies.'}
            </Text>
            <div className="flex space-x-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <IconButton
                    icon={social.icon}
                    variant="ghost"
                    className="text-white hover:text-primary-400 hover:bg-white/10"
                  />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <Text variant="body" weight="semibold" color="inherit">
              Quick Links
            </Text>
            <nav className="space-y-2">
              {quickLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  className="block text-white/80"
                  whileHover={{ 
                    x: 5,
                    color: "rgb(96 165 250)", // primary-400 equivalent
                    transition: { duration: 0.2 }
                  }}
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.querySelector(link.href);
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  <Text variant="caption" color="inherit">
                    {link.label}
                  </Text>
                </motion.a>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <Text variant="body" weight="semibold" color="inherit">
              Contact
            </Text>
            <div className="space-y-2">
              <Text variant="caption" color="inherit" className="opacity-80">
                {contact?.email || 'adi.saputera@example.com'}
              </Text>
              {contact?.phone && (
                <Text variant="caption" color="inherit" className="opacity-80">
                  {contact.phone}
                </Text>
              )}
              <Text variant="caption" color="inherit" className="opacity-80">
                {contact?.address || 'Majalengka, West Java, Indonesia'}
              </Text>
              <Text variant="caption" color="inherit" className="opacity-80">
                Available for new opportunities
              </Text>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-8 pt-8 flex flex-col md:flex-row items-center justify-between">
          <Text variant="caption" color="inherit" className="opacity-60">
            © {currentYear} {profile?.brand_name || 'AdiSaputera'}. All rights reserved.
          </Text>
          
          <div className="flex space-x-6 mt-4 md:mt-0">
            <motion.a
              href="#privacy"
              className="text-white/60"
              whileHover={{ 
                scale: 1.05,
                color: "rgb(96 165 250)", // primary-400 equivalent
                transition: { duration: 0.2 }
              }}
            >
              <Text variant="caption" color="inherit">
                Privacy Policy
              </Text>
            </motion.a>
            <motion.a
              href="#terms"
              className="text-white/60"
              whileHover={{ 
                scale: 1.05,
                color: "rgb(96 165 250)", // primary-400 equivalent
                transition: { duration: 0.2 }
              }}
            >
              <Text variant="caption" color="inherit">
                Terms of Service
              </Text>
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  );
};
