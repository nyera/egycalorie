import { createFileRoute } from "@tanstack/react-router";
import { Clock, Mail, MapPin, MessageCircle } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact EgyCalorie — Support, Feedback & Partnerships" },
      {
        name: "description",
        content:
          "Get in touch with the EgyCalorie team in Cairo for product support, food database corrections, feedback or partnership enquiries.",
      },
      { property: "og:title", content: "Contact EgyCalorie — Support, Feedback & Partnerships" },
      {
        property: "og:description",
        content: "Questions about tracking, our food database or partnerships? Message the Cairo team.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://egycalorie.lovable.app/contact" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://egycalorie.lovable.app/contact" }],
  }),
  component: Contact,
});

const channels = [
  { icon: Mail, title: "Email", value: "hello@nutrigo.app", note: "We reply within one working day." },
  { icon: MessageCircle, title: "WhatsApp", value: "+20 100 000 0000", note: "Sun–Thu, 10:00–18:00 Cairo time." },
  { icon: MapPin, title: "Office", value: "Maadi, Cairo, Egypt", note: "Visits by appointment only." },
  { icon: Clock, title: "Support hours", value: "Sun – Thu", note: "10:00 – 18:00 (GMT+2)" },
];

function Contact() {
  const [sending, setSending] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <section className="surface-glow">
        <div className="mx-auto max-w-3xl px-5 py-16 text-center lg:px-8 lg:py-20">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">Contact</p>
          <h1 className="mt-3 text-4xl font-extrabold sm:text-5xl">We'd love to hear from you</h1>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            Missing a dish from the database? Stuck on a feature? Want to work together? Send us a
            message and a real person will read it.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-14 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.3fr_1fr]">
          <form
            className="rounded-[1.75rem] border border-border bg-card p-7 sm:p-9"
            onSubmit={(e) => {
              e.preventDefault();
              setSending(true);
              setTimeout(() => {
                setSending(false);
                toast.success("Message sent", {
                  description: "Thanks for reaching out — we'll reply by email soon.",
                });
                (e.target as HTMLFormElement).reset();
              }, 700);
            }}
          >
            <h2 className="text-xl font-extrabold">Send a message</h2>
            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name">Full name</Label>
                <Input id="name" required placeholder="Nour Hassan" className="h-11 rounded-xl" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  required
                  placeholder="nour@example.com"
                  className="h-11 rounded-xl"
                />
              </div>
            </div>
            <div className="mt-5 space-y-2">
              <Label htmlFor="topic">Topic</Label>
              <Select defaultValue="support">
                <SelectTrigger id="topic" className="h-11 rounded-xl">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="support">Product support</SelectItem>
                  <SelectItem value="database">Food database correction</SelectItem>
                  <SelectItem value="billing">Billing question</SelectItem>
                  <SelectItem value="partnership">Partnership</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="mt-5 space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                required
                rows={6}
                placeholder="Tell us what's on your mind…"
                className="rounded-xl"
              />
            </div>
            <Button
              type="submit"
              size="lg"
              disabled={sending}
              className="mt-6 w-full rounded-full sm:w-auto sm:px-8"
            >
              {sending ? "Sending…" : "Send message"}
            </Button>
            <p className="mt-3 text-xs text-muted-foreground">
              This demo form doesn't store data yet.
            </p>
          </form>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {channels.map((c) => (
              <div key={c.title} className="rounded-3xl border border-border bg-card p-6">
                <span className="grid h-10 w-10 place-items-center rounded-2xl bg-primary/10 text-primary">
                  <c.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-sm font-bold uppercase tracking-wide text-muted-foreground">
                  {c.title}
                </h3>
                <p className="mt-1 font-semibold">{c.value}</p>
                <p className="mt-1 text-sm text-muted-foreground">{c.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
