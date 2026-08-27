/**
 * Utility to trigger download / access of Maruf Hossain's CV.
 * Links to the Google Drive CV link.
 */

export const RESUME_FILE_PATH = 'https://drive.google.com/file/d/1tf4Q2jj9ajfUFKNERJ0uKR1xYuqILIc0/view?usp=drivesdk';
export const RESUME_FILE_NAME = "Maruf Hossain's cv";

export function handleResumeDownload(e?: MouseEvent | { preventDefault?: () => void }) {
  if (e && typeof e.preventDefault === 'function') {
    e.preventDefault();
  }
  window.open(RESUME_FILE_PATH, '_blank', 'noopener,noreferrer');
}


