import SchoolDetails from "@/components/SchoolDetails";
import { Button } from "@/components/ui/button";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "School Details - Let's Study Portal",
  description:
    "At Let's Study Portal, we simplify your search for the ideal schools and programs. Our platform connects you with institutions that align perfectly with your academic and personal aspirations.",
};

export default function SchoolsPage() {
  return (
    <>
      <SchoolDetails />
    </>
  );
}
