'use client';

import { type ElementRef, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { createPortal } from 'react-dom';

export function Modal({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const dialogRef = useRef<ElementRef<'dialog'>>(null);

  useEffect(() => {
    if (!dialogRef.current?.open) {
      dialogRef.current?.showModal();
    }
  }, []);

  function onDismiss() {
    router.back();
  }

  return createPortal(
    <dialog ref={dialogRef} className="fixed inset-0 bg-gray-200 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-md max-w-5xl w-full max-h-[90vh] overflow-auto p-4">
        {children}
        <button onClick={onDismiss} className="absolute top-2 right-2 p-1 bg-red-500 text-white rounded-full focus:outline-none">
          ✕
        </button>
      </div>
    </dialog>,
    document.getElementById('modal-root')!
  );
}