import { cache } from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import PreviewContent from "./preview-content";

const API_URL = process.env.API_URL || "http://localhost:3000/api/v1";

type SessionData = {
  status: "ready" | "processing";
  downloadUrl?: string;
};

const getSession = cache(
  async (transactionId: string): Promise<SessionData | null> => {
    try {
      const res = await fetch(
        `${API_URL}/public/sessions/${transactionId}`,
        { cache: "no-store" },
      );
      if (!res.ok) return null;
      const json = await res.json();
      return json.data;
    } catch {
      return null;
    }
  },
);

type Props = {
  params: Promise<{ transactionId: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { transactionId } = await params;
  const session = await getSession(transactionId);

  const base = {
    title: "Foto Kamu — memoir.",
    description: "Lihat dan download foto dari sesi photobooth kamu.",
  };

  if (session?.status === "ready" && session.downloadUrl) {
    return {
      ...base,
      openGraph: {
        title: base.title,
        description: base.description,
        images: [{ url: session.downloadUrl }],
      },
    };
  }

  return base;
}

export default async function PreviewPage({ params }: Props) {
  const { transactionId } = await params;
  const session = await getSession(transactionId);

  if (!session) {
    notFound();
  }

  return (
    <div className="flex flex-1 flex-col items-center justify-center px-6 py-12">
      <PreviewContent initialData={session} transactionId={transactionId} />
    </div>
  );
}
