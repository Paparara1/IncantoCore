"use client";

import React, { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { InquiryInterest } from "@/lib/types";

const INTEREST_OPTIONS: InquiryInterest[] = [
  "Technology Licensing",
  "Enterprise Deployment",
  "Strategic Partnership",
  "OEM Integration",
  "Joint Development",
  "Technology Acquisition",
  "Portfolio Acquisition",
  "Investor Discussion",
  "Technology Brief"
];

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultInterest?: InquiryInterest;
  assetTitle?: string;
}

export function ContactModal({ isOpen, onClose, defaultInterest = "Technology Brief", assetTitle }: ContactModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    role: "",
    email: "",
    interest: defaultInterest,
    message: assetTitle ? `Inquiry regarding asset: ${assetTitle}` : "",
    agreeContact: false
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.agreeContact) {
      setErrorMessage("Please agree to be contacted regarding this inquiry.");
      return;
    }
    setStatus("submitting");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setStatus("success");
      } else {
        setStatus("error");
        setErrorMessage(data.error || "Failed to submit inquiry.");
      }
    } catch (err) {
      setStatus("error");
      setErrorMessage("Network error. Please try again later.");
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-[550px] bg-slate-900 border-slate-800 text-slate-100 max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold tracking-tight text-cyan-400">
            {assetTitle ? `Inquire: ${assetTitle}` : "Request Technology Brief & Commercial Discussion"}
          </DialogTitle>
          <DialogDescription className="text-slate-400 text-sm">
            INCANTO Commercial Gateway. Submit your details for NDA evaluation, technology brief access, licensing or acquisition discussions.
          </DialogDescription>
        </DialogHeader>

        {status === "success" ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-12 h-12 rounded-full bg-cyan-950 border border-cyan-500/30 text-cyan-400 flex items-center justify-center mx-auto text-xl font-bold">
              ✓
            </div>
            <h3 className="text-lg font-semibold text-slate-100">Inquiry Received</h3>
            <p className="text-sm text-slate-400 max-w-sm mx-auto">
              Thank you for contacting INCANTO / OJJJA. Our commercial team will review your inquiry and reach out under appropriate NDA terms.
            </p>
            <Button
              onClick={() => {
                setStatus("idle");
                onClose();
              }}
              className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold"
            >
              Close
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 py-2">
            {errorMessage && (
              <div className="p-3 bg-red-950/60 border border-red-800/80 rounded text-red-300 text-xs">
                {errorMessage}
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <Label htmlFor="name" className="text-xs text-slate-300">Name *</Label>
                <Input
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Dr. Jane Doe"
                  className="bg-slate-950 border-slate-800 text-slate-100 text-sm"
                />
              </div>

              <div className="space-y-1">
                <Label htmlFor="company" className="text-xs text-slate-300">Company / Organization *</Label>
                <Input
                  id="company"
                  required
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  placeholder="Acme DeepTech Inc."
                  className="bg-slate-950 border-slate-800 text-slate-100 text-sm"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <Label htmlFor="role" className="text-xs text-slate-300">Role / Title *</Label>
                <Input
                  id="role"
                  required
                  value={formData.role}
                  onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                  placeholder="CTO / VP Corporate Dev"
                  className="bg-slate-950 border-slate-800 text-slate-100 text-sm"
                />
              </div>

              <div className="space-y-1">
                <Label htmlFor="email" className="text-xs text-slate-300">Corporate Email *</Label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="j.doe@acme.com"
                  className="bg-slate-950 border-slate-800 text-slate-100 text-sm"
                />
              </div>
            </div>

            <div className="space-y-1">
              <Label htmlFor="interest" className="text-xs text-slate-300">Commercial Interest *</Label>
              <select
                id="interest"
                value={formData.interest}
                onChange={(e) => setFormData({ ...formData, interest: e.target.value as InquiryInterest })}
                className="w-full h-10 px-3 py-2 rounded-md bg-slate-950 border border-slate-800 text-slate-100 text-sm focus:outline-none focus:ring-1 focus:ring-cyan-500"
              >
                {INTEREST_OPTIONS.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-1">
              <Label htmlFor="message" className="text-xs text-slate-300">Inquiry Details / Scope</Label>
              <Textarea
                id="message"
                rows={3}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Describe your use case, technical timeline, or acquisition scope..."
                className="bg-slate-950 border-slate-800 text-slate-100 text-sm"
              />
            </div>

            <div className="flex items-start space-x-2 pt-1">
              <Checkbox
                id="agreeContact"
                checked={formData.agreeContact}
                onCheckedChange={(checked) => setFormData({ ...formData, agreeContact: Boolean(checked) })}
                className="mt-0.5 border-slate-700 data-[state=checked]:bg-cyan-500 data-[state=checked]:text-slate-950"
              />
              <Label htmlFor="agreeContact" className="text-xs text-slate-400 cursor-pointer leading-tight">
                I agree to be contacted regarding this inquiry.
              </Label>
            </div>

            <div className="pt-3 flex justify-end space-x-3">
              <Button type="button" variant="ghost" onClick={onClose} className="text-slate-400 hover:text-slate-200">
                Cancel
              </Button>
              <Button
                type="submit"
                disabled={status === "submitting"}
                className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold px-6"
              >
                {status === "submitting" ? "Submitting..." : "Submit Inquiry"}
              </Button>
            </div>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
