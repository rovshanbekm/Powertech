'use client';

// Contact form component with API integration

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { Send, CheckCircle2, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import { useContactSubmit } from '@/hooks/useContact';
import { toast } from 'sonner';

export function ContactForm() {
  const { t } = useLanguage();
  const searchParams = useSearchParams();
  const mutation = useContactSubmit();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    company: '',
    address: '',
    message_subject: '',
    message: '',
  });

  // Prefill subject from URL params (from product detail page)
  useEffect(() => {
    const subject = searchParams?.get('subject');
    if (subject) {
      setFormData(prev => ({
        ...prev,
        message_subject: decodeURIComponent(subject),
      }));
    }
  }, [searchParams]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    mutation.mutate(formData, {
      onSuccess: (response) => {
        setIsSubmitted(true);
        toast.success(response.message || t.contact.form.success);
      },
      onError: () => {
        toast.error(t.contact.form.errorDescription);
      },
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setFormData({
      name: '',
      phone: '',
      email: '',
      company: '',
      address: '',
      message_subject: '',
      message: '',
    });
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-12"
      >
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="text-xl font-bold text-foreground mb-2">
          {t.contact.form.success}
        </h3>
        <p className="text-muted-foreground mb-6">
          {t.contact.form.successDescription}
        </p>
        <Button variant="outline" onClick={resetForm}>
          {t.contact.form.newMessage}
        </Button>
      </motion.div>
    );
  }

  return (
    <>
      <h2 className="text-2xl font-bold text-foreground mb-2">
        {t.contact.form.title}
      </h2>
      <p className="text-muted-foreground mb-6">
        {t.contact.form.subtitle}
      </p>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
              {t.contact.form.name} *
            </label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder={t.contact.form.namePlaceholder}
              required
              className="h-12"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
              {t.contact.form.phone} *
            </label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              placeholder={t.contact.form.phonePlaceholder}
              required
              className="h-12"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
              {t.contact.form.email}
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder={t.contact.form.emailPlaceholder}
              className="h-12"
            />
          </div>

          <div>
            <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
              {t.contact.form.company}
            </label>
            <Input
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder={t.contact.form.companyPlaceholder}
              className="h-12"
            />
          </div>
        </div>

        <div>
          <label htmlFor="message_subject" className="block text-sm font-medium text-foreground mb-2">
            {t.contact.form.subject}
          </label>
          <Input
            id="message_subject"
            name="message_subject"
            value={formData.message_subject}
            onChange={handleChange}
            placeholder={t.contact.form.subjectPlaceholder}
            className="h-12"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
            {t.contact.form.message}
          </label>
          <Textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder={t.contact.form.messagePlaceholder}
            rows={5}
            className="resize-none"
          />
        </div>

        <Button 
          type="submit" 
          variant="accent" 
          size="lg" 
          className="w-full"
          disabled={mutation.isPending}
        >
          {mutation.isPending ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              {t.contact.form.submitting}
            </>
          ) : (
            <>
              {t.contact.form.submit}
              <Send className="w-4 h-4 ml-2" />
            </>
          )}
        </Button>
      </form>
    </>
  );
}
