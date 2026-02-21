"use client";

import { ErrorContent } from "@/components/errors/ErrorContent";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  return <ErrorContent error={error} reset={reset} />;
}
