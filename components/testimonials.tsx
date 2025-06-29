"use client";
import { motion } from "framer-motion";

export default function Testimonials() {
  const testimonials = [
  {
    name: "Aarav Mehta",
    role: "Team Lead at Infoswift",
    avatar: "https://i.pravatar.cc/150?img=32",
    content:
      "Our meetings used to be chaotic with action points buried in hour-long recordings. Now we get clean summaries and clear tasks within minutes. Game-changer!",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    role: "Founder at CollabVerse",
    avatar: "https://i.pravatar.cc/150?img=45",
    content:
      "I was skeptical about AI-generated meeting notes, but this tool nailed it. Our clients are impressed with how organized our follow-ups have become.",
    rating: 5,
  },
  {
    name: "Rahul Iyer",
    role: "Product Manager at NexionTech",
    avatar: "https://i.pravatar.cc/150?img=40",
    content:
      "The Zoom integration is seamless, and the action item extraction helps my team stay accountable. It's like having an assistant on every call.",
    rating: 5,
  },
  {
    name: "Sneha Kapoor",
    role: "HR Manager at BrightHire",
    avatar: "https://i.pravatar.cc/150?img=38",
    content:
      "Our internal meetings finally have structure. The summaries are crisp, and assigning follow-up tasks has never been easier.",
    rating: 5,
  },
  {
    name: "Vikram Desai",
    role: "Co-founder at Tinkerloop",
    avatar: "https://i.pravatar.cc/150?img=33",
    content:
      "Startup life is hectic. This tool helps us focus on outcomes instead of remembering who said what. Highly recommended for small teams!",
    rating: 5,
  },
  {
    name: "Sarah Chen",
    role: "CEO at TechStart",
    avatar: "https://i.pravatar.cc/150?img=1",
    content:
      "This platform has transformed how we manage our meetings. The AI summary saves us hours every week and ensures nothing slips through.",
    rating: 5,
  },
  {
  name: "Ananya Reddy",
  role: "Operations Head at TaskNest",
  avatar: "https://i.pravatar.cc/150?img=42",
  content:
    "We use this after every client call. The action items are accurate and well-formatted — it has completely streamlined our meeting wrap-up process.",
  rating: 5,
},

  {
    name: "Marcus Rodriguez",
    role: "Product Manager at Scale Co",
    avatar: "https://i.pravatar.cc/150?img=3",
    content:
      "The integration capabilities are outstanding. We were able to plug into our stack with almost zero effort. Super useful!",
    rating: 5,
  },
  {
    name: "Sophie Anderson",
    role: "Product Lead at InnovateLab",
    avatar: "https://i.pravatar.cc/150?img=21",
    content:
      "The meeting insights help drive our roadmap. It’s more than transcription—it’s structured team alignment at scale.",
    rating: 5,
  },
];


  const StarIcon = () => (
    <svg
      className="w-4 h-4 text-yellow-500"
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );

  return (
    <section id="testimonials" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-20 flex flex-col gap-3"
        >
          <h2 className="text-xl font-semibold sm:text-2xl bg-gradient-to-b from-foreground tracking-tighter to-muted-foreground text-transparent bg-clip-text">
            Loved by Teams Worldwide
          </h2>
          <p className="mx-auto max-w-xl tracking-tighter text-muted-foreground text-center">
            Join thousands of companies that trust our platform.
          </p>
        </motion.div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.05,
                ease: "easeOut",
              }}
              className="break-inside-avoid mb-8"
            >
              <div className="p-6 rounded-xl bg-card border border-border transition-colors duration-300">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarIcon key={i} />
                  ))}
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed text-sm">
                  &ldquo;{testimonial.content}&rdquo;
                </p>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center text-sm font-medium border border-primary/20">
                    {testimonial.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm">
                      {testimonial.name}
                    </h4>
                    <p className="text-xs text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
