import { useState } from 'react';
import { SiFacebook, SiInstagram, SiWhatsapp } from 'react-icons/si';
import { CheckCircle, Send, AlertCircle } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useSubmitContactMessage } from '../hooks/useQueries';

const WHATSAPP_URL = 'https://wa.me/919412574143';
const FACEBOOK_URL = 'https://www.facebook.com/share/18PFxeeuyW/?mibextid=wwXIfr';
const INSTAGRAM_URL = 'https://www.instagram.com/volleyball_basic?igsh=MWdjenViNm51N3d0aQ%3D%3D&utm_source=qr';

interface FormState {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export default function Contact() {
  const [form, setForm] = useState<FormState>({ name: '', email: '', phone: '', message: '' });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const submitMutation = useSubmitContactMessage();

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!form.name.trim()) newErrors.name = 'Name is required.';
    if (!form.email.trim()) {
      newErrors.email = 'Email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!form.message.trim()) newErrors.message = 'Message is required.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      await submitMutation.mutateAsync({
        name: form.name.trim(),
        email: form.email.trim(),
        phone: form.phone.trim() || null,
        message: form.message.trim(),
      });
      setSubmitted(true);
      setForm({ name: '', email: '', phone: '', message: '' });
      setErrors({});
    } catch {
      // error handled via mutation state
    }
  };

  const handleChange = (field: keyof FormState) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
    if (errors[field as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <div>
      {/* Hero */}
      <section
        className="py-20 md:py-24"
        style={{
          background: 'linear-gradient(135deg, oklch(var(--navy-dark)) 0%, oklch(var(--navy)) 100%)',
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: 'oklch(var(--gold))' }}
          >
            Get In Touch
          </p>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-white uppercase mb-4">
            Contact Us
          </h1>
          <p className="text-white/60 max-w-lg mx-auto text-base">
            Ready to start your volleyball journey? Reach out to Coach Yash Bhardwaj today.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Left: Social & Info */}
            <div>
              <h2
                className="font-display text-2xl font-bold uppercase mb-6"
                style={{ color: 'oklch(var(--navy-dark))' }}
              >
                Connect With Coach Yash
              </h2>

              {/* WhatsApp */}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 rounded-sm border border-border bg-card card-hover mb-4 group"
              >
                <div
                  className="w-12 h-12 rounded-sm flex items-center justify-center shrink-0 transition-colors"
                  style={{ backgroundColor: 'oklch(0.55 0.18 145)', color: 'white' }}
                >
                  <SiWhatsapp size={22} />
                </div>
                <div>
                  <p className="font-semibold text-sm text-foreground">WhatsApp</p>
                  <p className="text-muted-foreground text-xs mt-0.5">+91 94125 74143</p>
                  <p
                    className="text-xs font-medium mt-1"
                    style={{ color: 'oklch(var(--gold-dark))' }}
                  >
                    Tap to chat directly →
                  </p>
                </div>
              </a>

              {/* Facebook */}
              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 rounded-sm border border-border bg-card card-hover mb-4 group"
              >
                <div
                  className="w-12 h-12 rounded-sm flex items-center justify-center shrink-0"
                  style={{ backgroundColor: 'oklch(0.45 0.15 255)', color: 'white' }}
                >
                  <SiFacebook size={22} />
                </div>
                <div>
                  <p className="font-semibold text-sm text-foreground">Facebook</p>
                  <p className="text-muted-foreground text-xs mt-0.5">Yash Bhardwaj</p>
                  <p
                    className="text-xs font-medium mt-1"
                    style={{ color: 'oklch(var(--gold-dark))' }}
                  >
                    Follow for updates →
                  </p>
                </div>
              </a>

              {/* Instagram */}
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 rounded-sm border border-border bg-card card-hover mb-8 group"
              >
                <div
                  className="w-12 h-12 rounded-sm flex items-center justify-center shrink-0"
                  style={{
                    background: 'linear-gradient(135deg, oklch(0.65 0.22 30) 0%, oklch(0.55 0.22 330) 100%)',
                    color: 'white',
                  }}
                >
                  <SiInstagram size={22} />
                </div>
                <div>
                  <p className="font-semibold text-sm text-foreground">Instagram</p>
                  <p className="text-muted-foreground text-xs mt-0.5">@VOLLEYBALL_BASIC</p>
                  <p
                    className="text-xs font-medium mt-1"
                    style={{ color: 'oklch(var(--gold-dark))' }}
                  >
                    See training content →
                  </p>
                </div>
              </a>

              {/* Info Box */}
              <div
                className="rounded-sm p-5 border-l-4"
                style={{
                  backgroundColor: 'oklch(var(--navy-dark) / 0.05)',
                  borderColor: 'oklch(var(--gold))',
                }}
              >
                <p
                  className="text-xs font-semibold uppercase tracking-widest mb-2"
                  style={{ color: 'oklch(var(--gold-dark))' }}
                >
                  Response Time
                </p>
                <p className="text-sm text-foreground leading-relaxed">
                  Coach Yash typically responds within <strong>24 hours</strong>. For the fastest response, reach out via WhatsApp.
                </p>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div>
              <h2
                className="font-display text-2xl font-bold uppercase mb-6"
                style={{ color: 'oklch(var(--navy-dark))' }}
              >
                Send a Message
              </h2>

              {submitted ? (
                <div
                  className="rounded-sm p-8 text-center border-2"
                  style={{
                    borderColor: 'oklch(var(--gold))',
                    backgroundColor: 'oklch(var(--gold) / 0.05)',
                  }}
                >
                  <CheckCircle
                    size={48}
                    className="mx-auto mb-4"
                    style={{ color: 'oklch(var(--gold-dark))' }}
                  />
                  <h3
                    className="font-display text-xl font-bold uppercase mb-2"
                    style={{ color: 'oklch(var(--navy-dark))' }}
                  >
                    Message Sent!
                  </h3>
                  <p className="text-muted-foreground text-sm mb-6">
                    Thank you for reaching out! Coach Yash will get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="btn-primary text-xs px-6 py-2.5"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  {/* Name */}
                  <div>
                    <Label htmlFor="name" className="text-sm font-medium mb-1.5 block">
                      Full Name <span style={{ color: 'oklch(var(--gold-dark))' }}>*</span>
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Your full name"
                      value={form.name}
                      onChange={handleChange('name')}
                      className={errors.name ? 'border-destructive' : ''}
                    />
                    {errors.name && (
                      <p className="flex items-center gap-1 text-xs text-destructive mt-1">
                        <AlertCircle size={12} /> {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <Label htmlFor="email" className="text-sm font-medium mb-1.5 block">
                      Email Address <span style={{ color: 'oklch(var(--gold-dark))' }}>*</span>
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      value={form.email}
                      onChange={handleChange('email')}
                      className={errors.email ? 'border-destructive' : ''}
                    />
                    {errors.email && (
                      <p className="flex items-center gap-1 text-xs text-destructive mt-1">
                        <AlertCircle size={12} /> {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <Label htmlFor="phone" className="text-sm font-medium mb-1.5 block">
                      Phone Number{' '}
                      <span className="text-muted-foreground font-normal">(optional)</span>
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+1 234 567 8900"
                      value={form.phone}
                      onChange={handleChange('phone')}
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <Label htmlFor="message" className="text-sm font-medium mb-1.5 block">
                      Message <span style={{ color: 'oklch(var(--gold-dark))' }}>*</span>
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="Tell Coach Yash about your volleyball goals, current level, and what you'd like to improve..."
                      value={form.message}
                      onChange={handleChange('message')}
                      rows={5}
                      className={errors.message ? 'border-destructive' : ''}
                    />
                    {errors.message && (
                      <p className="flex items-center gap-1 text-xs text-destructive mt-1">
                        <AlertCircle size={12} /> {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Error */}
                  {submitMutation.isError && (
                    <div className="flex items-center gap-2 p-3 rounded-sm bg-destructive/10 text-destructive text-sm">
                      <AlertCircle size={16} />
                      Something went wrong. Please try again or contact via WhatsApp.
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={submitMutation.isPending}
                    className="btn-primary w-full justify-center text-sm py-4 disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {submitMutation.isPending ? (
                      <>
                        <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
