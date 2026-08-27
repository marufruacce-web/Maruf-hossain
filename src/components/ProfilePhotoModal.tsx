import React, { useState } from 'react';
import { X, Upload, RefreshCw, Check, Image as ImageIcon, Link as LinkIcon } from 'lucide-react';

interface ProfilePhotoModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentPhoto: string | null;
  onUpdatePhoto: (photoUrl: string | null) => void;
}

export const ProfilePhotoModal: React.FC<ProfilePhotoModalProps> = ({
  isOpen,
  onClose,
  currentPhoto,
  onUpdatePhoto,
}) => {
  const [urlInput, setUrlInput] = useState('');
  const [feedback, setFeedback] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 4 * 1024 * 1024) {
        setFeedback('Image is larger than 4MB. Please select a smaller image.');
        return;
      }
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        onUpdatePhoto(result);
        setFeedback('Photo updated successfully!');
        setTimeout(() => {
          setFeedback(null);
          onClose();
        }, 800);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUrlSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!urlInput.trim()) return;
    onUpdatePhoto(urlInput.trim());
    setFeedback('Portrait link updated!');
    setTimeout(() => {
      setFeedback(null);
      onClose();
    }, 800);
  };

  const handleReset = () => {
    onUpdatePhoto(null);
    setFeedback('Reset to default academic emblem.');
    setTimeout(() => {
      setFeedback(null);
      onClose();
    }, 800);
  };

  return (
    <div
      id="profile-photo-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs animate-in fade-in duration-150"
      onClick={onClose}
    >
      <div
        id="profile-photo-modal-content"
        className="bg-white dark:bg-slate-900 rounded-3xl max-w-md w-full p-6 sm:p-7 shadow-2xl border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800">
          <div>
            <h3 className="font-bold text-lg">Update Profile Photo</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Replace placeholder with Maruf's portrait photo
            </p>
          </div>
          <button
            id="close-photo-modal-btn"
            onClick={onClose}
            className="p-1.5 rounded-full text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {feedback && (
          <div className="my-3 p-3 rounded-2xl bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 text-xs font-semibold flex items-center gap-2">
            <Check className="w-4 h-4 text-blue-600" />
            <span>{feedback}</span>
          </div>
        )}

        <div className="py-4 space-y-4">
          {/* Option 1: File Upload */}
          <div className="border-2 border-dashed border-slate-200 dark:border-slate-700 rounded-2xl p-5 text-center hover:border-blue-500 transition-colors">
            <input
              type="file"
              id="portrait-upload-input"
              accept="image/*"
              onChange={handleFileUpload}
              className="hidden"
            />
            <label
              htmlFor="portrait-upload-input"
              className="cursor-pointer flex flex-col items-center gap-2"
            >
              <div className="p-3 bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 rounded-xl">
                <Upload className="w-5 h-5" />
              </div>
              <span className="text-xs font-bold text-slate-800 dark:text-slate-200">
                Click to Upload Photo
              </span>
              <span className="text-[11px] text-slate-400">
                PNG, JPG, WebP up to 4MB
              </span>
            </label>
          </div>

          {/* Option 2: Image URL Input */}
          <form onSubmit={handleUrlSubmit} className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
              Or Enter Image URL:
            </label>
            <div className="flex gap-2">
              <input
                type="url"
                placeholder="https://example.com/photo.jpg"
                value={urlInput}
                onChange={(e) => setUrlInput(e.target.value)}
                className="flex-1 px-3.5 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-semibold"
              >
                Apply
              </button>
            </div>
          </form>

          {/* Option 3: Reset to Default */}
          {currentPhoto && (
            <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex justify-end">
              <button
                type="button"
                onClick={handleReset}
                className="inline-flex items-center gap-1.5 text-xs text-red-600 dark:text-red-400 hover:underline"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Reset to Default Avatar</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
