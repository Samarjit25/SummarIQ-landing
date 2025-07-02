"use client";
import { Accordion, AccordionItem } from "@heroui/accordion";
import { motion } from "framer-motion";

export default function Faq() {
  const accordionItems = [
    {
  title: "Which platforms are supported?",
  content: (
    <div className="text-muted-foreground">
      Currently, we support Zoom and Google Meet. Support for Microsoft Teams is planned in future updates.
      
    </div>
  ),
},
{
  title: "How does the tool generate summaries?",
  content: (
    <div className="text-muted-foreground">
      We use advanced AI models to transcribe your meetings and extract key points, decisions, and action items in a structured format.
    </div>
  ),
},
{
  title: "Is my meeting data secure?",
  content: (
    <div className="text-muted-foreground">
      Absolutely. All transcripts and summaries are encrypted and stored securely. You control what gets saved or deleted.
    </div>
  ),
},
{
  title: "Can I export the action items?",
  content: (
    <div className="text-muted-foreground">
      Yes, you can export action items to tools like Notion, Trello, or download them as a PDF or CSV.
    </div>
  ),
},
{
  title: "Do you offer real-time transcription?",
  content: (
    <div className="text-muted-foreground">
      Yes, real-time transcription is available for Zoom. Google Meet support is limited to recorded meetings for now.
    </div>
  ),
},
{
  title: "Is there a free plan?",
  content: (
    <div className="text-muted-foreground">
      Yes, we offer a free tier that includes limited transcripts and summaries per month. Upgrade anytime for more features.
    </div>
  ),
},
  ];

  return (
    <motion.section
      initial={{ y: 20, opacity: 0 }}
      whileInView={{
        y: 0,
        opacity: 1,
      }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.5, type: "spring", bounce: 0 }}
      className="relative w-full max-w-screen-xl mx-auto px-4 py-28 gap-5 md:px-8 flex flex-col justify-center items-center"
    >
      <div className="flex flex-col gap-3 justify-center items-center">
        <h4 className="text-2xl font-bold sm:text-3xl bg-gradient-to-b from-foreground to-muted-foreground text-transparent bg-clip-text">
          FAQ
        </h4>
        <p className="max-w-xl text-muted-foreground text-center">
          Here are some of our frequently asked questions.
        </p>
      </div>
      <div className="flex w-full max-w-lg">
        <Accordion
          fullWidth
          selectionMode="multiple"
          variant="splitted"
          motionProps={{
            variants: {
              enter: {
                y: 0,
                opacity: 1,
                height: "auto",
                transition: {
                  height: {
                    type: "spring",
                    stiffness: 500,
                    damping: 30,
                    duration: 1,
                  },
                  opacity: {
                    easings: "ease",
                    duration: 1,
                  },
                },
              },
              exit: {
                y: -10,
                opacity: 0,
                height: 0,
                transition: {
                  height: {
                    easings: "ease",
                    duration: 0.25,
                  },
                  opacity: {
                    easings: "ease",
                    duration: 0.3,
                  },
                },
              },
            },
          }}
        >
          {accordionItems.map((item, index) => (
            <AccordionItem
              key={index}
              aria-label={item.title}
              title={item.title}
              className="text-muted-foreground"
            >
              {item.content}
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </motion.section>
  );
}
