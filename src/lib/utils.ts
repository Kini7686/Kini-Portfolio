import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

const RESUME_PATH = `${import.meta.env.BASE_URL}Aditya_Kini_Resume_Full_Time.pdf`;

export async function downloadResume(e: React.MouseEvent) {
  e.preventDefault();
  try {
    const response = await fetch(RESUME_PATH);
    const blob = await response.blob();
    // Reject if we got HTML (SPA fallback) instead of PDF
    const contentType = response.headers.get('content-type') || '';
    if (contentType.includes('text/html')) {
      throw new Error('Invalid response');
    }
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Aditya_Kini_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(link);
  } catch {
    // Fallback: open in new tab
    window.open(RESUME_PATH, '_blank');
  }
}
