'use client'

import React, { useState } from "react";

// contact form template i only changed the style
export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(false);
    setError(null);
    setLoading(true);
    const form = e.currentTarget;
    const nameInput = form.elements.namedItem("name") as HTMLInputElement;
    const emailInput = form.elements.namedItem("email") as HTMLInputElement;
    const messageInput = form.elements.namedItem("message") as HTMLTextAreaElement;

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "d2dc59ae-8855-4afc-a6f0-f51cdff37e5c",
          name: nameInput.value,
          email: emailInput.value,
          message: messageInput.value,
        }),
      });

      const result = await response.json();

      if (result.success) {
        form.reset();
        setSubmitted(true);
      } else {
        setError(result.message || "Submission failed. Please try again.");
      }
    } catch {
      setError("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex justify-center items-center min-h-[60vh] bg-background py-8">
      <div className="w-full max-w-md">
        {submitted && (
          <div className="mb-4 text-center text-success bg-success/10 border border-success rounded-lg py-2 font-semibold">
            Submitted successfully!
          </div>
        )}
        {error && (
          <div className="mb-4 text-center text-danger bg-danger/10 border border-danger rounded-lg py-2 font-semibold">
            {error}
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className="bg-footer rounded-xl shadow-lg p-8 border border-border"
          style={{ boxShadow: '0 4px 24px 0 var(--border-muted)' }}
        >
          <h2 className="text-2xl font-bold mb-6 text-text text-center">
            Contact Me
          </h2>

          <div className="mb-4">
            <label className="block text-text font-medium mb-1">Name</label>
            <input
              type="text"
              name="name"
              required
              placeholder="Your name"
              className="w-full px-4 py-2 rounded-lg border border-border-muted bg-background text-text focus:outline-none focus:border-button transition"
            />
          </div>

          <div className="mb-4">
            <label className="block text-text font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              required
              placeholder="email@example.com"
              className="w-full px-4 py-2 rounded-lg border border-border-muted bg-background text-text focus:outline-none focus:border-button transition"
            />
          </div>

          <div className="mb-6">
            <label className="block text-text font-medium mb-1">Message</label>
            <textarea
              name="message"
              required
              rows={4}
              placeholder="Enter Message"
              className="w-full px-4 py-2 rounded-lg border border-border-muted bg-background text-text focus:outline-none focus:border-button transition resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-2 rounded-lg bg-button text-white font-semibold hover:bg-button-hover transition-colors shadow-md disabled:opacity-60"
          >
            {loading ? "Submitting..." : "Submit Form"}
          </button>
        </form>
      </div>
    </div>
  );
}