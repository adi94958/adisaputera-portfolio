import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Text, IconButton } from '../atoms';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { fetchContact } from '../../store/slices/contactSlice';
import { fetchProfile } from '../../store/slices/profileSlice';
import { FOOTER_CONTENT, CONTACT_LABELS, NAVIGATION } from '../../constants';

export const Footer: React.FC = () => {
  const dispatch = useAppDispatch();
  const { data: contact } = useAppSelector((state) => state.contact);
  const { data: profile } = useAppSelector((state) => state.profile);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    dispatch(fetchContact());
    dispatch(fetchProfile());
  }, [dispatch]);

  // Gunakan data dari API
  const socialLinks = contact?.social_media && Array.isArray(contact.social_media) 
    ? contact.social_media.map(social => ({
        icon: social.icon,
        href: social.link,
        label: social.label
      }))
    : [];

  const quickLinks = NAVIGATION.ALL_ITEMS.filter(item => 
    ['#home', '#about', '#skills', '#projects', '#contact'].includes(item.href)
  ).map(item => ({ 
    ...item, 
    href: item.href === '#hero' ? '#home' : item.href 
  }));

  return (
    <footer className="bg-secondary-900 dark:bg-black text-white">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand & Description */}
          <div className="md:col-span-2 space-y-4">
            <Text variant="subheading" weight="bold" color="inherit">
              {profile?.brand_name}
            </Text>
            <Text variant="body" color="inherit" className="opacity-80 max-w-md">
              {profile?.role_description}
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
              {FOOTER_CONTENT.QUICK_LINKS}
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
              {FOOTER_CONTENT.CONNECT}
            </Text>
            <div className="space-y-2">
              <Text variant="caption" color="inherit" className="opacity-80">
                {contact?.email}
              </Text>
              {contact?.phone && (
                <Text variant="caption" color="inherit" className="opacity-80">
                  {contact.phone}
                </Text>
              )}
              <Text variant="caption" color="inherit" className="opacity-80">
                {contact?.address}
              </Text>
              <Text variant="caption" color="inherit" className="opacity-80">
                {CONTACT_LABELS.STATUS_AVAILABLE}
              </Text>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-8 pt-8 flex flex-col md:flex-row items-center justify-between">
          <Text variant="caption" color="inherit" className="opacity-60">
            © {currentYear} {profile?.brand_name}. {FOOTER_CONTENT.RIGHTS_RESERVED}.
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
                {FOOTER_CONTENT.PRIVACY_POLICY}
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
                {FOOTER_CONTENT.TERMS_OF_SERVICE}
              </Text>
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  );
};
