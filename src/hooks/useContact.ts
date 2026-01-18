// Contact form mutation hook - Next.js compatible

import { useMutation } from '@tanstack/react-query';
import { submitContact } from '@/lib/api';
import type { ContactPayload } from '@/lib/types';

export function useContactSubmit() {
  return useMutation({
    mutationFn: (data: ContactPayload) => submitContact(data),
  });
}
