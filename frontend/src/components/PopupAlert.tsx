import React, { useEffect } from "react";
import {
  AlertCircle,
  CheckCircle,
  XCircle,
  AlertTriangle,
  X,
} from "lucide-react";

interface PopupAlertProps {
  title: string;
  description: string;
  variant?: "info" | "warning" | "error" | "success";
  isOpen: boolean;
  onClose: () => void;
  autoClose?: number;
}

const variantStyles = {
  info: {
    bg: "bg-blue-50",
    text: "text-blue-800",
    border: "border-blue-200",
    icon: AlertCircle,
  },
  warning: {
    bg: "bg-yellow-50",
    text: "text-yellow-800",
    border: "border-yellow-200",
    icon: AlertTriangle,
  },
  error: {
    bg: "bg-red-50",
    text: "text-red-800",
    border: "border-red-200",
    icon: XCircle,
  },
  success: {
    bg: "bg-green-50",
    text: "text-green-800",
    border: "border-green-200",
    icon: CheckCircle,
  },
};

const PopupAlert: React.FC<PopupAlertProps> = ({
  title,
  description,
  variant = "info",
  isOpen,
  onClose,
  autoClose = 5000,
}) => {
  useEffect(() => {
    if (isOpen && autoClose) {
      const timer = setTimeout(onClose, autoClose);
      return () => clearTimeout(timer);
    }
  }, [isOpen, autoClose, onClose]);

  if (!isOpen) return null;

  const style = variantStyles[variant];
  const Icon = style.icon;

  return (
    <div className="fixed inset-0 flex items-start justify-center z-50 p-4 pointer-events-none">
      <div
        className={`
          ${style.bg} ${style.text} ${style.border}
          max-w-sm w-full rounded-lg border shadow-lg pointer-events-auto
          animate-in slide-in-from-top-4 duration-300
          p-4 mt-16
        `}
        role="alert"
      >
        <div className="flex items-start">
          <div className="flex-shrink-0">
            <Icon className="h-5 w-5" />
          </div>
          <div className="ml-3 w-0 flex-1">
            <p className="font-medium">{title}</p>
            <p className="mt-1 text-sm opacity-90">{description}</p>
          </div>
          <div className="ml-4 flex-shrink-0 flex">
            <button
              className={`
                rounded-md inline-flex ${style.text} hover:${style.bg} focus:outline-none
                focus:ring-2 focus:ring-offset-2 focus:ring-offset-${style.bg} focus:ring-${style.text}
              `}
              onClick={onClose}
            >
              <span className="sr-only">Close</span>
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopupAlert;
