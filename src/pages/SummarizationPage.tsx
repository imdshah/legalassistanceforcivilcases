import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { FileText, Upload, History, Loader2 } from 'lucide-react';

interface Summary {
  title: string;
  date: string;
  content: string;
}

export function SummarizationPage() {
  const [isProcessing, setIsProcessing] = useState(false);
  const [summary, setSummary] = useState<string>('');
  const [previousSummaries] = useState<Summary[]>([
    {
      title: "Property Dispute Case #123",
      date: "2025-03-15",
      content: "This case involves a boundary dispute between neighboring properties. The main points of contention are the fence placement and shared driveway access."
    },
    {
      title: "Contract Review #456",
      date: "2025-03-10",
      content: "Analysis of employment contract terms, focusing on non-compete clauses and intellectual property rights."
    }
  ]);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    if (file) {
      setIsProcessing(true);
      // Simulate processing delay
      setTimeout(() => {
        setSummary("Summary of document: " + file.name + "\n\nThis document appears to be a legal contract containing provisions related to property transfer. Key points include:\n\n1. Property description and boundaries\n2. Terms of transfer\n3. Rights and obligations of parties\n4. Governing law and jurisdiction");
        setIsProcessing(false);
      }, 2000);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'application/pdf': ['.pdf'],
      'application/msword': ['.doc'],
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx']
    },
    maxFiles: 1
  });

  return (
    <div className="min-h-screen pt-16 bg-gray-50">
      <div className="max-w-6xl mx-auto p-4">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Document Upload Section */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-2xl font-semibold text-blue-900 mb-6">Document Summary</h2>
            <div
              {...getRootProps()}
              className={`border-2 border-dashed rounded-xl p-8 text-center cursor-pointer transition-colors
                ${isDragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300 hover:border-blue-500 hover:bg-blue-50'}`}
            >
              <input {...getInputProps()} />
              <Upload className="h-12 w-12 mx-auto mb-4 text-blue-900" />
              <p className="text-gray-600 mb-2">Drag & drop your legal document here</p>
              <p className="text-sm text-gray-500">Supports PDF, DOC, and DOCX files</p>
            </div>

            {isProcessing && (
              <div className="mt-6 text-center">
                <Loader2 className="h-8 w-8 animate-spin text-blue-900 mx-auto mb-2" />
                <p className="text-gray-600">Processing your document...</p>
              </div>
            )}

            {summary && !isProcessing && (
              <div className="mt-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">Document Summary</h3>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-gray-700 whitespace-pre-line">{summary}</p>
                </div>
              </div>
            )}
          </div>

          {/* Previous Summaries Section */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center mb-6">
              <History className="h-6 w-6 text-blue-900 mr-2" />
              <h2 className="text-2xl font-semibold text-blue-900">Previous Cases</h2>
            </div>
            <div className="space-y-4">
              {previousSummaries.map((summary, index) => (
                <div key={index} className="border rounded-lg p-4 hover:border-blue-200 transition-colors">
                  <div className="flex items-start">
                    <FileText className="h-5 w-5 text-blue-900 mt-1 mr-2" />
                    <div>
                      <h3 className="font-semibold text-blue-900">{summary.title}</h3>
                      <p className="text-sm text-gray-500 mb-2">{summary.date}</p>
                      <p className="text-gray-600">{summary.content}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}