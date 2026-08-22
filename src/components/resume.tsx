'use client';

import { Download, ExternalLink, File } from 'lucide-react';
import { resumeDetails } from '@/lib/config-loader';

export function Resume() {
  // Resume details loaded from configuration

  const handleDownload = () => {
    // For external URLs, open in a new tab
    window.open(resumeDetails.downloadUrl, '_blank');
  };

  return (
    <div className="mx-auto w-full py-8 font-sans">
      {/* Resume Card */}
      <div className="group relative mb-4 overflow-hidden rounded-xl bg-accent p-0 transition-all duration-300">
        {/* Details area */}
        <div className="p-5">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-medium text-foreground">
                {resumeDetails.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {resumeDetails.description}
              </p>
              <div className="mt-1 flex text-xs text-muted-foreground">
                <span>{resumeDetails.fileType}</span>
                <span className="mx-2">•</span>
                <span>Updated {resumeDetails.lastUpdated}</span>
                <span className="mx-2">•</span>
                <span>{resumeDetails.fileSize}</span>
              </div>
            </div>

            {/* Download button */}
            <button
              onClick={handleDownload}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-white hover:bg-black/80 transition-colors"
              title="Download PDF"
            >
              <Download className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* PDF Preview - Always Visible */}
      <div className="w-full overflow-hidden rounded-xl border bg-white shadow-lg">
        <div className="bg-gray-100 px-4 py-2 flex items-center justify-between border-b">
          <div className="flex items-center gap-2">
            <File className="h-4 w-4 text-gray-600" />
            <span className="text-sm font-medium text-gray-700">Resume Preview</span>
          </div>
          <button
            onClick={handleDownload}
            className="flex items-center gap-1 px-3 py-1 text-xs bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            <ExternalLink className="h-3 w-3" />
            Open Full
          </button>
        </div>
        
        <div className="w-full h-[600px] bg-gray-50">
          <iframe
            src={resumeDetails.downloadUrl}
            width="100%"
            height="100%"
            className="border-0"
            title="Resume Preview"
          />
        </div>
      </div>
    </div>
  );
}

export default Resume;